

// slideshow welcome
let changeIntroIndex = 0;
const intro_imgs = document.querySelectorAll("#intro-message img");

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

// changeIntro
setInterval(changeIntro, 4500);



// HomePagePicsSlider
const checkbound = function (n) {
    if (n == 8) {
        return 1;
    } else if (n == 9) {
        return 2;
    } else {
        return n;
    }
}

function getRandomInt(max) {
    return Math.floor((Math.random() * max)) + 1;
}

const genNums = function () {
    let num = getRandomInt(7);
    return [num, checkbound(num + 1) , checkbound(num + 2)];
}



const thumbs1 = document.querySelectorAll("#thumbs1 .thumbs");
const thumbs2 = document.querySelectorAll("#thumbs2 .thumbs");

const picsSlider = function () {
    const pics = genNums();

    for (let i = 0; i < thumbs1.length; i++) {
        thumbs1[i].setAttribute("src", `./img/homepage/thumbs1/${pics[i]}.jpeg`);
        thumbs2[i].setAttribute("src", `./img/homepage/thumbs2/${pics[i]}.jpeg`);
    }

    for (let i = 0; i < thumbs2.length; i++) {
        
    }
}

// picsSlider()
setInterval(picsSlider, 4500);


    





