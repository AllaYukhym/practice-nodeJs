const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(data) {
  const { userName, userEmail, userMesage } = data;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "alla_goit_56@outlook.com", // generated ethereal user
      pass: "history_goit", // generated ethereal password
    },
  });

  const email = `<p>You reseved email from ${userName}</p>
    <p>contact email ${userEmail}</p>
    <p>message: ${userMesage}</p>`;

  let info = await transporter.sendMail({
    from: "alla_goit_56@outlook.com",
    to: "yukhymenko.alla@gmail.com",
    subject: "April 2023 First Intergalactic Jedi Conference",
    text: userMesage,
    html: email,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = sendMail;
