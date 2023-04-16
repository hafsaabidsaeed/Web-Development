
                                                    // 1 - HOUR


// console.log('Hello world');
// var myname="Hafsa";
// console.log(myname);
// var _myname='hafsa';
// console.log(_myname);
// var name1='momina';
// console.log(name1);

// data types in java script

// var fullname="Hafsa Abid ";
// console.log(fullname);

// var age=21;
// console.log(age);

// //type of operator string and number
// console.log(typeof(fullname));
// console.log(typeof(age));

// var are_you_hafsa=true;
// console.log(are_you_hafsa);

// //type of operator boolean
// console.log(typeof(are_you_hafsa));

//task 2
// var p1 = 10+20;
// console.log(p1);

// var p1 = 10+"20";
// console.log(p1);

// var p2 = 9-"5";
// console.log(p2);      //this is a bug-1, the answer should not be 4

// var p3 = "Java " + "script";
// console.log(p3);

// var p4 = " "+ " ";
// console.log(p4);

// var p5 = " "+ 0 ;
// console.log(p5);

// In JavaScript True=1 and False=1
// var p6 = true-true;
// console.log(p6);

// var p7 = false-true;
// console.log(p7);

// var p8 = true-false;
// console.log(p8);
// console.log(typeof(p8));

//Difference between Null and undefined
// var p9 = null;      //null means this variable p9 is empty
// console.log(p9);

// var p10;
// console.log(p10);    //undefined as no value is assigned to the variable, Undefined is also a data type

// //Bug-2
// console.log(typeof(p9));    //the data type of this is shown as "object", which is not right

// //undefined data type
// console.log(typeof(p10));

//Interview question-2: Whhat is NaN
// var p11 = "Youtube" - "channel";
// console.log(p11);
//NaN is a property of global object, in other words it is a variable in global scope
//The initial value of NaN is Not=A-Number
// var phone = 123123122;
// var Momname = "Shazia";
// console.log(phone);
// console.log(Momname);

// console.log(isNaN(phone));
// console.log(isNaN(Momname));

// if(isNaN(Momname)){
//     console.log("please enter a valid phone number")
// }

                                                // 2nd hour

//Task 3
// NaN practice

// console.log((Number.isNaN(NaN)));




//Expressions and Operators
// Assignment Operators
// Arithematic operators 
// Comparison Operators
    // Equal to (==)
    // Not Equal to (!=)
    // Greater than (>)
    // Greater than or Equal(>=)
    // Less than (<)
    // Less than or Equal(<=)
    // Not Equal to (!=)

// Logical Operators
    // Logical AND (&&)
    // Logical OR (||)
    // Logical NOT (!)

// String Operators
    // String concatenation operators

// Increment and Decrement operators



// TASK 4

// Qno-1: What will be the output of 3**3 ?
//   ** means power of
// console.log(3**3);      //3*3*3          
// console.log(9**2);      //9*9   

// Qno-2: What will be the output when we add a number and a string ?

// Qno-3:


// Qno-4:




                                             // 3rd hour


//Control statements and loops
// IF ELSE Condition



// Task-5
// Qno-1: 


//Conditional operator (ternary)
//Ternary operator is the only javascript operator that takes three operands
// variablename = (condition) ? value1 (if true) : value2 (if false);

// var age = 17;
// console.log((age >= 18) ? "you can vote" : "you can not vote"); 

//Switch statement
// Qno-1 Find the area of circle, rectangle and triangle 
// Area of circle: PI * r ^ 2 = 3.142 * 3 ^2
// Area of rectangle: length * breadth
// Area of triangle: (length * breadth)/2

// var area = "rectangle";
// var PI=3.143, r=3, l= 5, b=4;
// if(area == "circle")
// {
//     console.log("The area of circle is " + PI*r**2);
// } 
// else if(area == "rectangle")
// {
//     console.log("The area of rectangle is " + (l*b));
// } 
// else if(area == "triangle")
// {
//     console.log("The area of triangle is " + (l*b)/2);
// } 
// else{
//     console.log("Invalid data");
// }

// var area = "circle";
// var PI=3.143, r=3, l= 5, b=4;

// switch(area){

// case 'circle':
//     console.log("The area of circle is " + PI*r**2);
//     break;

// case 'rectangle':
//     console.log("The area of rectangle is " + (l*b));
//     break;

