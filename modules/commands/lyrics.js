module.exports.config = {
	name: "lyrics",
    version: "1.0.0", 
	hasPermssion: 0,
	credits: "๐๐๐ณ๐ข๐ ๐๐๐๐ฆ",
	description: "Xem lyrics bร i hรกt", 
	commandCategory: "Khรกc",
	usages: "singer songname",
	cooldowns: 5,
    dependencies: {"lyrics-finder": ""}
};
module.exports.run = async function ({ api, args, event }) {
  const lyricsFinder = require('lyrics-finder');
    let lyrics = await lyricsFinder(args.join(" ")) || "Not Found!";
    console.log(lyrics);
api.sendMessage(`${lyrics}`, event.threadID, event.messageID);
}