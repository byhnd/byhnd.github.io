document.addEventListener("DOMContentLoaded", function(event) {
window.addEventListener("load", function(e) {

gsap.registerPlugin(ScrollTrigger, CustomEase);

gsap.to("#preloader", {
 autoAlpha:0,
 opacity:0,
 duration:.5
});
	
const {
    createApp,
    ref,
    onMounted
} = Vue

createApp({
    methods: {
        afterEnter(el) {
            setupReveal(el);
        },

        afterLeave(el) {
            el.ctx && el.ctx.revert();
        }
    },	
data() {
        return {
            bg: 'bio'
        }
    }
}).mount('#app')  

gsap.set("nav", {
 opacity:0,
 y:-100
});
gsap.to("nav", {
 delay:5,
 duration:3,
 opacity:1,
 y:0,
 ease:"power2.out"
});
	
gsap.set("h1 span", {
 y:"-100%",
 opacity:0
});
gsap.to("h1 span", {
 delay:"random(0, .5)",
 duration:"random(.7, 1)",
 opacity:1,
 stagger:.05,
 y:0,
 ease:"Expo.easeInOut"	
});

gsap.set(".ball", {
 opacity:0,
 scaleY: 1,  
 transformOrigin: "center bottom"
});	
gsap.to(".ball", {
 delay:4.5, 
 opacity:1,
 duration:.7,
 top:0,  
 scaleY: 2,
 autoAlpha:1,
 ease: Back.easeOut.config(2.15)	
});
gsap.to(".ball", {
  scaleY: 1,
  duration: 2, 
  ease: "Elastic.easeOut"
}, "<+=.2");


gsap.set(".sub-title span", {
  opacity:0,
  perspective:400, 
  x: gsap.utils.random(-30, 30, true),
  y: gsap.utils.random(-50, -50, true),
  z: gsap.utils.random(0, 50, true),
  rotate: gsap.utils.random(-90,90, true)                    
});
gsap.to(".sub-title span", {
  delay:.3,
  duration:1, 
  opacity:1, 
  stagger:.03, 
  x:0,
  y:0,
  z:0, 
  rotate:0,
  ease:"power2.out"
});	       

function setupReveal(container) {	
 container.ctx = gsap.context(() => {	  
  	 
 const RevealSc = container.querySelectorAll(".sc");
   RevealSc.forEach((sc) => {                
    const pl = sc.querySelectorAll(".pl");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger:sc,
     toggleActions: "restart none none none"
     }, delay:.7
     }); 
tl.set(pl, {
opacity:0	
})
tl.to(pl, {
 clipPath: "circle(100%)",
 webkitClipPath:"circle(100%)",
 opacity:1,
 duration:6,
 ease:"power2.out"
        }); 
	   
   });
	 
 const RevealBoxs1 = container.querySelectorAll(".box1");
   RevealBoxs1.forEach((box1) => { 
    const one = box1.querySelectorAll(".one, .one span");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box1,
     toggleActions: "restart none none none"
     }, delay:.7
     }); 

tl.set(one, {
 opacity:0	
}) 
tl.to(one, {
 perspective:500,
 scaleY:0,
 y:"random(-70, 70)",
 rotateX: "random(-360, 360)",
 rotateY: "random(-360, 360)",  
 transformOrigin: "30% 50% -50"
});
tl.to(one, {
 scaleY:2	
});
tl.to(one, {	
 duration:2,
 opacity:1,
 scaleY:1,
 y:0,
 rotateX:0,
 rotateY:0,
 ease:"power2.out"	
});

});
	  
const RevealBoxs2 = container.querySelectorAll(".box2");
 RevealBoxs2.forEach((box2) => {
 const two = box2.querySelectorAll(".two, .two span");            
 const ln = box2.querySelectorAll(".line");                  
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box2,
  toggleActions: "restart none none none"
  }, delay: .7
  });                      
tl.set(two, {
 opacity:0	
})                                       
tl.to(two, {
 opacity:1,
 duration:3,	
 filter:"blur(0px)",	
 ease:"Circ.easeOut"
});   

tl.to(ln, {
 opacity: 1,
 duration: 1,	
 width: "100%",
 ease: "power2.out"
});	
	                                                                                                                  
});	

let revealContainers = container.querySelectorAll(".item");
 revealContainers.forEach((el) => {
 let image = el.querySelector("img");
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: el,
  toggleActions: "restart none none none"
  }, delay: .7
  });

  tl.set(el, {
   autoAlpha:1,
   opacity:0
   });
  tl.fromTo(el, {
   clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
   },
   {
   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   duration:2.5,     
   ease: "power2.out",
   opacity:1
   });
   tl.from(image, {
    duration:4,                   
    scale: 1.4,                     
    delay:.3,
    ease: "power2.out"
    }, 0);

	 
  });	
});
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

initBt1();
function initBt1() {
  var bt = document.querySelectorAll('#wtr')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
  
  bt.addEventListener('click', function(e) {
    tl = gsap.timeline({paused:true});
    tl.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 0, y: isFF ? e.offsetY : e.offsetY + 0, width: 0, height: 0 } }, 0);
    tl.to(turb, 3, { attr: { x: '-=300', y: '-=230', width: 600, height: 600 } }, 0);
    tl.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } }, 0);
    tl.restart();
  });
}

initBt2();
function initBt2() {
  var bt = document.querySelectorAll('#wtr2')[0];
  var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];
  
  bt.addEventListener('click', function(e) {
    tl = gsap.timeline({paused:true});
    tl.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 0, y: isFF ? e.offsetY : e.offsetY + 0, width: 0, height: 0 } }, 0);
    tl.to(turb, 3, { attr: { x: '-=300', y: '-=230', width: 600, height: 600 } }, 0);
    tl.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } }, 0);
    tl.restart();
  });
}

$('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})
	
}, false);
});
