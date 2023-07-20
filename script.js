let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

window.onclick = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}

