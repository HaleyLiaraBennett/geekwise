
var navBtn = document.getElementById('navi');
var aside = document.getElementById('aside');

navBtn.addEventListener('click', toggleAside);

function toggleAside(){

  if( aside.classList.contains( 'hide-aside' )){
    aside.classList.remove( 'hide-aside' );
  }else{
    aside.classList.add( 'hide-aside' );
  }
}
