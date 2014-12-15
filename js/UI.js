


$(document).ready(function() {

  $("#content").load("content/main.html");

  $("#main").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/main.html");
  });

  $("#blog").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/blog.html");
  });


});