// case 'triangle':
//     console.log("The area of triangle is " + (l*b)/2);
//     break;

// default:
//     console.log("Invalid data");

// }


//WHILE AND DO WHILE LOOP Difference
// while loop is block scope which means that it first checks the condition then enters the scope
// do while loop first  enters the scope then checks the condition

// while loop
// var num = 0;
// while(num <=10 ){
//     console.log(num);
//     num++;
// }

// do while loop
// var num = 20;
// do{
//     console.log(num);
//     num++;
// }
// while(num <=10 )



// for loop
// TASK-6
// Qno-1: Java script program to print table for given number (8, 9, 12, 15) using for loop?


// for( var num=0; num<=12; num++ )
// {
//     var tableof = 8;
//     console.log(tableof + " * " + num + " =" + tableof*num )
// }

// for( var num=0; num<=10; num++ )
// {
//     var tableof = 9;
//     console.log(tableof + " * " + num + " =" + tableof*num )
// }

// for( var num=0; num<=10; num++ )
// {
//     var tableof = 12;
//     console.log(tableof + " * " + num + " =" + tableof*num )
// }


                            //  4th HOUR

// FUNCTIONS in Java Script
// It is a block of code designed to perform a particular task, it reusable code

// Function Defination
// It is called functional declaration or a function statement, It consists of function keyword
// syntax: function functionName ( parameters ) { statement }
// defining a function doesnot executes it

//function declaration
// function sum()
// {
//     var a=10, b=20;
//     var total = a + b;
//     console.log(total);
// }

// //function calling
// sum();

//Function parameter and fumction arguments
// functions parameters are the names listed in the function defination
// functions arguments are all the values passed to the function

// function sum( a , b )         //parameters
// {
//     var total = a + b;
//     console.log(total);
// }


// sum( 10, 40 );          //arguments

// Why should we use function 
// because a function is a group of  Reusable code whoch can be used many time sjust by calling it 

// Function expressions


// function sum( a , b )         //parameters
// {
//     return total = a + b;
    
// }


// var funcExp = sum( 10, 60 );        
// console.log('The value obtained by adding two numbers is ' + funcExp);


//Anonymous Function Expression
// functions withput a name are called anonymous function

// var funcExp =function( a , b){        
//     return total = a + b;
// }

// var sum = funcExp(30,20);

// console.log('The value obtained by adding two numbers is ' + sum );










// *************************************************************************************************************************************
    // 5th HOUR
    // Modern Java script
    // ECMA Script 2015


// 1.
//LET vs CONST vs VAR
// with var i can change value later
// with let i can change value later
// with const i cannot change value later


//using var keyword
// function biodata(){
//     var myFirstName ="Hafsa";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Abid";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }

//     console.log('innerOuter ' + myLastName);
// }

// biodata();


//using let keyword
// let has block scope yani k we can not use it outside the curly brackets
// function biodata(){
//     let myFirstName ="Hafsa";
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "Abid";
//         console.log('inner ' + myLastName);
        
//     }
   
// }
// console.log('innerOuter ' + myFirstName);

// biodata();

// var => function scope
// let and const => block scope


// using const keyword
// const has block scope yani k we can not use it outside the curly brackets
// function biodata(){
//     const myFirstName ="Hafsa";
//     console.log(myFirstName);

//     if(true){
//         const myLastName = "Abid";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }

//     console.log('innerOuter ' + myFirstName);    
// }

// biodata();



// 2.
//Template Literals ( Template Strings )
//it is more efficient way 
// Java script program to print table for given number (12,8,9) ?

// for( let num=0; num <= 10; num++ )
// {
//     let tableof = 8;
//     console.log( ` ${tableof} * ${num} = ${tableof * num }` );
// }



// 3.
// Default Parameters
// Basically dafault function parameters allow named parameters to be initialized with default values in cases when 
// no value or undefined is passed

// function mult( a=7 , b=3 )
// {
//     return a*b;
// }

// console.log(mult(undefined,10));

// function mult( a=7 , b=3 )
// {
//     return a*b;
// }

// console.log(mult(10));


// 6. 
// Fat Arror Function =>
// Normal Way of writting a function
//  const sum = () => {
//     let a=10, b=2;
//     let sum= a+b;
//     return `the sum is ${sum}`
//  }
//  console.log(sum());
 
