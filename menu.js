document.addEventListener('DOMContentLoaded', () => {

    let openMenu = document.getElementById("menu");
    let closeMenu = document.getElementById("close");
    let side = document.querySelector('.side');

    openMenu.addEventListener('click', () => {
        closeMenu.classList.add('active');
        openMenu.style.display = 'none';
        side.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        closeMenu.classList.remove('active');
        openMenu.style.display = 'inline-block';
        side.classList.remove('active');
    });

    let startMenu = document.querySelector(".home-menu");
    let aboutMenu = document.querySelector(".about-menu");
    let portMenu = document.querySelector(".portfolio-menu");
    let contMenu = document.querySelector(".contact-menu");

    let arr = [startMenu, aboutMenu, portMenu, contMenu];

    arr.forEach(e => {
        e.addEventListener('click', () => {
            closeMenu.classList.remove('active');
            openMenu.style.display = 'inline-block';
            side.classList.remove('active');
        })
    })
});

