var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DonationSchema = new Schema({
  donation_amount: String,
  payment_type: String,
  cardholder_name: String,
  security_code: String,
});

var Donation = mongoose.model('Donation', DonationSchema);

module.exports = Donation;
