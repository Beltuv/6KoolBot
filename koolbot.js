const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.token

const activities_list = [
  "Club Penguin",
  "with some Data",
  "with his Friends",
  "with all his toys"
];

var counter1 = 1
var lasthi = 0
var lastbye = 0
setInterval(() => {
  counter1++;
}, 20000);

bot.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 120000);
    bot.user.setStatus("dnd")
  });

bot.on ('message', (message) => {
  if (message.author.bot) return;
  args = message.content.split(/ +/)
  var m = message;
  MessageInString = message.content

  const server = bot.guilds.get('547618457617956938');

  //Greetings(Updated[0.5])
    UserGreetings = ['hello', 'Hello', 'HELLO', '!hello','!Hello','!HELLO','hi','Hi','HI','!hi','!Hi','!HI',
    'hey','Hey','HEY','!hey','!Hey','!HEY','im back','Im back',"I'm back",'hello!','Hello!','HELLO!','Hey!',
    'hey!','HEY!','hi!','Hi!','HI!']
    User_Leaving_Messages = ['bye','Bye','BYE','!bye','!Bye','!BYE','See ya','see ya','see ya!','See ya!',
    'See you','see you','see you!','See you!','gtg','Gtg','GTG','bye!','Bye!','BYE!','gtg!','Gtg!','GTG!']

   
    for (var i = 0; i < UserGreetings.length; i++) {
      if (m.content.startsWith(UserGreetings[i])) {
        if (lasthi != counter1) {
          message.channel.send("Hello, " + message.member.displayName + "!")
          lasthi = counter1
        }  
      }
    }  

    
    for (var i = 0; i < User_Leaving_Messages.length; i++) {
      if (m.content.startsWith(User_Leaving_Messages[i])) {
        if (lastbye != counter1) {
          message.channel.send("Goodbye, " + message.member.displayName + "!")
          lastbye = counter1
        }  
      }
    }
  //Greetings(Updated[0.5])-END
  //misc
    //mute gang ---()
    mGANG = ['mute gang','Mute gang','Mute Gang','MUTE GANG','!mute gang',
    'mute gang!','Mute gang!','MUTE GANG!']
    for (var i = 0; i < mGANG.length; i++){
      if (m.content == mGANG[i]) {
        message.channel.send("mute gang"); //constant
      }
    }
    //mute gang-END
    //misc-1--0.5
    badNames = ['bad bot','badbot','drool bot','droolbot','fool bot','foolbot']
    for (var i = 0; i < badNames.length; i++){
      if (m.content == badNames[i]) {
        message.channel.send("Bad human."); //constant
      }
    }
    fortniteNames = ['fortnite','Fortnite','FORTNITE']
    for (var i = 0; i < fortniteNames.length; i++){
      if (m.content == fortniteNames[i]) {
        message.channel.send("Fortnite is bad."); //constant
      }
    }
    
    //misc-1--0.5-END
    koolbotNames = ['kool bot','koolbot','Kool bot',
    'Koolbot','KOOL BOT','KOOLBOT','KOOLBOT!','KOOL BOT!',
    'kool bot!','koolbot!','Kool Bot!','KoolBot!']
    for (var i = 0; i < koolbotNames.length; i++){
      if (m.content == koolbotNames[i]) {
        message.channel.send("I am busy right now.")
      }
    }  
    if (MessageInString.toLowerCase() == "i love you") {
      message.channel.send("I love you too!")
    }
    //Moto Moto
    motomotoNames = ['moto moto','Moto Moto','MOTO MOTO','motomoto','MotoMoto','MOTOMOTO','MoTo MoTo']
    for (var i = 0; i < motomotoNames.length; i++){
      if (m.content == motomotoNames[i]) {
        let bicon = bot.user.displayAvatarURL;
        let motoEmbed = new Discord.RichEmbed()
        .setDescription("Kool Bot's Singing")
        .setColor('#15f153')
        .setThumbnail(bicon)
        .addField("Big and Chunky - Moto Moto", "I like them big, I like them chunky \n (chunky) \n I like them big, I like them plumpy \n (Plumpy) \n I like them round, with something, something \n (Something) \n They like my sound, they think I'm funky \n (Funky)")

        message.channel.send(motoEmbed)
      }
    }  
    //Moto Moto-END
  //misc-END
  //0.4 Event commands
    if (message.content.startsWith ('kfc')) {
      message.channel.send({files: ["./images/commandimages/KFC_0.png"]});
    }
    if (message.content.startsWith ('astroneer')) {
      message.channel.send({files: ["./images/commandimages/astro.png"]});
    }
    if (message.content.startsWith ('lemon')) {
      message.channel.send({files: ["./images/commandimages/lemon.png"]});
    }
    if (message.content.startsWith ('mcdonalds')) {
      message.channel.send({files: ["./images/commandimages/mcdonalds.png"]});
    }
    if (message.content.startsWith ('minecraft')) {
      message.channel.send({files: ["./images/commandimages/Minecraft-Wallpaper-minecraft-37763094-2560-1600.png"]});
    }
    if (message.content.startsWith ('pizza')) {
      message.channel.send({files: ["./images/commandimages/pizza.png"]});
    }
    if (message.content.startsWith ('rss')) {
      message.channel.send({files: ["./images/commandimages/rainbow-six-siege-4k-artwork-dz.png"]});
    }
    if (message.content.startsWith ('roblox')) {
      message.channel.send({files: ["./images/commandimages/roblox.png"]});
    }
    if (message.content.startsWith ('eggs')) {
      message.channel.send({files: ["./images/commandimages/sunny-side-up-eggs-hero.png"]});
    }
  //0.4 Event commands - END
  
  //Picture
  memberArray = []
  server.members.forEach(member => memberArray.push(member));
  //console.log(memberArray[0].user.username) /////////Locates the set user.
  for (var i = 0; i < memberArray.length; i++){
    if (message.content.startsWith("picture")) {
      if (args[1] == memberArray[i].user.username) {
        var pictureTarget = memberArray[i].user;
        message.channel.send(pictureTarget.displayAvatarURL)
      }
    }
  }
  //Picture-END
  //Scramble
  if (message.content.startsWith('!scramble')) {
    function shuffelWord (word){
      var shuffledWord = '';
      word = word.split('');
      while (word.length > 0) {
        shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
      }
      return shuffledWord;
    }
    message.channel.send(shuffelWord(args[1]))
  }
  //Scramble-END
  //Coin
  //Roll
  if (message.content.startsWith("!roll")) {
    var highestValue = 1000000
    var highestLoop = 5
    if (args[1] < (highestValue + 1)) {
      if (args[2] == undefined) {
          var total = args[1]; //Standard die.
          var number = Math.floor(Math.random() * total) + 1
          message.channel.send("A " + number + " got rolled!");
      } else if (args[2] < (highestLoop + 1)) {
          for (var i = 0; i < args[2]; i++) {
              var total = args[1]; //Standard die.
              var number = Math.floor(Math.random() * total) + 1
              message.channel.send("A " + number + " got rolled!");
          } 
      } else {
          message.channel.send("Something went wrong...make sure to keep arguments within range.")
      }
    } else if (args[1] > highestValue) {
      message.channel.send("Something went wrong...make sure to keep arguments within range.")
    } 
    if(args[1] == undefined) {
      var total = 6; //Standard die.
      var number = Math.floor(Math.random() * total) + 1
      message.channel.send("A " + number + " got rolled!");
    }
  }
  //Roll-END
  //Math
  IntArg1 = parseInt(args[1])
  IntArg2 = parseInt(args[2])

  if (message.content.startsWith("!add")) {
    if (args[3] == null) {
      if (args[2] != null) {
        message.channel.send(args[1] + " + " + args[2] + " = " + (IntArg1 + IntArg2))
      } else {
        message.channel.send("Something went wrong...Not enough arguments.")
      }
    } else {
      message.channel.send("Something went wrong...Too many arguments.")
    }
  }

  if (message.content.startsWith("!sub")) {
    if (args[3] == null) {
      if (args[2] != null) {
        message.channel.send(args[1] + " - " + args[2] + " = " + (IntArg1 - IntArg2))
      } else {
        message.channel.send("Something went wrong...Not enough arguments.")
      }
    } else {
      message.channel.send("Something went wrong...Too many arguments.")
    }
  }

  if (message.content.startsWith("!mult")) {
    if (args[3] == null) {
      if (args[2] != null) {
        message.channel.send(args[1] + " * " + args[2] + " = " + (IntArg1 * IntArg2))
      } else {
        message.channel.send("Something went wrong...Not enough arguments.")
      }
    } else {
      message.channel.send("Something went wrong...Too many arguments.")
    }
  }

  if (message.content.startsWith("!div")) {
    if (args[3] == null) {
      if (args[2] != null) {
        message.channel.send(args[1] + " / " + args[2] + " = " + (IntArg1 / IntArg2))
      } else {
        message.channel.send("Something went wrong...Not enough arguments.")
      }
    } else {
      message.channel.send("Something went wrong...Too many arguments.")
    }
  }
  //Math-END
  //SayCommand
  if (message.content.startsWith("$$SAY")) {
    if (message.member.roles.find(r => r.name === "Head Management") || message.member.roles.find(r => r.name === "Owner")) {
      var cutmessagecommand = MessageInString.substring(6);
      bot.channels.get("547791498997923872").send(cutmessagecommand) //general channel
    }
  }
  //SayCommand-END
  
});

bot.login(Token); //Change DELETE Token and use TOKEN
