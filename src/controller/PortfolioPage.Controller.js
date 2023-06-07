const coffeImagesPath = [
    '../../../../assets/img/img_c_1.png',
    '../../../../assets/img/img_c_2.png',
    '../../../../assets/img/img_c_3.png',
]

var coffeImagesPathIndex = 1; // start with next

function onClickNextCoffe() {
    if (coffeImagesPathIndex > coffeImagesPath.length - 1) {
        coffeImagesPathIndex = 0;
    }

    let image = document.getElementById('img-coffe');
    image.src = coffeImagesPath[coffeImagesPathIndex++];
}

const virginiaImagesPath = [
    '../../../../assets/img/img_v_1.png',
    '../../../../assets/img/img_v_2.png',
    '../../../../assets/img/img_v_3.png',
]

var virginiaImagesPathIndex = 1; // start with next

function onClickNextVirginia() {
    if (virginiaImagesPathIndex > virginiaImagesPath.length - 1) {
        virginiaImagesPathIndex = 0;
    }

    let image = document.getElementById('img-virginia');
    image.src = virginiaImagesPath[virginiaImagesPathIndex++];
}