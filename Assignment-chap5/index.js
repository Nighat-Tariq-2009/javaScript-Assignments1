
// //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// document.write("Sum of 3 and 5 is " + result + "<br>");

// //Q2  Repeat task1 for subtraction, multiplication, division & modulus.

// var result = num1 - num2;
// document.write( result + "<br>");
// var result = num1 * num2;
// document.write( result + "<br>");
// var result = num1 / num2;
// document.write( result + "<br>");
// var result = num1 % num2;
// document.write( result + "<br>");

// // Q3  Do the following using JS Mathematic Expressions
// // a)  Declare a variable.
// var num ;
// // b). Show the value of variable in your browser like “Value after variable declaration is: ??”.

// document.write("Value after variable declaration is:" + num + "<br>");
// // c)Initialize the variable with some number.

//  num = 5;

// //d). Show the value of variable in your browser like “Initial value: 5”.

// document.write("Initial value: " + num + "<br>");

// // e) Increment the variable.
// num++;
// //f). Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is: " +  num + "<br>");
// // g) Add 7 to the variable.

// num +=7
// // h)Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value of after addition is:" + num + "<br>");
// // i)
// // Decrement the variable
// num--;
// //j.Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value of after decrement is" + num + "<br>");
// //k). Show the remainder after dividing the variable’s value by 3.
// var remainder = num%3;
// //l. Output : “The remainder is : 0”.

// document.write("The remainder is: " +  remainder + "<br>" );

// // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable 
// // & calculate the cost of buying 5 tickets to a movie. Example output:

// var movieTicket = "600 PKR";
// var totalTicket = "5 ";
// var totalCost = 5 * 600;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR " + "<br>");


// // 5. Write a script to display multiplication table of any number in your browser. E.g
// document.write("<h1>Table Of 4</h1>")
// var num1 = 4;
// document.write(`
// ${num1} x 1 = ${num1 *1}<br></br>
// ${num1} x 2 = ${num1 *2}<br></br>
// ${num1} x 3 = ${num1 *3}<br></br>
// ${num1} x 4 = ${num1 *4}<br></br>
// ${num1} x 5 = ${num1 *5}<br></br>
// ${num1} x 6 = ${num1 *6}<br></br>
// ${num1} x 7 = ${num1 *7}<br></br>
// ${num1} x 8 = ${num1 *8}<br></br>
// ${num1} x 9 = ${num1 *9}<br></br>
// ${num1} x 10 = ${num1 *10}<br></br>

// `);




// Q5.6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:


// var celsiusTemperature = 25;
// var fahrenheitTemperature = ( celsiusTemperature * 9/5) +32;
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" +"<br>");


// var fahrenheitTemperature2 = 70;
// var celsiusTemperature2 = (fahrenheitTemperature2 -32) * 5/9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 +" °C");


// 7. Write a program to implement checkout process of a shopping cart system for 
// an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// var item2 = 200;
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


// var item1 = 650;
// document.write("Prize of item1 is " + item1 + "<br>");
// var quantityItem1 = 3;
// document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
// var item2 = 100;
// document.write("Prize of item2 is " + item1 + "<br>");

// var quantityItem2 = 7;
// document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
// var  shippingCharges = 100;
// document.write("Shipping Charges " + 100 + "<br>");
// var totalCost = ( item1 * quantityItem1 ) + (item2 * quantityItem2) + (shippingCharges);
// document.write("Total cost of your order is " + totalCost + "<br>")



// Q8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "<br>");

// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total
//currency to Pakistani Rupees. Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee  and 1 Saudi Riyal = 28 Pakistani Rupee)


// var pakistaniRupees = (10 * 104.80) + (25 * 28);
// document.write("Total Currency in PKR: " + pakistaniRupees + "<br>");

// Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression

// var num = 10;
// var result = (((num + 5) * 10) / 2);
// document.write("Result: " + result + "<br>" );

// Q11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// var currentYear = 2016;
// var birthYear = 1992;
// var yourAge = 2016 - 1992;
// document.write("Current Year: " + currentYear + "<br>" );
// document.write("Birth Year: " + birthYear  + "<br>");
// document.write("Your Age is: " + yourAge + "<br>");

// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, andoutput “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// Store the radius of the circle in a variable
// var radius = 5; 

// // Calculate properties of the circle
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;

// // Display the calculated properties

// document.write('<h1>The Geometrizer</h1>')

// document.write("<br>Radius of a circle: ", radius);
// document.write("<br><br> The circumference is: ", circumference);
// document.write("<br><br> The area is : ", area);



// Q13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

// var  favoriteSnack = "chcolate chip" ;
// var  currentAge = 15;
// var  maximumAge = 65;
// var  snackPerDay = 3;

//  var yearsRemaining = maximumAge - currentAge;
//   var snacksNeeded = yearsRemaining * 365 * snackPerDay;

// document.write("Fourite Snake:" + favoriteSnack + "<br>" );
// document.write("Current Age" + currentAge + "<br>" );
// document.write(" Estimated Maximum Age " + maximumAge + "<br>");
// document.write("Amount of snack per day " + snackPerDay + "<br>");
//  document.write("You will need " +  snacksNeeded + favoriteSnack + " to last you until the ripe old age of " +  maximumAge + "<br>");




