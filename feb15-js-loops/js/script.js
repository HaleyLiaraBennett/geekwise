var myArr = ['red', 'orange', 'yellow'];
var empty = [];
var addbtn = document.getElementById('add');
var rembtn = document.getElementById('remove');

addbtn.addEventListener('click', function(){
    alert('SONIC UNDERGROUND');
    color();
});
rembtn.addEventListener('click', function(){
    alert('KISS KISS FALL IN LOVE');
    // var re = /ab+c/;
    // console.log(re);
    //
    // var myRe = /d(b+)d/g;
    // var myArray = myRe.exec('cdbbdbsbz');
    // console.log(myArray);
});

function color(){
  var userColor = prompt('Fav COLOR PLS');
  if( userColor !== null && userColor.trim() !== ''){
    alert(nope);
    var userColorCheck = userColor.toLowerCase().trim();
    console.log( userColor );
    console.log( parseInt(userColor) );
    console.log( isNaN(parseInt(userColor)) );
    if( !isNaN(parseInt(userColor)) ){
      askForColor();
    }else{
      askForColor();
    }else{
    alert('');
   }


  // if( !isNaN(parseInt(userColor))){
  //   alert('Get outta here bozo');
  //   color();
  // }else if(userColor === ''){
  //   alert('blank');
  // }else{
  //   alert('int there a clown named bozo');
// }


  // KISS KISS FALL IN LOVE
  // if( !isNaN(parseInt(userColor)) ){
  //   alert('ldkmmgk;dm;;');
  // }else{
  //   alert('Get outta here');
  // }
}

// .trim();
// .pop();
// .shift();
// .splice();
// .unshift();
// .slice();
// .sort();
