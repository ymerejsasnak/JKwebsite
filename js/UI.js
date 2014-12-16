

$(document).ready(function() {

  //initial loading of main content section
  $("#content").load("content/main.html", function() {
    var text = $("#content p").text();
  	$("#content p").html(textEffects(text));
  });


  //loads whatever is clicked on
  $(".nav-link").on("click", function() {
  	switchContent($(this).attr("id"));  	
  });


});



function switchContent(pageContent) {
	var context = $("#content");
	context.empty();
	context.load("content/" + pageContent + ".html", function() {
		var text = $("#content p").text();  //will need to handle multiple p tags eventually
	  $("#content p").html(textEffects(text));
	});
}




function textEffects(text) {
	var symbols = ["!", "=", ".", "'"];
	var words = text.split(" ");
	words.forEach(function(word, index) {
    if (Math.floor(Math.random() * 5) === 0) { //how often a word is affected

    	switch(Math.floor(Math.random() * 4)) { 

        case 0:
          words[index] = "<span class='tilt-left'>" + word + "</span>"
          break;
        case 1:
          words[index] = "<span class='tilt-right'>" + word + "</span>" //MAKE THESE ROTATE BY RANDOM AMOUNT!!!
          break;
        case 2:
        case 3:
          words[index] = "<sub>" + word + "</sub>";
          break;
          
	    } 
	    

	  }

	});

	return words.join(" "); 
}