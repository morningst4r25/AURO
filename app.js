/* =====================================
   AURO V3
   app.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Loader
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 700);

    });

    /* ==========================
       Navbar Scroll Effect
    ========================== */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(255,255,255,.96)";
            navbar.style.backdropFilter = "blur(14px)";
            navbar.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";

            document.querySelectorAll("nav a").forEach(link => {

                link.style.color = "#222";

            });

        } else {

            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";

            document.querySelectorAll("nav a").forEach(link => {

                link.style.color = "#ffffff";

            });

        }

    });

    /* ==========================
       Reveal Animation
    ========================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card,.intro,.cta")
        .forEach(item => observer.observe(item));

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll("a[href^='#']").forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ==========================
       Mobile Menu
    ========================== */

    const button = document.getElementById("menuButton");

    const nav = document.querySelector("nav");

    button.addEventListener("click",()=>{

        nav.classList.toggle("mobile-open");

    });

});
