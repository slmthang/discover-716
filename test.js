
const shrinkTopNav = function () {
    const navBar1 = document.getElementById("top-nav-bar1");
        const navBar2 = document.querySelector("#top-nav-bar2");
        const navBar2_img = document.querySelector("#top-nav-bar2 #logo img");
        const navBar2_ddNavMenu = document.querySelector("#top-nav-bar2 #dropdown-nav-menu");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        
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

window.onscroll = () => shrinkTopNav();