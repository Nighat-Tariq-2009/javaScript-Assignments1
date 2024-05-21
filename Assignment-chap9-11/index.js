// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var city = prompt("In which city do you liv?");
// var myCity = "Karachi";
// if(city === myCity){
// alert("“Welcome to city of lights”");
// }
// else{
//   alert("Please insert required city");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("What's your gender?");

// if(gender === "male"){
//   alert("Good Morning Sir");
  
// }
// else if(gender === "female"){
//   alert("Good Morning Ma’am");
// }
// else{
//  alert(" please enter the valid gender");
// }



// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var signalColor = prompt("color of road traffic signal");

// if(signalColor === "red"){
//   alert("Must stop"  + "<br>");
// }
// else if(signalColor === "yellow"){
//   alert("Ready to move"  + "<br>");
// }
// else if(signalColor === "green"){
//   alert("Move now"  + "<br>");
// }
// else{
//   alert("invalid color name"  + "<br>");
// }



// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

// var carFuel = prompt("Enter remaining fuel in car");
// if(carFuel<0.25){
//   alert("“Please refill the fuel in your car”");
// }
// else{
//   alert("It's enough");
// }



// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
  //  var a = 4;
  //  if (++a === 5){
  //  alert("given condition for variable a is true");
  //  }else{
  //   alert("given condition for variable a is false");
  //  }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

  //  var b = 82;
  //  if (b++ === 83){
  //  alert("given second condition for variable b is true");
  //  }
  //  else{
  //   alert("given second condition for variable a is false");
  //  }
  //   the alert will not be shown because b is initially 82,
  //   and b++ evaluates to 82 before b is incremented to 83. The condition 
  //   82 === 83 is false, so the code inside the if block does not run.
  // if (b++ === 83){
  //   alert("given second condition for variable b is true");
  //   }

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var c = 12;
//   if (c++ === 13){
//   alert("condition 1 is true");
//    }
   // the alert will not be shown because b is initially 12,
   //   and c++ evaluates to 12 before c is incremented to 13. The condition 
   //   12 === 13 is false, so the code inside the if block does not run.
  //  if (c === 13){
  //    alert("condition 2 is true");
    // }
    // Now this is become true
    // if (++c < 14){
    //    alert("condition 3 is true");
    //    }
      // the alert will not be shown because this is post increment and value of c become 
      // 14 so this is false
      // if(c === 14){
      //    alert("condition 4 is true");
      //    }
         // Now this is become true




// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
//  }

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
  //  if (true){
  //  alert("True he");
  //  }
  //  if (false){
  //  alert("False he");
  //  }
  //  because true is truthy value while false is falsy value


// f. if("car" < "cat"){
//   alert("car is smaller than cat");
//   }

  // if("car" < "cat"){
  //  alert("car is smaller than cat");
  //  }
  //  the condition "car" < "cat" is true because the character 'r' in "car" has a lower
  //   Unicode value than the character 't' in "cat". Therefore, the alert will be shown.


//   6. Write a program to take input the marks obtained in three
//   subjects & total marks. Compute & show the resulting
//   percentage on your page. Take percentage & compute 
//   grade as per following table:
//   Show the total marks, marks obtained, percentage, grade &
//   remarks like:

// var obtainedMarks = +prompt("Enter marks obtained in three subject");
// var totalMarks =+prompt("Enter total marks");
// var percentage = (obtainedMarks/ totalMarks)*100

// document.write("Marks obtained: "+ obtainedMarks + "<br>");
// document.write( "Total Marks:"  + totalMarks +"<br>");
// document.write("Percentage: " + percentage + "<br>");

// if( percentage>=80 && percentage<101 ){
//   document.write("Grade: A-one" + "<br>"+" Remarks: Excellent")
// }
// else if(percentage >=70 &&  percentage<80){
//   document.write("Grade: A" + "<br>"+" Remarks: Good")
// }
// else if( percentage >=60 &&  percentage<70){
//   document.write("Grade: B" + "<br>"+" Remarks: You need to improve")
// }
// else if(percentage <= 60){
//   document.write("Fail" + "<br>"+" Remarks: Sorry")
// }
// else{
//   document.write("Enter the correct marks")
// }


//   7. Guess game:
//   Store a secret number (ranging from 1 to 10) in a variable.
//   Prompt user to guess the secret number.
//   a. If user guesses the same number, show “Bingo! Correct
//   answer”.
//   b. If the guessed number +1 is the secret number, show
//   “Close enough to the correct answer”.

  //  var gessNumber = +prompt("Gess anumber");
  //  var secretNumber = 7;
  //  if( gessNumber === secretNumber){
  //   alert("“Bingo! Correct  answer”");
  //  }
  //  else if(gessNumber === ++secretNumber){
  //   alert("“Close enough to the correct answer”");
  //  }
  //  else{
  //   alert("Enter correct number");
  //  }


//   8. Write a program to check whether the given number is
//   divisible by 3. Show the message to the user if the number 
//   is divisible by 3.
// var num = +prompt("Enter any number");
// if(num%3 === 0){
//  alert("This number is divisible by 3");
// }else{
//   alert("This number is not divisible by 3");
// }




//   9. Write a program that checks whether the given input is an
//   even number or an odd number.

// var num3 = +prompt("Enter a number");
// if(num3/2=== 0){
//   alert("This is an even number")
// }else{
//   alert("This is an odd number")
// }



//   10. Write a program that takes temperature as input and 
//   shows a message based on following criteria
//   a. T > 40 then “It is too hot outside.”
//   b. T > 30 then “The Weather today is Normal.”
//   c. T > 20 then “Today’s Weather is cool.”
//   d. T > 10 then “OMG! Today’s weather is so Cool.”

// var T = prompt("Enter temperature of your enviroment");
// if(T > 40){
//   alert("“It is too hot outside.”");
// }
// else if(T > 30){
//   alert(" “The Weather today is Normal.”")
// }
// else if(T > 20){
//   alert("“Today’s Weather is cool.”")
// }
// else if("T > 10"){
//   alert("“OMG! Today’s weather is so Cool.”")
// }
// else{
//   alert("Enter correct tempreture")
// }

//   11. Write a program to create a calculator for +,-,*, / & % 
//   using if statements. Take the following input:
//   a. First number
//   b. Second number
//   c. Operation (+, -, *, /, %)
//   Compute & show the calculated result to use 

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operation = prompt("Enter the operation (+, -, *, /, %)");

// if(operation === "+"){
//   alert(num1+num2);
// }
// else if(operation === "-"){
//   alert( num1-num2);
// }
// else if(operation === "*"){
//   alert( num1 * num2)
// }
// else if(operation === "/"){
//   alert( num1 / num2)
// }
// else if(operation === "%"){
//   alert( num1 % num2)
// }
// else{
//   alert("Please select the correct operator");
// }