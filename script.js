// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Array 
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "="];
var numeric = ["0", "1", "3", "2", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Lower Case to Upper Case Array
var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

// Console Log Lower Case to Upper Case
for ( var i = 0; i < upperCase.length; i++) {
  console.log(" " + upperCase[i] );
}

// 