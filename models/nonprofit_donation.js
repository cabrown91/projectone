var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Nonprofit = require('./nonprofit');
var Donation = require('./donation');

var NonprofitDonationSchema = new Schema({
  _nonprofit: {type: Schema.Types.ObjectId,ref: 'Nonprofit'},
  _donation: {type: Schema.Types.ObjectId, ref: 'Donation'}
});

var NonprofitDonation = mongoose.model('NonprofitDonation', NonprofitDonationSchema);

module.exports = NonprofitDonation;
