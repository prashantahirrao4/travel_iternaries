const rightCollaborate = document.querySelector('.right-collaborate');
const img1 = rightCollaborate.querySelector('.img1')
const img2 = rightCollaborate.querySelector('.img2')
const img3 = rightCollaborate.querySelector('.img3')
const img4 = rightCollaborate.querySelector('.img4')

const imgArrays = {img1, img2, img3, img4};


console.log(imgArrays);


function toggleImage1(){
    img2.classList.remove('displayImage');
    img3.classList.remove('displayImage');
    img4.classList.remove('displayImage');

    img2.classList.add('hideImage');
    img3.classList.add('hideImage');
    img4.classList.add('hideImage');

    img1.classList.remove('hideImage');

    img1.classList.add('displayImage');
}
function toggleImage2(){

    img1.classList.remove('displayImage');
    img3.classList.remove('displayImage');
    img4.classList.remove('displayImage');

    img1.classList.add('hideImage');
    img3.classList.add('hideImage');
    img4.classList.add('hideImage');

    img2.classList.remove('hideImage');

    img2.classList.add('displayImage');

}
function toggleImage3(){

    img1.classList.remove('displayImage');
    img2.classList.remove('displayImage');
    img4.classList.remove('displayImage');

    img1.classList.add('hideImage');
    img2.classList.add('hideImage');
    img4.classList.add('hideImage');

    img3.classList.remove('hideImage');

    img3.classList.add('displayImage');
}
function toggleImage4(){

    img1.classList.remove('displayImage');
    img2.classList.remove('displayImage');
    img3.classList.remove('displayImage');

    img1.classList.add('hideImage');
    img2.classList.add('hideImage');
    img3.classList.add('hideImage');

    img4.classList.remove('hideImage');

    img4.classList.add('displayImage');
}