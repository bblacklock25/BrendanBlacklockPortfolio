// Initialize constants and variables for typing effect. 
const typedTextSpan = document.querySelector(".homepage-welcome-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Welcome Visitor...", "Are you ready to enter?"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 3000;
let textArrayIndex = 0;
let charIndex = 0;
var counter = 0;

// Initialize variables for selection cursor.
const mouseCursor = document.querySelector('.selection-cursor');
const header = document.querySelector("#name");
const about = document.querySelector('[title="about"]');
const projects = document.querySelector('[title="projects"]');
const resume = document.querySelector('[title="resume"]');
const contact = document.querySelector('[title="contact"]');
const linkedIn = document.querySelector('[title="linkedIn"]');
const discord = document.querySelector('[title="discord"]');
const gitHub = document.querySelector('[title="gitHub"]');
const youTube = document.querySelector('[title="youTube"]');

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
  if (window.innerHeight < 500 || window.innerWidth < 500) {
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
});
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
discord.addEventListener('mouseover', linkGrow);
discord.addEventListener('mouseleave', linkShrink);
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
  if (mobileDevice == 0) {
    mouseCursor.classList.toggle('link-grow-big');
  }
}

function linkShrink() {
  mouseCursor.classList.remove('link-grow');
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

if (mobileDevice == 1) {
    document.getElementById('mobileCursor').remove();
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
  if (window.innerHeight < 500 || window.innerWidth < 500) {
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