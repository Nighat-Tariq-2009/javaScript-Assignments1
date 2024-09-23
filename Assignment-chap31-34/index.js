// Task No.1
// 1. Write a program that displays current date and time in 
// your browser.

// var today = new Date();
// document.write(today)

// Task No.2
// 2. Write a program that alerts the current month in words. 
// For example December.


//  var monthName = ["January", "February","March","April","May","June","July",
//               "August","September","October","November","December"]
//  var today = new Date();
//  var currentMonth = today.getMonth();
//  var nameOfMonth = monthName[currentMonth]
//  alert("Current month: " +nameOfMonth );


// Task No:3
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
// var daysName =["Sun","Mon","Tue","Wed", "Thu","Fri","Sat"];
// var today = new Date();
// var currentDay = today.getDay();
// var nameOfDay = daysName[currentDay];

// alert("Today is " + nameOfDay);


// Task No:4
// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
// var daysName =["sunday","monday","tuesday","wednesday", "thursday","friday","saturday"];
// var today = new Date();
// var currentDay = today.getDay();
// var nameOfDay = daysName[currentDay];

// if(nameOfDay === "saturday" || nameOfDay==="sunday"){
//   alert("It's Fun day")
// }else{
//   alert("It's not Fun day")
// }


// Task No:5
// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
 
// var today= new Date();
// var daysOfMonth =today.getMonth();
// document.write(daysOfMonth);
// if(daysOfMonth<16){
//   alert("First fifteen  days of the month")
// }
// else{
//   alert("Last days of the month")
// }

// Task No:
// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// Create a new Date 
// var currentDate = new Date();

// // Get the time in milliseconds since midnight, January 1, 1970
// var currMills = currentDate.getTime();

// Convert milliseconds to minutes
// var currminutes = (currMills/(60*1000)) 
// document.write("Current Date : " + currentDate + "<br>");
// document.write("Elapsed millisecond since January 1, 1970 : " + currMills + "<br>");
// document.write("Elapsed minutes since January 1, 1970 : " + currminutes + "<br>")


// Task No.7
// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// if(currentHours< 12){
//   document.write("It's AM");

// }else{
//   document.write("It's PM")
// }

// Task No.8
// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.
// var laterDate = new Date("December 31,2020");
// document.write(laterDate)



// Task No.9
// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramdanStart = new Date("April 11, 2024")
 
// var firstramdan = new Date("June 18,2015")
// var timeDiff = ramdanStart - firstramdan;
// var daysDiff = Math.floor(timeDiff/(1000*60*60*24));
// document.write(daysDiff + " days have passed since 1st Ramadan,2015")

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date("December 05, 2015");
// var beginingDate = new Date("January 1, 2015");
// var timeDifference = referenceDate- beginingDate;
// var secondsDifference = Math.floor(timeDifference/1000);
// document.write("On reference date " + referenceDate + "<br>"+
//   secondsDifference +" had passed since begginning of, 2015"
// )

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var currentDate = new Date();
// var currentHours=currentDate.gethours();
// document.write("current date and time : " + currentHours);
//  currentHours =currentHours + 1
// currentDate.setHours(currentHours+1)
//  document.write("An hours ahead : " +  currentDate);




// 12. Write a program that creates a date object and show the 
// // date in an alert box that is reset to 100 years back?
// var today=new Date();
// var currentDate= today.getFullYear();
// var yearsAgo = currentDate - 100;

// document.write("current date" + today + "<br>");

// today.setFullYear(yearsAgo)

// document.write("1 year ago, it was " + today)



// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.


// var userAge = +prompt("Enter your age");
// var today = new Date();
// var currentYear = today.getFullYear();
// var birthYear = currentYear -userAge
// document.write( "Your age is: " + userAge + "<br>");
// document.write("Your birthyear is:" + birthYear)


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month


// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customerName = prompt("Enter your name");
// var months = ["january","february","march", "april","may","june","july","august",
//   "september","october","november","december"];
// var today = new Date()
// var monthName = today.getMonth();
// var noUnits = +prompt("Enter your units");
// var chargePerUnit= 55;
// var netAmount= noUnits*chargePerUnit;
// var lateCharge = 1000;
// var afterDueDate=netAmount +lateCharge
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: " + customerName + " customer <br>" );
// document.write("Month: " + months[monthName ] +"</br>");
// document.write("Number of units: " +noUnits +"</br>");
// document.write("Charges per units: " + chargePerUnit +"</br>");
// document.write("Net Amount Payable (whithin Due Date): " + netAmount +"</br>");
// document.write("Late payment surcharge: " + lateCharge +"</br>");
// document.write("Gross Amount payable (After Due Date): " +  afterDueDate + "</br>");

