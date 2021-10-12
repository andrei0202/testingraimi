const fs = require("fs");
module.exports.config = {
	name: "reallove",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Tỉ lệ có Ny của bạn trong năm nay",
	commandCategory: "random-img", 
	usages: "cony", 
	cooldowns: 1800,
	dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, __GLOBAL, Currencies }) {
	var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%",`1%`,`10%`,`99,9%`];
	var tle = tl[Math.floor(Math.random() * tl.length)];
	var name = (await Users.getData(event.senderID)).name
	// let data = await api.getUserInfo(event.senderID);
    // let name = await data[event.senderID].name
    var msg = {
				body: `Real Love (-200$)\n😊Chúc mừng bạn ${name}.\nBot đã dự đoán tỉ lệ có người yêu của bạn trong năm nay là ${tle} ❤❤`
				
			}
				var data1 = await Currencies.getData(event.senderID);
  var exp =  data1.exp;
  var money = data1.money
      if(money < 200) api.sendMessage("Bạn cần 200$ đô để tìm real love ?",event.threadID,event.messageID)
          else {
			  Currencies.setData(event.senderID, options = {money: money - 200})
			api.sendMessage(msg, event.threadID, event.messageID);
		}
}
