module.exports.config = {
    name: "baucua",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Đánh bầu cua",
    commandCategory: "game",
    usages: "[số coin cần đặt]",
    cooldowns: 1800
};

module.exports.languages = {
    "vi": {
        "missingInput": "[ SLOT ] Số tiền đặt cược không được để trống hoặc là số âm",
        "moneyBetNotEnough": "[ SLOT ] Số tiền bạn đặt lớn hơn hoặc bằng số dư của bạn!",
        "limitBet": "[ SLOT ] Số coin đặt không được dưới 50$!",
        "returnWin": "🎲 %1 | %2 | %3 🎲\nBạn đã thắng nhà cái với số tiền %4$",
        "returnLose": "🎲 %1 | %2 | %3 🎲\nBạn đã thua nhà cái và mất đi %4$"
    },
    "en": {
        "missingInput": "[ SLOT ] The bet money must not be blank or a negative number",
        "moneyBetNotEnough": "[ SLOT ] The money you betted is bigger than your balance!",
        "limitBet": "[ SLOT ] Your bet is too low, the minimum is 50$",
        "returnWin": "🎲 %1 | %2 | %3 🎲\nYou won with %4$",
        "returnLose": "🎲 %1 | %2 | %3 🎲\nYou lost and loss %4$"
    }
}