// //another way to do it is
 
//  const sum2 = () => `the sum is ${ (a = 10) + ( b=6 ) } ` 
//  console.log(sum2());


// ***********************************************************************************************************************************



// ARRAYS IN JavaScript
// Traversal of an Array

// var myFriends = ['Momina', 'Zainab', 'Umna'];
// console.log(myFriends [ 0 ]);
// console.log(myFriends [ myFriends.length - 1 ]);       //length is a property
// console.log(myFriends.length);



// For In Loop
// var myFriends = ['Momina', 'Zainab', 'Umna'];

// using for loop
// for( var i=0; i<myFriends.length; i++ )
// {
//     console.log(myFriends[i]);
// }

// using for in loop
// for in loop shows the index number of all the elements of the array
// for( let elements in myFriends )
// {
//     console.log(elements);
// }

// using for of loop
// for of loop shows all the elements in the array
// for( let elements of myFriends )
// {
//     console.log(elements);
// }

// using forEach loop
// callback function passed
// myFriends.forEach(function(element, index, array)
//     {
//         console.log(index,element);
//         // console.log(element);
        
//     }
// );

// // forEach loop usong Fat Arrow function
// myFriends.forEach((element,index,array) => {

//     console.log(index +  "  " + element  );

//     }
// );




// Searching and filters in array
// var myFriends = ['Momina', 'Zainab', 'Umna'];










// How to insert, Add, Replace and delete elements in an Array
// Array.prototype.push()
// The push method adds one or more elements to the end of an array and returns the new length of an array

// const animals = ['snial', 'mouse', 'lizard', 'dog'];
// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

// multiple additions in array using push()
// const count = animals.push('chicken', 'cow', 'bugs');
// console.log(animals);
// console.log(count); 




// Array.prototype.unshift()
//The unshift ( ) method adds one or more element to the start of the array and returns the new length of the array
// const animals = ['snial', 'mouse', 'lizard', 'dog'];

// const count = animals.unshift('chicken');
// console.log(animals);
// console.log(count);

//2nd example
// const myNumbers = [1,2,3,4,5,6];

// myNumbers.unshift(7,9);
// console.log(myNumbers);




// Array.prototype.pop ()
// The pop () method removess the last element from an array and returns that element. The method changes the length of an array

// const fruits = [ ' apple ', ' mango ', ' orange ', 'banana ', ' kiwi', ' strawberry' ];

// for (let elements of fruits)
// {
//     console.log(elements);
// }
//now remove an element from fruits
// console.log(fruits.pop());
// console.log(fruits);
//pop will remove the last element from the array and return that element on console



//  Array.prototype.shift ()
// The shift () method removess the first element from an array and returns that element. The method changes the length of an array

// const fruits = [ ' apple ', ' mango ', ' orange ', 'banana ', ' kiwi', ' strawberry' ];

// console.log(fruits.shift());
// console.log(fruits);



// TASK
// Qno-1:  
// 1- Add Dec at the end of an array?
// 2- what is the return value of splice method?
// 3- update march to March (update) ?
// 4- Delete june from an array ?

//splice method () performs all the tasks of add delete update 

// const months = [ 'Jan', 'march', ' April', 'June', 'July'];

// sol-1
// splice(index of where we want to add, index number  of element to be deleted, element to be added)
// const newMonth = months.splice(4,0,'Dec');
// const newMonth = months.splice(months.length,0,'Dec');
// console.log(months);

// sol-2
// splice returns value in the form of new array 

// sol-3
// const months = [ 'Jan', 'march', ' April', 'June', 'July'];
// splice ( index of element to be deleted, number of elements from that index onward to be deleted, new data)
// const updateMonths = months.splice (1,1,'March');
// console.log(months);

// //another method to do this usong include() method
// const indexofMonth = months.indexOf('June');
// //if data is not present then -1 will be returned other wise index number will be returned
// if(indexofMonth != -1){
//     const updateMonths = months.splice (indexofMonth,1,'june');
//     console.log(months);
// }
// else{
//     console.log('No such data found');
// }

// sol-4
// const indexofMonth = months.indexOf('June');
// //if data is not present then -1 will be returned other wise index number will be returned
//  if(indexofMonth != -1){
//      const updateMonths = months.splice (indexofMonth,1);
//      console.log(months);
//  }
//  else{
//      console.log('No such data found');
//  }




