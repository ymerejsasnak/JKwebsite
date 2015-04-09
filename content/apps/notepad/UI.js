"use strict";


//useful regexs (these may or may not be perfect...)
var word = (/\S+\s/g);  //matches 1 or more non-space charcters followed by space
var sentence = (/[A-Za-z,;\-'\"\s]+[.?!]/g);  //matches 1+ characters and punct, ends on . or ? or !
var paragraph = (/(\n|^).*?(?=\n|$)/g);  //matches from beginning of string or newline to newline or end of string



$(function() {

  var textarea = $("textarea");
  var nodelete = false;
    

  //autoload saved file if any
  if (localStorage.wordVirusText) {
    textarea.val(localStorage.wordVirusText);
  }

  





  

  //open a menu
	$(".menu-item").on("mouseenter", function() {
		$(this).siblings(".submenu").hide();
		$(this).next().show();
	});

  //close a menu
	$(".submenu").on("mouseleave click", function() {
		$(this).hide();
		textarea.focus();
	});



  //file buttons//

  $("#new").on("click", function() {
    textarea.val("");
    textarea.focus();
  });
	
  $("#open").on("click", function() {
    if (localStorage.wordVirusText) {
    	textarea.val(localStorage.wordVirusText);
    }
    textarea.focus();
  });
	
  $("#save").on("click", function() {
  	localStorage.wordVirusText = textarea.val();
  	textarea.focus();
  });



  //generate//
  $("#wikipedia").on("click", function() {
    getRandomWiki();
  })






  //transform//   

  //basic shuffles (parameters: text itself, regex for match, start and end positions of selection)
  $("#word-shuffle").on("click", function() {
    textarea.val( basicShuffle( textarea.val(), word, textarea[0].selectionStart, textarea[0].selectionEnd));
  });

  $("#sentence-shuffle").on("click", function() {
    textarea.val( basicShuffle( textarea.val(), sentence, textarea[0].selectionStart, textarea[0].selectionEnd )); 
  });

  $("#paragraph-shuffle").on("click", function() {
    textarea.val( basicShuffle( textarea.val(), paragraph, textarea[0].selectionStart, textarea[0].selectionEnd )); 
  });

  //various formatting transformations (these don't work on selections...should I add that to them?)
  $("#remove-punctuation").on("click", function() {
    textarea.val( textarea.val().replace(/[,.\-?!"';:()\/]/g, ""));
  });

  $("#blockify").on("click", function() {
    textarea.val( blockify( textarea.val() ) );
  });

  $("#poemify").on("click", function() {
    textarea.val( poemify( textarea.val() ) );
  });  

  $("#remove-words").on("click", function() {
    textarea.val( removeWords( textarea.val() ) );
  })






  //options//

  //invisible text
  $("#hide-show-text").on("click", function() {
  	textarea.toggleClass("invisible-text");
  })

  //toggle delete/backspace
  $("#nodelete").on("click", function() {
    nodelete = !nodelete;
  })

  //and listen for them to disable if appropriate
  textarea.on('keydown', function() {
  	if (nodelete) {
  		var key = event.keyCode || event.charCode;
      if( key == 8 || key == 46 ) return false;
    }
  });




});




