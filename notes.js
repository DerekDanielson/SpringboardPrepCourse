//PRIMITIVE TYPES
*Number
*String
*Boolean
*null
*Undefined
//Technically Symbol and BigInt

//Numbers in JS
*JS has one Number type
*Positive Numbers
*Negative Numbers
*Whole Numbers (integers)
*Decimal Numbers 

//Simple Operations
1 + 1 
1 - 1
1 * 1
1 / 1
1 % 1 //Modulo (Remainder Operator)

//Not A Number (NaN)
0/0 //NaN
1 + NaN //NaN


//Variables
Variables can store a value and give it a name, so that we can:
-Recall it
-Use it
-or Change it later on

//Basic Syntax
let someName = value;
let age = 55;

//Recall Variables
let hens = 4;
let roosters = 2;

hens + roosters //6

//Update Values
let hens = 4;
hens - 1; //3
hens; //Still 4
//To actually change hens:
hens = hens - 1;
hens; //3
hens = 3; //3

//CONST
//Const works like let except cant change the value
const hens = 4;
hens = 20; //Error

const age = 17;
age = age + 1; //Error

//Why use const
const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;


//BOOLEANS - True or False
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;


//VARIABLES CAN CHANGE TYPE
let numDonuts = 12; //Its a number
numDonuts = false; //Its a Boolean
numDonuts = 123348; //Back to number

//STRINGS - are strings of characters wrapped in quotes
let msg = 'Dont pet the animals';
// Can use single or double quotes

//Strings are indexed
C H I C K E N 
0 1 2 3 4 5 6

let firstName = 'Ziggy';
//Strings have a length property:
firstName.length; //5
//Access individual characters using index:
firstName[0]; //'Z'
firstName[3]; //'g'

//String Methods
//Strings come with a set of built-in methods, which are actions  //that can be performed on or with that particular String.

//Can do things like:
*Searching within a String
*Replacing parts of a String
*Changing case (upper/lowercase)

thing.method()

//Changing case
let msg = 'here we go';
let yelling = msg.toUpperCase(); // 'HERE WE GO'

//Trim 
let greet = '   GO AWAY     ';
greet.trim(); // 'GO AWAY'

//Some methods accept arguments that modify their behavior.
//Pass these arguments inside of the parentheses.
thing.method(arg)

//INDEX OF
let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)

//SLICE
let str = 'supercalifragilisticexpialidocious'
str.slice(0,5); // 'super'
str.slice(5); // 'califragilisticexpialidocious'

//REPLACE
let annoying = 'teehee thats funny teehee';
annoying.replace('teehee', 'haha'); // 'haha thats funny teehee'

'GARBAGE!'.slice(2).replace('B', ''); // 'RAGE!'

//STRING TEMPLATE LITERALS
//Template literals - strings that allow embedded expressions, 
//which will be evaluated and then turned into a resulting string

`I counted ${3 + 4} dogs`; // "I counted 7 dogs"
//Use back-ticks and not quotation!!!

let username = 'Ziggy31';
`Welcome back, ${username}` // "Welcome back, Ziggy31"
`GAME OVER ${username.toUpperCase()}` // "GAME OVER ZIGGY31"

let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
`You bought ${quantity} ${item}, total price: $${price * quantity}`// "You bought 4 cucumbers, total price: $7.96"


//NULL & UNDEFINED
*Null
    -"International absence of any value"
    - Must be assigned
*Undefined
    -Variables that do not have an assigned value are undefined

//NULL
// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing

// A user logs in...
loggedInUser = 'Alan Rickman';


//UNDEFINED
let pickles; //No value assigned 
pickles; //Undefined
pickles = 'are very gross'

//Undefined also comes up in other situations:
let food = 'tacos';
food[7]; //Undefined



//

