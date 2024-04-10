
/******************** SLIDESHOW WELCOME IMAGE ********************/

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

// changeIntro()
setInterval(changeIntro, 4500);

/************************************************************/



/******************** About Us Pictures Slider ********************/

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

/************************************************************/



/******************** SHRINK NAV BAR ********************/

const shrinkTopNav = function () {
    const navBar1 = document.getElementById("top-nav-bar1");
        const navBar2 = document.querySelector("#top-nav-bar2");
        const navBar2_img = document.querySelector("#top-nav-bar2 .logo img");
        const navBar2_ddNavMenu = document.querySelector("#top-nav-bar2 #dropdown-nav-menu");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        
        // navBar1
        navBar1.style.height = "2rem"; 

        // navBar2
        navBar2.style.height = "6rem";

        // navBar2_img
        navBar2_img.style.width = "60%";
        navBar2_img.style.height = "60%";

        // navBar2_ddNavMenu
        navBar2_ddNavMenu.style.height = "2rem";

    } else {
        // navBar1
        navBar1.style.height = "3rem"; 

        // navBar2
        navBar2.style.height = "10rem";

        // navBar2_img
        navBar2_img.style.width = "1000%";
        navBar2_img.style.height = "1000%";

        // navBar2_ddNavMenu
        navBar2_ddNavMenu.style.height = "3rem";
    }
}

// shrinkTopNav()
// window.onscroll = () => shrinkTopNav();

/************************************************************/


