var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var DonationSchema = new Schema({
  donation_amount: String,
  payment_type: String,
  cardholder_name: String,
  security_code: String, 
});

DonationSchema.plugin(passportLocalMongoose);

var Donation = mongoose.model('Donation', DonationSchema);

module.exports = Donation;
