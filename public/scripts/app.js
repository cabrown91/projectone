var template;
$(document).ready(function() {
  console.log('app.js loaded!');

  var baseUrl = '/api/projects';

  var allProjects = [];

  var $projectsList = $('#projects-list');

  var $createProject = $('#create-project');

  // compile handlebars template
  var source = $('#projects-template').html();
  template = Handlebars.compile(source);

  var render = function(allProjects) {

    $projectsList.empty();

    var projectsHtml = template({ projects: allProjects });

    $projectsList.append(projectsHtml);
  };

  $.get(baseUrl, function (data) {

    allProjects = data;
    console.log(allProjects);

    render(allProjects);

  });

  $createProject.on('submit', function (event) {
  event.preventDefault();

  // serialze form data
  var newproject = $(this).serialize();
  console.log(newproject);
  // POST request to create new post
  $.post(baseUrl, newproject, function (data) {
    console.log(data);

    // add new post to `allPosts`
    allProjects.push(data);

    // render all posts to view
    render(allProjects);
  });

  // reset the form
  $createProject[0].reset();
  $createProject.find('input').first().focus();
});

});
