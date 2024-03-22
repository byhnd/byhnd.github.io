document.addEventListener("DOMContentLoaded", function(event) {
window.addEventListener("load", function(e) {

gsap.registerPlugin(ScrollTrigger, CustomEase);

let tl = gsap.timeline({	
 onComplete: contentShow
});
		
tl.to(".textload span", {
 opacity:0,
 y:150,
 rotation:gsap.utils.wrap([-180, 180]),
 delay:"random(0, 1.5)",
 duration:"random(.7, 2)",
 stagger:.07,
 ease:"expo.inOut"
}); 
		
tl.to("#loader", {
 duration:1,
 scaleX:.6,
 scaleY:.5,
 transformOrigin: "center",
 ease: "back.out(1.7)"
}); 

tl.to("#loader", {
 delay:.5,
 duration:.8,
 scaleY:0,
 transformOrigin: "center"
}); 
	
function contentShow() {	
	
$('.one').each(function(){
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
const once = "play none none none";
	
gsap.set("nav", {
 y:-30
});	

gsap.to("nav", {
 autoAlpha:1, 
 opacity:1,
 delay:2.5,
 duration:2, 
 y:0,
 ease: "expo.inOut"
});
	
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
 y:20,
 rotation:100
});
gsap.to(".sub-title, .sub-title .char", {
 autoAlpha:1, 
 opacity:1,
 duration:.8,
 rotation:0,
 stagger:.08, 
 y:0,
 ease:easing
});

 gsap.to('.indicator', {
 delay:3.5,
 duration:2,
 autoAlpha: 1,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1
 }, {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
  scrub: true,
  trigger: '.indicator',
  start: 'center 60%',
  end: 'center 50%'					
  }
 });
}
});

	
function setupReveal(container) {	
 container.ctx = gsap.context(() => {	


window.addEventListener("load", function () {
  let splitWords = function (selector) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function (el2) {
      el2.dataset.splitText = el2.textContent;
      el2.innerHTML = el2.textContent
        .split(/\s/)
        .map(function (word) {
          return word
            .split("-")
            .map(function (word) {
              return '<span class="word">' + word + "</span>";
            })
            .join('<span class="hyphen">-</span>');
        })
        .join('<span class="whitespace"> </span>');
    });
  };

  let splitLines = function (selector) {
    var elements = document.querySelectorAll(selector);

    splitWords(selector);

    elements.forEach(function (el2) {
      var lines = getLines(el2);

      var wrappedLines = "";
      lines.forEach(function (wordsArr) {
        wrappedLines += '<span class="line"><span class="words">';
        wordsArr.forEach(function (word) {
          wrappedLines += word.outerHTML;
        });
        wrappedLines += "</span></span>";
      });
      el2.innerHTML = wrappedLines;
    });
  };
let getLines = function (el2) {
    var lines = [];
    var line;
    var words = el2.querySelectorAll("span");
    var lastTop;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.offsetTop != lastTop) {
        // Don't start with whitespace
        if (!word.classList.contains("whitespace")) {
          lastTop = word.offsetTop;

          line = [];
          lines.push(line);
        }
      }
      line.push(word);
    }
    return lines;
  };

  splitLines("#reveal-text");

  let revealText = document.querySelectorAll("#reveal-text");
  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".words");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions: "restart none none reset"
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.25,
      delay: 0.2
    });
  });
});






	 





















	 
  	 
 const RevealSc = container.querySelectorAll(".sc");
   RevealSc.forEach((sc) => {                
    const pl = sc.querySelectorAll(".pl");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger:sc,
     toggleActions: once
     }, delay:.7
     }); 

tl.fromTo(pl, {
   clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
   },
   {
   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   delay:.7,
   autoAlpha:1, 
   opacity:1,
   duration:.8,     
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
     }, delay:.7
     }); 
	   
tl.set(one, {
 y:50,
 rotation:100
})
tl.to(one, {
 autoAlpha:1, 
 opacity:1,
 duration:.8,
 rotation:0,
 y:0,
 stagger:.1,
 ease:easing	
});

});
	  
const RevealBoxs2 = container.querySelectorAll(".box2");
 RevealBoxs2.forEach((box2) => {
 const two = box2.querySelectorAll(".two");            
 const gr = box2.querySelectorAll(".gr");                  
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box2,
  toggleActions: once
  }, delay: .7
  });  
	 
tl.set(two, {
 y:50
});   
	 
tl.to(two, {
 autoAlpha:1, 
 opacity:1,
 y:0,
 duration:.8,
 stagger: 0.075,
 ease:easing
});   
	 
tl.to(gr, {
 autoAlpha:1, 
 opacity:1,
 duration:.8,	
 width:"100%",
 ease:easing
});	
	                                                                                                                  
});	

let revealContainers = container.querySelectorAll(".item");
 revealContainers.forEach((el) => {
 let image = el.querySelector("img");
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: el,
  toggleActions: once
  }, delay: .7
  });

  tl.set(el, {
   autoAlpha:1
   });
	 
  tl.fromTo(el, {
   clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
   },
   {
   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   duration:1.2,
   ease:easing,
   stagger: 0.075
   }); 
  tl.from(image, {
    duration:2.2,                   
    scale: 1.4,   
    ease:easing
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

}

	
}, false);
});
