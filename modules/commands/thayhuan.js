module.exports.config = {
    name: "thầy Huấn",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "manhIT",
    description: "Thầy Huấn",
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
      body: `Không làm mà đòi có ăn :D chỉ có ăn đb, ăn cut, nói thế cho nó vuông :D`,
      attachment: fs.createReadStream(__dirname + `/noprefix/thayhuan.gif`)
    }
    //body: `Chào ${name}, chúc bạn một ngày mới tốt lành ❤️`,
    // Gọi bot
    var arr = ["không làm mà đòi có ăn", "huấn", "thầy huấn", "có làm mới có ăn"];
    arr.forEach(i=> {
		if (typeof(body) != "undefined"){
        if(body.toLowerCase() == i) return out(msg)
		}
     });
  
  };
  module.exports.run = async ({ event, api }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
  }
  