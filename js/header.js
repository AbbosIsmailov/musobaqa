let nightLight = document.getElementById('night-light');
// let navLeftList = document.querySelector('.nav-left_list');
let navRightList = document.querySelector(".nav-right_list");
let modalOpenMedia = document.querySelector(".modal-open-media");

nightLight.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      nightLight.classList.toggle('night-btn');
})

let navRightLogin = document.querySelector('.nav-right_login');
navRightLogin.dataset.bsToggle = 'modal';
navRightLogin.dataset.bsTarget = '#staticBackdrop';


let faBars = document.querySelector(".fa-bars");
faBars.addEventListener("click", () => {
      modalOpenMedia.style.display = "block";
})

let modalBox = document.querySelector(".modal-box");
let mediaNightLight = document.getElementsByClassName("night-light")[1];
mediaNightLight.addEventListener("click", () => {
      document.body.classList.toggle('dark');
      mediaNightLight.classList.toggle('night-btn');
      modalBox.classList.toggle('modal-night');
})

let mediaLoginEnter = document.getElementById("media-login-enter");
mediaLoginEnter.addEventListener("click", () => {
      navRightList.style.display = "block";
})

let mediaCloseBox = document.querySelector(".media-close-box");
mediaCloseBox.addEventListener("click", () => {
      modalOpenMedia.style.display = "none";
      navRightList.style.display = "none";
})