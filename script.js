var disBox = document.querySelector("#displayBox");
var genBtn = document.querySelector("#genBtn");
var copyToBtn = document.querySelector("#copyToBtn");
var charLength = 0;
var charUp = 0;
var charLow = 0;
var charSpec = 0;


.addEventListener("keydown", function(event) {
      var key = event.key.toLowerCase();
      var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
      if (alphabetNumericCharacters.includes(key)) {
        elements.forEach(function(element) {
          element.textContent += event.key;
        });
      }
    });
    