module.exports.run = async function({ api, event, args, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const slotItems = ["bầu", "cua", "tôm", "cá", "nai", "gà"];
    const moneyUser = (await getData(senderID)).money;

	
	var userChoose = args[0];
	if (  (userChoose !== "bầu") &&
		   (userChoose !== "cua") &&
			(userChoose !== "tôm") &&
			(userChoose !== "cá") &&
			(userChoose !== "nai") &&
			(userChoose !== "gà") )     {
				
				return api.sendMessage(`[ Bầu Cua ] Hãy chọn cược 1 linh vật [ bầu, cua, tôm, cá, nai, gà ] và số tiền cược\nSố tiền hiện tại: ${moneyUser} đô`, threadID, messageID);
			}
	
	
	

    var moneyBet = parseInt(args[1]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(`[ Bầu Cua ] Số tiền đặt cược không được để trống hoặc là số âm\nSố tiền hiện tại: ${moneyUser} đô`, threadID, messageID);
    if (moneyBet > moneyUser) return api.sendMessage(`[ Bầu Cua ] Số tiền bạn đặt lớn hơn hoặc bằng số dư của bạn!\nSố tiền hiện tại: ${moneyUser} đô`, threadID, messageID);
    if (moneyBet < 500) return api.sendMessage(`[ Bầu Cua ] Số tiền đặt không được dưới 500$!\nSố tiền hiện tại: ${moneyUser} đô`, threadID, messageID);
	
	//await decreaseMoney(senderID, moneyBet);
    
	var number = [], win = false;
	
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
	//api.sendMessage(`${userChoose} - ${slotItems[number[0]]}- ${slotItems[number[1]]}- ${slotItems[number[2]]}`, threadID, messageID);
    //if ((number[0] == number[1] && number[1] == number[2]) || (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) ) {
		var count = 0, winicon = '';
		for (var i = 0; i < number.length; i++){
			if (userChoose == slotItems[number[i]]){
				count++
				win = true;
			if (userChoose == "tôm") winicon = "🦞";
			if (userChoose == "cua") winicon = "🦀";
			if (userChoose == "cá") winicon = "🐟";
			if (userChoose == "nai") winicon = "🦌";
			if (userChoose == "gà") winicon = "🐓";
			if (userChoose == "bầu") winicon = "🍐";
				
				
			}else{
				if (userChoose == "tôm") winicon = "🦞";
			if (userChoose == "cua") winicon = "🦀";
			if (userChoose == "cá") winicon = "🐟";
			if (userChoose == "nai") winicon = "🦌";
			if (userChoose == "gà") winicon = "🐓";
			if (userChoose == "bầu") winicon = "🍐";
				
			}
		}
		if (count > 0) moneyBet = moneyBet * parseInt(count) + moneyBet;
		
       
    
    // else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        // moneyBet *= 2;
        // win = true;
    // }
    switch (win) {
        case true: {
			if (slotItems[number[0]] == "tôm") slotItems[number[0]] = "🦞";
			if (slotItems[number[0]] == "cua") slotItems[number[0]] = "🦀";
			if (slotItems[number[0]] == "cá") slotItems[number[0]] = "🐟";
			if (slotItems[number[0]] == "nai") slotItems[number[0]] = "🦌";
			if (slotItems[number[0]] == "gà") slotItems[number[0]] = "🐓";
			if (slotItems[number[0]] == "bầu") slotItems[number[0]] = "🍐";
			
			if (slotItems[number[1]] == "tôm") slotItems[number[1]] = "🦞";
			if (slotItems[number[1]] == "cua") slotItems[number[1]] = "🦀";
			if (slotItems[number[1]] == "cá") slotItems[number[1]] = "🐟";
			if (slotItems[number[1]] == "nai") slotItems[number[1]] = "🦌";
			if (slotItems[number[1]] == "gà") slotItems[number[1]] = "🐓";
			if (slotItems[number[1]] == "bầu") slotItems[number[1]] = "🍐";
			
			if (slotItems[number[2]] == "tôm") slotItems[number[2]] = "🦞";
			if (slotItems[number[2]] == "cua") slotItems[number[2]] = "🦀";
			if (slotItems[number[2]] == "cá") slotItems[number[2]] = "🐟";
			if (slotItems[number[2]] == "nai") slotItems[number[2]] = "🦌";
			if (slotItems[number[2]] == "gà") slotItems[number[2]] = "🐓";
			if (slotItems[number[2]] == "bầu") slotItems[number[2]] = "🍐";
			
			
			
            api.sendMessage(`🎲 ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n🎲 Kết quả: Có ${count} ${winicon}\nBạn đã thắng nhà cái với số tiền ${moneyBet}$\nSố tiền hiện tại: ${moneyUser} $`, threadID, messageID);
            await increaseMoney(senderID, moneyBet);
            break;
        }
        case false: {
			if (slotItems[number[0]] == "tôm") slotItems[number[0]] = "🦞";
			if (slotItems[number[0]] == "cua") slotItems[number[0]] = "🦀";
			if (slotItems[number[0]] == "cá") slotItems[number[0]] = "🐟";
			if (slotItems[number[0]] == "nai") slotItems[number[0]] = "🦌";
			if (slotItems[number[0]] == "gà") slotItems[number[0]] = "🐓";
			if (slotItems[number[0]] == "bầu") slotItems[number[0]] = "🍐";
			
			if (slotItems[number[1]] == "tôm") slotItems[number[1]] = "🦞";
			if (slotItems[number[1]] == "cua") slotItems[number[1]] = "🦀";
			if (slotItems[number[1]] == "cá") slotItems[number[1]] = "🐟";
			if (slotItems[number[1]] == "nai") slotItems[number[1]] = "🦌";
			if (slotItems[number[1]] == "gà") slotItems[number[1]] = "🐓";
			if (slotItems[number[1]] == "bầu") slotItems[number[1]] = "🍐";
			
			if (slotItems[number[2]] == "tôm") slotItems[number[2]] = "🦞";
			if (slotItems[number[2]] == "cua") slotItems[number[2]] = "🦀";
			if (slotItems[number[2]] == "cá") slotItems[number[2]] = "🐟";
			if (slotItems[number[2]] == "nai") slotItems[number[2]] = "🦌";
			if (slotItems[number[2]] == "gà") slotItems[number[2]] = "🐓";
			if (slotItems[number[2]] == "bầu") slotItems[number[2]] = "🍐";
            api.sendMessage(`🎲 ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n🎲 Kết quả: Có ${count} ${winicon}\nBạn đã thua nhà cái và mất đi ${moneyBet}$\nSố tiền hiện tại: ${moneyUser} $`, threadID, messageID);
            await decreaseMoney(senderID, moneyBet);
            break;
        }
    }
}