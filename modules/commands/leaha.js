module.exports.config = {
  name: "leaha",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "AndreiBui",
  description: "Xem ảnh ngừi iu.",
  commandCategory: "Hình Ảnh",
  usages: "leaha",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/9HxDoQb.jpg",
  "https://i.imgur.com/LZbt5uB.jpg",
  "https://i.imgur.com/TfE6RlB.jpg",
  "https://i.imgur.com/2xL6yem.jpg",
  "https://i.imgur.com/0QsWwy8.jpg",
  "https://i.imgur.com/RwFoB44.jpg",
  "https://i.imgur.com/SwJgNmX.jpg",
  "https://i.imgur.com/iDYx1Lq.jpg",
  "https://i.imgur.com/4tvRWFl.jpg",
  "https://i.imgur.com/OuUAb4S.jpg",
  "https://i.imgur.com/gfhk265.jpg",
  "https://i.imgur.com/S4BRKpC.jpg",
  "https://i.imgur.com/Ppr2idX.jpg",
  "https://i.imgur.com/05lYw2H.jpg",
  "https://i.imgur.com/wDoXpcb.jpg",
  "https://i.imgur.com/7rGyQGX.jpg",
  "https://i.imgur.com/z9SfPr8.jpg",
  "https://i.imgur.com/Z6MKfaj.jpg",
  "https://i.imgur.com/YxNTe9M.jpg",
  "https://i.imgur.com/uEuOTrm.jpg",
  "https://i.imgur.com/6wHZK3s.jpg",
  "https://i.imgur.com/fLtbrad.png",
  "https://i.imgur.com/sgwaNjn.jpg",
  "https://i.imgur.com/4LsmKDS.jpg"
  
	
  

  ];
  
	var data1 = await Currencies.getData(event.senderID);
  var exp =  data1.exp;
  var money = data1.money
      if(money < 5000) api.sendMessage("Bạn cần 5000$ đô để xem ảnh Lea hehe ?",event.threadID,event.messageID)
          else {
			  Currencies.setData(event.senderID, options = {money: money - 200})	
	 var callback = () => api.sendMessage({body:`Ảnh của Lea nè ❤️`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
		  }
   };