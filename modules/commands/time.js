module.exports.config = {
	name: "time",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Xem bây giờ là mấy giờ",
	commandCategory: "Other", 
	usages: "time", 
	cooldowns: 0,
	dependencies: []
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time = moment.tz("Asia/Ho_Chi_Minh").format(" L");
	// let data = await api.getUserInfo(event.senderID);
    // let name = await data[event.senderID].name
	var name = (await Users.getData(event.senderID)).name 
	var d = new Date();
	var dd = d.getDate()-1
	var yyyy = d.getFullYear()
	var mm = d.getMonth()+1
	var zone = 0 
	var h = addZero(d.getHours())
	var m = addZero(d.getMinutes())
	var s = addZero(d.getSeconds())
	var ms = addZero(d.getMilliseconds())
	return api.sendMessage(`👋 Hi ${name}! Chúc bạn 1 ngày tốt lành ❤\n💡 Bây giờ là: \n${h}:${m}:${s}\n${dd+1}/${mm}/${yyyy}`, event.threadID, event.messageID)
}


function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}