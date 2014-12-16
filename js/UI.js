

$(document).ready(function() {

  $("#content").load("content/main.html");


  $(".nav-link").on("click", function() {
  	switchContent($(this).attr("id"));  	
  });


});



function switchContent(content) {
	$("#content").empty();
	$("#content").load("content/" + content + ".html");
}