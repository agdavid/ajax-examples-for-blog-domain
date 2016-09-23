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
            for (var i = 0; i < data.length; i++) {
              var comment = new Comment(data[i].id, data[i].author, data[i].content, data[i].blog_id);
              
            }
          }
        });
      };

      function Comment(id, author, content, blog_id) {
        this.id = id,
        this.author = author,
        this.content = content,
        this.blog_id = blog_id
      };

  });

})
