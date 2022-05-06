gsap.registerPlugin(ScrollTrigger);

setInitAnimation(".title-contanier>span:nth-child(1)", 0, 50, 0.4, 0)
setInitAnimation(".title-contanier>span:nth-child(2)", 0, 50, 0.4, 0.25)
setInitAnimation(".title-contanier>span:nth-child(3)", 0, 50, 0.4, 0.5)
setInitAnimation("#contact-button", 0, 0, 0.3, 0.75)

setInitAnimation("#about-me-button", 0, 0, 0.6, 1.5)

setInitAnimation("#contact-button", 0, 0, 0.3, 0.75)

setScrollAnimation("#about-me-title", 0, 55, 0.4, 0.15)

setScrollAnimation("#paragraph-1", 0, 55, 0.4, 0.25)
setScrollAnimation("#paragraph-2", 0, 55, 0.4, 0.4)

setScrollAnimation("#dev-info-title", 0, 55, 0.4, 0.15)
setScrollAnimation("#paragraph-3", 0, 55, 0.4, 0.25)
setScrollAnimation("#paragraph-4", 0, 55, 0.4, 0.4)
setScrollAnimation("#paragraph-5", 0, 55, 0.4, 0.4)

setScrubAnimation("#showcase-1", 0, -200, 0, 0, 1, 0.4)
setScrubAnimation("#showcase-2", 0, 200, 0, 0, 1, 0.4)

setScrollAnimation("#projects-title", 0, 55, 0.4, 0.15)
setScrubAnimation("#showcase-4", 100, -100, 0, 0, 1, 0.1)
setScrubAnimation("#showcase-3", -100, 100, 0, 0, 1, 0.1)

setScrollAnimation(".project-card:nth-child(1)", 0, 55, 0.4, 0.1)
setScrollAnimation(".project-card:nth-child(2)", 0, 55, 0.4, 0.2)
setScrollAnimation(".project-card:nth-child(3)", 0, 55, 0.4, 0.3)
setScrollAnimation(".project-card:nth-child(4)", 0, 55, 0.4, 0.4)
setScrollAnimation(".project-card:nth-child(5)", 0, 55, 0.4, 0.5)
setScrollAnimation(".project-card:nth-child(6)", 0, 55, 0.4, 0.6)

setScrollAnimation("#contact-title", 0, 55, 0.4, 0.15)
setScrollAnimation(".contact-button:nth-child(1)", 0, 55, 0.4, 0.3)
setScrollAnimation(".contact-button:nth-child(2)", 0, 55, 0.4, 0.45)

setScrubAnimation("#showcase-1 .final", 0, -200, 0, 0, 1, 0.4)


function setInitAnimation(identifier, initialY, finalY, duration, delay) {
    gsap.fromTo(identifier, {
        y: finalY,
        opacity: 0
    }, {
        delay: delay,
        duration: duration,
        opacity: 1,
        y: initialY
    });
}

function setScrollAnimation(identifier, initialY, finalY, duration, delay) {
    gsap.fromTo(identifier, {
        y: finalY,
        opacity: 0
    }, {
        scrollTrigger: {
            scroller: "#main-page",
            trigger: identifier,
            markers: false,
            toggleActions: "restart none none reverse"
        },
        ease: "power1",
        delay: delay,
        duration: duration,
        opacity: 1,
        y: initialY
    });
}

function setScrubAnimation(identifier, initialX, finalX, initialY, finalY, initialOpcity, duration) {
    gsap.fromTo(identifier, {
        y: finalY,
        x: finalX,
        opacity: initialOpcity
    }, {
        scrollTrigger: {
            scroller: "#main-page",
            trigger: identifier,
            markers: false,
            scrub: true,
            toggleActions: "restart none reverse reverse"
        },
        ease: "power1",
        duration: duration,
        opacity: 1,
        y: initialY,
        x: initialX
    });
}