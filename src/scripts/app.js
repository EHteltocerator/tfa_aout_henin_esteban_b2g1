"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(gsap.version);

var titres = document.querySelectorAll("h2");

titres.forEach((titre) => {
    gsap.from(titre, {duration: .2, opacity: 0, x: -100, scrollTrigger: {trigger: titre, start: "top bottom"}});
});

var head = document.querySelector("h1");

gsap.from(head, {duration: 1, opacity: 0})
