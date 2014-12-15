

$(document).ready(function() {

  $("#content").load("content/main.html");


//make this one generic function that handles them all
  $("#main").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/main.html");
  });

  $("#blog").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/blog.html");
  });

  $("#apps").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/apps.html");
  });

  $("#music").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/music.html");
  });

  $("#stories").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/stories.html");
  });

  $("#bio").on("click", function() {
  	$("#content").empty();
  	$("#content").load("content/bio.html");
  });


});


//down here
function switchContent() {

}