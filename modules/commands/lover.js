module.exports.config = {
  name: "lover",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MewMew fix get by Jukie",
  description: "Tìm Kiếm Nửa Kia Của Bạn ",
  commandCategory: "Giải trí",
  usages: "[boy/girl]",
  cooldowns: 5400
}
module.exports.run = async ({ api, event,args, Users, Currencies }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  			var dataMoney = await Currencies.getData(event.senderID);
  var exp =  dataMoney.exp;
  var money = dataMoney.money
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("Rất tiếc! Không tìm thấy nửa đời của bạn :(", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
         if(money < 300) api.sendMessage("Bạn cần 300$ đô để tìm kiếm nửa kia ?",event.threadID,event.messageID)
			 else{
Currencies.setData(event.senderID, options = {money: money - 300})
            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `Lover (- 300$)\n\n⚡️Tìm Kiếm Nửa Kia Của Bạn\n⚡️Tên: ${n}\n⚡️Mối Quan Hệ: Độc Thân (có thể)\n⚡️Độ Phù Hợp: ${a.toFixed(2)}%\n⚡️ID: ${e}\n⚡️Profile: fb.me/${url}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
			 }
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  
     
      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)
                     
            if (data.length == 0) return api.sendMessage("⚡️Rất tiếc! Không tìm thấy nửa đời của bạn :(", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);

      if(money < 300) api.sendMessage("Bạn cần 300$ đô để tìm kiếm nửa kia ?",event.threadID,event.messageID)
		 else{
			
            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
				
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
			Currencies.setData(event.senderID, options = {money: money - 300})
            api.sendMessage({ body: `Lover (- 300$)\n\n⚡️Tìm Kiếm Nửa Kia Của Bạn\n⚡️Tên: ${n}\n⚡️Mối Quan Hệ: Độc Thân (có thể)\n⚡️Độ Phù Hợp: ${a.toFixed(2)}%\n⚡️ID: ${e}\n⚡️Profile: fb.me/${url}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}
			
}
  

};