// 5.
// // Array.prototype.Map ()
// const array1 = [1,4,7,9,12,34,25,77];
// // num>9
// let newArray = array1.map((currElem, index, arr) => {
//     return currElem > 9;
// });
// console.log(array1);
// console.log(newArray);
// // values are returned in the form of true/false


// let newArray = array1.map((currElem, index, arr) => {
//     return `Index no = ${index} and the value is ${currElem} belongs to ${arr}`
// });
// console.log(newArray);


// Array.prototype.Reduce ()
// Array.prototype.Filter ()



// Task
// 1. Find the square root for each element in an array
// 2. Multiply each element by 2 and return only those elements which are greater than 10

// // sol-1
// let arr =  [25,36,49,64,81];

// let arrsqrt = arr.map((currElem) =>  Math.sqrt(currElem))
// console.log(arrsqrt);


// sol-2
// this is chaining style
// fat arrow function beshak return keyword na use krain
// let arr = [2, 3, 4, 7, 8];

// let array2 = arr.map((currElem) => {
//     return currElem * 2;
// }).filter((currElem) => {
//     return currElem > 10;
// })
// console.log(array2);

// or

// let array2 = arr.map((currElem) => currElem * 2 ).filter((currElem) =>  currElem > 10)
// console.log(array2);




// Reduce () method
//flatten an array means to convert the 3d or 2d array into a single dimensional array
//The reduce () method executes a reducer function (that you provide) on each element of the array,

// the reducer function takes four arguments:
// 1.Accumlator
// 2.Current value
// 3. Current Index
// 4. Source Array

// //reduce() it will add all the values
// let arr = [5,6,2,3];
// let sum = arr.reduce((accumulator, currElem, index, arr) => {
//     return accumulator += currElem;
// });
// console.log(sum);

//sol-2
// let arr = [5,6,2,3,12,8];
// let array2 = arr.map(( currElem) => currElem*2).filter((currElem) => currElem > 10  ).reduce((accumalator, currElem) => {
//     return accumalator += currElem;});

// console.log(array2);

// // sol-2
// let arr = [5,6,2,3,12,8];
// let array2 = arr.map(( currElem) => currElem*2).filter((currElem) => currElem > 10  ).reduce((accumalator, currElem) => {
//     debugger; 
//     return accumalator *= currElem;});

//  console.log(array2);


// how to fatten an Array
// convert 2d and 3d array in 1d array
// single elements mile gain hamain result mn 

// const arr = [
//     ['zone-1', 'zone-2' ],
//     ['zone-3', 'zone-4' ],
//     ['zone-5', 'zone-6' ],
//     ['zone-7', 'zone-8', 'zone-9']
// ];

// let flatArr = arr.reduce((accum, currVal) => {
//     return accum.concat(currVal);
// })
// console.log(flatArr);






//String in Java Script
// A string is zero or more characters written inside quotes
// strings can be created as permitives

// 1.Escape Character
// 2.Finding a string in a string
// 3.Searching in a string 
// 4.Extracting string parts 
// 5.Replacing string content
// 6.Extracting string content
// 7.Other useful methods


// how to find length of a string 
// string.prototype.length
// Reflects the length of string





// 1.Escape Character

// let sent = "We are \"Developers\" from Lahore";
// console.log(sent);





// 2.Finding a string in a string
// let sentence = 'We are "Developers" from Lahore';
// console.log(sentence);
// console.log(sentence.indexOf("Lahore"));
// console.log(sentence.indexOf("e", 2)); //2 means second index se agay search kro





// 3.Searching in a string 
// let sentence = 'We are Developers from Lahore';
// console.log(sentence);
// let data =  sentence.search("Developers");
// console.log(data); 





// 4.Extracting string parts 

// there are 3 methods for extracting
// 1. slice(start,end)
// 2. substring(start, end)
// 3. substr(start,length)

// slice() method
// extract a part of a string and returns the extracted part in a new string
// this method tales 2 parameters i.e. start and end positions
// The slice () method selects the elements starting at the given start argument and ends at the given
// end argument but does not includes the last element
// var str = "Apple, mango, kiwi, banana, orange";
// let res = str.slice(5,22);
// console.log(res);

