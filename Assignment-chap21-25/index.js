// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
// var userFirstName = prompt("Write your first name");
// var userLastName = prompt("Write your last name");
// var FullName = alert(userFirstName +" "+ userLastName);


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
// document.write("<h1>Task No.2</h1>")
//  var favMobile = prompt("write your favourite mobile phone model");

//  document.write(`My favourite phone is : ${favMobile}  </br>  Length of string is : ${favMobile.length}`)



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// document.write("<h1>Task No.3</h1>")
//  var userNationality = " Pakistani";

// document.write("String :"+ userNationality + "</br>" +  "Index of 'n' : " + userNationality .indexOf ("n"));


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
//  var userGreet = "Hello World";

//  document.write("String : " +userGreet +"</br>" + "Last index of 'l' : " + userGreet.lastIndexOf("l"));




// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.



// 6. Repeat Q1 using string concat() method.


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
// var cityName = "Hyderabad"
// var replaceCity = cityName.replace("Hyder" , "Islam");
// document.write("City : " + cityName + "</br>" +  "After replacement : " +  replaceCity)



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
//  var message = "Ali and Sami are best friends. They play cricket and football together.";
//  var replacemessage = message.replaceAll("and" , "&");
//  document.write(replacemessage)

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.
// var num = "472";
// var num1 = parseInt("472");

// document.write("value : " + num + "</br>" + "type : " + typeof(num) + 
// "</br>" + "value : " + num1 + "</br>" + "type : " + typeof(num1) )


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.
// var input = "peanuts"
// var capital = input.toUpperCase();
// document.write("User input : " + input +"</br>" +  "Upper Case : " + capital );


// 11. Write a program that takes user input. Convert and 
// show the input in title case.
//  var userInput = "javaScript";
//  var titleCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
//  document.write("User input : " + userInput + "</br>" + "Title Case : " +  titleCase)


// 12. Write a program that converts the variable num to 
// string.
// Remove the dot to display “3536” display in your browser.
//  var num = 35.36 ;
//  var numString = num.toString();
//   var numreplaced =  numString.replace('.','');
//   document.write("Number: " + num + "</br>" + "Result: " + numreplaced)




// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let userName = prompt("Enter your Input: ");
// let invalidChars = [33, 44, 46, 64]; 

// for (let i = 0; i < userName.length; i++) {
//   let charCode = userName.charCodeAt(i);
//   if (invalidChars.includes(charCode)) {
//     alert("Please enter a valid username without special characters [@, ., !, ,]");
//     break;
//   }
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

//  var A = ["cake", "apple pie", "cookie","chips", "patties"] ;
//  var userInput = prompt("Welcome to ABC Bakery . What do you want to order sir/ma'am").toLowerCase()
//  var flag = false;
//  var indexNo = 0;

//  for(var i= 0;i<A.length; i++){
//   if(A[i] == userInput){
//     indexNo = i;
//     flag = true;
//     alert(`${userInput} is available at index ${indexNo} in our Bakery`)
//     break;
//   }
// }
//   if(flag == false){
//     alert(`We are sorrry. ${userInput} is not available in our Bakery `)
//   }


// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var universityArr = university.split("");

// for(var i=0 ; i<universityArr.length; i++){
// document.write(universityArr[i] + "<br>")
// }


// 17. Write a program to display the last character of a user 
// input

// var input = "Pakistan";

// var lastCharacter = input[input.length-1];
// document.write(`User input : ${input} </br> Last character : ${lastCharacter}  `)

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// var text = "The quick brown fox jumps over the lazy dog"
// text =text.toLowerCase();

// var count = text.match(/the/g);
// var length = count ? count.length :0;
// document.write(`Text : ${text} <br> There are ${length} occurrence(s)of the word " the "`)

//---------------or----------------------


// let str = "The quick brown fox jumps over the lazy dog";

// // Convert the string to lowercase to ensure case-insensitive matching
// str = str.toLowerCase();

// // Split the string into an array of words
// let words = str.split(" ");

// // Initialize a counter for the occurrences of "the"
// let count = 0;

// // Loop through the array and count occurrences of "the"
// for (let word of words) {
//     if (word === "the") {
//         count++;
//     }
// }

// // Output the count
// console.log("The word 'the' occurs " + count + " times.");