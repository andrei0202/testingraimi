module.exports.config = {
	name: "shortlink",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Rút gọn url của bạn",
	commandCategory: "other",
	usages: "[link]",
	cooldowns: 5
	
};

module.exports.run = async ({ api, event, args }) => {
	try{
	var isgd = require('isgd');
	var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
	if (!regex.test(args[0])) return api.sendMessage("Phải là một url cần rút gọn!", event.threadID);
	if (args[0].indexOf("http" || "https") === -1) args[0] = "https://" + args[0];
	isgd.shorten(`${args[0]}`, function(res) {
    console.log(res); // Returns a shorter version of http://google.com - http://is.gd/OwycZW
	return api.sendMessage(`Link đã rút gọn:\n${res}`, event.threadID, event.messageID);
	});}
	
	catch(e){api.sendMessage(e, event.threadID, event.messageID);}
}