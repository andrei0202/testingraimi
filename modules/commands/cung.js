module.exports.config = {
  name: "cung",
   version: "1.0.0",
    hasPermssion: 0,
     credits: "Jukie~",
      description: "xem các điều thú vị về bạn",
       commandCategory: "game",
        usages: "",
         cooldowns: 5
         };

         module.exports.run = async ({ api, event,args }) => {
         const axios = global.nodemodule["axios"];
		 var content = args.join(" ");
		if (content.length == 0 && event.type != "message_reply") return global.utils.throwError(this.config.name, event.threadID,event.messageID);
		if(content.length !== 0){
			try{
          var data = (await axios.get("https://le31.glitch.me/cung?q=" + encodeURIComponent(content))).data;
       
         return api.sendMessage(`${data.data[0]}💞${data.data[1]}\n⚡️ Bây giờ là\n${data.time}`, event.threadID, event.messageID)
			}
			catch(e){
    api.sendMessage(`Đã có lỗi xảy ra ! Hãy thử nhập đúng định dạng ví dụ\n" !cung bảo bình "`,event.threadID,event.messageID)
   }
		}
         }