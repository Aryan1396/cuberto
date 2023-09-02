  const cursor = new MouseFollower({
    container: document.body,
    speed: 0.3
  });


gsap.from(".left" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:0.5,
  opacity:0,
  stagger:0.2,
 } )

 gsap.from(".right>h2 , .right>.navbar" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.2,
 } )

 gsap.from("#first ,#second>video,#second>h2,#third" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:1.8,
  opacity:0,
  stagger:0.5,
 } )

 gsap.from("#video-main>video" ,{
  y:200,
  scroller:"#main",
  duration:2,
  // delay:1,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#my_first_video",
    start: "top 100%",
    end:"top 100",
    // markers:true
  }
 })

 gsap.from(".wrokvid, #textcon>p , #textcon>button" ,{
  y:200,
  scroller:"#main",
  duration:0.8,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".wrokvid>video",
    start: "first_page 80%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".firsth2, .secondvid>video, .secondh2" ,{
  y:200,
  scroller:"#main",
  duration:0.8,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".second_page",
    start: "top 20%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#firstcom" ,{
  y:200,
  scroller:"#main",
  duration:0.8,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#firstcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })
 
 gsap.from("#secondcom" ,{
  y:200,
  scroller:"#main",
  duration:0.8,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#secondcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#thirdcom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#thirdcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#fourcom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#fourcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#fivthcom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#fivthcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#sivthcom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#sivthcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#sevencom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#sevencom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#eightcom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#eightcom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#ninecom" ,{
  y:300,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#ninecom",
    start: "top 70%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from("#thirdh2 , #thirdh2sce" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#thirdh2",
    start: "top 40%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".thirdvid>video , .thirdp>p" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".thirdvid",
    start: "top 10%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".resources>h2,.resources>h3,.resources>h4" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".resources",
    start: "top 20%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".imgconteinar>img" ,{
  y:-200,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".imgconteinar",
    start: "top 50%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".fifth_page>p, .fifth_page>button" ,{
  y:200,
  scroller:"#main",
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".fifth_page",
    start: "top 50%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".projectcontenair>img" ,{
  y:-200,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".projectcontenair",
    start: "top 30%",
    end:"first_page 100%",
    // markers:true
  }
 })

 gsap.from(".addre" ,{
  y:-200,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".addre",
    start: "top 50%",
    end:"first_page 100%",
    // markers:true
  }
 })


 gsap.from(".footer>h1,.footer>h2,.footer>button" ,{
  y:-200,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#lastbutnotlaest",
    start: "top 0%",
    end:"first_page 100%",
    // markers:true
  }
 })



 gsap.registerPlugin(ScrollTrigger);

 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
 });
 
 
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();