$(document).ready(function() {

  $('#new_comment').on('submit', function(event) {
      event.preventDefault();

      var blogID = $("input[name='comment[blog_id]']").val();
      var jsonURL = this.action + '.json';

      $.ajax({
        type: 'POST',
        url: jsonURL,
        data: $(this).serialize(),
        success: getAllComments()
      });

      function getAllComments() {
        $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/blogs/' + blogID + '/comments.json',
          success: function(data) {
            debugger;
          }
        });
      };

  });

})
