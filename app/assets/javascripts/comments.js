$(document).ready(function() {

  var commentsHTML = "<ol>";

  $('#new_comment').on('submit', function(event) {
      event.preventDefault();

      var blogID = $("input[name='comment[blog_id]']").val();
      var jsonURL = this.action + '.json';

      $.ajax({
        type: 'POST',
        url: jsonURL,
        data: $(this).serialize(),
        success: function(data) {
          alert("Comment successfully added!");
          $('input[name="comment[author]"]').val('');
          $('input[name="comment[content]"]').val('');
          getAllComments()
        }
      });
  });

  $('#show_comments').on('click', getAllComments());

  function getAllComments() {
    var blogID = $('input[name="comment[blog_id]"]').val();
    
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/blogs/' + blogID + '/comments.json',
      success: function(data) {
        for (var i = 0; i < data.length; i++) {
          var comment = new Comment(data[i].id, data[i].author, data[i].content, data[i].blog_id);
          comment.displayComment();             
        }
        commentsHTML = commentsHTML.concat("</ol>");
        $('#comments_area').html(commentsHTML);
      }
    });
  };

  function Comment(id, author, content, blog_id) {
    this.id = id,
    this.author = author,
    this.content = content,
    this.blog_id = blog_id
  };

  Comment.prototype.displayComment = function() {
    commentsHTML = commentsHTML.concat("<li>" + this.author + " said: " + this.content + "</li>")
  };

})
