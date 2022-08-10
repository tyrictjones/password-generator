// Assignment code here
var generatePassword = function () {
var passwordLength = window.prompt("Enter a password length.");
if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
  window.alert("Password must be between 8 and 128 characters. Try again!");
  //call function again
};
console.log("Password length: " + passwordLength);
var includeLowercase = window.confirm("Include lowercase letters?");
console.log("lowercase " + includeLowercase);
var includeUppercase = window.confirm("Include uppercase letters?");
console.log("uppercase " + includeUppercase);
var includeNumbers = window.confirm("Include numbers?");
console.log("numbers " + includeNumbers);
var includeSpecial = window.confirm("Include special characters?");
console.log("special " + includeSpecial);

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "\"", "#", "$", "%", "\&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "\\", "^", "_", "`", "{", "}", "~"];

var fullSet = [];
if (includeLowercase) {
  fullSet = fullSet.concat(lowercase);
};
if (includeUppercase) {
  fullSet = fullSet.concat(uppercase);
};
if (includeNumbers) {
  fullSet = fullSet.concat(numbers);
};
if (includeSpecial) {
  fullSet = fullSet.concat(special);
};
console.log(fullSet);

newPassword = "";

for (i = 0; i <= passwordLength; i++) {
  getRandomIndex = Math.floor(Math.random() * fullSet.length);
  getNextCharacter = fullSet[getRandomIndex];
  newPassword = newPassword + getNextCharacter;
};
console.log(newPassword);
return newPassword;
};//end of generate password function




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
