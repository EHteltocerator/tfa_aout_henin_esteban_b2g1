"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(gsap.version);

var titres = document.querySelectorAll("h2");
var navLinks = document.querySelectorAll(".nav__link");

titres.forEach((titre) => {
    gsap.from(titre, {duration: .2, opacity: 0, x: -100, scrollTrigger: {trigger: titre, start: "bottom bottom"}});
});

for (let i = 0; i < titres.length; i++) {
    ScrollTrigger.create({trigger: titres[i], start: "top bottom",

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
    }

})
};

var head = document.querySelector("h1");

gsap.from(head, {duration: 1, opacity: 0});