//Challange time
// Display only 280 characters of a string like the one used in twitter
// let myTweet = "jnfjd jdbfjd jbfdjs jdbfjsd bdb dfghj fghj fgh eeer r r r r jd jdbfjd jbfdjs jdbfjsd bdb dfghj fghj fgh eeer r r r r r r r ewq ew ew  jd jdbfjd jbfdjs jdbfjsd bdb dfghj fghj fgh eeer r r r r r r r ewq ew ew jd jdbfjd jbfdjs jdbfjsd bdb dfghj fghj fgh why do we use it jd jdbfjd jbfdjs jdbfjsd bdb dfghj fghj fgh eeer r r r r r r r ewq ew ew jd jdbfjd jbfdjs jdbfjsd bdb dfghj fghj fgh eeer r r r r r r r ewq ew ew  ";

// let uploadTweet = myTweet.slice(0,280);
// console.log(uploadTweet);
// console.log(uploadTweet.length);
// console.log(myTweet.length);


// substring () method
// doesnot accepts negative indexes
// similar to slice
// var str = "Apple, mango, kiwi, banana, orange";
//  let res = str.substring(9,-2);
//  console.log(res);


//  3. substr(start,length)
// it is similar to slice
// the difference is that second parameter specifies the length of the extracted part  
// doesnot accepts negative value

// var str = "Apple, mango, kiwi, banana, orange";
//  let res = str.substr(-6); 
//  //it shows elements from back side yani k array k peechay sae last 6 elements will be displayed
//  console.log(res);





// 5.Replacing string content
// replace() method the first found element to be changed an replaces it 
// it consists of two parameters (elemnt to be replaced , to replace with)
// replace() method is case sensitive
// let myBioData = `I am hafsa abid saeed akhtar abid`;
// let replaceData = myBioData.replace('abid','ABID');
// console.log(replaceData);





// 6.Extracting string content
// There are 3 methods for extracting string caharacters

// 1. charAt() method
// The charAt() method returns the charcter at a specified index (position) in a string 
// let str = "HELLO MOMINA ABID";
// console.log(str.charAt(9));
// console.log(str.charAt(6));

// 2. charCodeAt() method
// it returns a unicode (unique code) of the character at a specified index in a string
// It returns a UTF-16 code (an integer between 0 to 65535)
// let str = "HELLO MOMINA ABID SAEED Akhtar";
// let lastChar = str.length - 1;
// console.log(lastChar);  
// console.log(str.charCodeAt(lastChar));

// 3. Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings
// yani k jis tarhan in case of arrays we passed the index number and the value at that index was displayed, similarly in strings we pass the index and character at that index is displayed
// var str = "HELLO MOMINA ABID SAEED Akhtar";
// console.log(str[3]);
// console.log(str[19]);
// console.log(str[28]);





// 7.Other useful methods

// 1.Upper case and Lower case
// var myName = "MOMINA ABID SAEED";
// console.log(myName.toLowerCase());
// var myName = "hafsa abid saeed";
// console.log(myName.toUpperCase());

// 2.The concat() method
// concat () method joins two strings
// let firstname = "Hafsa";
// let lastname = "Abid";
// console.log(firstname.concat(lastname)); //using concat() method in string
// console.log(firstname+lastname);         //using normal way
// console.log(`${firstname} ${lastname}`); //in ECMAScript 
// console.log(firstname.concat(" " ,lastname)); //using concat() method

// 3. String.trim()
// trim method removes white spaces from both sides of the string
// middle spaces can not be removed using it 
// var myName = "           MOMINA ABID SAEED                   ";
// console.log(myName.trim());

// 4. split() method
// converting a string to array
// in this we give a parameter that from what points we want to split our String
// let str1 = "a,b,c,d,e,f";
// console.log(str1.split(","));     //split on commas
// let str2 = "a,b,c | d,e | f";
// console.log(str2.split("|"));     // split on bar





// *************************************************************************************************





// Date and time methods
// 1.Date methods(get and set)
// 2.Time methods(get and set)




// 1.Date methods(get and set)
// Date object contains a number that represents milliseconds since 1st-January-1970 UTC 

// Creating Date objects
// There are four ways to create a new date object:
// 1. new Date()
// 2. new Date(year, month, day, hour, minutes, seconds, milliseconds) it takes 7 arguments
// 3. new Date(milliseconds)
// 4. new Date (date string)


