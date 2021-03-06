var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NonprofitSchema = new Schema({
  nonprofit: String,
  money_needed: Number,
  project_description: String,
  nonprofit_description: String,
  photo: String,
  donation_description: String,
});

var Nonprofit = mongoose.model('Nonprofit', NonprofitSchema);

module.exports = Nonprofit;
