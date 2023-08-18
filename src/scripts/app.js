"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

    var navBtn = document.querySelector(".nav__btn");
    var nav = document.querySelector(".nav");
    var titres = document.querySelectorAll("h2");
    var navLinks = document.querySelectorAll(".nav__link");

    navBtn.addEventListener("click", (e) => {
        nav.classList.toggle("nav--open");
    })

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            nav.classList.remove("nav--open");
        })
    });
    
    titres.forEach((titre) => {
        gsap.from(titre, { duration: .2, opacity: 0, x: -100, scrollTrigger: { trigger: titre, start: "bottom bottom" } });
    });

    for (let i = 0; i < titres.length - 1; i++) {
        ScrollTrigger.create({
            trigger: titres[i], start: "top bottom",

            onEnter: (e) => {
                navLinks.forEach((e) => {
                    e.classList.remove("nav__link--active");
                });
                navLinks[i].classList.add("nav__link--active");
            },

            onEnterBack: (e) => {
                navLinks.forEach((e) => {
                    e.classList.remove("nav__link--active");
                });
                navLinks[i].classList.add("nav__link--active");
            },

            onLeaveBack: (e) => {
                navLinks.forEach((e) => {
                    e.classList.remove("nav__link--active");
                });

                if (!i == 0) {
                    navLinks[i - 1].classList.add("nav__link--active");
                }
            }

        })
    };

    var head = document.querySelector("h1");

    gsap.from(head, { duration: 1, opacity: 0 });




