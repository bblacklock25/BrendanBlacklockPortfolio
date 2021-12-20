// Initialize constants and variables for typing effect. 
const typedTextSpan = document.querySelector(".homepage-welcome-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Welcome...", "Are you ready to enter?"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;
var counter = 0;

// Initialize variables for selection cursor.
const mouseCursor = document.querySelector('.selection-cursor');
const header = document.querySelector("#name");
const about = document.querySelector('[title="About"]');
const projects = document.querySelector('[title="Projects"]');
const resume = document.querySelector('[title="Resume"]');
const contact = document.querySelector('[title="Contact"]');
const linkedIn = document.querySelector('#linkedin-social');
const gitHub = document.querySelector('#github-social');
const youTube = document.querySelector('#youtube-social');

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
});
document.addEventListener("DOMContentLoaded", resizeCorners);
window.addEventListener('resize', resizeCorners);
window.addEventListener('mousemove', cursor);
header.addEventListener('mouseover', linkGrow);
header.addEventListener('mouseleave', linkShrink);
about.addEventListener('mouseover', linkGrowBig);
about.addEventListener('mouseleave', linkShrink);
projects.addEventListener('mouseover', linkGrowBig);
projects.addEventListener('mouseleave', linkShrink);
resume.addEventListener('mouseover', linkGrowBig);
resume.addEventListener('mouseleave', linkShrink);
contact.addEventListener('mouseover', linkGrowBig);
contact.addEventListener('mouseleave', linkShrink);
linkedIn.addEventListener('mouseover', linkGrow);
linkedIn.addEventListener('mouseleave', linkShrink);
gitHub.addEventListener('mouseover', linkGrow);
gitHub.addEventListener('mouseleave', linkShrink);
youTube.addEventListener('mouseover', linkGrow);
youTube.addEventListener('mouseleave', linkShrink);


function linkGrow() {
  if (mobileDevice == 0) {
    mouseCursor.classList.toggle('link-grow');
  }
}

function linkGrowBig() {
  if (mobileDevice == 0 && window.innerHeight > 600) {
    mouseCursor.classList.toggle('link-grow-big');
  }
  else {
    mouseCursor.classList.toggle("link-grow");
  }
}

function linkShrink() {
  mouseCursor.classList.remove('link-grow');
  mouseCursor.classList.remove('link-grow-big');
}

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

var mobileDevice = 0;

if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    mobileDevice = 1;
} else{
    mobileDevice = 0;
}

var browserName = (function (agent) {
  switch (true) {
      case agent.indexOf("edge") > -1: return "MS Edge";
      case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
      case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
      case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
      case agent.indexOf("trident") > -1: return "MS IE";
      case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
      case agent.indexOf("safari") > -1: return "Safari";
      default: return "other";
  }
})(window.navigator.userAgent.toLowerCase());

if (mobileDevice == 1) {
    document.getElementById('mobileCursor').remove();
    console.log(0);
    if (browserName == "Chrome" || browserName == "Safari") {
      console.log(1);
      document.getElementById("main-section-header").classList.toggle("mobile-chrome-safari-top");
      document.getElementById("main-section-nav-tags").classList.toggle("mobile-chrome-safari-bottom");
    }
}



function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    if (textArrayIndex == 1) {
      document.getElementById('enter-button').classList.toggle("enter-button-fadein");
      return;
    }
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

function resizeCorners() {
  if (window.innerHeight < 700 || window.innerWidth < 700) {
    document.getElementById("upperLeft").width="60";
    document.getElementById("upperRight").width="60";
    document.getElementById("lowerLeft").width="60";
    document.getElementById("lowerRight").width="60";
  }
  else {
    document.getElementById("upperLeft").width="100";
    document.getElementById("upperRight").width="100";
    document.getElementById("lowerLeft").width="100";
    document.getElementById("lowerRight").width="100";
  }
}
