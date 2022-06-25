// IIFE Function
// Stands for Inmediate Invoked Function Expresion

// Hamburger function
(function() {
    let navbar = document.querySelector("#navbar");
    let hamburger = document.querySelector("#hamburger");

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });
})() // <--- Don't forget to open and close parenthesis in IIFE functions


// Write the FullYear on Footer 
fullYear = new Date().getFullYear();

// Write the Full Year
let year = document.getElementById("year");
year.textContent = fullYear;

// Sticky navbar (There's another ways like the one show's in w3 Schools)
// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPosition;
    let isFixed = false;

    function updatePositon() {
        windowPosition = window.scrollY;
    }

    function onScroll() {

        updatePos();
    
        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove("open");

            navbar.classList.add("navbar-fixed");
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;
    
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()
