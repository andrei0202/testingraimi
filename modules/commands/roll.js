module.exports.config = {
	name: "roll",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Random một con số bất kì trong một khoảng",
	commandCategory: "other",
	cooldowns: 10
};

module.exports.languages = {
	"vi": {
		"returnResultDefault": "%1 có lẽ là một con số may mắn :thinking:",
		"invalidMax": "Khoảng giới hạn số quay không hợp lệ",
		"invalidInput": "Khoảng bắt đầu hoặc khoảng kết thúc không phải là một con số hợp lệ!",
		"returnResult": "%1 có lẽ là một con số may mắn trong khoảng từ %2 đến %3 :thinking:"
	},

	"en": {
		"returnResultDefault": "%1 is maybe a lucky number :thinking:",
		"invalidMax": "invalid dial limit range",
		"invalidInput": "The started range or the ended range is not an invalid!",
		"returnResult": "%1 is nay e a lucky number in range from %2 to %3 :thinking:"
	}
}

module.exports.run = function ({ event, api, args}) {
    const { threadID, messageID } = event;
	 
    if (args.length == 0) return api.sendMessage(`${Math.floor(Math.random() * 99)} có lẽ là một con số may mắn :thinking:`, threadID, messageID);
    if (args.length != 2) return api.sendMessage("Khoảng giới hạn số quay không hợp lệ", threadID, messageID);
    if (isNaN(parseInt(args[0])) || isNaN(parseInt(args[1])) || parseInt(args[1]) <= parseInt(args[0]) || parseInt(args[0]) < 0 || parseInt(args[1]) < 0) return api.sendMessage("Khoảng bắt đầu hoặc khoảng kết thúc không phải là một con số hợp lệ!", threadID, messageID);
    return api.sendMessage(`${Math.floor(Math.random() * (parseInt(args[1]) - parseInt(args[0]) + 1) + parseInt(args[0]))} có lẽ là một con số may mắn trong khoảng từ ${parseInt(args[0])} đến ${parseInt(args[1])} :thinking:`, threadID, messageID);
}



