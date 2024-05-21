// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:


document.write(`<p>Task-no 01<p>`);

var a = 10;


++a;
document.write("The value of ++a is : "+ a + "<br><br> Now the value of a is: "+ a);


var b = a++;
document.write("<br><br><br><br> The value of a++ is : "+ b + "<br><br> Now the value of a is: "+ a);


--a;
document.write("<br><br><br><br> The value of --a is : "+ a + "<br><br> Now the value of a is: "+ a);

var c = a--;
document.write("<br><br><br><br> The value of a-- is : "+ c + "<br><br> Now the value of a is: "+ a);



//    2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// document.write(`<p>Task-no 01<p>`);
// var a = 2;
// var b = 1;

// document.write("<br> a is : "+ a);
// document.write("<br><br> b is : "+ b);


// var result = --a - --b + ++b + b-- ;
//            1 -    0  +  1 + 1 = 3;


//--a                          //1
// --a - --b;                  //1 - 0 = 1
// --a - --b + ++b;            //1 - 0 + 1 = 2
// --a - --b + ++b + b--;      //1 - 0 + 1 + 1= 3


// document.write("<br><br> Expression = --a - --b + ++b + b-- ;  <br><br> Solution :   1 -  0  +  1 + 1 ");

// document.write("<br><br> Result : "+ b);

// Q3 . Write a program that takes input a name from user & greet the user.

// document.write('<p>Task-no 03<p>');

// var userName= prompt("Please enter your name");
// var greetUser = "Hellow! " + userName + " Have A Nice Day"
// alert(greetUser);

/////Task-no 04 not found in repo///////



// Q5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.



// // document.write('<p>Task-no 05<p>');
var numberInput = +prompt("Enter a number to display its multiplication table:",5);
document.write(`
${numberInput} x 1 = ${numberInput * 1}<br>
${numberInput} x 2 = ${numberInput * 2}<br>
${numberInput} x 3 = ${numberInput * 3}<br>
${numberInput} x 4 = ${numberInput * 4}<br>
${numberInput} x 5 = ${numberInput * 5}<br>
${numberInput} x 6 = ${numberInput * 6}<br>
${numberInput} x 7 = ${numberInput * 7}<br>
${numberInput} x 8 = ${numberInput * 8}<br>
${numberInput} x 9 = ${numberInput * 9}<br>
${numberInput} x 10 = ${numberInput * 10}<br>
`);



// 6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

// var subjectName1 = prompt("write  subject name");
// var obtainedMarks1 = +prompt("Enter your marks");
// var totalMarks = 100;
// var percentage1 = +prompt((obtainedMarks1/totalMarks) *100)
// document.write(percentage1)
// var subjectName2 = prompt("write  subject name");
// var obtainedMarks2 = +prompt("Enter your marks");
// var percentage2 =  (obtainedMarks2/totalMarks) *100
// document.write(percentage2)
// var subjectName3 = prompt("write  subject name");
// var obtainedMarks3 = +prompt("Enter your marks");
// var percentage3 =  (obtainedMarks3/totalMarks) *100
// document.write(percentage3)



// Get subjects' names from the user
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


// Total marks for each subject
var totalMarks = 100;

// Get obtained marks for each subject from the user
var subject1_Marks = +prompt("Enter obtained marks for :" + subject1);
var subject2_Marks = +prompt("Enter obtained marks for :" + subject2);
var subject3_Marks = +prompt("Enter obtained marks for :" + subject3);



//calculate subject percetage
var sub_1_percentage =  subject1_Marks  / totalMarks* 100;
var sub_2_percentage =  subject2_Marks  / totalMarks * 100;
var sub_3_percentage = subject3_Marks  / totalMarks * 100;

//calculate total marks percentage
var totalObtainedMarks = subject1_Marks + subject2_Marks + subject3_Marks;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

//Total marks obtained
var obtainedMarksTotal = subject1_Marks + subject2_Marks + subject3_Marks;

document.write("<h2>Result</h2>");
document.write("<table>");
document.write("<tr><th>Subject &nbsp;&nbsp;</th><th>Total Marks &nbsp;&nbsp;</th><th>Obtained Marks &nbsp;&nbsp;</th><th>Percentage</th></tr>");
document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${subject1_Marks}</td><td>${sub_1_percentage}%</td></tr>`);
document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${subject2_Marks}</td><td>${sub_2_percentage}%</td></tr>`);
document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${subject3_Marks}</td><td>${sub_3_percentage}%</td></tr>`);
document.write(`<tr style="text-decoration-line: overline;"><td colspan='1'></td><td>${totalMarks*3} </td><td>${obtainedMarksTotal} </td><td>${percentage.toFixed(2)} %</td></tr>`);
//document.write("<tr><td colspan='2'>Percentage</td><td>" +  + "</td></tr>");
document.write("</table>");



  


