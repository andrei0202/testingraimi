const fs = require("fs");
module.exports.config = {
	name: "cung hoang dao",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Cung hoàng đạo",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	const axios = global.nodemodule["axios"];
	switch(event.body){
		case "1":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("bạch dương"))).data;
			api.sendMessage({
				body: `♈ Aries\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/bachduong.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "2":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("kim ngưu"))).data;
			api.sendMessage({
				body: `♉ Taurus\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/kimnguu.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "3":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("song tử"))).data;
			api.sendMessage({
				body: `♊ Gemini\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/songtu.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "4":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("cự giải"))).data;
			api.sendMessage({
				body: `♋ Cancer\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/cugiai.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "5":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("sư tử"))).data;
			api.sendMessage({
				body: `♌ Leo\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/sutu.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "6":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("xử nữ"))).data;
			api.sendMessage({
				body: `♍ Virgo\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/xunu.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "7":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("thiên bình"))).data;
			api.sendMessage({
				body: `♎ Libra\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/thienbinh.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "8":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("bọ cạp"))).data;
			api.sendMessage({
				body: `♏ Scorpius\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/bocap.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "9":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("nhân mã"))).data;
			api.sendMessage({
				body: `♐ Sagittarius\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/nhanma.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "10":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("ma kết"))).data;
			api.sendMessage({
				body: `♑ Capricorn\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/maket.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "11":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("bảo bình"))).data;
			api.sendMessage({
				body: `♒ Aquarius\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/baobinh.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		case "12":
			try{
			 var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent("song ngư"))).data;
			api.sendMessage({
				body: `♓ Pisces\n\n${data.data[0]}💞${data.data[1]}\n\n⚡️ Bây giờ là\n${data.time}`, 
				attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/songngu.jpg`)
			}, event.threadID, event.messageID);}
		catch(e){
    api.sendMessage("Đã có lỗi xảy ra !",event.threadID,event.messageID)
   }
			break;
		default:
			api.sendMessage({
				body: "Nhập 1-12 thôi <3 iu", 
				
			}, event.threadID, event.messageID); 
			return
	}
	 api.unsendMessage(handleReply.messageID);
}

module.exports.handleEvent = function({ api, event}) {
	
	 var { threadID, messageID, body, senderID } = event;
	 var arr = ["cung hoàng đạo"];
    arr.forEach(i=> {
		if (typeof(body) != "undefined"){
        if(body.toLowerCase() == i){
			api.sendMessage({
			body: "✨ 12 cung hoàng đạo ✨\n\n 1. Bạch Dương ♈\n 2. Kim Ngưu ♉\n 3. Song Tử ♊\n 4. Cự Giải ♋\n 5. Sư Tử ♌\n 6. Xử Nữ ♍\n 7. Thiên Bình ♎\n 8. Bọ Cạp ♏\n 9. Nhân Mã ♐\n10. Ma Kết ♑\n11. Bảo Bình ♒\n12. Song Ngư ♓\n\nReply tin nhắn theo số để xem thêm về con người bạn <3",
			attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/12cunghoangdao.jpg`)
		}, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
	}
		}
     });
	 
	 
	// if (event.body.indexOf("Cung hoàng đạo")==0 || (event.body.indexOf("cung hoàng đạo")==0)) {
		// api.sendMessage({
			// body: "✨ 12 cung hoàng đạo ✨\n\n 1. Bạch Dương ♈\n 2. Kim Ngưu ♉\n 3. Song Tử ♊\n 4. Cự Giải ♋\n 5. Sư Tử ♌\n 6. Xử Nữ ♍\n 7. Thiên Bình ♎\n 8. Bọ Cạp ♏\n 9. Nhân Mã ♐\n10. Ma Kết ♑\n11. Bảo Bình ♒\n12. Song Ngư ♓\n\nReply tin nhắn theo số để xem thêm về con người bạn <3",
			// attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/12cunghoangdao.jpg`)
		// }, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
	// }
}


module.exports.run = function({ api, event, client, __GLOBAL }) {

}
