$(document).ready(function() {

  $('#new_blog').on('submit', function(event) {
    event.preventDefault();
    
    $.ajax({
      type: 'post',
      url: this.action,
      data: $(this).serialize(),
      success: function(data) {
        alert("The new Blog was succesfully created!");
      }
    });

  });

})