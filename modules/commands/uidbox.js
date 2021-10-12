module.exports.config = {
  name: "uidbox",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra id box chat.",
  commandCategory: "Info",
  usages: "tir",
  cooldowns: 5,
  dependencies: []
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	let threadInfo = await api.getThreadInfo(event.threadID);
    
  return api.sendMessage(`${threadInfo.threadID}`, event.threadID);
}
