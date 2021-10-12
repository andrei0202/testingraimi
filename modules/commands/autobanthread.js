module.exports.config = {
	name: "autobanthread",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Tự động cấm nhóm dùng bot nếu spam bot 10 lần/phút",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("Tự động cấm nhóm nếu spam bot 10 lần/phút", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Threads, api, event}) => {
  let { senderID, messageID, threadID } = event;
  idad = ["100010310568952"];
  if (!global.client.autobanthread) global.client.autobanthread = {};
  
  if (!global.client.autobanthread[threadID]) {
    global.client.autobanthread[threadID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	if ((global.client.autobanthread[threadID].timeStart + 60000) <= Date.now()) {
	  global.client.autobanthread[threadID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autobanthread[threadID].number++;
	  if (global.client.autobanthread[threadID].number >= 10) {
	    const moment = require("moment-timezone");
	    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss");
	    const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			let dataThread = (await Threads.getData(threadID)) || {};
			let data = dataThread.data;
			if (data && data.banned == true) return;
			data.banned = 1;
			await Threads.setData(threadID, { data });
			global.data.threadBanned.set(parseInt(threadID));
			global.client.autobanthread[threadID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
			api.sendMessage(`${threadID} | ${dataThread.threadInfo.threadName}\n⚡Nhóm bạn đã bị cấm sử dụng với lý do: spam bot 10 lần/phút\n⚡Thời gian:\n${timeDate}`, threadID);
			for (let idAdmin of idad) {
			api.sendMessage(`⚡Đã kích hoạt autoban thread ${threadID} | ${dataThread.threadInfo.threadName} vì spam bot 10 lần/phút\n⚡Thời gian:\n${timeDate}`, idAdmin);
			}
	 }
	}
};