


let showIndex = 1;
displaySlides(showIndex);


let nextButton = document.getElementById("nextSlide");
let prevButton = document.getElementById("prevSlide");

nextButton.onclick = () => calShowIndex(1);
prevButton.onclick = () => calShowIndex(-1);


function calShowIndex(n) {
    displaySlides(showIndex += n);
}


function displaySlides(n) {

    let slides = document.querySelectorAll("#slides .slide");

    if (n > slides.length) {
        showIndex = 1;
    } else if (n < 1) {
        showIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[showIndex-1].style.display = "block";
}
