const nodemailer = require("nodemailer");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

exports.sendMessage = function(req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const subject = req.body.subject;
  const msg = req.body.msg;

  const date = req.body.date;
  const time = req.body.time;
  const service = req.body.service;
  const profileName = req.body.profileName;
  const profileEmail = req.body.profileEmail;

  console.log("CONTACT MESSAGE CONTROLLER SENT");
  console.log(email);
  console.log(name);
  console.log(phone);
  console.log(subject);
  console.log(msg);

  console.log(date);
  console.log(time);
  console.log(service);
  console.log(profileName);
  console.log(profileEmail);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "andmitchell0920@gmail.com",
      pass: "Wht59Sox"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  var mailOptions = {
    from: email,
    //Enter as many emails as you'd
    to: "andmitchell0920@gmail.com, andmitchell@cox.net",
    subject: `${subject}`,
    text: msg,
    html: `<br/><p> From: ${email} <br/> <br/> </p><p> Phone: ${phone} <br/> <br/> </p><p> Subject: ${subject} <br/> <br/> </p> <br/><p>${msg} <br/> <br/> <br/> - From Teamcarzy Barber Cuts <br/>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json({ hay: "error" });
    } else {
      console.log("Message sent: " + info.response);
      res.json({ hay: info.response });
    }
  });
};
