// var students = ['Marisa', 'David', 'Matt', 'Micaela', 'Osvaldo', 'Rose', 'Alfredo', 'Rigoberto', 'Leonardo', 'Gustavo', 'Eric', 'Kevin', 'Montgomery', 'Cobi', 'Joshua'];

// function randomStudent(){
//   var numStudents = students.length;
//   var randStudent = Math.ceil(Math.round(Math.random() * numStudents)) - 1;
//   alert(students[randStudent]);
// }
// randomStudent();

// var fruits = ['Banana', 'Star-fruit', 'strawberry', 'Coconut', 'pears', 'kiwi', 'persimmon', 'peach', 'cherries'];
//
// console.log(fruits);
//
// //push - adds to the end of the array
// fruits.push('cherries');
// console.log(fruits);
//
// //pop - removes from the end of an array
// fruits.pop();
//
// //unshift - add to the front of an array
// fruits.unshift('shark');
// console.log(fruits);
//
// //shift - removes from the front of the array
// var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);
//
// //IndexOf -  finds the index of an item in an array
// var posFruit = fruits.indexOf('kiwi');
// console.log(posFruit);
//
// //Splice - remove an item by index number
// var remFruit = fruits.splice(1, 5);
// console.log(remFruit);
// console.log(fruits);
//
// //Slice - copies an array
// var copyFruit = fruits.slice(1, 5);
// console.log(copyFruit);
// console.log(fruits);

var ame = ['Haley', 'Math'];

ame.unshift('English', 'Auto');
ame.push('Biology', 'Spanish');
// var remame = ame.splice(0, 5);
var alpha = ame.sort();

console.log(ame);
console.log(alpha);
