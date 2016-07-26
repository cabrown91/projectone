var db = require("./models");

var nonprofit_list = [
  {
    nonprofit: "Reading Partners",
    money_needed: 750,
    project_description: "We need money to purchase 150 new books for the student library.",
    nonprofit_description: "Reading Partners mobilizes communities to provide students with the proven, individualized reading support they need to read at grade level by fourth grade.",
    photo: "https://upload.wikimedia.org/wikipedia/en/a/ae/Reading_Partners_logo.jpg",
    donation_description: "A $5 donation purchases 1 new book for the student library.",
  },
  {
    nonprofit: "Feeding America",
    money_needed: 500,
    project_description: "We need money to start a small booth at the farmers market to offer care packages to those in need.",
    nonprofit_description: "Feeding America is a United States-based non-profit organization that is a nationwide network of more than 200 food banks that feed more than 46 million people through food pantries, soup kitchens, shelters, and other community-based agencies.",
    photo: "http://www.feedingamerica.org/assets/images/section-landing-page-boxes/why-feeding-america-440x180.png",
    donation_description: "All of the money donated will be used to pay the booth fees at the farmers market.",
  },
  {
    nonprofit: "Hack the Hood",
    money_needed: 1500,
    project_description: "We need money to invest into mobile devices for our students to learn mobile development technologies.",
    nonprofit_description: "Hack the Hood is an award-winning non-profit that introduces low-income youth of color to careers in tech by hiring and training them to build websites for real small businesses in their own communities. During 6-week Bootcamps, young people gain valuable hands-on experience, build a portfolio, and  learn about opportunities in the tech industry, as well as building critical technical, leadership, entrepreneurship, and life skills with mentorship from staff and tech professionals working in the field.",
    photo: "https://i.ytimg.com/vi/QSG25uYDW9U/maxresdefault.jpg",
    donation_description: "Your donation will be used to purchase 3-5 iPads.",
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
