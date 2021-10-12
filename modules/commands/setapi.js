module.exports.config = {
	name: "setapi",	
       version: "1.0.0",
	hasPermssion: 2,
	credits: "Loi mod by Andrei Bui",
	description: "Chỉnh sửa api key data YouTube v3 và Meew Meeww",
	commandCategory: "admin",
	usages: "setkey [key]",
	cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users, permssion }) {

const { configPath } = global.client;
var config = require(configPath);
var fs = require("fs-extra");

const content = (args.slice(1, args.length)).join(" ");
		if (!args[0])return api.sendMessage(`Sử dụng: \nsetapi [youtube/mew] [APIKEY]`,event.threadID,event.messageID)
    if (args[0] == `youtube`){
      config.sing.YOUTUBE_API = `${content}`;
	  config.video.YOUTUBE_API = `${content}`;
		fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf-8');
    	api.sendMessage("Loading API and restart server...", event.threadID, () => process.exit(1));
	}
	else if(args[0] == `mew`){	
		config.sim.APIKEY = `${content}`;
		config.covid.APIKEY = `${content}`;
		config.teach.APIKEY = `${content}`;
		config.slap.APIKEY = `${content}`;
		config.img.APIKEY = `${content}`;
		config.linkword.APIKEY = `${content}`;
		config.sortword.APIKEY = `${content}`;
		fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf-8');
    	api.sendMessage("Loading API and restart server...", event.threadID, () => process.exit(1));
	}else{
		return api.sendMessage(`Sử dụng: \nsetapi [youtube/mew] [APIKEY]`,event.threadID,event.messageID)
	}

}