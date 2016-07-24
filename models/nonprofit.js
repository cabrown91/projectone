var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var NonprofitSchema = new Schema({
  nonprofit_field: String,
  money_needed: Number,
  project_description: String,
  nonprofit_description: String,
  photo: String,
  donation_description: String,
});

NonprofitSchema.plugin(passportLocalMongoose);

var Nonprofit = mongoose.model('Nonprofit', NonprofitSchema);

module.exports = Nonprofit;
