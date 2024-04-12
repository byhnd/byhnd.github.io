document.addEventListener("DOMContentLoaded", function(event) {
window.addEventListener("load", function(e) {

		
let tl = gsap.timeline({	
 onComplete: contentShow
});

tl.to(".spintext", {
 opacity:0
})
tl.to(".spin", {
 opacity:0
}, .7)
	
tl.to(".textload span", {
 autoAlpha:1,
 opacity:1,
 duration:1,
 stagger:.07,
 delay:"random(0, 1)",
 duration:"random(1, 2)",
 ease:"quad.out"
})
	
tl.to(".textload span", {
 autoAlpha:0,
 opacity:0,
 y:150,
 rotation:gsap.utils.wrap([-180, 180]),
 delay:"random(0, 1.5)",
 duration:"random(.7, 2)",
 stagger:.07,
 ease:"expo.inOut"
}); 

tl.to(".col1", {
 duration:.8,
 yPercent:-100,
 ease:"power2.out"
}, ">"); 

tl.to(".col2", {
 yPercent:-100,
 duration:.8,
 ease:"power2.out"
}, "-=.7"); 
    
tl.to(".col3", {
 yPercent:-100,
 duration:.8,
 ease:"power2.out"
}, "-=.68");
	
tl.to(".col4", {
 yPercent:-100,
 duration:.8,
 ease:"power2.out"
}, "-=.66"); 
	
tl.to(".col5", {
 yPercent:-100,
 duration:.8,
 ease:"power2.out"
}, "-=.64"); 

	
function contentShow() {
	
gsap.registerPlugin(ScrollTrigger);
	
$('.one').each(function(){
  $(this).html($(this).text().replace(/\S/g, "<span>$&</span>"));
});

$('.quote').each(function(){
  $(this).html($(this).text().replace(/\S/g, "<span>$&</span>"));
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

Splitting();

const easing = "sine.out";
const once = "play none none reset";

$('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})
	
gsap.set("wnav", {
 scaleX:0
});	
gsap.to("wnav", {
 autoAlpha:1, 
 opacity:1,
 delay:3.5,
 duration:2, 
 scaleX:1,
 ease: "expo.inOut",
 transformOrigin: "center center"
});

gsap.set("nav", {
 scaleY:0
});
gsap.to("nav", {
 autoAlpha:1, 
 opacity:1,
 duration:2, 
 scaleY:1,
 ease: "expo.inOut",
 transformOrigin: "center center"
}, "+=1");
	
gsap.set("h1, h1 .char", { 
 y:100,
 rotationY:100
});
gsap.to("h1, h1 .char", {
 autoAlpha:1, 
 opacity:1,
 duration:1,
 stagger:.06,
 rotationY:0,
 y:0,
 scale:1.0,
 transformOrigin: "center center",
 ease:easing	
}); 
			
gsap.set(".sub-title, .sub-title .char", {
 x: () => gsap.utils.random(-200, 200), 
 y: () => gsap.utils.random(-150, 150)
});
gsap.to(".sub-title, .sub-title .char", {
 autoAlpha:1,
 opacity: 1,
 duration:2,
 x: 0,
 y: 0,
 ease: "quad.inOut",
 stagger: { each: 0.05, grid: 'auto', from: 'random'}
});

gsap.set('.indicator', {
 y:-100	
});
	
gsap.to('.indicator', {
 y:0,
 delay:4.2,
 duration:2,
 autoAlpha: 1,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1,
  y:0
 }, {
  autoAlpha: 0,
  y:-100,
  duration: 2,
  scrollTrigger: {
  scrub: 3,
  trigger: '.indicator',
  start: 'center 40%',
  end: 'center 70%'					
  }
 });
}
});

	
function setupReveal(container) {	
 container.ctx = gsap.context(() => {	
	 
const RevealSc = container.querySelectorAll(".sc");
   RevealSc.forEach((sc) => {                
    const pl = sc.querySelectorAll(".pl");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger:sc,
     toggleActions: once
     }, delay:.3
     }); 

tl.to(pl, {
 autoAlpha:1,
 opacity:1,
 duration:1,     
 ease:easing
});
	   
});

const RevealBoxs = container.querySelectorAll(".box");
   RevealBoxs.forEach((box) => { 	   	   
    const gr = box.querySelectorAll(".gr");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box,
     toggleActions: once
     }, delay:.3
     }); 
	   	   
tl.to(gr, {
 autoAlpha:1, 
 opacity:1,
 duration:1,	
 width:"100%",
 ease:easing
});	

});	  

	 
const RevealBoxs1 = container.querySelectorAll(".box1");
   RevealBoxs1.forEach((box1) => { 	   	   
    const one = box1.querySelectorAll(".one, .one span");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box1,
     toggleActions: once
     }, delay:.3
     }); 
	   
tl.set(one, { 
 transformOrigin: '50% 100%',
 scaleY: 0
})
tl.to(one, {
 autoAlpha: 1,
 opacity: 1,
 duration: 1,
 scaleY: 1,
 stagger: 0.08,
 ease: 'quart.in'
});
	   
});

	 
const RevealBoxs2 = container.querySelectorAll(".box2");
 RevealBoxs2.forEach((box2, i) => { 	   	   
 const two = box2.querySelectorAll(".two");
 let tl = gsap.timeline({
  scrollTrigger: {
   trigger: box2,
   toggleActions: once
   }, delay:.3
   }); 	  
	   
tl.set(two, { 
 y:100
})
tl.to(two, {
 autoAlpha: 1,
 opacity: 1,
 duration: 1,
 y: 1,
 stagger: .2,
 ease: easing
}, i * .2);
	   
});      
      
	 
const RevealBoxs3 = container.querySelectorAll(".box3");
 RevealBoxs3.forEach((box3) => {
 const quote = box3.querySelectorAll(".quote, .quote span");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box3,
  toggleActions: once
 }, delay: .3
 });  
	 
tl.set(quote, {
 transformOrigin: '50% 100%',
 scaleY: 0
})
tl.to(quote, {
 autoAlpha:1,
 opacity: 1,
 scaleY: 1,
 stagger: 0.05,
 ease: 'quart.in'
});
	 	                                                                                                                  
});

	 
const revealContainers = container.querySelectorAll(".item"); 
 revealContainers.forEach((el) => {
 const image = el.querySelectorAll("img");
 let tl = gsap.timeline({ 
 scrollTrigger: {
  trigger: el,
  toggleActions: once
  }, delay:.3
 });

tl.set(el, {
 autoAlpha: 1,
 scale:0
})	 
tl.to(el, {
 scale:1,
 duration: 1.5,
 delay: gsap.utils.random(.3, 1),
 ease: easing
});  
 
});
	
	 
const RevealBoxs4 = container.querySelectorAll(".box4");
 RevealBoxs4.forEach((box4) => {
 const footer = box4.querySelectorAll(".footer");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box4,
  toggleActions: once
 }, delay: .3
 });  

tl.set(footer, {
 y:-50
})
tl.to(footer, {
 autoAlpha:1, 
 opacity:1,
 y:0,
 duration:1,
 ease: easing
}); 
		 	                                                                                                                  
});	
	 
});
}

	
}


}, false);
});
