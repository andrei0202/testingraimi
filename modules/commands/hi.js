module.exports.config = {
  name: "hi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Kanichi",
  description: "",
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
  if (!fs.existsSync(dirMaterial + "hi.gif")) request("https://media.discordapp.net/attachments/849164098024374283/859645612097798184/received_373965544066156.gif").pipe(fs.createWriteStream(dirMaterial + "hi.gif"));
}
module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = require("fs-extra");
  // let dt = await api.getUserInfo(event.senderID);
  // let name = dt[event.senderID].name;
  var name = (await Users.getData(event.senderID)).name 

  var { threadID, messageID, senderID } = event;
  if (senderID == api.getCurrentUserID()) return;

  //trả lời
  var msg = {
    body: `Chào ${name}, chúc bạn một ngày mới tốt lành ❤️`,
    attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)
  }
  // Gọi bot
  var arr = ["hi mn","hello", "lô", "hí lô","helu mn", "chào bủi sáng cả nhà iu", "chào buổi sáng mn", "hello cả nhà iu", "alo"];
  for (const i of arr) {
	  if (typeof(event.body) != "undefined"){
    if (event.body.toLowerCase() == i && event.body.length == i.length) {
      return api.sendMessage(msg, threadID, messageID);
    }
	  }
  }

};
module.exports.run = async ({ event, api }) => {
  return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
}
