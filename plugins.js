gsap.registerPlugin(ScrollTrigger);

let profile = document.getElementById("profile")
let profile_anim = document.querySelector(".profile-summary")
let tag3 = document.querySelector(".profile .tag3")
gsap.to(profile, {
    x: -1050,
    duration: 0.6,
    scrollTrigger: {
        trigger: tag3,
        start: "top 70"
    }
})
gsap.to(profile_anim, {
    x: -1050,
    duration: 1,
    scrollTrigger: {
        trigger: tag3,
        start: "top 30"
    }
})

let skill_logo = document.getElementById("background-text1")
let a_anim = document.getElementById("a")
let b_anim = document.getElementById("b")
let c_anim = document.getElementById("c")
let d_anim = document.getElementById("d")
let e_anim = document.getElementById("e")
let f_anim = document.getElementById("f")

gsap.to(skill_logo,  {
    x: -1400,
    duration: 3,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 80"
    }
})

gsap.to(a_anim,  {
    x: -1050,
    duration: 0.7,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 70"
    }
})

gsap.to(b_anim,  {
    x: -1050,
    duration: 0.9,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 70"
    }
})

gsap.to(c_anim,  {
    x: -890,
    duration: 1.2,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 70"
    }
})

gsap.to(d_anim,  {
    x: -740,
    duration: 1.8,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 70"
    }
})

gsap.to(e_anim,  {
    x: -740,
    duration: 2.0,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 70"
    }
})

gsap.to(f_anim,  {
    x: -890,
    duration: 1.4,
    scrollTrigger: {
        trigger: profile_anim,
        start: "top 70"
    }
})

let edu_logo = document.getElementById("background-text2")

gsap.to(edu_logo,  {
    x: 850,
    duration: 2,
    scrollTrigger: {
        trigger: c_anim,
        start: "top 40"
    }
})

let empty = document.getElementById('empty')
let port_logo = document.getElementById("background-text3")

gsap.to(port_logo,  {
    x: -1400,
    duration: 2,
    scrollTrigger: {
        trigger: empty,
        start: "top 30"
    }
})

// let slider = document.querySelector(".slider")
let service_span = document.querySelector(".service span")
let service_div = document.querySelector(".service div")
let service_btn = document.querySelector(".service .btn")
gsap.to(service_span,  {
    x: -700,
    duration: 0.8,
    scrollTrigger: {
        trigger: empty,
        start: "top 10"
    }
})
gsap.to(service_div,  {
    x: -680,
    duration: 1,
    scrollTrigger: {
        trigger: empty,
        start: "top 10"
    }
})
gsap.to(service_btn,  {
    x: -680,
    duration: 1.2,
    scrollTrigger: {
        trigger: empty,
        start: "top 10"
    }
})