// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});


// // --- RED PANEL ---
// gsap.from(".line-1", {
//   scrollTrigger: {
//     trigger: ".line-1",
//     scroller: ".smooth-scroll",
//     scrub: true,
//     start: "top bottom",
//     end: "top top",
//     onUpdate: self => console.log(self.direction)
//   },
//   scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });


// // --- ORANGE PANEL ---
// gsap.from(".line-2", {
//   scrollTrigger: {
//     trigger: ".orange",
//     scroller: ".smooth-scroll",
//     scrub: true,
//     pin: true,
//     start: "top top",
//     end: "+=100%"
//   },
//   scaleX: 0, 
//   transformOrigin: "left center", 
//   ease: "none"
// });


// // --- PURPLE/GREEN PANEL ---
// var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".purple",
//       scroller: ".smooth-scroll",
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "+=100%"
//     }
//   });

// tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
//   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
//   .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function navbarAnimation(){
    gsap.to("nav-part1 svg",{
    transform:"translateY(-100%)",
    ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})
gsap.to("nav-part2 #links",{
    transform:"translateY(-100%)",
    opacity0,
    ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})
} 
navbarAnimation();

function videoconAnimation(){
    var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter", function() {
   gsap.to(playbtn, {
       scale: 1,
       opacity: 1
   });
});
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove", function(e) {
    gsap.to(playbtn, {
        left: e.clientX - 70,
        top: e.clientY - 80,
        duration: 0.3, // Optional: adds smooth animation
        ease: "power2.out" // Optional: for a smoother effect
    });
});

}
videoconAnimation();

function loadinganimation(){
    gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.3,

})
}
loadinganimation();

// document.addEventListener("mousemove",function(dets){
//     gsap.to("#cursor",{
//         left:dets.x,
//         top:dets.y
//     })

// })

// document.querySelector("#child1").addEventListener("mouseenter", function() {
//     gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(1)'
//     });
// });

// document.querySelector("#child1").addEventListener("mouseleave", function() {
//     gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(0)'
//     });
// });

// var a=document.querySelectorAll(".child").forEach(function(elem) {
// elem.addEventListener("mouseenter",function(){
//             gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(1)'
//        });
//    });
// });

// var a=document.querySelectorAll(".child").forEach(function(elem) {
// elem.addEventListener("mouseleave",function(){
//             gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(0)'
//        });
//    });
// });


function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })

})
var a=document.querySelectorAll(".child").forEach(function(elem) {
elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor", {
    transform: 'translate(-50%,-50%) scale(1)'
       });
   });
});

var a=document.querySelectorAll(".child").forEach(function(elem) {
elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor", {
    transform: 'translate(-50%,-50%) scale(0)'
       });
   });
});
}
cursorAnimation();