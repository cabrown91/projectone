var db = require('../models'),
  User = db.User,
  Nonprofit = db.Nonprofit;

// GET /api/projects
function index(req, res) {
  Nonprofit.find(function(err, projects) {
    if (err) {return console.log("projects error: " + err); }
        res.json(projects);
     });
  // FILL ME IN !
}


function create(req, res) {
 // create new post with form data (`req.body`)
 var newNonprofit = new Nonprofit(req.body);
console.log(newNonprofit);
//  // save new post in db
 newNonprofit.save(function (err, savedNonprofit) {
   if (err) {
     res.status(500).json({ error: err.message });
   } else {
     res.json(savedNonprofit);
   }
 });
}




module.exports.index = index;
module.exports.create = create;
