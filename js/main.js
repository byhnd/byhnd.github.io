document.addEventListener("DOMContentLoaded", function() {

var width = 100,
 perfData = window.performance.timing, 
 EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
 time = parseInt((EstimatedTime/1000)%60)*100;

$(".loadbar").animate({
  width: width + "%"
}, time);

var PercentageID = $("#precent"),
		start = 0,
		end = 100,
		durataion = time;
		animateValue(PercentageID, start, end, durataion);
		
function animateValue(id, start, end, duration) {
  
	var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");      
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

setTimeout(function(){
let percentBar = document.getElementById('precent');
let loadingBar = document.getElementById('loader');
const DOM = {};
DOM.intro = document.querySelector(".preloader-wrap");
DOM.shape = DOM.intro.querySelector("svg.shape");
DOM.path = DOM.intro.querySelector("path.goey");
	
let tl = gsap.timeline({
 onComplete: contentShow
});
  tl.to('.percentage', {
    autoAlpha:0,
    duration:1,
    delay:1,
    ease:"none",
    onComplete: () => {
     percentBar.style.display = 'none';
  tl.to('#loader', {
    autoAlpha:0,
    duration:1,
    clipPath: "inset(0 100% 0 100%)",
    ease: "quart.out",
    onComplete: () => {
      loadingBar.style.display = 'none';
      tl.to(DOM.intro, {
	y: "-200vh",
	delay: .1,
	duration: 2,
	ease: "quad.inOut"
		
	});
      gsap.to(DOM.path, {
	duration: 1.2,
	ease: "linear",
	attr: { d :  DOM.path.getAttribute("pathdata:id")}	
	});
	    
     } 	  
    })
  }
})
	
}, time); 


function contentShow() {
	
const easing = "expoScale(0.5,7,none)";
const dur = 1;
const once = "play none none reset";
	
gsap.registerPlugin(ScrollTrigger);
	
/*$('.one').each(function(){
  $(this).html($(this).text().replace(/\S/g, "<span>$&</span>"));
});*/

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

$('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})
	
Splitting();
	
const feBlur = document.querySelector(`#noise feGaussianBlur`);
const feDisplacementMap = document.querySelector(`#noise feDisplacementMap`);

let primitiveValues = { stdDeviation: 0, scale: 0 };
 
const tl = gsap.timeline({
    defaults: {
      duration: 2.5,
      ease: 'quint.out',
},
   
    onUpdate: function () {
      feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute('scale', primitiveValues.scale); 
    }
  })

tl.to(primitiveValues, { 
    startAt: { stdDeviation: 30, scale: 150 },  
    stdDeviation: 0,  
    scale: 0 
  }, 0)

.to("h1", {
    startAt: {
      opacity: 0, 
      autoAlpha:0,
      scale: 0.9      
    },
    opacity: 1,  
    autoAlpha:1,
    scale: 1 
  }, 0);

gsap.to(".sub-title", {
 autoAlpha:1, 
 opacity:1,
 duration:dur, 
 ease: easing
}, "<1");		
	
gsap.set('.indicator', {
 y:-100	
});
	
gsap.to('.indicator', {
 y:0,
 duration:dur,
 autoAlpha: 1,
 ease: easing,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1,
  y:0,
  ease: easing
 }, {
  autoAlpha: 0,
  y:-100,
  duration: dur,
  ease: easing,
  scrollTrigger: {
  scrub: 3,
  trigger: '.indicator',
  start: 'center 40%',
  end: 'center 70%'					
  }
 });
}
}, ">1");

(function () {

  const arrOpts = [    
    {
      direction: "bottom",
      duration: 1000,
      easing: "easeInExpo"
    },
    {
      direction: "bottom",
      duration: 1000,
      easing: "easeInExpo"
    }
  ];

  const items = document.querySelectorAll(".nav");

  items.forEach((el, pos) => {

    let bttn = el.querySelector("button.particles-button");
    if (!bttn) return; 
    let particlesOpts = arrOpts[pos];
    const particles = new Particles(bttn, particlesOpts);

let tl = gsap.timeline()

tl.to(items, {
 autoAlpha: 1,
 opacity:1
});
	  
window.addEventListener("click", () => {    
    
   tl.to(bttn, {
      autoAlpha: 1,    
      onComplete: () => {	
        particles.integrate({
          duration: 800,
          easing: "easeInOutSine"
        });

        gsap.to(bttn, {
          duration: 1,
          onComplete: () => {
            bttn.style.opacity = "1";
            bttn.style.visibility = "visible";
          }
        })
      }
    })     
   })
 
    tl.to(bttn, {
      autoAlpha: 0,
      onComplete: () => {
        particles.integrate({
          duration: 800,
          easing: "easeInOutSine"
        });

        gsap.to(bttn, {
          duration: 1,
          onComplete: () => {
            bttn.style.opacity = "1";
            bttn.style.visibility = "visible";
          }
        })
      }
    }, pos)  
 
    bttn.addEventListener("click", () => {
      particles.disintegrate();
    });       
     
  });
})();
	
gsap.to('.header', {  
 onComplete: () => {
  gsap.to(".header", {  
   yPercent:14,
   ease: "cubic.out",
   scrollTrigger: {
    scrub: 5,
    trigger: '.header',
    start: 'top top'
  }
  })
    }
});

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  lerp: 0.05,
  smooth: true,
  smoothTouch: true,
  smoothWheel: true,
  touchMultiplier: 2,
  wheelMultiplier: 2,
  infinite: false,
  autoResize: true
});

lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

	
function setupReveal(container) {
	
container.ctx = gsap.context(() => {	
	
const RevealBoxsme = container.querySelectorAll(".boxme");
   RevealBoxsme.forEach((boxme, a) => { 	   	   
    const aboutme = boxme.querySelectorAll(".aboutme");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: boxme,
     toggleActions: once
     }, delay:.3
     }); 

tl.set(aboutme, {
 y:50	
});	   
tl.to(aboutme, {
 autoAlpha: 1,
 opacity: 1,
 y:0,
 duration:dur,
 stagger:.07,
 ease: easing
}, a * .2);

});	  
	 
const RevealBoxs = container.querySelectorAll(".box");
   RevealBoxs.forEach((box, g) => { 	   	   
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
 duration:dur,	
 width:"100%",
 stagger:.07,
 ease:easing
}, g * .2);	

});	  
	 
const RevealBoxsline = container.querySelectorAll(".boxline");
   RevealBoxsline.forEach((boxline, l) => { 	   	   
    const line = boxline.querySelectorAll(".line");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: boxline,
     toggleActions: once
     }, delay:.3
     }); 
	   	   
tl.to(line, {
 autoAlpha: 1, 
 opacity: 1,
 duration: dur,	
 width: "100%",
 stagger: .07,
 ease: easing
}, l * .2);	

});	  
	 
const RevealBoxs1 = container.querySelectorAll(".box1");
RevealBoxs1.forEach((box1) => { 	
const one = box1.querySelectorAll(".one"); 
const feBlur = box1.querySelector(`#noise2 feGaussianBlur`);
const feDisplacementMap = box1.querySelector(`#noise2 feDisplacementMap`);
          
let primitiveValues = { stdDeviation: 0, scale: 0 };
 
const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: 'expo.out'
},
  
  onUpdate: () => {
      feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute('scale', primitiveValues.scale);
    },  
    
  scrollTrigger: {
      trigger: box1, 
     toggleActions: "play none none reset"
    }, delay:.3
  });

tl.to(primitiveValues, { 
    startAt: { stdDeviation: 35, scale: 250 },  
    stdDeviation: 0,  
    scale: 0 
  }, 0)

.to(one, { 
    duration: 1.3,
    startAt: {
      opacity: 0, 
      autoAlpha:0,
      scale: 0.8,
      yPercent: 20
    },
    opacity: 1, 
    autoAlpha:1,
    scale: 1,
    yPercent: 0  
  }, 0);

});


const rboxs = container.querySelectorAll(".rbox");
rboxs.forEach((rbox) => { 	
const one2 = rbox.querySelectorAll(".one2"); 
const feBlur = rbox.querySelector(`#noise3 feGaussianBlur`);
const feDisplacementMap = rbox.querySelector(`#noise3 feDisplacementMap`);
          
let primitiveValues = { stdDeviation: 0, scale: 0 };
 
const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: 'expo.out'
},
  
  onUpdate: () => {
      feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute('scale', primitiveValues.scale);
    },  
    
  scrollTrigger: {
      trigger: rbox, 
     toggleActions: "play none none reset"
    }, delay:.3
  });

tl.to(primitiveValues, { 
    startAt: { stdDeviation: 35, scale: 250 },  
    stdDeviation: 0,  
    scale: 0 
  }, 0)

.to(one2, { 
    duration: 1.3,
    startAt: {
      opacity: 0, 
      autoAlpha:0,
      scale: 0.8,
      yPercent: 20
    },
    opacity: 1, 
    autoAlpha:1,
    scale: 1,
    yPercent: 0  
  }, 0);

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
 y:50	
});	   
tl.to(two, {
 autoAlpha: 1,
 opacity: 1,
 y:0,
 duration: dur,
 stagger:.07,
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
 scaleY: 0
})
tl.to(quote, {
 ease: Expo.easeIn,
 autoAlpha:1,
 opacity: 1,
 scaleY: 1,
 stagger: 0.05
});
	 	                                                                                                                  
});
	 
const revealContainers = container.querySelectorAll(".item"); 
 revealContainers.forEach((el) => {
 let tl = gsap.timeline({ 
 scrollTrigger: {
  trigger: el,
  toggleActions: once
  }, delay:.3
 });

tl.to(el, {
    autoAlpha:1,
    "--x": "-98.75%",
    ease: "steps(39)",
    duration: 2
  });	 
	 	  
});

const items = container.querySelectorAll(".sc");
  items.forEach((soc) => {
    const item = soc.querySelectorAll(".item-soc");                              
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: soc,
        toggleActions: once
      }, delay: .3
    });

   tl.to(item, {
    autoAlpha:1,
    opacity:1,
    duration: 1
  });	  
          
})
        	 
const RevealBoxs4 = container.querySelectorAll(".box4");
 RevealBoxs4.forEach((box4) => {
 const footer = box4.querySelectorAll(".footer");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box4,
  toggleActions: once
 }, delay: .3
 });  

tl.to(footer, {
 autoAlpha:1, 
 opacity:1,
 duration:dur,
 ease: easing
}); 
		 	                                                                                                                  
});	
	 
});
	
}

}	
	
})
