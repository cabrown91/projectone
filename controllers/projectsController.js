var db = require('../models');

// GET /api/projects
function index(req, res) {
  db.Nonprofit.find(function(err, projects) {
    if (err) {return console.log("projects error: " + err); }
        res.json(projects);
     });
  // FILL ME IN !
}



// function create(req, res) {
//
// }







module.exports.index = index;

// module.exports.create = create;
