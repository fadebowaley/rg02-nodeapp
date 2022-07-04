var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get all the major 8 pages in the router.
history
events
quicklinks
help ministries
contact us */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/event", function (req, res, next) {
  res.render("index", { title: "Event Page" });
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


module.exports = router;

