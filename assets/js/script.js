// Assignment code here

//Generate password function
var generatePassword = function () {

    //Prompt user to enter a password length
    var passwordLength = getPasswordLength();

    //Prompt user to choose which characters to include
    var fullSet = getFullSet();

    //Start with a blank string and use math.random() to add a character from the full set to the end of the string
    //Cycle through the loop based on the password length the user chose
    newPassword = "";

    for (i = 0; i < passwordLength; i++) {
      getRandomIndex = Math.floor(Math.random() * fullSet.length);
      getNextCharacter = fullSet[getRandomIndex];
      newPassword = newPassword + getNextCharacter;
    };
    return newPassword;
};//end of generate password function



//function to get password length from user
var getPasswordLength = function() {
    length = window.prompt("Choose a length for your password.");

    //If user does not enter a password length, prompt user to try again
    if (!length) {
      while(!length) {
        window.alert("You must enter a length for your password.");
        length = window.prompt("Choose a length for your password.");
      }
    }

    //If length is not 8-128, prompt user to try again
    if (length < 8 || length > 128) {
      while(length < 8 || length > 128) {
        window.alert("Your password must be between 8 and 128 characters.");
        length = window.prompt("Choose a length for your password.");
      }
    }

    return length;
}; //end of function get password length



//Function to compile a set of all the characters the user wants to include
var getFullSet = function() {
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
    
    //Set of arrays to combine based on which character types the user selects
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var special = ["!", "\"", "#", "$", "%", "\&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "\\", "^", "_", "{", "}", "~"];

    //Use boolean values of user selections to combine arrays into a full set
    var full = [];
    if (includeLowercase) {
      full = full.concat(lowercase);
    };
    if (includeUppercase) {
      full = full.concat(uppercase);
    };
    if (includeNumbers) {
      full = full.concat(numbers);
    };
    if (includeSpecial) {
      full = full.concat(special);
    };

    return full;
};// end of fuction to get full set of possible characters



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
