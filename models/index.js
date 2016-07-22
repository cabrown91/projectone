var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectone");

module.exports.Nonprofit = require("./nonprofit.js");
