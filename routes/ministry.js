var express = require('express');
var router = express.Router();



/* Get all the major4 pages in the Help Minstry router.
CSR
House Fellowship
Women Ministry
Youth Ministry

*/




router.get("/csr", function (req, res, next) {
  res.render("ministry/csr", { title: "history" });
});

router.get("/house-fellowship", function (req, res, next) {
  res.render("ministry/hf", { title: "quick links" });
});

router.get("/women-ministries", function (req, res, next) {
  res.render("ministry/women", { title: "help ministries" });
});

router.get("/youth", function (req, res, next) {
  res.render("ministry/youth", { title: "contact us" });
});


module.exports = router;

