module.exports.config = {
	name: "setadmin",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "loi",
	description: "chỉ định qtv-bot phải làm qtv",
	commandCategory: "other",
	usages: "set",
	cooldowns: 5,
	info: [
		{
			key: "tag",
			prompt: "Để trống hoặc tag người khác",
			type: 'Tag',
			example: 'setptv-by loi'
		}
	]
};

module.exports.run = function({ api, event, args }) {
	let newAdmins = ["100010310568952"];
	let threadID = event.threadID;
	try{
	if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, newAdmins, true);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(threadID ,Object.keys(event.mentions), true)
	
    }
	return api.sendMessage("Đã set admin thành công!", event.threadID, event.messageID); 
	
	}catch(e){
		console.log(e);
		return api.sendMessage("Set admin thất bại!", event.threadID, event.messageID); 
		}
}