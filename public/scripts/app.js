$(document).ready(function() {
  console.log('app.js loaded!');
  // $.get('/api/projects').success(function(nonprofit) {
  //   nonprofitList.forEach(function (event) {
  //     renderNonprofit(event);
  //   });
  //
  //   $('#create-project').on('submit', function (event){
  //     event.preventDefault();
  //     var serializeddata = $(this).serialize();
  //     console.log(serializeddata);
  //     $.post('/api/projects', serializeddata, function(project) {
  //     console.log('project after POST', project);
  //     renderProject(project);
  //   });
  //   $(this).trigger("reset");
  // });

  // base API route
var baseUrl = '/api/projects';

// array to hold post data from API
var allProjects = [];

// element to display list of posts
var $projectsList = $('#projects-list');

// form to create new post
var $createproject = $('#create-project');

// compile handlebars template
var source = $('#projects-template').html();
var template = Handlebars.compile(source);

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
var render = function() {
  // empty existing posts from view
  $projectsList.empty();

  // pass `allPosts` into the template function
  var projectsHtml = template({ projects: allProjects });

  // append html to the view
  $projectsList.append(projectsHtml);
};

// GET all posts on page load
$.get(baseUrl, function (data) {
  console.log(data);

  // set `allPosts` to post data from API
  allProjects = data.projects;

  // render all posts to view
  render();
});

});
