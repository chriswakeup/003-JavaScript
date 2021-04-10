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
// for ( var i = 0; i < upperCase.length; i++) {
//   console.log(" " + upperCase[i] );
// }
console.log("--------------------------------");

// Password length 
console.log(specialChar.length);
console.log(numeric.length);
console.log(lowerCase.length);
console.log(upperCase);




// Function 
function generatePassword() {
  // passwordText.value = password;
  var password = "";
  var passLength = window.prompt("How long is the password ( 8 - 128 ): \n")
  
  // Password Length Validation
  if (passLength < 8 || passLength > 128) {
    window.alert("Password is invalid. Please select number range from ( 8 - 128 ): \n");
    return;
  }
  
var LCResponse = window.confirm("Do you accept that this password will have a LOWERCASE?");
console.log(LCResponse);
if ( LCResponse == false ) {
return;
}
  
var UCResponse = window.confirm("Do you accept that this password will have a UPPERCASE?");    
if ( UCResponse == false ){
return;
}

var NUMResponse = window.confirm("Do you accept that this password will have a NUMBERS?");
if ( NUMResponse == false ) {
  return;
}


var SCResponse = window.confirm("Do you accept that this password will have a Special Character?");
if ( SCResponse == false ) {
  return;
}


for ( var i = 0; i <= passLength; i++) {
  password += upperCase[Math.floor(Math.random() * upperCase.length)]; 
  i++;
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  i++;
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  i++;
  password += numeric[Math.floor(Math.random() * numeric.length)];
  i++
  password += numeric[Math.floor(Math.random() * numeric.length)];
  i++;
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  i++;  
  console.log(password);

}

return(password); 
} 
