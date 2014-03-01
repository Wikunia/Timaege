/**************************************
 * 
 *   Static methods for generating,
 *   checking and working with
 *   random passwords.
 * 
 *   ------------------------------
 * 
 *   Written by
 *     Konstantin Kobs
 *     starting 2013-12-01
 * 
 * ***********************************/
function Password(){
  
}

// If no length is specified in the generate-function
// then a password with a random length will be generated.
// min and max are integers for the minimum and maximum
// length of this password.
Password.min = 10;
Password.max = 15;

// Possible characters in passwords
Password.chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

/**************************************
 * 
 *   Generates a random password out of
 *   the specified characters
 * 
 *   Example:
 *     alert(Password.generate(30));
 *   for a password with 30 characters
 * 
 *   ---------------------------------
 * 
 *   length : length of the generated password
 * 
 *   Returns a string with the password
 * 
 * ***********************************/
Password.generate = function( length ){
  
  // if no length is set, we will generate a random length
  length = (typeof length === "undefined") ? randInt(Password.min, Password.max) : length;
  
  // at the beginning, our password is empty
  var password = "";
  
  // this will be a random sequence,
  // so every character in our password
  // will be picked individually
  for(var i = 0; i < length; i++){
    
    // generate a random position in our
    // possible character string
    var randomPos = randInt(0, this.chars.length - 1);
    
    // get the char at this position from our
    // possible character string
    var c = this.chars.charAt(randomPos);
    
    // append character to already
    // generated string
    password += c;
  }
  
  // return the password
  return password;
  
};

/**************************************
 * 
 *   Returns a random integer between
 *   min and max
 *   
 *   ---------------------------------
 * 
 *   min : lowest possible integer
 *   max : highest possible integer
 * 
 *   Returns an integer with the random number
 * 
 * ***********************************/
function randInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/********************************************
 * 
 *   checks a password for valid characters
 * 
 *   ---------------------------------------
 * 
 *   pw : the password, which will be checked
 * 
 *   returns true, when the password uses only
 *   specified characters and false if not.
 * 
 * *****************************************/
Password.check = function( pw ){
  
  // for every character in the password
  for(var i = 0; i < pw.length; i++){
    
    // Is the character a possible and valid character?
    var inValid = this.chars.indexOf(pw.charAt(i)) !== -1;
    
    // If not, the password is not valid.
    if(!inValid){
      return false;
    }
    
  }
  
  // If we go through the entire string without
  // returning false, then the password is valid
  return true;
  
};