var disBox = document.querySelector("#displayBox");
var genBtn = document.querySelector("#genBtn");
var copyToBtn = document.querySelector("#copyToBtn");
var sliderEl = document.querySelector("#charLength");
var lengthDisEl = document.querySelector("#lengthDis");
// var charUp = document.querySelector("#charUp");
// var charLow = document.querySelector("#charLow");
// var charSpec = document.querySelector("#charSpec");

function generatePass() {
  // var charSet = "";
  let complexity = sliderEl.value;

  // produces the complexity string from the collected user imputs//
  let values =
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuzwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  // function buildPassword(){
  let password = "";

  //  creates for loop to choose passoword char based on complexity
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  disBox.value = password;
}

genBtn.addEventListener("click", generatePass);
//display length
lengthDisEl.textContent = sliderEl.value;

sliderEl.oninput = function() {
  if (sliderEl.value > 0) {
    lengthDisEl.textContent = sliderEl.value;
  } else {
    lengthDisEl.textContent = "1";
  }
};

// var complexityEl =
//     length: sliderEl,
//     special: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     low: "abcdefghijklmnopqrstuzwzyx";
//     up: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// genBtn.addEventListener("click", function(){

// });

// copyToBtn.addEventListener("click", function copy(){

// });

// //sets the length, up/lower/spceial variables based onuser input//
// let complexity = lengthEL.value

// };

// //tell the user to choose between 8 and 128//
// window.alert()

// // inserts the generated password into the html//
// document.querySelector("#displayBox")innerHTML

// // object of all the complexity types //

// }
// //while loop to add the complexityEl values to = passEl when they are true//
// // create a string that includes the user selected values from the object ComplexityEL//
// while charSpec === true
// if charLow === true
// if charUp === true
// let passEl =

// while

//a "wet" way of codding this would be to write if else statments that guide you to what user inputs have been selected and thus initiating the correct function. This would require coding and recoding all of the possible veriable.. no bueno...//

// this would only be for generating 1 random number between 8 and 128. wrong idea.//
// if
// Math.floor(Math.random() * 128) + 8

// while (lenghtEL > 128 || lenghtEL < 8 || lenghtEL === 0) {
//   lenghtEL = prompt(
//     "How long do you want this password to be? (Must be between 8 and 128 characters)"
//   );
//   lenghtEL = parseInt(lenghtEL, 10);
//   if (lenghtEL <= 128 && lenghtEL >= 8 && lenghtEL !== NaN) {
//     alert("Your password will be " + lenghtEL + " characters long.");
//   } else {
//     alert("Please enter a valid answer.");
//     lenghtEL = 0;
//   }
// }
// // console.log(lengthEL);

// console.log(lengthEL.typeof);

// newpassword.addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log(size);
// });
// console.log(lengthEl);

//   .addEventListener("keydown", function(event) {
//     var key = event.key.toLowerCase();
//     var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(
//       ""
//     );
//     if (alphabetNumericCharacters.includes(key)) {
//       elements.forEach(function(element) {
//         element.textContent += event.key;
//       });
//     }
//   });

// //this will allow me to check the returned inputs//
// if (
//   tagName !== "h1" &&
//   tagName !== "h2" &&
//   tagName !== "p" &&
//   tagName !== "div"
// ) {
//   alert("please enter a valid tag");
// } else {
//   var tag = document.createElement(tagName);
//   tag.textContent = "This was made via prompts. It's a " + tagName;
//   document.body.appendChild(tag);
// }
