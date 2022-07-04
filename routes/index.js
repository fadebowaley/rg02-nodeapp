var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();



// Nodemailer Setup for receiving emails and Prayer Requests
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
    //user: "brvcase@gmail.com",
    //pass: "xsmtpsib-4514e97145792cf8e8d995e22f8660f6db168f9bfec8024c50d01f2679c7e757-bSCVrBMc92JU7E5D",
  },
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get all the major 8 pages in the router.
* history
* events
* quicklinks
* help ministries
* contact us 
*/

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/event", function (req, res, next) {
  res.render("event", { title: "Event Page" });
});


router.get("/history", function (req, res, next) {
  res.render("history", { title: "history" });
});

// router.get("/quicklinks", function (req, res, next) {
//   res.render("index", { title: "quick links" });
// });

router.get("/help-ministries", function (req, res, next) {
  res.render("help", { title: "help ministries" });
});


router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "contact us" });
});


//post 
router.post("/contact/send", function (req, res, next) {
 console.log(req.body.message)
transporter.sendMail({
    from: req.body.email,
    name: req.body.name,
    subject: req.body.subject,
    text: req.body.message,
    to: "fadebowaley@gmail.com"
  },
  (err, info) => {
    if (!err) {
    req.flash("success", "Message sent successfully!");
    res.redirect("/contact");
    } else {
          req.flash("Error", "Please retry Later!");
          res.redirect("/contact");
    }

  }
);
});

module.exports = router;