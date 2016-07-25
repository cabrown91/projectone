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

});
