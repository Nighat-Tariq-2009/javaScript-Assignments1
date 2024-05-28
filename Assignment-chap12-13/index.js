// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// var character = prompt("Please enter your character to check whether the given input is a number, uppercase letter or lower case letter")
// var value = character;
// // checking for numbers
// if(value >= 48 && value <= 57){
//   alert(character + " is number");
// } 
// // checking for uppercase letters
// else if(value >= 65 && value <= 90){
//   alert(character + " is uppercase Letter");
// } 
// // checking for lowercase Letter
// else if(value >= 97 && value <= 122){
//   alert(character + " is Lowercase Letter");
// } 
// else{
//   alert("Given input is not a number or letter");
// }
// -----------------------------------------------


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integer1 = prompt("Enter any first integer");
// var integer2 = prompt("Enter any second integer");

// if(integer1 > integer2){
//   alert("The larger number is: " + integer1);
// }
// else if(integer2 > integer1){
//   alert("The larger number is: " + integer2)
// }
// else{
//   alert("The two number is equal");
// }

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// var num = prompt("Enter the number to check whether positive, negative or zero");
// if(num>0){
//   alert(num +" is positive")
// }
// else if(num<0){
//   alert(num +" is negative");
// }
// else{
//   alert(num +" is zero")
// }


// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise

//  var character = prompt("Enter the character to check vowel or not")
//  if(character === "a"|| character=== "A" || character === "e" || character === "E" || character === "i"|| character=== "I" || character === "o" || character === "O" || character === "u"|| character=== "U"){
//   alert(character + " is vowel");
//  }
//  else{
//   alert(character + " is not vowel");
//  }



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

// // Store the correct password in a variable
//  var coreectPassward = "nighat321";
// // Ask the user to enter their password
//  var userPassward = prompt("Enter your passward");

// // Check if the user has entered a password
//  if(userPassward === ""){
//    alert("Please enter your passward");
// }

//  else  if(userPassward === coreectPassward){
//     alert("Correct! The password you entered matches the original password.")
//    }
//    else{
//      alert("Incorrect password")
//    }
 







// 6. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  }


// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     console.log(greeting);
// } else {
//     greeting = "Good evening";
//     console.log(greeting);
// }





// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

// var time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):");

// // Check different cases using if, else if, and else statements
// if (time >= 0 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//    alert("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//    alert("Good night!");
// } else {
//    alert("Invalid time entered.");
// }