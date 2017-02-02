/*
var externalJvascript = 'wha da actual heck';
 ^        ^           ^         ^
KEYWORD NAME     ASSIGNEMENT   VALUE
                  OPERATOR
*/

var camelCase;
var not_camel_case;
var camel_Case;
var $dollarCase;
var dollar$case;

// can't do
/*
 var 1stvariable;
var var;
var CamelCase;
var SUPERUPPERCASE; //dont do it bitch

JAVASCRIPT OBJECTS
  number
  boolean
  float
  array
  objects
  string
*/

var myNumberObject = 3;
var myNewNumberObject = myNumberObject.toString();
//type log and press tab
// console.log(myNumberObject);
// console.log(myNewNumberObject);
var myStringObject = "This is a string object";
var myOtherStringObject = 'This is also a string object';
//var myNonworkingStringObject = 'This wont work";
//var myPoorGrammer = 'David's Basketball';
var myCorrectGrammer = "David's Basketball";
var myOtherCorrectPoorGrammer = 'David\'s Basketball'
console.log(myStringObject, myOtherStringObject);

//BOOLEAN object
var myBooleanTrue = false; // false = 0
var myBooleanFalse = true; // true = 1

//FLOAT OBJECT
var myFloatObject = 3.1;

//ARRAY OBJECT (identified with square brackets)
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];
//console.log(myArrayObject[3]);

//OBJECT OBJECT (identified with curly brackets)
var myObjectObject = {
  make: 'jeep',
  model: 'wranlger',
  color: 'black',
  year: 2014,
  howdy: function(){
    alert(this.make);
  }
};

//console.log(myObjectObject);

//JAVASCRIPT MATH
var a = 5;
var b = 10;
var c = a + b;

//console.log(c);
var d = a - b;
var e = a * b;
var f = a / b;
console.log(d, e, f);

var g = a % b;
console.log(g);
