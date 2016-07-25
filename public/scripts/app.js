$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/projects').success(function(projects) {
    projects.forEach(function (projects) {
    $("#projects-list").append(projects.nonprofit_field);
    });

    $('#create-project').on('submit', function (event){
      event.preventDefault();
      var serializeddata = $(this).serialize();
      console.log(serializeddata);
      $.post('/api/projects', serializeddata, function(project) {
      console.log('project after POST', project);
      renderProject(project);
    });
    $(this).trigger("reset");
  });
});
});
