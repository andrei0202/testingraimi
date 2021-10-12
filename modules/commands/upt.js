module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);


	const axios = require('axios');
	const fetch = global.nodemodule["node-fetch"];
	var fetchcd = await fetch("https://raw.githubusercontent.com/HerokeyVN/API_Ca_Dao/main/CaDao.js")
    var jsoncd =  await fetchcd.json()
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
	var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY");

	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage(`🤖 Bot đã hoạt động ${hours} giờ ${minutes} phút ${seconds} giây\n\n📝 Tổng người dùng: ${global.data.allUserID.length}\n📈 Tổng Nhóm: ${global.data.allThreadID.length}\n🔍 Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}%\n⚠️ Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n❗ Ping: ${Date.now() - timeStart}ms\n🔰 Prefix: [ ${global.config.PREFIX} ]\n\n🌐 Bây giờ là: ${gio}\n📅 Ngày: ${ngay}\n💬 Ca dao sưu tầm:\n${jsoncd.data[String(Math.floor(Math.random() * 268) + 1)]}`, event.threadID, event.messageID));
}


module.exports.handleEvent = async ({ event, api, Users, Threads }) => {
  const fs = require("fs-extra");
  // let dt = await api.getUserInfo(event.senderID);
  // let name = dt[event.senderID].name;
  var name = (await Users.getData(event.senderID)).name 

		
  var { threadID, messageID, senderID } = event;
  var data = (await Threads.getData(event.threadID)).data || {};
	var prefixname	= data["PREFIX"];		
  if (senderID == api.getCurrentUserID()) return;

  //trả lời
  var msg = {
    body: `Chào ${name}, prefix của bot hiện tại là [ ${ (( typeof(prefixname) ) !== "undefined") ? prefixname : global.config.PREFIX} ]`
   
  }
  // Gọi bot
  var arr = ["howtouse"];
  for (const i of arr) {
	  if (typeof(event.body) != "undefined"){
    if (event.body.toLowerCase() == i && event.body.length == i.length) {
      return api.sendMessage(msg, threadID, messageID);
    }
	  }
  }

};