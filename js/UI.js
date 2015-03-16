

$(document).ready(function() {

  //initial loading of main content section
  $("#content").load("content/apps.html");


  //loads whatever is clicked on
  $(".nav-link").on("click", function() {
  	switchContent($(this).attr("id"));  	
  });


  


  //start slime animation
  $("#slimer").on("click", function() {
    $.getScript("js/slime.js");
  });
  //stop slime animation
  $("#canvas").on("click", function() {
    $(this).hide();
    $("body").remove("script").last();
    window.cancelAnimationFrame(animation);
  });



});






function switchContent(pageContent) {
	var context = $("#content");
	context.empty();
	context.load("content/" + pageContent + ".html");
}
