var dist = document.querySelector("#meter li:nth-child(1) span"),
    winW = document.querySelector('#meter li:nth-child(2) span'),
    winH = document.querySelector('#meter li:nth-child(3) span'),
    hero = document.querySelector('header'),
    heroH = document.querySelector('#meter li:nth-child(4) span'),
    sec1 = document.querySelector('section:nth-child(1)');

dist.textContent = dist;
winW.textContent = window.innerWidth;
winH.textContent = window.innerHeight;
heroH.textContent = hero.clientHeight;
sec1Height = 0;


window.addEventListener('resize', function(){
  winW = window.innerWidth;
  winH = window.innerHeight;
  heroH = hero.clientHeight;
  sec1Height = 0;
  winW.textContent = window.innerWidth;
  winH.textContent = window.innerHeight;
  heroH.textContent = hero.clientHeight;

  if (winH.innerHeight > sec1.offsetTOP){
    sec1.classList.add('visible');
  }
});
console.log(window);
var dist = 0;
window.addEventListener('scroll', function(){
  dist = window.scrollY;
  distance.textContent = dist;
});
