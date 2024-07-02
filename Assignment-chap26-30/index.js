// Task No.1
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = 3.45214
// document.write('number : ' + num + "</br>")
// document.write('round off value : ' + Math.round(num) + "</br>");
// document.write('floor value : ' + Math.floor(num) + "</br>");
// document.write('ceil value : ' + Math.ceil(num) + "</br>");

// Task No.2
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = -2.673
// document.write('number : ' + num + "</br>")
// document.write('round off value : ' + Math.round(num) + "</br>");
// document.write('floor value : ' + Math.floor(num) + "</br>");
// document.write('ceil value : ' + Math.ceil(num) + "</br>");


// Task No.3
// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num1 = -4;
// document.write("Absolute value of -4 is " + Math.abs(num1) + "</br>")

// var num2 = 5;
// document.write("Absolute value of 5 is " + Math.abs(num2))

//Task No.4 
// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var dice = Math.ceil(Math.random()*6);
// document.write("random dice value : " + dice + "</br>");
// var dice2 = Math.ceil(Math.random()*6);
// document.write("random dice value : " + dice2 + "</br>");

//Task No.5
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coinToss = Math.ceil(Math.random()*2)

// if(coinToss ==2){
//   document.write("random coin value : Heads ")
// }
// else{
//   document.write("random coin value : Tails ") 
// }

 //Task No.6
// 6. Write a program that shows a random number between 1 
// and 100 in your browser.


// var randomNumber = Math.floor(Math.random()*100);
// document.write("random number between 1 and 100 : " + randomNumber)

//Task No.7
// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var userWeight = parseInt(prompt("Enter your weight in kilograms"));
// document.write("The weight of user is " + userWeight + "kilograms");


// Task No.8
// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var userNum =parseInt( prompt("Enter a number 1 to 10"));
// var randomNumSecretNum = Math.ceil(Math.random()*10);

// if( userNum === randomNumSecretNum){
// document.write(" congratulate!!!")
// }
// else{
//   document.write("Try again!")
// }

