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
    end: "+=7000",
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
  delay: 3,
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
    end: "+=4000",
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