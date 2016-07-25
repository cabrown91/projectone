function index(req, res) {
  res.json({
    message: "Welcome to nonprofit crowdfunding app!",
    documentation_url: "https://github.com/cabrown91/projectone/blob/master/README.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "POST", path: "/api/signup", description: "Sign up page"},
      {method: "POST", path: "/api/login", description: "Log in page"},
      {method: "GET", path: "/api/logout", description: "Log out page"},
      {method: "POST", path: "/api/projects", description: "Nonprofit projects created"}
    ]
  });
}

module.exports.index = index;
