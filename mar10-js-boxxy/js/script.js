var winW = document.querySelector('.boxx li:nth-child(1) span'),
    winH = document.querySelector('.boxx li:nth-child(2) span');

var winWid = window.innerWidth;
var winHei = window.innerHeight;

    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;

window.addEventListener('resize', function(){
  winWid = window.innerWidth;
  winHei = window.innerHeight;

  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
});

var form = document.querySelector('form'),
    color = document.querySelector('input[type = "text"]'),
    subBtn = document.querySelector('input[type="submit"]');

subBtn.addEventListener('click', function(evt){
      evt.preventDefault();
}

///I TRIED BUT I DONT UNDERSTAND ANyTHINGGGGG????///


// window.addEventListener('resize', function(){
      // winW = window.innerWidth;
      // winH = window.innerHeight;

//       winW.textContent = window.innerWidth;
//       winH.textContent = window.innerHeight;
//       myWidth = document.body.clientWidth;
// myHeight = document.body.clientHeight;
// });

// window.onresize = function() {
//   winW = window.innerWidth;
//   winH = window.innerHeight;
// }

// var halp = (window, "resize", function(event) {
//   console.log('resized');
// });
//
// console.log(event);
