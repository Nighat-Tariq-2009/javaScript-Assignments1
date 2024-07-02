// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var emptyArr = [[],[],[]]


// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var matrix = [[0,1, 2,3], [1, 0, 1,2],[2, 1,0,1]];
// for(var i = 0; i<matrix.length; i++){
//   for(var j= 0; j<matrix[i].length;j++){
//     document.write(matrix[i][j] + " ")
//   }
//   document.write("<br/>")
// }

// 3. Write a program to print numeric counting from 1 to 10.

// for(var i=1; i<=10; i++){
//   document.write(i + "<br>")
// }

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// var userNum = prompt("Enter a number to show its multiplication table");
// var tableLength = prompt("Enter length multiplication table")

// for(var i =1; i<=tableLength; i++){
//   document.write(`${userNum} X ${i} = ${userNum* i} <br> `)
// }


// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

 var  fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 for(var i =0; i<fruits.length; i++){
  
  // for(var j=0; j<fruits[i].length; j++){
  //   document.write(fruits[i][j] )
  //   }
  // document.write(fruits[i])
  // document.write("<br>")
 }

 var  indexNo = 0;
 for(var i =0; i<fruits.length; i++){
  indexNo = i;
  document.write("Element at index " + indexNo +" is " + fruits[i] + "<br>")
 }

 

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h3>Counting:" +"<br></h3>")
// for(var i = 1; i<=15; i++){
  
//   document.write( i + ", ")
// }
// document.write("<br>");
// document.write("<br>")
// document.write("<h3>Reverse Counting:" +"<br></h3>")
//  for(var i = 10; i>=1; i--){
  
//    document.write( i + " ,")
//  }
// document.write("<br>");
// document.write("<br>")
// document.write("<h3>Even:" +"<br></h3>")
// for(var i = 0; i<=20; i++){
//   if(i%2 == 0){
//     document.write( i + " ,")
//   }
// }
// document.write("<br>");
// document.write("<br>")
// document.write("<h3>Odd:" +"<br></h3>")
// for(var i = 0; i<=20; i++){
//   if(i%2 !== 0){
//     document.write( i + ", ")
//   }
// }
// document.write("<br>");
// document.write("<br>")
// document.write("<h3>Series:" +"<br></h3>")
// for(var i = 0; i<=20; i++){
//   if(i%2 == 0){
//     document.write( i + "k, ")
//   }
// }




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var  A = ["cake", "apple pie", "cookie", "chips", 'patties'];
// var userInput = prompt("Welcome to ABC Bakery. What do want to order sir/ ma'am?");
// var flag = false;
// var indexNo = 0;
// for(var i = 0; i< A.length;i++){
//   if(  A[i] == userInput){
//   indexNo = i ;
//   flag = true;
//    alert(userInput + " is available at index " + indexNo + " in our bakery ")
//     break;
//   }
// }
// if(flag == false){
//   alert("We are sorry." + userInput + " is not available in our bakery");
// }



// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].
// var A = [24, 53, 78, 91, 12]
// var largestNum = A[0];
// for(var i=0; i<A.length; i++){
//   if(A[i]>largestNum){
//     largestNum = A[i]
//   }
// }
// document.write("Array items: 24, 53, 78, 91, 12 <br>");
// document.write("The largest number is "+ largestNum);

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
// var A = [24, 53, 78, 91, 12]
// var smallestNum = A[0];
// for(var i=0; i<A.length; i++){
//   if(A[i]<smallestNum){
//     smallestNum = A[i]
//   }
// }
// document.write("Array items: 24, 53, 78, 91, 12 <br>");
// document.write("The smallest number is "+ smallestNum);

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.
// var multiples = 5;
// for( var i= 1; i<=20; i++){
//   document.write(multiples * i + " ,")
// }
