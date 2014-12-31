

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
		var text = $("#content p").text();  //will need to handle multiple p tags eventually --use each?
	  $("#content p").html(textEffects(text));
	});
}




function textEffects(text) {
	var symbols = ["!", "=", ".", "'"];
	var words = text.split(" ");
	words.forEach(function(word, index) {
    if (Math.floor(Math.random() * 2) === 0) { //how often a word is affected

    	switch(Math.floor(Math.random() * 2)) { 

        case 0:
          words[index] = "<span class='tilt-left'>" + word + "</span>"
          break;
        case 1:
          words[index] = "<span class='tilt-right'>" + word + "</span>"
          break;
                  
	    } 
	    

	  }

	});

	return words.join(" "); 
}