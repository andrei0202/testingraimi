module.exports.config = {
    name: "spamtag",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "HelyT",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "General",
    usages: "spamtag @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
    // let data = await api.getUserInfo(mention);
    // let name = data[parseInt(mention)].name;
	var name = (await Users.getData(mention)).name 
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu tag !");
setTimeout(() => {a({body: "Alo" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Alo Alo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Alo alo con lợn" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn đi alo alo" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Triệu hồi" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Aloooooooooo trả lời đi alo alo" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Có người gặp mày kìa cđ ơi" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Hiện hồn đi con lợn này" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Đừng làm tao nóng alo alo alooo" + " " + name, mentions: arraytag})}, 25000);

  
  }