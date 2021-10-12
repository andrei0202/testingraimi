module.exports.config = {
    name: "rps",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
    description: "búa bao kéo",
    commandCategory: "rps",
    usages: "[tag]",
    cooldowns: 10,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
    if(!args[0]) {
        outMsg("Vui lòng nhập kéo hoặc búa hoặc bao")
    }
    var turnbot = ["kéo","búa","bao"]
          var botturn = turnbot[Math.floor(Math.random() * 3)] 
          var userturn = args.join( " ")
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              return outMsg(`Hòa\nUser : ${userturn}\nBot : ${botturn} `)
            } else if (userturn == "kéo") {
              if (botturn == "búa") {
                return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn} `)
              } else if (botturn == "bao") {
                return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn} `)
            }
          } else if (userturn == "búa") {
            if (botturn == "bao") {
              return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn} `)
            } else if (botturn == "kéo") {
              return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn} `)
          }
        } else if (userturn == "bao") {
          if (botturn == "kéo") {
            return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn} `)
          } else if (botturn == "búa") {
            return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn} `)
        }
      }
        } else {
          return outMsg("Sai Format")
        }
}