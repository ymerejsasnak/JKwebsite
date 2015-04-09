"use strict";

function basicShuffle(text, element, begin, end) {
  var beginText = "", selectedText = text, endText = "";
  if (begin !== end) {
    beginText = text.substring(0, begin);
    selectedText = text.substring(begin, end); 
    endText = text.substring(end);
  }
  selectedText = selectedText.match(element); 
  selectedText = _.shuffle(selectedText);
  return beginText + selectedText.join("") + endText;
}



function blockify(text) {
  return text.replace(/\s+/g, " ");
}


function poemify(text) {
  var poem = "";
  text = blockify(text);
  text = text.match(word);
  for (var i = 0, len = text.length; i < len; i += 2) {
    poem = poem + [ text[i], text[i + 1] ].join(" "); //put new text together word by word
    if ( (i + 2) % 8 === 0 ) {
      poem = poem + "\n";  //add newline every 8 words
    }
  }
  return poem.replace(/ +/g, " "); //cut out extra spaces before returning
}




function removeWords(text) {
  text = text.match(word);
  text = _.filter(text, function(thisWord) { 
    var tenPercent = Math.floor(Math.random() * 10);
    return tenPercent > 0;
  });
  return text.join("");
}









