$(document).ready(function() {

  $('#new_blog').on('submit', function(event) {
    event.preventDefault();
    alert("We just prevented submission!");
  });

})