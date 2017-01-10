var sn0pen = document.getElementById("sn-open"),
    sn = document.getElementById("sn"),
    snClose = document.getElementById("sn-close");

sn0pen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);

function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}
