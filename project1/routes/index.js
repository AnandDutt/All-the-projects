var express = require('express');
var router = express.Router();
var database = require("./database");


// get: see a page from views
// req: request of the page
// res: response shows a views page

router.get("/abcd", function (req, res) {
  res.render("test");
})


router.post("/send", function(req,res) {

 

  database.create({
    username: req.body.uname,
    age: req.body.age,
    hobbies: req.body.hobbies,
  })

  res.render("test");
})

// callback functions

router.get("/show", function(req, res) {
  database.find({}, function(err, data) {
    if(err) {
      throw err;
    }
    else {
      res.render("showdata", {abc: data})
    }

  })
  
})


module.exports = router;
