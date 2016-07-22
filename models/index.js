var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectone");

module.exports.Nonprofit = require("./nonprofit.js");

module.exports.User = require("./user.js");

module.exports.Donation = require("./donation.js");
