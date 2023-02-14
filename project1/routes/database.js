// mongoose
var mongoose = require("mongoose"); // Import the installed package

mongoose.connect("mongodb+srv://Happy:happy123@cluster0.uzamek2.mongodb.net/?retryWrites=true&w=majority");

var schema = mongoose.Schema({
        username: String,
        age: String,
        hobbies: String,
});


module.exports = mongoose.model("cluster0", schema);

