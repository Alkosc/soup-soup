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
var thirdteenslidemobileheader = gsap.timeline();
// Or you can attach a tween or timeline to a ScrollTrigger later
thirdteenslidemobile.from("#thirdteenslidemobileheader", 
{
	xPercent: 300,
})

;
ScrollTrigger.create({

 trigger: "#thirdteenslidemobile",
 animation: thirdteenslidemobile,
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


