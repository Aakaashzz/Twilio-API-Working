const accountSid = "AC7a55fe59e16b137b44056b577c4f";
const authToken = "5ade83ff4c9e3d1c517651fd22ce53a9";
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
        mediaUrl: ['https://www.sample-videos.com/img/Sample-jpg-image-1mb.jpg'],
         from: 'whatsapp:+14155238886',
         body: 'Welcome',
         to: 'whatsapp:+916374183864'
       })
      .then(message => console.log(message.sid));
