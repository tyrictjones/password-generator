// Assignment code here

//Generate password function
var generatePassword = function () {

  //Prompt user to enter a password length  
  var passwordLength = window.prompt("Enter a password length.");

  //If user does not enter a password length, prompt user to try again
  if (!passwordLength) {
    while(!passwordLength) {
      window.alert("You must enter a length for your password.");
      passwordLength = window.prompt("Enter a password length.");
    }
  }

  //If length is not 8-128 characters or left blank, prompt user to try again
  if (passwordLength < 8 || passwordLength > 128) {
    while(passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password must be between 8 and 128 characters.");
      passwordLength = window.prompt("Enter a password length.");
    }
  }

  //Prompt user to choose which characters to include
  //Use while-loop to repeat until at least one of the variables is true (user selects at least one type)
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumbers = false;
  var includeSpecial = false;
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    var includeLowercase = window.confirm("Include lowercase letters?");
    var includeUppercase = window.confirm("Include uppercase letters?");
    var includeNumbers = window.confirm("Include numbers?");
    var includeSpecial = window.confirm("Include special characters?");
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
      window.alert("You must select at least 1 character type.");
    }
  }
  
  //Base set of arrays to combine based on which character types the user selects
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "\"", "#", "$", "%", "\&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "\\", "^", "_", "`", "{", "}", "~"];

  //Use boolean values of user selections to combine arrays into a full set
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

  //Start with a blank string and use math.random() to add a character from the full set to the end of the string
  //Cycle through the loop based on the password length the user chose
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
