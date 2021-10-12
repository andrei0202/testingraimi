module.exports.config = {
	name: "rname",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Random tên",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"request": ""
	},
	envConfig: {
		"APIKEY": "mi451266190"
	}
};

module.exports.run = async ({ api, event }) => {
	const array = ["eng","japan"];
	let random = array[Math.floor(Math.random() * array.length)];
	if(random == "eng"){
	return global.nodemodule["request"](`https://www.behindthename.com/api/random.json?usage=eng&key=${global.configModule[this.config.name].APIKEY}`, (err, response, body) => {
		const data = JSON.parse(body);
		api.changeNickname(`${data.names[0]} ${data.names[1]}`, event.threadID, event.senderID);
	});}else if(random == "japan"){
	return global.nodemodule["request"](`https://www.behindthename.com/api/random.json?usage=jap&key=${global.configModule[this.config.name].APIKEY}`, (err, response, body) => {
		const data = JSON.parse(body);
		api.changeNickname(`${data.names[0]} ${data.names[1]}`, event.threadID, event.senderID);
	});}
}