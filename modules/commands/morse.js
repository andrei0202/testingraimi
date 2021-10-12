module.exports.config = {
    name: "morse",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Mã hóa đoạn văn bản của bạn trở thành Mật Mã Morse",
    commandCategory: "cipher",
    usages: "[encode/decode] [đoạn text cần mã hóa]",
    cooldowns: 5
   
};

module.exports.run = function({ api, event, args }) {
    const morse = require('morse');
   

    const { threadID, messageID, type, body, messageReply} = event;

    var content = args.join(" ");

    if (type == "message_reply") (content.indexOf('encode') == 0) ? api.sendMessage(morse.encode(messageReply.body), threadID, messageID) : (content.indexOf('decode') == 0) ? api.sendMessage(morse.decode(messageReply.body), threadID, messageID) : global.utils.throwError(this.config.name, threadID, messageID)
    
else (content.indexOf('encode') == 0) 
? api.sendMessage(morse.encode(`${args.slice(1, args.length)}`), threadID, messageID) 
: (content.indexOf('decode') == 0) ? api.sendMessage(morse.decode(`${args.slice(1, args.length).join(" ")}`), threadID, messageID) 
: global.utils.throwError(this.config.name, threadID, messageID);

    return;
} 
