module.exports.config = {
    name: "chửi thề",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "manhIT",
    description: "chửi thề filter",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
      "fs-extra": "",
      "request": ""
    }
  };
  module.exports.onLoad = () => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    //if (!fs.existsSync(dirMaterial + "thamlam.mp4")) request("https://raw.githubusercontent.com/manhkhac/mirai-1.2.8/data/mp4/thamlam.mp4").pipe(fs.createWriteStream(dirMaterial + "thamlam.mp4"));
  }
  module.exports.handleEvent = async ({ event, api }) => {
    const fs = require("fs-extra");
    //let dt = await api.getUserInfo(event.senderID);
    //let name = dt[event.senderID].name;
  
    var { threadID, messageID, body, senderID } = event;
    if(senderID == api.getCurrentUserID()) return;
    function out(data){
        api.sendMessage(data, threadID, messageID)
    }
    //trả lời
    var msg = {
      body: `Ê không được nói bậy bạn nhé ? `,
      attachment: fs.createReadStream(__dirname + `/noprefix/tenor.gif`)
    }
    //body: `Chào ${name}, chúc bạn một ngày mới tốt lành ❤️`,
    // Gọi bot
    var arr = ["Bot ngu r", "bot ngu r", "Bot ngu rồi", "bot ngu rồi", "bot ngu", "Bot ngu", "bot ngủm r", "Bot ngủm r", "bot ngủm rồi", "Bot ngủm rồi", "bot die rồi","Bot die rồi","bot die r","Bot die r","Duma","duma","Aduma","aduma","dume","Dume","Đume","đume", "Đuma","đuma", "vãi lồn", "Vãi lồn", "Bot lz", "bot lz", "concac","Concac","djtme","Djtme","Cc","cc","Vcc","vcc","vcl","Vcl", "Vãi lìn", "vãi lìn", "Dcm", "dcm", "cmm","Cmm","cmmm","Cmmm", "Dm", "dm","Đm", "đm", "vailon", "Vailon", "vc", "Vc", "Vl", "vl", "đụ mẹ", "Đụ mẹ", "Con chó","con chó","chó","Chó","Đụ mẹ mày","đụ mẹ mày","Đụ má nó","đụ má","đụ má nó","Đụ má", "clm","clmm","Clmm", "Clm"];
    arr.forEach(i=> {
        if(body == i) return out(msg)
     });
  
  };
  module.exports.run = async ({ event, api }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
  }
  