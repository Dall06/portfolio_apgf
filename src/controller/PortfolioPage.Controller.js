const coffeImagesPath = [
    '../../../../assets/img/img_c_1.png',
    '../../../../assets/img/img_c_2.png',
    '../../../../assets/img/img_c_3.png',
]
const virginiaImagesPath = [
    '../../../../assets/img/img_v_1.png',
    '../../../../assets/img/img_v_2.png',
    '../../../../assets/img/img_v_3.png',
]

function onClickNextCoffe() {
    let image = document.getElementById('img-coffe');
    // Get the current image source
    let currentSrc = image.src;
    // Find the index of the current image path in the list
    let currentIndex = coffeImagesPath.indexOf(currentSrc);
    // Calculate the index of the next image in the list
    let nextIndex = (currentIndex + 1) % coffeImagesPath.length;

    
}

function onClickNextVirginia() {
    var image = document.getElementById('img-virginia');
    // Get the current image source
    var currentSrc = image.src;
    
    // Find the index of the current image path in the list
    var currentIndex = virginiaImagesPath.indexOf(currentSrc);
    
    // Calculate the index of the next image in the list
    var nextIndex = (currentIndex + 1) % virginiaImagesPath.length;
    
    // Set the source of the image to the next image path
    image.src = virginiaImagesPath[nextIndex];
}