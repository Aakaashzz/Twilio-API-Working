const accountSid = "AC7a55fe59e16b137b44056b577c9dd14f";
const authToken = "5ade83ff4c9e3d1c517651fd23a9 ";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    mediaUrl: ['https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'],
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+916374183864'
   })
  .then(message => console.log(message.sid));
