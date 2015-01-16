

$(document).ready(function() {

  //initial loading of main content section
  $("#content").load("content/main.html");


  //loads whatever is clicked on
  $(".nav-link").on("click", function() {
  	switchContent($(this).attr("id"));  	
  });


  //show certificate
  $("#content").on("click", "li a", function() {
    $(this).show();
  });
  //hide cert
  $("object").on("click", function() {
    $(this).hide();
  });


  //start slime animation
  var animation = 
    $("#slimer").on("click", function() {
      $("#canvas").show();
      return window.requestAnimationFrame(loop);
    });
  //stop slime animation
  $("#canvas").on("click", function() {
    $(this).hide();
    $("script").last().remove();
    window.cancelAnimationFrame(animation);
  });



});






function switchContent(pageContent) {
	var context = $("#content");
	context.empty();
	context.load("content/" + pageContent + ".html");
}
