
// Task No. 01
// 1. Write a function that displays current date & time in your 
// browser.
// function currentDateTime(){
//   var today = new Date();

//   document.write(today);
// }
// currentDateTime()



// Task No. 02
// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// function greets(){
//   var firstName = prompt("Enter  your first name");
//   var lastName = prompt("Enter your last Name");
//   document.write(`Hello! ${firstName} ${lastName}`)
// }
// greets()


// Task No. 03
// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.
// function adds(){

// var num1 = +prompt("Enter first number");
// var num2 = +prompt('Enter second number');
// var sum = num1 +num2

// return sum;
// }

// let result = adds();
// document.write("The sum of the two numbers is: " + result);

// Task No. 04
// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function calculator(){
//   var num1 = +prompt("enter the first number");
//   var num2 = +prompt("enter the second number");
//   var operator = prompt("Select any one operator ")
//   var result;
//   if(operator=== "+"){
//     result = num1 + num2
//   }
//   else if(operator=== "-"){
//     result = num1 - num2
//   }
//   else if(operator=== "*"){
//     result = num1 * num2
//   }else if(operator=== "/"){
//    if(num2 !==0){
//     result = num1 / num2
//    }else{
//   result = "Error: Division by zero"
//    }
//   }else{
//    result = "enter avalid operator"
//   }
//   return num1 + operator + num2 + "=" + result
// }
// let result2 = calculator();
// document.write(result2)



// Task No. 5
// 5. Write a function that squares its argument.
// function square(num1){
//  var num = num1 **2
//  return num
// }
// var result = square(8)
// document.write(result)


// Task 6
// 6. Write a function that computes factorial of a number.

// function factorial(){
//   var num1 = +prompt("Enter a number")
//   if(num1<0){
//     alert("Error: Factorial is not defined for negative numbers")
//   }else{
//     var result=1;
//     for(var i=1;i<=num1;i++){
//       result*=i
//     }
//     alert(" The factorial of " +num1 + " is "+ result)
//   }
// }
// factorial()
// result= result* i

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.
// var count =1;
// function displayCounting(){
  
// for(var i=1;i<=10;i++){
//   count+= i
 

// }
// return count;
// }

// function displayCounting(start, end) {
//   var counting = '';
  
//   for (let i = start; i <= end; i++) {
//       counting += i + ' ';
//   }
  
//   document.write(counting);
// }
// displayCounting(1, 10);
// Task 8
// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// Task 9
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(width,height){
// var area= width * height;
// return area
// }
// var result=calculateArea(7,8);
// document.write("Area with values (5, 10) is: " + result + "<br>");

// Task No.10
// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

// function checkPalindrome(){
//  var userWord = prompt("Enter a word");
//  var splittedArr = userWord.split("");
// var reversedArr = splittedArr.reverse();
// var joinedWord = reversedArr.join("")
// //  document.write(joinedWord);
//  if(userWord===joinedWord){
//   alert("Your string is Palindrome")
//  }else{
//   alert("Your string is not Palindrome")
//  }

// }
// checkPalindrome()

// Task 11
// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function upperCaseEachFirstLetter(firstLetter){
//   var word = firstLetter.split(' ')

//  for(var i=0; i<word.length; i++){
//    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
//  }
//   var capatalizeFirstLetter = word.join(" ")
//    return capatalizeFirstLetter;
// }
// var exampleString = upperCaseEachFirstLetter('the quick brown fox');
// document.write(exampleString);



// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord(str){
// var words = str.split(' ');
// var longWord = '';
// for(var i=0; i<words.length;i++){
//   if(words[i].length > longWord.length){
//     longWord = words[i]
 
//   }
 
// }
// return longWord
// }
// var exampleString = 'Web Development Tutorial';
// var result = longestWord(exampleString)

// document.write("Original String: " + exampleString + "<br>");
// document.write("Longest Word: " + result + "<br>");


// Task No.13
// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// function occurrencesOfLetter(str,letter){
// var count= 0;
// for(var i=0; i<str.length; i++){
//   if(str.charAt(i)===letter){
//     count++;
//   }
// }
//   return count;

// }
// var exampleString = 'JSResourceS.com';
// var letter = "o";
// var result = occurrencesOfLetter(exampleString,letter);
// document.write('original  string: ' + exampleString + '</br>');
// document.write('Letter to count: ' + letter + '<br>');
// document.write('Number of occurences: ' + result +"</br>")

// Task No.
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2π

function calcCircumference(radius){
var circumference = 2*3.142*radius;
return circumference;
}
function calcArea(){
  var area = 3.142 * (radius*radius);
  return area;
}
var radius=+prompt('Enter radius of circle ');
var circumference=calcCircumference(radius);
var area=calcArea(radius);
document.write('The Circumference of circle is '+circumference+'<br>')
document.write('The Area of circle is '+area+'<br>')
