const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};




module.exports.handleEvent = function ({ event, api }) {
  const fs = require("fs-extra");
  

  var { threadID, messageID, senderID, body } = event;
  if (senderID == api.getCurrentUserID()) return;

  //trả lời
  var msg = {
    body: `Donate cho Andrei qua các nguồn sau nha <3 iuuu\n\n\n🐳🐳🐳 MOMO 🐳🐳🐳\n0933521056 - Bùi Tiến Huy\n\n🐳🐳🐳 Vietinbank 🐳🐳🐳 109869551539  - Bùi Tiến Huy `,
    attachment: fs.createReadStream(__dirname + `/noprefix/stkandrei.jpg`)
  }
  // Gọi bot
  var arr = ["stk andrei", "donate andrei"];
  arr.forEach(i=> {
	  if (typeof(body) != "undefined"){
        if(body.toLowerCase() == i){
      return api.sendMessage(msg, threadID, messageID);
    }
	  }
  });

};
module.exports.run = async ({ event, api }) => {
  return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID)
}
