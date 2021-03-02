




// popup menu 


let popUp = document.getElementById("popup-menu");
let popUpBtn = document.getElementById("popup-btn");

popUpMenu = () => {
  popUp.classList.toggle('block')
}

popUpBtn.addEventListener('click', popUpMenu);