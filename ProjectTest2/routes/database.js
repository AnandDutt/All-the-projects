var mongoose = require("mongoose"); 

mongoose.connect("mongodb+srv://Happy:happy1234@cluster0.sm1dyfs.mongodb.net/?retryWrites=true&w=majority");

var schema = mongoose.Schema({
    StudentName: String,
    ParentName: String,
    GuardianName: String,
    Paymentmethod: String
});


module.exports = mongoose.model("cluster0", schema);