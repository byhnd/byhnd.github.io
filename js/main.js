gsap.registerPlugin(ScrollTrigger);
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
mounted: function() {   

gsap.from("nav",  {        
            delay: 2,
            duration: 2,
            opacity: 0,
            y: "-3rem",
            filter: "blur(10px)",
            ease: "Bounce.easeInOut"
        }); 
	    
gsap.set("h1 span", {	     
	opacity: 0, 
	filter: "blur(10px)",
	scaleY: 2, 
	yPercent: 60, 
	transformOrigin: "50% 0%"
});
gsap.to("h1 span", {
	delay: 4,	
	duration: .7,
	stagger: .1,
	ease: Back.easeOut.config(2.15),
	yPercent: 0
});
gsap.to("h1 span", {
	duration: 3,
	stagger: .1,
	filter: "blur(0px)",
	ease: "Elastic.easeOut",
	opacity: 1,
	scaleY: 1
}, "<+=0.2");

gsap.set(".ball", {	     
  opacity: 0, 
  scaleY: 1,  
  transformOrigin: "50% 0"
});	
gsap.to(".ball", {
  duration: .7,
  scaleY: 2,
  ease: Back.easeOut.config(2.15),
});
gsap.to(".ball", {
  top: 0, 
  delay: 7, 
  opacity: 1, 
  filter: "blur(0px)",
  scaleY: 1,
  duration: 3, 
  ease: "Elastic.easeOut"
}, "<+=0.2");
                         
gsap.from(".sub-title", {
            delay: 6,
            duration: 1,
            opacity: 0,         
            y: "3rem", 
            stagger: {
            amount: 1
          },
            filter: "blur(10px)",
            ease: "Quad.easeOut"
        });        
},                          
    data() {
        return {
            bg: 'bio'
        }
    }
}).mount('#app')   

function setupReveal(container) {
  container.ctx = gsap.context(() => {
       	       			    	  	    	 	    	    	   	    	    	    	 	  	    
        const RevealBoxs1 = container.querySelectorAll(".box1");
        RevealBoxs1.forEach((box1) => {
                
        const one = box1.querySelectorAll(".one, .one span");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: box1,
            toggleActions: "restart none none none"
          }, delay: .5
            }); 
                        
            tl.from(one, {
            duration: .7,           
            opacity: 0,             
            y: "-3rem",
            filter: "blur(10px)",           
            ease: "Quad.easeOut",
            stagger: {
            amount: 1
            }            
            });   
       });
                    
        const RevealBoxs2 = container.querySelectorAll(".box2");
        RevealBoxs2.forEach((box2) => {
            const two = box2.querySelectorAll(".two, .two span");            
            const ln = box2.querySelectorAll(".ln");
                       
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box2,
                    toggleActions: "restart none none none"
                }, delay: .5
            });                      
                                       
            tl.from(two, {
            duration: 1.5, 
            y: "-3rem",
            opacity: 0,    
            filter: "blur(10px)",           
            ease: "Quad.easeOut"           
            });
                            
            tl.from(ln, {
                duration: 2,
                width: "0%",  
                opacity: 0,
                filter: "blur(10px)",
                ease: "Bounce.easeInOut"
            }, "<");
                                                                                                                
        });
      
                                                       
        let revealContainers = container.querySelectorAll(".item");
        revealContainers.forEach((el) => {

            let image = el.querySelector("img");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    ease: "Expo.easeOut",
                    toggleActions: "restart none none none"
                }, delay: .5
            });

            tl.set(el, {
              autoAlpha: 1
            });
            tl.fromTo(el, {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1,     
              ease: "Quad.easeOut"
            });

            tl.from(image, {
              duration: 3,                   
              scale: 1.5,              
              filter: "blur(2px)",
              delay: .3,
              ease: "Quad.easeOut"
            }, 0);
        });

    });
}


$(window).scroll(function(){
  scroll();
});

scroll();
function scroll(){
  var top = $('html, body').scrollTop();
  var el = $("#distort").find("feDisplacementMap");  
  el.attr('scale', top);
  $(".header").css('opacity', 1 - (top * 0.007))
}





var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

initBt1();
function initBt1() {
  var bete1 = document.querySelectorAll('#wtr')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
  
  bete1.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}

initBt2();
function initBt2() {
  var bete2 = document.querySelectorAll('#wtr2')[0];
  var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];
  
  bete2.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}

