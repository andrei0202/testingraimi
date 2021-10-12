module.exports.config = {
	name: "banspam",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "tự động cấm người dùng nếu spam bot 5 lần/phút",
	commandCategory: "system",
	usages: "x",
	cooldowns: 5
};


module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
var name = (await Users.getData(event.senderID)).name 
 switch(handleReply.type) {
   case "reply": {
     var idad = ["100010310568952"];
     for(let ad of idad) {
     api.sendMessage({body: "⚡Reply từ "+name+":\n"+event.body, mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "mayspamxem"}))
     }
   break;}
    case "mayspamxem": {
      api.sendMessage({ body: `⚡Phản hồi từ admin ${name} cho người vi phạm:\n--------\n⚡${event.body}`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID}), handleReply.messID); //khi bị ban reply tin nhắn báo cáo chửi chết con đĩ mẹ tụi nó =))
   break;}
     
     }
  
  
};


module.exports. run = ({api, event}) => {
  return api.sendMessage("Tự động cấm người dùng nếu spam bot 5 lần/phút", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
  let { senderID, messageID, threadID } = event;
  idad = ["100010310568952"];
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	if ((global.client.autoban[senderID].timeStart + 60000) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= 5) {
		if (senderID == "100010310568952"){
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
			return api.sendMessage("Admin Andrei spam từ từ thui nào :D",event.threadID, event.messageID);
			}
			var idbox = event.threadID;
 // const url = (api.getCurrentUserID(event.senderID));
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;
	    const moment = require("moment-timezone");
	    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss");
	    const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			let dataUser =  (await Users.getData(event.senderID)) || {};
			let data = dataUser.data || {};
			if (data && data.banned == true) return;
			data.banned = 1;
		Users.setData(event.senderID, { data });
		global.data.userBanned.set(parseInt(event.senderID), 1);	
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
  		return api.sendMessage(
    `⚡Người dùng đã bị ban\n⚡Tên: ${dataUser.name}\n⚡ID: ${senderID}\n⚡Lý do: spam bot 5 lần/1 phút\n\n⚡Vi phạm vào lúc:\n${timeDate}\n\n✔️Đã báo cáo đến admin`, threadID,
    () => {
    var idad = ["100010310568952"];
    for(let ad of idad) {
        api.sendMessage(`⚡Người vi phạm: ${dataUser.name}\n⚡ID: ${senderID}\n⚡Box: ${namethread}\n⚡ID box: ${idbox}\n⚡Lý do: spam bot 5 lần/1 phút\n\n⚡Vi phạm vào lúc:\n${timeDate}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "mayspamxem"
            }));
    }
    }
  )
	  }
	}
};

//gửi all admin