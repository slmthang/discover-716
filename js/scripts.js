


// let showIndex = 1;
// displaySlides(showIndex);


// let nextButton = document.getElementById("nextSlide");
// let prevButton = document.getElementById("prevSlide");

// nextButton.onclick = () => calShowIndex(1);
// prevButton.onclick = () => calShowIndex(-1);


// function calShowIndex(n) {
//     displaySlides(showIndex += n);
// }


// function displaySlides(n) {

//     let slides = document.querySelectorAll("#slides .slide");

//     if (n > slides.length) {
//         showIndex = 1;
//     } else if (n < 1) {
//         showIndex = slides.length;
//     }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[showIndex-1].style.display = "block";
// }



// slideshow welcome
let changeIntroIndex = 0;
const intro_imgs = document.querySelectorAll("#intro-message img");

// intro_imgs[0].style.display="none"; 
// intro_imgs[1].style.display="block";


// console.log(intro_imgs[0].style);

function changeIntro() {

    let n = changeIntroIndex;

    if (n == 0) {
        changeIntroIndex = 1;
    } else {
        changeIntroIndex = 0;
    }

    intro_imgs[n].style.display = "none";
    intro_imgs[changeIntroIndex].style.display = "block";    
}

setInterval(changeIntro, 4000);


