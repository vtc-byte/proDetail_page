const imgs = document.querySelectorAll('.img-select a')
const imgBtns = [...imgs];
let imgID = 1

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgID = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth =
    document.querySelector('.img-showcase img:first-child').clientWidth;

    const img_showcase = document.querySelector('.img-showcase');

    img_showcase.style.transform = `translateX(${- (imgID - 1) * displayWidth + 1}px)`
}

window.addEventListener('resize', slideImage)