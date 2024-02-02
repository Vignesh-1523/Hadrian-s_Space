let items = document.querySelectorAll('.bg-item');
let nextbtn = document.getElementById('nextbtn');
let prevbtn = document.getElementById('prevbtn');
let thumbnails = document.querySelectorAll('.item');


let countItem = items.length;
let itemActive = 0;
// event next click
nextbtn.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prevbtn.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    nextbtn.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.bg-item.active');
    let thumbnailActiveOld = document.querySelector('.item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        nextbtn.click();
    }, 10000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})