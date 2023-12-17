let homeMenu = document.querySelector("#startMenu");
let aboutMenu = document.querySelector("#aboutMenu");
let workMenu = document.querySelector("#workMenu");

homeMenu.addEventListener('click', () => {
    homeMenu.classList.toggle("blink");
    aboutMenu.classList.remove("blink");
    workMenu.classList.remove("blink");
})
aboutMenu.addEventListener('click', () => {
    aboutMenu.classList.toggle("blink");
    homeMenu.classList.remove("blink");
    workMenu.classList.remove("blink");
})
workMenu.addEventListener('click', () => {
    workMenu.classList.toggle("blink");
    homeMenu.classList.remove("blink");
    aboutMenu.classList.remove("blink");
})