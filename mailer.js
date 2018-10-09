/* var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'conceptsquad02@gmail.com',
    pass: 'mlm12345'
  }
});

var mailOptions = {
  from: 'conceptsquad02@gmail.com',
  to: 'mlm253442@gmail.com',
  subject: 'Booking on GetItDone',
  text: ''
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Booking Details sent: ' + info.response);
  }
});

exports.mailer = { mailer, mailOptions };
 */