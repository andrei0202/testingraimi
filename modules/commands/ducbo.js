module.exports.config = {
	name: "ducbo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh Đức Bo :))",
	commandCategory: "random-img",
	usages: "ducbo",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vangbanlanhat.tk/image?type=duckbo').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					
					api.sendMessage({
						body: `Đức Bo 🤭🤭`,
						attachment: fs.createReadStream(__dirname + `/cache/ducbo.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ducbo.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/ducbo.${ext}`)).on("close", callback);
			})
}