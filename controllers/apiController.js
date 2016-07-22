function index(req, res) {
  res.json({
    message: "Welcome to nonprofit crowdfunding app!",
    documentation_url: "https://github.com/cabrown91/projectone/blob/master/README.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
