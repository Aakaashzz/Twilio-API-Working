const accountSid = "AC7a55fe59e16b137b440d14f";
const authToken = "5ade83ff4c9e3d1c517653a9 ";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    mediaUrl: ['https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'],
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+916374183864'
   })
  .then(message => console.log(message.sid));
