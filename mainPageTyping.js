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
const navbar = document.querySelector('#main-section-nav-tags');
const description = document.querySelector('#main-section-title');
const socials = document.querySelector('#social-links');

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
});
window.addEventListener('mousemove', cursor);
header.addEventListener('mouseover', linkGrow);
header.addEventListener('mouseleave', linkShrink);
navbar.addEventListener('mouseover', linkGrow);
navbar.addEventListener('mouseleave', linkShrink);
description.addEventListener('mouseover', linkGrow);
description.addEventListener('mouseleave', linkShrink);
socials.addEventListener('mouseover', linkGrow);
socials.addEventListener('mouseleave', linkShrink);

function linkGrow() {
  if (mobileDevice == 0) {
    mouseCursor.classList.toggle('link-grow');
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
