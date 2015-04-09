#Word Virus - a creative writing tool

Notepad with text randomization and generation tools

[[don't forget: underscore.js and underscore.string will likely be very helpful with many of the features]]

!!NEW IDEAS: make words draggable so user can rearrange at will, have option to have multiple textareas open to work seperately

###First build basic browser notepad itself, keep it simple to start:
* file menu - done for now: to keep it simple just using localstorage and saving only one at a time for now
* help menu (how to do things, about the program's intentions, about me and links, etc.)


###other features to add to notepad:
* share to facebook (and other places?  google+ etc)
* spellcheck/dictionary implementation
* font/display options?
* like a real app, should eventually have multiple ways to do things:  menu trees, quick icons, keyboard shortcuts, rightbutton context menu
* definitely will need to be able to do below features on just selected text as well as whole text (basics implemented)


###special modes:
* no backspace/delete  (can still edit with mouse and Ctrl+ shortcuts...is this ok or disable these too somehow?)


###transformation tools: (some of these, in effect at least, are likely pretty redundant)
* similar jumble replace - all words jumbled, use spellcheck to find closest word
* anagram replace - all words jumbled into anagrams when possible
* shift - replace all words with next/previous word in dictionary
* rhyme replace - use rhyme dictionary to replace words with rhyming words
* parts of speech replace? - tag words as nouns, verbs, etc. and replace by type (will have to keep this fairly simple...have seperate dictionaries of common nouns, verbs, etc.)
* randomly add to file from given list of words/randomly replace a certain % of words
* reorganize based on word/letter/sentence statistics?
* [NEXT]translate to other language(s) then back to english (find API to do this)
* interpolate - combine 2 of users files (alternating or randomly -- by word/sentence/paragraph)


###text generation tools:
* generate completely random text (letter by letter, so it's gibberish) THEN use spell check
* [NEXT]randomly scrub wikipedia, paste together random sentences from entries (other websites to use too??) (html strip function in underscore string)
* typical random word/sentence/paragraph generator
* ??figure out ways to generate text from non-text sources (sound files, pictures, etc) -- use from users local or from online API?


##other notes
* see wikipedia page for lots of things to try!!!
* [[other features that use other APIs?]]]





