"use strict";

import { gsap } from "gsap/dist/gsap";

console.log(gsap.version);

var titres = document.querySelectorAll("h2");

titres.forEach((titre) => {
    gsap.from(titre, {duration: .2, opacity: 0, x: -100, ScrollTrigger});
})
