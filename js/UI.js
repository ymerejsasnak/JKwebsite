

$(document).ready(function() {

  //initial loading of main content section
  $("#content").load("content/main.html");


  //loads whatever is clicked on
  $(".nav-link").on("click", function() {
  	switchContent($(this).attr("id"));  	
  });


});






function switchContent(pageContent) {
	var context = $("#content");
	context.empty();
	context.load("content/" + pageContent + ".html");
}
