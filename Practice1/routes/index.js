var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { title: 'Express' });
});
router.post('/send', function(req,res){
   inputs = {
      a: req.body.patient,
      b: req.body.symptoms,
   }
   res.render("index",inputs);
})

module.exports = router;
