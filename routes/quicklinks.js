var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get all the major 4 pages in quicklinks Router.

Directory
donate
gallery
podcast

*/


router.get("/directory", function (req, res, next) {
  res.render("quicklinks/directory", { title: "Event Page" });
});


router.get("/donate", function (req, res, next) {
  res.render("quicklinks/donate", { title: "history" });
});

router.get("/gallery", function (req, res, next) {
  res.render("quicklinks/gallery", { title: "quick links" });
});

router.get("/podcast", function (req, res, next) {
  res.render("quicklinks/podcast", { title: "help ministries" });
});




module.exports = router;

