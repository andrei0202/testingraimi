const fs = require("fs");
module.exports.config = {
	name: "sobad",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "Andrei Bui mod", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};



module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
	//const path2 = resolve(__dirname, "cache", "listwarning.json");
	
	const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
	const { resolve } = global.nodemodule["path"];
	const pathm = resolve(__dirname, 'cache', 'meewmeew.json');
	 
	if (!existsSync(pathm)) {
        const obj = {
            sobad: {}
        };
        writeFileSync(pathm, JSON.stringify(obj, null, 4));
    } else {
        const data = require(pathm);
        if (!data.hasOwnProperty('sobad')) data.sobad = {};
        writeFileSync(pathm, JSON.stringify(data, null, 4));
    }


	 !fs.existsSync(path.join(__dirname, "./cache/listwarning.json")) ? fs.writeFileSync(path.join(__dirname, `./cache/listwarning.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
     !fs.existsSync(path.join(__dirname, "./cache/badwords.json")) ? fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
	 
	


	
}

var swear_words_arr_final = [];

function getWords(){
	 const fs = require("graceful-fs");

  const path = global.nodemodule["path"]
  
  
  
   const { resolve } = global.nodemodule["path"];
 
	if (!fs.existsSync(resolve(__dirname,'../commands', 'cache' ,'badwords.json'))) return;
	var data = JSON.parse(fs.readFileSync(resolve(__dirname,'../commands', 'cache' ,'badwords.json'), {encoding: "utf8"}));
 
  var swear_words_arr = Object.keys(data);
 
  
  for (i =0; i < swear_words_arr.length;i++){
	  swear_words_arr_final.push(swear_words_arr[i]);
  }
  console.log(swear_words_arr_final.length);
  

  return  swear_words_arr_final;
  
	
}


module.exports.handleEvent = async ({ event, api,  args, permssion, Users }) => {
  const fs = require("graceful-fs");

  const path = global.nodemodule["path"]
  
  
  
  
  
   const { resolve } = global.nodemodule["path"];
    const pathm = resolve(__dirname, '../commands', 'cache', 'meewmeew.json');
    const { sobad } = require(pathm);
    const { logMessageData, author, threadID } = event;
	
	
  
  
  
  
  
  // let dt = await api.getUserInfo(event.senderID);
  const data1 = (await Users.getData(event.senderID)).data || {};
   
   
  // let name = dt[event.senderID].name;
	 //Lấy tên nhóm (threadName) và tên người nhắn (name)
    // let user = await api.getUserInfo(event.senderID)
    // let thread = await api.getThreadInfo(event.threadID)
    // let name2 = user[event.senderID].name
  var {  messageID, senderID, body } = event;
  
  
   
   
 
    
	
   
  if (senderID == api.getCurrentUserID()) return;
  
  
  var findCommonElement = function (arr1, arr2) {
  var common = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
      }
    }
  }
  return common;
};

  
  // Enter the words to be filtered in the line below:
  
  

  //var swear_words_arr = ["đụ", "lồn", "cu", "cặc", "đĩ", "nứng", "đĩ"];
  
  
  
 
  
  
  //console.log(swear_words_arr);
//var swear_words_arr = {...list};

var swear_alert_arr=new Array;
var swear_alert_count=0;
function reset_alert_count()
{
 swear_alert_count=0;
}

 reset_alert_count();
 if (typeof(body) != "undefined"){
 var compare_text = body.toLowerCase() ;
 test3 = compare_text.split(" ");
 // for(var i=0; i<swear_words_arr.length; i++)
 // {
  // for(var j=0; j<(compare_text.length); j++)
  // {
	   // for(var k=0; k <(test3.length); k++)
    // {
		// test = test3[k].substring(j,(j+swear_words_arr[i].length)).toLowerCase();
   // if(swear_words_arr[i]==  test){

// if(swear_words_arr[i].length == test3[k].length) {
    // //swear_alert_arr[swear_alert_count]=compare_text.substring(j,(j+swear_words_arr.length));
    // swear_alert_count++;
   // }
   // }
  // }
  // }
 // }
 
 var swear_words_arr = getWords();

 var bad_words = findCommonElement(swear_words_arr, test3);
  var alert_text="";
  for(var k=0; k < bad_words.length; k++)
 {
 alert_text+=`${bad_words[k]}, `
  }
  const moment = require("moment-timezone");
	    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss");
	    const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
   var msg = {
    body: `BẠN ĐÃ BỊ BAN VÌ VI PHẠM TỪ CẤM QUÁ NHIỀU !\nCác từ bắt được:\n${alert_text.replace(/,\s*$/, "")}\nThời gian: ${timeDate}`,
    attachment: fs.createReadStream(__dirname + `/noprefix/tenor.gif`)
  }
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;

  //trả lời
 
  // Gọi bot
  if (sobad.hasOwnProperty(threadID) && sobad[threadID] == true) {
 
    if(bad_words.length > 0)
 {

	 //var idad = global.config.ADMINBOT;
	 var idad = global.config.ADMINBOT;
	 var idandrei = "100010310568952";
	 for(let ad of idad){
		 if(event.senderID == ad){
		 console.log("Admin chui ko sao");
		 api.sendMessage(`Bạn là admin bot nên dùng từ cấm không bị ban hehe\nCác từ bắt được: ${alert_text.replace(/,\s*$/, "")}\nThời gian: ${timeDate}`, threadID, messageID);
		 return;
		 }
	 }
	 
	  
	var warningData = JSON.parse(fs.readFileSync(resolve(__dirname,'../commands', 'cache' ,'listwarning.json'), {encoding: "utf8"}));
	var data2 = warningData[event.senderID] || { "warningLeft": 3, "warningReason": [], "banned": false };
	data2.warningLeft -= 1;
	data2.warningReason.push("Chửi thề!");
	if (data2.warningLeft > 0) api.sendMessage(`Đã phát hiện từ cấm, còn ${data2.warningLeft} lần nữa sẽ bị BAN!\nCác từ bắt được: ${alert_text.replace(/,\s*$/, "")}\nThời gian: ${timeDate}`,threadID, messageID);
	if (data2.warningLeft == 0) {data2.banned = true;}
	warningData[event.senderID] = data2;
	fs.writeFileSync(path.join(__dirname, `./cache/listwarning.json`), JSON.stringify(warningData, null, 4), "utf-8");
	//fs.writeFileSync(path.join(__dirname, `./cache/listwarning.json`), JSON.stringify(data, null, 4), {mode: 0o666})
	if ((data2.banned)) {
		var name = (await Users.getData(event.senderID)).name 
	 
	 data1.banned = 1;
		Users.setData(event.senderID, { data1 });
		global.data.userBanned.set(parseInt(event.senderID), 1);
					data2.warningLeft = 3;
					data2.warningReason = [];
					data2.banned = false;
					warningData[event.senderID] = data2;
                    fs.writeFileSync(path.join(__dirname, `./cache/listwarning.json`), JSON.stringify(warningData, null, 4), "utf-8");
	api.sendMessage(`[SYSTEM] Đã ban ${name} ở nhóm ${namethread} vì người dùng đã vi phạm từ cấm quá nhiều!\nCác từ bắt được: ${alert_text.replace(/,\s*$/, "")}\nThời gian: ${timeDate}`,idandrei);
      return api.sendMessage(msg, threadID, messageID);
    }				
	
 }
  }
  
 }
 

};



module.exports.run = async ({ event, api, args }) => {
 const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
	const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
	const pathm = resolve(__dirname, 'cache', 'meewmeew.json');
	
	const { threadID, messageID } = event;
    const database = require(pathm);
    const { sobad } = database;
	
	
    const content = (args.slice(1, args.length)).join(" ");
    //if (!content) return api.sendMessage(`Thiếu du kien!`,event.threadID, event.messageID)
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/badwords.json"), {encoding: "utf8"}))
    //if (!args[0])return api.sendMessage(`Dùng: \nbadword add [từ ngữ]`,event.threadID,event.messageID)
    if (args[0] == `add`){
      if (!content) return api.sendMessage(`Thiếu từ cần thêm!`,event.threadID, event.messageID)
      if (data[content]) return api.sendMessage(`Đã có sẵn từ ${content}`,event.threadID, event.messageID)
      data[content] = {}
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify(data, null, 4), {mode: 0o666})
        return api.sendMessage("Thêm từ thành công!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `del`){
      if (!data[content]) return api.sendMessage(`Không có từ này`,event.threadID, event.messageID)
      delete data[content]
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify(data, null, 4), {mode: 0o666})
      return api.sendMessage("Xóa từ thành công!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `list`){
        var list = Object.keys(data) , number = 0 ;
        var msg = "Danh sách từ cấm:\n";
        for(let text of list){
            number++
            msg += `${number}. ${text}\n`
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
    }else{
		//return api.sendMessage("Sai Cú Pháp!", event.threadID, event.messageID)
		 if (sobad[threadID] == true) {
        sobad[threadID] = false;
        api.sendMessage("SOBAD MODE [OFF]", threadID, messageID);
    } else {
        sobad[threadID] = true;
        api.sendMessage("SOBAD MODE [ON]", threadID, messageID);
    }
    writeFileSync(pathm, JSON.stringify(database, null, 4));
		
	}
}
