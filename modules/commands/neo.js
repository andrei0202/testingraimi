module.exports.config = {
	name: "neo",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy thông tin về vật thể quoanh trái đất",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.run = async function({ api, event }) {
	const axios = global.nodemodule["axios"];
	let data = (await axios.get('https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY')).data;
				api.sendMessage(`Hiện tại đang có tổng cộng ${data.element_count} vật thể đang ở gần trái đất ngay lúc này!`, event.threadID, event.messageID
				);
		}