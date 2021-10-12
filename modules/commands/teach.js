/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "teach",
	version: "2.0.6",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Dạy bot (dùng cho lệnh sim)",
	commandCategory: "general",
	usages: "hello => goodbye",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	},
	envConfig: {
		"APIKEY": "Meew_WDcnhacTxWGWhj5blpF9S0bXHGS0OI"
	}
};

module.exports.run = async function({ api, event, args }) {
	const apikey = global.configModule.teach.APIKEY;
	const axios = global.nodemodule["axios"];
	const { data } = await axios(`https://meewmeew.info/simsimi/teach?apikey=${apikey}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: { teach: args.join(" ") }
	});
	if (data.success == false) return api.sendMessage(`${data.error}`, event.threadID, event.messageID);
	return api.sendMessage(`${data.data}`, event.threadID, event.messageID);
}