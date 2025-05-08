const nodemailer = require('nodemailer');
//const prompt = require('prompt-sync')();

export async function sendSpam(receiver, affair, message, numberToMessages){
  // Email variables
  /*var receiver = prompt("Select the receiver account than gmail: ");
  var affair = prompt("Enter the affair: ");
  var message = prompt("Enter the message: ");*/

  // Safety loop to avoid being bad
  // var numberToMessages = Number(prompt("Enter how many messages you went send to "+receiver+": "));
  // while(numberToMessages >= 10 || isNaN(numberToMessages)===true){
  //   numberToMessages = Number(prompt("Don't be mean, you can send up to 10 messages: "));
  // }

  // Transporter settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'santimgb98@gmail.com',
      pass: 'fbgz yyau hlug rqom'
    }
  });

  // Email settings
  const mailOptions = {
    from: 'santimgb98@gmail.com',
    to: receiver,
    subject: affair,
    text: message
  };

  console.clear();

  for (var i = 0; i < numberToMessages; i++) {
    try {
      // Send the email and wait for it to complete
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.log('Error to send:', error);
    }
  }
}

async function main(){
  while(true){

    console.log(`*********** SPAM EMAIL *************
            1. Send spam
            2. Exit` );

    var selector = prompt("Select option: ");
    while(isNaN(selector)===true || selector<1 || selector>2){
      selector = prompt("Select a valid option: ");
    }

    switch(selector){
      case "1":{
        await sendSpam();
        break;
      }
      case "2":{
        process.exit();
      }
    }
  }
}
main();