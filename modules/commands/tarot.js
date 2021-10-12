module.exports.config = {
  name: "tarot",
   version: "1.0.0",
    hasPermssion: 0,
     credits: "Jukie~",
      description: "xem các điều thú vị về bạn",
       commandCategory: "game",
        usages: "",
         cooldowns: 5
         };

         module.exports.run = async ({ api, event, args, Users, Threads, __GLOBAL, Currencies }) => {
         const axios = global.nodemodule["axios"];
         const res = await axios.get(`https://le31.glitch.me/tarot`);
         var data = res.data.data;
         var name = res.data.name;
         var suite = res.data.suite;
         var description = res.data.description;
         var interpretation = res.data.interpretation;
		 var data1 = await Currencies.getData(event.senderID);
  var exp =  data1.exp;
  var money = data1.money
      if(money < 200) api.sendMessage("Bạn cần 200$ đô để xem tarot ?",event.threadID,event.messageID)
          else {
			  Currencies.setData(event.senderID, options = {money: money - 200})
         return api.sendMessage(`XEM TAROT (- 200$)\n⚡️${data.name}\n≻───── ⋆✩⋆ ─────≺\n⚡️${data.suite}\n⚡️${data.description}\n⚡️${data.interpretation}\n≻───── ⋆✩⋆ ─────≺\nDùng lệnh trans và reply tin nhắn này để dịch sang tiếng Việt`, event.threadID, event.messageID)
         }
		 }