// 1. new Date()
// date objects are created with new date() constructor
// let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleString());   //this will give locale date time
// console.log(currDate.toString());       ////this will give locale date time according to our country
// console.log(Date.now());      //it returns the number of milliseconds since 1st-January-1970


// 2. new Date(year, month, day, hour, minutes, seconds, milliseconds) it takes 7 arguments
// minimum first 2 arguments are compulsary
//  let currDate = new Date(2023, 1, 8, 6); //month argument is compulsary
//  console.log(currDate.toLocaleString());


// 3. new Date(milliseconds)
// console.log(Date.now());
// var currDate = new Date(1681584090415);
// console.log(currDate.toLocaleString());
// var currDate = new Date(86400000*2);
// console.log(currDate.toLocaleString());



// 4. new Date (date string)
// var currDate = new Date("April 4, 2023 11:39:00");
// console.log(currDate.toLocaleString());



//Date Methods

// const currDate = new Date();

// how to get the individual date

// console.log(currDate.getDate());
// console.log(currDate.getDay());
// console.log(currDate.getMonth());
// console.log(currDate.getFullYear());
// console.log(currDate.toLocaleString());

//how to set individual date

// console.log(currDate.setDate(8));
// console.log(currDate.setMonth(7));  //0 - 11 means jan to dec
// console.log(currDate.setFullYear(2002, 7, 8));   //it can set month and day as well
// console.log(currDate.toLocaleString());
// //all data will be in milliseconds



// 2.Time methods(get and set)

// const currTime = new Date();

//how to get the individual time

// console.log(currTime.getTime());   //it returns numbers of milliseconds since January 1st 1970
// console.log(currTime.getHours());   // returns the hours of the date as number (0- 23) 
// console.log(currTime.getMinutes()); 
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

//how to set the individual time

// console.log(currTime.setHours(5));   
// console.log(currTime.setMinutes(5)); 
// console.log(currTime.setSeconds(5));
// console.log(currTime.setMilliseconds(6));





// ***********************************************************************************************************************





//Java script math objects
// They allow us to do mathematical operations

// Math.PI
// console.log(Math.PI);

// Math.round()
// this returns the value of x rounded to its nearest integer

// const num = 10.50;
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x , y) returns the value of to the power of y
// console.log(Math.pow(2, 3));

// Math.sqrt()
// returns the square root of x
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(49));

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x
// console.log(Math.abs(-77));
// console.log(Math.abs(-9));
// console.log(Math.abs(2-18));

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer
// it always adds one number then displays it chahe point k baad kuch bhi ho
// console.log(Math.ceil(9.01));

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer
// it never adds any number 
// console.log(Math.floor(99.01));
// console.log(Math.floor(99.7));

// Math.max()
// It can be used to the maximum number from a list of arguments
// console.log(Math.max(0,55,32,12,89,94,1,44,3));

//Math.random()
// Returns a random number between 0 (inclusive) and 1
// console.log(Math.floor(Math.random()*10));     //now it will give output between 0 to 9

// Math.trunc()
// The trunc() method returns the integer part of a number
//decimal mn value nhi ae ge
// console.log(Math.trunc(22.12));
// console.log(Math.trunc(-94.50));



// Practice time
// if the argument is a positive number, Math trunc() is equivlent to Math.floor(), otherwise Math.trunc() is
// equivlent to Math.ceil()





// **********************************************************************************************************************





// DOM in JavaScript
// 1.Window vs Document
// 2. DOM vs BOM
// 3.  DOM Navigation
// 4. Searching and getting elements Reference


// 1.Window vs Document
// Window is the main container or we can say the global object and any operations related to entire browser window can be a part of window object 
//DOM is the child of the window object


// 2. DOM vs BOM
// DOM- document

// BOM- browser object model- navigator, screen, location, frames, history
// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document, but represent the pure browser methods of communicating with the user.

// alert(location.href);        //shows current URL
// if(confirm("want to visit Lahore?")){
//     location.href= "https://youtu.be/KExhVBbDlj4?list=PLk3CgXKvqvFqwWN2VjRmV6U8Ll-TGknF0";
// }


// 3.  DOM Navigation





// 4. Searching and getting elements Reference



