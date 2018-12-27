// Thumbnails

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(imgs => imgs.addEventListener('click', imgClick));

// Function for thumbnails on slideshow
function imgClick(e) {

    // Removes outline on selected image for slideshow
    imgs.forEach(img => (img.style.outline = ''));

    //Changes current image to src of clicked image
    current.src = e.target.src;
    console.log(e.target.src);
    console.log(current.src);

    // Creates border around the selected thumbnail
    e.target.style.outline = "1px solid black";
}
