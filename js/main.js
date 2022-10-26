let imgs = Array.from(document.querySelectorAll('.item img'));
console.log(imgs);
let backGround = document.querySelector('.background');
let bgImg = document.querySelector('.bg-img');
let left = document.querySelector('.fa-arrow-left');
let right = document.querySelector('.fa-arrow-right');
let xMark = document.querySelector('.fa-xmark');
let imgArray;
console.log(backGround);
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function(e) {
        backGround.classList.remove('d-none');
        var getSrc = e.target.getAttribute('src');
        bgImg.style.backgroundImage = `url(${getSrc})`;


        imgArray = imgs.indexOf(e.target);




    })
}
xMark.addEventListener('click', function() {
    backGround.classList.add('d-none');

})

right.addEventListener('click', function(e) {
    imgArray++
    if (imgArray > imgs.length - 1) {
        imgArray = 0

    }


    var src = imgs[imgArray].getAttribute('src');
    bgImg.style.backgroundImage = `url(${src})`;

})


left.addEventListener('click', function(e) {
    imgArray--
    if (imgArray < 0) {
        imgArray = imgs.length - 1

    }


    var src = imgs[imgArray].getAttribute('src');
    bgImg.style.backgroundImage = `url(${src})`;

})
