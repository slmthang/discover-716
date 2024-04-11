
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
    if (n > 13) {
        return n % 13;
    } else {
        return n;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

const genNums = function () {
    let num = getRandomInt(12);
    return [num, checkbound(num + 1) , checkbound(num + 2), checkbound(num + 3) , checkbound(num + 4), checkbound(num + 5)];
}

const thumbs = document.querySelectorAll("#thumbs .thumbs");
const thumbsMobile = document.querySelectorAll("#thumbs-mobile .thumbs");

const picsSlider = function () {
    const pics = genNums();

    if (window.innerWidth > 800) {
        for (let i = 0; i < thumbs.length; i++) {
            thumbs[i].setAttribute("src", `./img/homepage/thumbs/${pics[i]}.jpeg`);
        }
    } else {
        thumbsMobile[0].setAttribute("src", `./img/homepage/thumbs/${pics[0]}.jpeg`);
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


