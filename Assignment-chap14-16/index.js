// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var studentNames = [];


// 2. Declare an empty array using JS object notation to store
// student names in future.
// var studentNames2 = new Array();

// 3. Declare and initialize a strings array.
// var studentNames = ["Rija","Sidra","Nimra","Hira"];

// 4. Declare and initialize a numbers array.
// var number = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
// var booleanArray  = [true, false, true, flase];

// 6. Declare and initialize a mixed array.
// var mixedArray = ["Saba", "Sadaf",false, 23, 65,true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


  //  var qualifications = ["SSC", "HSC", "BCS"," BS", "BCOM", "M. Phil", "PhD"];
  // document.write(`<h3> 1)${qualifications[0]}<br>2) ${qualifications[1]}<br>3)${qualifications[2]}<br>4)${qualifications[3]}<br>5)${qualifications[4]}<br>6)${qualifications[5]}<br>7)${qualifications[6]}</h3>`)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var students = ["Micheal", "Jhone","Tony"];
// var scores = [320, 230, 480];
// var totalMarks = 500;
// var percentages =[((320/500)*100), ((230/500)*100), ((480/500)*100)];

// document.write(`<h1>Score of ${students[0]} is ${scores[0]}. Percentage: ${ percentages[0]}%</h1>`)
// document.write(`<h1>Score of ${students[1]} is ${scores[1]}. Percentage: ${ percentages[1]}%</h1>`)
// document.write(`<h1>Score of ${students[2]} is ${scores[2]}. Percentage: ${ percentages[2]}%</h1>`)


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initialize an array with color names
//  var colorNames = ["Red", "Blue", "Yellow", "Green "];
// document.write("Initial array of colors:", colorNames + "<br>" );

//a. Ask the user what color to add to the beginning
//  var user = prompt("What color he/she wants to add to the beginning");

// add that color to the beginning of the array
// colorNames.unshift(user);
// document.write("Updated array after adding color to the beginning:",colorNames + "<br>");


//b) Ask the user what color he/she wants to add to the end
// var user2 = prompt("What color he/she wants to add to the end")

// colorNames.push(user2);
// document.write("Updated array after adding color to the end:", colorNames + "<br>");

//c)  Add two more color to the beginning of the array.
// colorNames.unshift("Purple","Pink");
// document.write("Updated array after adding two colors to the beginning:",colorNames + "<br>");

// d. Delete the first color in the array
// colorNames.shift();
// document.write("Updated array after deleting the first color:", colorNames+ "<br>");

// e. Delete the last color in the array
// colorNames.pop();
// document.write("Updated array after deleting the last color:", colorNames+ "<br>");

// //f. Ask the user at which index he/she wants to add a color & color name
//  var user_index = prompt("Enter the index at which to add a color:");
//  var user_color = prompt("Enter the color to add at index {}:");
// colorNames.splice(user_index,0, user_color);
// // updated array
// document.write("<b>Updated array after adding " + user_color + "color at index " + user_index + ":</b>" + colorNames + "<br>")

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete.

// Ask the user at which index to delete color(s) and how many colors to delete
// var indexToDelete = parseInt(prompt("Enter the index to delete color(s) from:"));
// var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// // Remove the specified number of color(s) from the user-defined position/index
// colorNames.splice(indexToDelete, deleteCount);
// // Display the updated array
// document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexToDelete + ":</b> " + colorNames + "<br><br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//  Define the array with student scores
//student_scores = [320, 230, 480, 120]

//  Sort the array in ascending order
//student_scores.sort()

//  the sorted array
// document.write("Sorted student scores:", student_scores)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// initialize the array with cities names
// var cityNames = ["Karachi","Lahore", "Islamabad", "Quetta", "Peshawer"];
// document.write(`<h1>Cities list</h1> ${cityNames}`);
// //  Copy 3 array elements from cities array
// let copy_cityNames = cityNames.slice(1,3);
// document.write(`<h1>Selected Cities list</h1> ${copy_cityNames}`);




// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is" , "my", "cat"];
// document.write(`<h2>Array:</h2> <h4>${arr}</h4>`);
// // Use array’s join method
// var string = arr.join(" ");
// document.write(`<h2>String:</h2> <h4>${string}</h4>`);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// Declare an empty array
// var fifoArr = [];
// // Store value one by one
//  fifoArr.push("keyboard");
//  fifoArr.push("Mouse");
//  fifoArr.push("Printer");
//  fifoArr.push("Monitor");
//  document.write(`<h1> Divices: </h1><h2>${fifoArr}</h2>` )
// // Remove values 
//  document.write("Out<br>" + fifoArr.shift()+ "<br>");
//  document.write("Out<br>" + fifoArr.shift()+ "<br>");
//  document.write("Out<br>" + fifoArr.shift()+ "<br>");
//  document.write("Out<br>" + fifoArr.shift()+ "<br>");




// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// creat an empty array
// var fifoArr2 = [];

// // Store value one by one
// fifoArr2.unshift("keyboard");
// fifoArr2.unshift("Mouse");
// fifoArr2.unshift("Printer");
// fifoArr2.unshift("Monitor");
// document.write(`<h1> Divices: </h1><h2>${fifoArr2}</h2>` )
// // Remove values 
// document.write("Out<br>" + fifoArr2.shift()+ "<br>");
// document.write("Out<br>" + fifoArr2.shift()+ "<br>");
// document.write("Out<br>" + fifoArr2.shift()+ "<br>");
// document.write("Out<br>" + fifoArr2.shift()+ "<br>");


// 15. Write a program to store phone manufacturers (Apple,
  // Samsung, Motorola, Nokia, Sony & Haier) in an array.
  // Display the following dropdown/select menu in your
  // browser using document.write() method:

  // initialize the array
  // var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  // document.write("<select>")
  // document.write("<option>"+phoneManufacturers[0]+"</option>"); 
  // document.write("<option>"+phoneManufacturers[1]+"</option>");
  // document.write("<option>"+phoneManufacturers[2]+"</option>");
  // document.write("<option>"+phoneManufacturers[3]+"</option>");
  // document.write("<option>"+phoneManufacturers[4]+"</option>");
  // document.write("<option>"+phoneManufacturers[5]+"</option>");
  // document.write("</select>");
  