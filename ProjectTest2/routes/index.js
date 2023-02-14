var express = require('express');
var router = express.Router();
var database = require("./database");


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/info', function (req, res) {
  database.create({
    StudentName: req.body.Sname,
    ParentName: req.body.Pname,
    GuardianName: req.body.Gname,
    Paymentmethod: req.body.pay
  })
  res.redirect('/show')
})

router.get("/show", function (req, res) {
  database.find({}, function (err, data) {
    if (err) {
      throw err;
    }
    else {
      res.render("showdata", { abc: data })
    }

  })
})

router.get("/:id/update", function (req, res) {

  var actual_id = req.params.id;

  database.find({}, function (err, data) {
    if (err) {
      throw err;
    }
    else {
      res.render("upodateData", { abc: data, actual_id: actual_id });

    }

  })

})



router.post("/:id/update", function (req, res) {
  var actual_id = req.params.id;
  console.log(actual_id);

  database.findByIdAndUpdate(actual_id, {
    StudentName: req.body.Sname,
    ParentName: req.body.Pname,
    GuardianName: req.body.Gname,
    Paymentmethod: req.body.pay
  })
    .then(() => {

      console.log("SAVED");
      res.redirect("/show");


    })
    .catch(() => {
      console.error("NOT SAVED")
    })

})

router.get("/:id/delete" , function(req,res){
 var actual_id = req.params.id;

 database.findByIdAndDelete(actual_id, function() {
  res.redirect("/show");

 })

});

module.exports = router;
