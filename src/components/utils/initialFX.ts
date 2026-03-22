import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );


  var t1 = document.querySelectorAll(".landing-h3-1, .landing-h2-1, .landing-h2-info");
  var t2 = document.querySelectorAll(".landing-h3-2, .landing-h2-2, .landing-h2-info-1");
  var t3 = document.querySelectorAll(".landing-h3-3, .landing-h2-3, .landing-h2-info-2");

  LoopTextSync(Array.from(t1), Array.from(t2), Array.from(t3));
}

function LoopTextSync(Text1: Element[], Text2: Element[], Text3: Element[]) {
  var tl = gsap.timeline({ repeat: -1 });
  const displayDuration = 3.5; // Time text stays visible
  const transitionDuration = 0.8; // Smooth transition

  // Initial state: Text1 visible, others hidden
  gsap.set(Text1, { opacity: 1, y: 0 });
  gsap.set([Text2, Text3], { opacity: 0, y: 20 });

  tl
    // Text1 visible
    .to({}, { duration: displayDuration }, 0)
    
    // Text1 out, Text2 in (smooth crossfade)
    .to(Text1, { opacity: 0, y: -10, duration: transitionDuration, ease: "power2.inOut" }, "<")
    .fromTo(Text2, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: transitionDuration, ease: "power2.inOut" }, "<")
    
    // Text2 visible
    .to({}, { duration: displayDuration }, "-=0.8")
    
    // Text2 out, Text3 in
    .to(Text2, { opacity: 0, y: -10, duration: transitionDuration, ease: "power2.inOut" }, "<")
    .fromTo(Text3, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: transitionDuration, ease: "power2.inOut" }, "<")
    
    // Text3 visible
    .to({}, { duration: displayDuration }, "-=0.8")
    
    // Text3 out, Text1 in
    .to(Text3, { opacity: 0, y: -10, duration: transitionDuration, ease: "power2.inOut" }, "<")
    .fromTo(Text1, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: transitionDuration, ease: "power2.inOut" }, "<");
}
