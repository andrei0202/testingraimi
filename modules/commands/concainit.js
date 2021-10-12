module.exports.config = {
    name: "còn cái nịt",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "manhIT",
    description: "Còn cái nịt",
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
      body: `Còn đúng cái nịt thôiii`,
      attachment: fs.createReadStream(__dirname + `/noprefix/concainit.mp4`)
    }
    //body: `Chào ${name}, chúc bạn một ngày mới tốt lành ❤️`,
    // Gọi bot
    var arr = ["Còn cái nịt", "Còn đúng cái nịt thôi", "còn đúng cái nịt thôi", "còn cái nịt"];
    arr.forEach(i=> {
        if(body == i) return out(msg)
     });
  
  };
  module.exports.run = async ({ event, api }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
  }
  