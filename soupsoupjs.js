var firstslide = gsap.timeline();

// Or you can attach a tween or timeline to a ScrollTrigger later
firstslide.from("#slide1logo", 
{
  xPercent:-800,
  rotation: -400, 
})

.from("#slide1header", {
  yPercent:400,
  duration: 1,
  opacity: 0,
})

.from("#slide1subheader", {
  yPercent:400,
  opacity: 0,
  duration:1,
},"<0.2")

.from("#slide1boxrow1", 
{
  xPercent:-200,
  duration: 1,

})

.from("#slide1boxrow2", 
{
  xPercent:-200,
  duration: 1,
},
"<0.2")

.from("#slide1singlebox", 
{
  xPercent: 200,
  duration: 1,
},
"<1")


.to("#slide1logo", 
{
  yPercent: -400,
  duration: 1,
  delay: 1,

})

.to("#slide1header", 
{
  yPercent: -400,
  opacity: 0,
  duration: 1,
},"<0.2")

.to("#slide1subheader", 
{
  yPercent: -400,
  opacity: 0,
  duration: 1,
},"<0.2")

.to(".boxrow", 
{
  xPercent: -200,
  duration: 1,

},"<0.2")

.to("#slide1singlebox", 
{
  xPercent: 200,
  duration: 1,
},"<0.2");


ScrollTrigger.create({

 trigger: "#firstslide",
 animation: firstslide,
    markers: false,
    start: "top top",
    end: "+=2500",
    pin: true,
    scrub: 1,
});
  

var secondslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
secondslide.from(".circle1", 
{
  yPercent: 200,
  duration: 1,
})

.from(".circle2", 
{
  yPercent: 200,
  duration: 1,
},"<0.1")
.from(".circle3", 
{
  yPercent: 200,
  duration: 1,
},"<0.1")

.to(".circle1", 
{
  xPercent: -20,
  scaleX: 0,
  scaleY: 0,
  duration: 2,
  delay: 2,
  

})

.to(".circle2",
{
 scaleX: 0,
 scaleY: 0,
 duration: 2
},"<0.1")

.to(".circle3",
{
xPercent: 20,
 scaleX: 0,
 scaleY: 0,
 duration: 2
},"<0.1")
;


ScrollTrigger.create({

 trigger: "#secondslide",
 animation: secondslide,
    markers: false,
    start: "top top",
    end: "+=3000",
    pin: true,
    scrub: 1,
});

var thirdslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
thirdslide.from(".slide4header", {
  yPercent:400,
  opacity: 0,
})

.from(".slide4text", {
  yPercent:400,
  opacity: 0,
},"<0.2")

.to(".slide4text", {
  yPercent:-400,
  opacity: 0,
})
.to(".slide4header", {
  yPercent:-400,
  opacity: 0,
  duration: 4,
},"<0.2")
.to(".handyanimationwrapper", {
  yPercent:150,
  opacity: 0,
},"<0.2")
;


ScrollTrigger.create({

 trigger: "#thirdslide",
 animation: thirdslide,
    markers: false,
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: 1,
});


var fourthslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
fourthslide.from(".fourthslideimage", 
{
  opacity: 0,

})

.from(".fourthslidewrapper", 
{
  xPercent: -100,
},"<0.2")

.from(".fourthslidetext", 
{
  xPercent: -100,
  opacity: 0,
})

.to(".fourthslidewrapper", 
{
  xPercent: 100,
  opacity: 0,
  delay: 1,
})

.to(".fourthslideimage", 
{
  xPercent: 100,
  opacity: 0,
},"<0.1")

.to(".fourthslidetext", 
{
  xPercent: -100,
  opacity: 0,
  duration:1
},"<0.1")

;


ScrollTrigger.create({

 trigger: "#fourthslide",
 animation: fourthslide,
    markers: false,
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: 1,
});


var sixthslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
sixthslide.from("#sixthslidelogo", 
{
  xPercent: -200,
   rotation: -360,

})


.from(".sixthslideheader", 
{
  xPercent: -200,
  opacity: 0,


},"<0.2")

