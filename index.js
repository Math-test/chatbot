let linebot = require('linebot');

// 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
let bot = linebot({
  channelId: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

// 當有人傳送訊息給 Bot 時
bot.on('message', function (event) {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  console.log(`${event.message.text}`);
  switch(event.message.text){
    case'hello':
    event.reply('你上線了')
    break
    case'問':
    event.reply('有啥問題')
    break
    case'壞人':
    event.reply('別生氣了')
    break
    case'開心':
    event.reply('恭喜你,希望你過得好')
    break
    default:
      event.reply('(放空中)')
      break
  }
});
主動發送訊息
setTimeout(function(){
    var userId = '124';
    var sendMsg = '學生到班囉';
    bot.push(userId,sendMsg);
    bot.on('message', function (event) {
      event.reply(sendMsg);
      
    });
    console.log('send: '+sendMsg);
},5000);
// const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: '<channel access token>'
});

client.getGroupMemberIds('<groupId>')
  .then((ids) => {
    ids.forEach((id) => console.log(id));
  })
  .catch((err) => {
    // error handling
  });
// function handleEvent(event) {
//   if (event.replyToken === '00000000000000000000000000000000' || event.replyToken === 'ffffffffffffffffffffffffffffffff') {
//     return Promise.resolve(null);
//   }
//   if (event.type !== 'message' || event.message.type !== 'text') {
//     // ignore non-text-message event
//     return Promise.resolve(null);
//   }
//   console.log(`使用者 ID: ${event.source.userId}`);

// Bot 所監聽的 webhook 路徑與 port，heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
// function doPost(e) {
//   var urlReply = 'https://api.line.me/v2/bot/message/reply';
//   var urlPush = 'https://api.line.me/v2/bot/message/push';
//   var myGroup = 'XXXXXXX';         // push 訊息到這個 ID
//   var send_message = 'doPost message';
//   var strSourceType = "";
//   var strNewRoomID = "";
//   var strNewGroupID = "";
//   var strNewUserID = "";
  
//   var recieveData= JSON.parse(e.postData.contents);
//   if (recieveData.events[0].type == "join")
//   {
//     if ( recieveData.events[0].source.type == "room" )
//     {
//       strSourceType = "room";
//       strNewRoomID = recieveData.events[0].source.roomId;
//       strNewUserID = recieveData.events[0].source.userId;
//     }
//     else if ( recieveData.events[0].source.type == "group" )
//     {
//       strSourceType = "group";
//       strNewGroupID = recieveData.events[0].source.groupId;
//       strNewUserID = recieveData.events[0].source.userId;
//     }
//     else if ( recieveData.events[0].source.type == "user" )
//     {
//       strSourceType = "user";
//       strNewUserID = recieveData.events[0].source.userId;
//     }
    
//     send_message = "SourceType:" + strSourceType;
//     send_message = send_message + " RoomID:" + strNewRoomID;
//     send_message = send_message + " GroupID:" + strNewGroupID;
//     send_message = send_message + " UserID:" + strNewUserID;
//     UrlFetchApp.fetch(urlPush, {
//       'headers': {
//         'Content-Type': 'application/json; charset=UTF-8',
//         'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
//       },
//       'method': 'post',
//       'payload': JSON.stringify({
//         'to': myGroup,
//         'messages': [{
//           'type': 'text',
//           'text': send_message,
//         }],
//       }),
//     });
//   }
// }
// // UrlFetchApp.fetch(urlReply, {
// //       'headers': {
// //         'Content-Type': 'application/json; charset=UTF-8',
// //         'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
// //       },
// //       'method': 'post',
// //       'payload': JSON.stringify({
// //         'messages': [{
// //           'type': 'text',
// //           'text': send_message,
// //         }],
// //       }),
// //     });
    
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('機器人上線啦！');
});