// Thumbnails

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(imgs => imgs.addEventListener('click', imgClick));

function imgClick(e) {
    imgs.forEach(img => (img.style.outline = ''));
    imgs.forEach(img => (img.style.height = ''));

    //Changes current image to src of clicked image
    current.src = e.target.src;
    console.log(e.target.src);
    console.log(current.src);


    // Creates border around the selected thumbnail
    e.target.style.outline = "1px solid black";
    e.target.style.height = "85px";


}
