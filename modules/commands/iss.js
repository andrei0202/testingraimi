module.exports.config = {
	name: "iss",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy thông tin về spacecenter",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.run = async function({ api, event }) {
	const axios = global.nodemodule["axios"];
	let data = (await axios.get('http://api.open-notify.org/iss-now.json')).data;
				api.sendMessage(`Vị trí hiện tại của Trạm Vũ Trụ 🌌🌠🌃\n- Vĩ độ: ${data.iss_position.latitude}\n- Kinh độ: ${data.iss_position.longitude}`, event.threadID, event.messageID
				);
		}