// var add = document.getElementById('add');
// var rem = document.getElementById('remove');
// var userNameArray = [];
var moviesArray = ['The Grudge', 'Jurassic World', 'Inuyasha: The movie', 'Akira', 'Monty Python and the Holy Grail', 'Killer klowns from Outer Space'];

// add.addEventListener('click', plsName);
//
// rem.addEventListener('click', function(){
//   alert('Macbeths head has been removed');
// });
//
// function populateArray(un){
//   userNameArray.push(un);
//   console.log(userNameArray);
//   if(userNameArray.length >=5){
//     outputArray();
//   }
// }

for(var i = 0; i < moviesArray.length; i++){
  console.log(moviesArray[i]);
}
function moviePrint(e, i){
  console.log(i + ' : ' + e);
}

// function outputArray(){
//   userNameArray.forEach(function(el,idx){
//     console.log(idx + ' : ' + el);
//   });
// outputArray();
//   //FOR LOOP
//   // for( var i = 0; i < userNameArray.length; i++){
//   //   console.log(userNameArray[i]);
//   // }
// }
//
// function plsName(){
//   var userName = prompt('Who killed Macbeth');
//   if(userName === null){
//     alert('PUT YOUR DAMN NAME HERE GOSH');
//     return;
//   }
//   var parsedName = parseInt(userName);
//   var userNameNaN = isNaN(parseInt(userName));
//   var userNameBlank = userName.trim() === '';
//   // console.log('original ' + userName);
//   // console.log('parsed ' + parsedName);
//   // console.log('is it NaN ' + userNameNaN);
//   // console.log('not blank? ' + userNameBlank);
//
//   if(
//      userNameNaN === false &&
//      userNameBlank === false ||
//      userNameNaN === true &&
//      userNameBlank === true
//    ){
//      alert('bad info boi');
//    }else{
//      populateArray(userName);
//    }
// }
