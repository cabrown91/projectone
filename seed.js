var db = require("./models");

var nonprofit_list = [
  {
    nonprofit_field: "Code For America",
    money_needed: 500,
    project_description: "We need money!",
    nonprofit_description: "We're a nonprofit",
    photo: "https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png",
    donation_description: "Decription here...",
  },
  {
    nonprofit_field: "Code For America",
    money_needed: 500,
    project_description: "We need money!",
    nonprofit_description: "We're a nonprofit",
    photo: "https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png",
    donation_description: "Decription here...",
  },
  {
    nonprofit_field: "Code For America",
    money_needed: 500,
    project_description: "We need money!",
    nonprofit_description: "We're a nonprofit",
    photo: "https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png",
    donation_description: "Decription here...",
  }
];

// remove all records that match {} -- which means remove ALL records
db.Nonprofit.remove({}, function(err, nonprofits){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all nonprofits');

    // create new records based on the array nonprofits_list
    db.Nonprofit.create(nonprofit_list, function(err, projects){
      if (err) { return console.log('err', err); }
      console.log("created", projects.length, "projects");
      // process.exit();
    });
  }
});
