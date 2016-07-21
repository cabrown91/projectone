var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/projectone");

module.exports.Nonprofit = require("./nonprofit.js");