.from(".recepyfirst", 
{
  xPercent: -300,
  opacity: 0,
  

})

.from(".recepyfirstarrow", 
{
  scaleX: 0,
  scaleY: 0,
  rotation: -90,
  opacity: 0,


})

.from(".recepyleftmid1", 
{
  opacity: 0,
  
})
.from(".leftrecepyplus", 
{
  opacity: 0,
  
})
.from(".recepyleftmid2", 
{
  opacity: 0,
 
})

.from(".recepysecond", 
{
  xPercent: -300,
  opacity: 0,
 

})

.from(".recepysecondarrow", 
{
  scaleX: 0,
  scaleY: 0,
  rotation: -90,
  opacity: 0,
  

})
.from(".recepyrightmid", 
{
 xPercent: 150,
  opacity: 0,
 

})
.from(".whisktogether", 
{
scaleX: 0,
scaleY: 0,
rotation: 700,
  opacity: 0,
 

})
.from(".recepyleftequal", 
{
 xPercent: -150,
  opacity: 0,
 

})
.from(".recepyleftfazit", 
{
 xPercent: -150,
  opacity: 0,
 
})
.to(".recepyleft", 
{
 xPercent: -150,
  opacity: 0,
  delay: 1,
 
})
.to(".recepyright", 
{
 xPercent: 150,
  opacity: 0,
 
},"<0.1")

.to("#sixthslidelogo", 
{
  xPercent: -200,
   rotation: -360,

})


.to(".sixthslideheader", 
{
  xPercent: -550,
  opacity: 0,

},"<0.1")
;


ScrollTrigger.create({

 trigger: "#sixthslide",
 animation: sixthslide,
    markers: false,
    start: "top top",
    end: "+=8500",
    pin: true,
    scrub: 1,
});

var seventhslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
seventhslide.from(".slide7header", 
{
	xPercent: -100,
  opacity: 0,
})
.from(".slide7subheader", 
{
	xPercent: -100,
  opacity: 0,
},"<0.2")

.from(".slide7right", 
{
	xPercent: 100,
  opacity: 0,
})

.from("#slide7box1", 
{
	xPercent: 100,
  opacity: 0,
},"<0.2")
.from("#slide7box2", 
{
	xPercent: 100,
  opacity: 0,
},"<0.2")
.from("#slide7box3", 
{
	xPercent: 100,
  opacity: 0,
},"<0.2")
.from("#slide7box4", 
{
	xPercent: 100,
  opacity: 0,
},"<0.2")
.from("#slide7box5", 
{
	xPercent: 100,
  opacity: 0,
},"<0.2")
.from("#slide7box6", 
{
	xPercent: 100,
  opacity: 0,
},"<0.2")

.to(".slide7left", 
{
	xPercent: -100,
  opacity: 0,
  delay: 0.5,
})
.to(".slide7right", 
{
	xPercent: 100,
  opacity: 0,
},"<0.1")
;


ScrollTrigger.create({

 trigger: "#seventhslide",
 animation: seventhslide,
    markers: false,
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: 1,
});

var eigthssilde = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
eigthssilde.from(".eightslideheader", 
{
	xPercent: -100,
})

.from(".timrauepic", 
{
	scaleX: 0,
  scaleY: 0,
})

.from(".timrauehead", 
{
	xPercent: -300,
})
.from(".timrauetext",
{
	xPercent: -300,
},"<0.2")

.from(".eightsliderfirstrow",
{
	xPercent: 150,
},"<0.2")
.from(".eightslidersecondrow",
{
	xPercent: 150,
},"<0.2")

.to(".eightslideheader", 
{
	xPercent: 100,
  delay: 1,
})
.to(".eightsliderraueprofile", 
{
	xPercent: -250,
},"<0.1")
.to(".eightsliderboxwrapper", 
{
	xPercent: 150,
},"<0.1")
;


ScrollTrigger.create({

 trigger: "#eigthssilde",
 animation: eigthssilde,
    markers: false,
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: 1,
});


var ninthslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
ninthslide.from(".ninthslideheader", 
{
	xPercent: -600,
})

.to(".animationwrapper", 
{
	xPercent: 100,
  delay: 1,
})
.to(".ninthslideheader", 
{
	xPercent: 400,
})

;

ScrollTrigger.create({

 trigger: "#ninthslide",
 animation: ninthslide,
    markers: false,
    start: "top top",
    end: "+=5000",
    pin: true,
    scrub: 1,
});

var tenthslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
tenthslide.from(".slide10header", 
{
	xPercent: -300,
})

.from(".slide10text", 
{
	xPercent: -300,
},"<0.2")

.from(".sbox1", 
{
	xPercent: -100,
  opacity: 0,
})
.from(".supline1", 
{
	xPercent: -100,
  opacity: 0,
})
.from(".sbox2", 
{
	xPercent: -100,
  opacity: 0,
})
.from(".supline2", 
{
	xPercent: -100,
  opacity: 0,
})
.from(".sbox3", 
{
	xPercent: -100,
  opacity: 0,
})

.from(".slide10subtext", 
{
	yPercent: 400,
})
.to(".slide10header", 
{
	xPercent: -400,
  delay: 1,
})
.to(".slide10text", 
{
	xPercent: -400,
},"<0.2")
.to(".supplychainwrapper", 
{
	xPercent: 100,
},"<0.2")
.to(".slide10subtext", 
{
	yPercent: 200,
  opacity: 0,
},"<0.2")
;

ScrollTrigger.create({

 trigger: "#tenthslide",
 animation: tenthslide,
    markers: false,
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: 1,
});

var eleventhslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
eleventhslide.from(".microkitchenheader", 
{
	xPercent: -300,
  opacity: 0,
})

.from(".umsatzbox", 
{
	xPercent: 300,
  opacity: 0,
})
.from(".umsatzbox2", 
{
	xPercent: 300,
  opacity: 0,
})
.from(".umsatzbox3", 
{
	xPercent: 300,
  opacity: 0,
})
.to(".microkitchenheader", 
{
	xPercent: 300,
  opacity: 0,
  delay: 1,
})
.to(".umsatzbox", 
{
	yPercent: 250,
})
.to(".umsatzbox2", 
{
	yPercent: 250,
})
.to(".umsatzbox3", 
{
	yPercent: 250,
})
.to(".umsatzbox", 
{
	opacity: 0,
},"<0.1")
.to(".umsatzbox2", 
{
	opacity: 0,
},"<0.1")

.to(".umsatzbox3", 
{
	opacity: 0,
},"<0.1")
;
ScrollTrigger.create({

 trigger: "#eleventhslide",
 animation: eleventhslide,
    markers: false,
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: 1,
});

var thirdteensslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
thirdteensslide.from(".thirdteenslideheader", 
{
	xPercent: 300,
})

.from(".thirdteenslidetext", 
{
	xPercent: 300,
},"<0.2")

.from(".tabelle2", 
{
	xPercent: -200,
  opacity: 0,
})
.from(".tabelle3", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabelle4", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabelle5", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabellefirst", 
{
	yPercent: 200,
  opacity: 0,
},"<0.2")

.from(".grey",
{
	xPercent: 200,
  opacity: 0,
},"<0.5") 
.from(".darkgrey",
{
	xPercent: 200,
  opacity: 0,
},"<0.2") 

.to(".finance",
{
	xPercent: 120,
  opacity: 0,
  delay: 1,
}) 

.to(".thirdteenslidetext",
{
	xPercent: 250,
},"<0.2") 
.to(".thirdteenslideheader",
{
	xPercent: 250,
},"<0.2") 


;
ScrollTrigger.create({

 trigger: "#thirdteensslide",
 animation: thirdteensslide,
    markers: false,
    start: "top top",
    end: "+=5000",
    pin: true,
    scrub: 1,
});

var fourteenthslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
fourteenthslide.from(".imageslide14", 
{
	xPercent: -100,
})
.from(".slide14wrapper", 
{
	xPercent: -100,
},"<0.2")
.from(".slide14header", 
{
	xPercent: -100,
  opacity: 0,
},"<0.2")
.from(".slide14text", 
{
	xPercent: -100,
  opacity: 0,
},"<0.2")
.from(".imagewrapper", 
{
  opacity: 0,
},"<0.2")

.to(".slide14textwrapper", 
{
	xPercent: 100,
  opacity: 0,
  delay: 4,
})
.to(".imagewrapper", 
{
	opacity: 0,
},"<0.2")
.to(".slide14wrapper", 
{
	xPercent: 100,
},"<0.2")
.to(".imageslide14", 
{
	xPercent: 100,
},"<0.2")
.to(".imageslide14", 
{
	xPercent: 100,
})
;
ScrollTrigger.create({

 trigger: "#fourteenthslide",
 animation: fourteenthslide,
    markers: false,
    start: "top top",
    end: "+=8000",
    pin: true,
    scrub: 1,
});

var fifteenslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
fifteenslide.from(".slide15header", 
{
	xPercent: 300,
})

.from(".tabelle6", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabelle7", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabelle8", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabelle9", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".tabelle10", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".brandimage", 
{
	xPercent: -100,
   opacity: 0,
})

.from(".brandgrey", 
{
	yPercent: 200,
  opacity: 0,
},"<0.2")
.from(".branddarkgrey", 
{
	yPercent: 200,
  opacity: 0,
},"<0.2")

.to(".slide15header", 
{
	xPercent: 200,
  opacity: 0,
  delay: 0.5,
})
.to(".brands", 
{
	xPercent: 150, 
},"<0.2")

;
ScrollTrigger.create({

 trigger: "#fifteenslide",
 animation: fifteenslide,
    markers: false,
    start: "top top",
    end: "+=5000",
    pin: true,
    scrub: 1,
});

var sixteenslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
sixteenslide.from(".slide16header", 
{
	xPercent: -300,
  opacity: 0,
})
.from(".slide16text", 
{
	xPercent: -300,
  opacity: 0,
},"<0.2")
.to(".slide16header", 
{
	xPercent: 300,
  opacity: 0,
  delay: 3
})
.to(".slide16text",
{
	xPercent: 300,
  opacity: 0,
},"<0.2")
.to(".soupanimation",
{
	yPercent: 100,
  opacity: 0,
},"<0.2")

ScrollTrigger.create({

 trigger: "#sixteenslide",
 animation: sixteenslide,
    markers: false,
    start: "top top",
    end: "+=6000",
    pin: true,
    scrub: 1,
});

var seventeenslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
seventeenslide.from(".slide17header", 
{
	yPercent: -200,
  opacity: 0,
})
.from(".g1", 
{
	xPercent: -100,
  opacity: 0,
})
.from(".g2", 
{
	xPercent: -200,
  opacity: 0,
},"<0.2")
.from(".g3", 
{
	xPercent: -300,
  opacity: 0,
},"<0.2")
.from(".gruendername", 
{
	yPercent: -300,
  opacity: 0,
})
.from(".gruendertext", 
{
	yPercent: -300,
  opacity: 0,
})
.from(".gruenderlogo", 
{
	yPercent: -300,
  opacity: 0,
})

.to(".slide17header", 
{
	yPercent: 200,
  opacity: 0,
  delay: 0.5,
})
.to(".gruenderwrapper", 
{
	yPercent: 200,
  opacity: 0,
})
;

ScrollTrigger.create({

 trigger: "#seventeenslide",
 animation: seventeenslide,
    markers: false,
    start: "top top",
    end: "+=4500",
    pin: true,
    scrub: 1,
});

var eighteenslide = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
eighteenslide.from(".slide18header", 
{
	yPercent: -200,
  opacity: 0,
})
.from(".slide18text", 
{
	yPercent: -200,
  opacity: 0,
})

;

ScrollTrigger.create({

 trigger: "#eighteenslide",
 animation: eighteenslide,
    markers: false,
    start: "top top",
    end: "+=6500",
    pin: true,
    scrub: 1,
});




