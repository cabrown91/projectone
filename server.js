// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    controllers = require('./controllers');

    //  NEW ADDITIONS
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for auth
app.use(cookieParser());
app.use(session({
  secret: 'supersecretkey', // change this!
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// require Post and User models
var db = require("./models"),
      User = db.User;

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);





// AUTH ROUTES

// show signup view
app.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/views/signup.html');
});

// sign up new user, then log them in
// hashes and salts password, saves new user to db
app.post('/signup', function (req, res) {
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send('signed up!!!');
      });
    }
  );
});

// show login view
app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/views/login.html');
});

// log in user
app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(req.user);
  res.redirect('/'); // preferred!
});

app.get('/logout', function (req, res) {
  console.log("BEFORE logout", JSON.stringify(req.user));
  req.logout();
  console.log("AFTER logout", JSON.stringify(req.user));
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
