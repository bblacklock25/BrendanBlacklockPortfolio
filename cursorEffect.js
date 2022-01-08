// Initialize variables for selection cursor.
const mouseCursor = document.querySelector('.selection-cursor');
const header = document.querySelector("#name");
const about = document.querySelector('#About');
const projects = document.querySelector('#Projects');
const resume = document.querySelector('#Resume');
const contact = document.querySelector('#Contact');
const fpga = document.querySelector('#FPGA');
const fpgaPaper = document.getElementById('rover-paper');
const fpgaNotebook = document.getElementById('rover-notebook');
const fpgaYoutube = document.getElementById('rover-youtube');
const rpi = document.querySelector('#RPi');
const rpiPaper = document.getElementById('catapult-paper');
const rpiYoutube = document.getElementById('catapult-youtube');
const javaSS = document.querySelector('#JavaSS');
const javaPaper = document.getElementById('supermarket-paper');
const javaRepo = document.getElementById('supermarket-repo');
const javaYoutube = document.getElementById('supermarket-youtube');
const outserved = document.querySelector('#Outserved');
const outservedNotebook = document.getElementById('outserved-notebook');
const linkedIn = document.querySelector('#linkedin-social');
const gitHub = document.querySelector('#github-social');
const youTube = document.querySelector('#youtube-social');
var mobileDevice = 0;

// Cursor Movement Listener
window.addEventListener('mousemove', cursor);

// Header Hover Listener
header.addEventListener('mouseover', linkGrow);
header.addEventListener('mouseleave', linkShrink);

// About Link Hover Listener
about.addEventListener('mouseover', linkGrowBig);
about.addEventListener('mouseleave', linkShrink);

// Projects Link Hover Listener
projects.addEventListener('mouseover', linkGrowBig);
projects.addEventListener('mouseleave', linkShrink);

// Resume Link Hover Listener
resume.addEventListener('mouseover', linkGrowBig);
resume.addEventListener('mouseleave', linkShrink);

// Contact Link Hover Listener
contact.addEventListener('mouseover', linkGrowBig);
contact.addEventListener('mouseleave', linkShrink);

// Social Link Hover Listener
linkedIn.addEventListener('mouseover', linkGrow);
linkedIn.addEventListener('mouseleave', linkShrink);
gitHub.addEventListener('mouseover', linkGrow);
gitHub.addEventListener('mouseleave', linkShrink);
youTube.addEventListener('mouseover', linkGrow);
youTube.addEventListener('mouseleave', linkShrink);

// Project Links Hover Listeners
fpga.addEventListener('mouseover', linkGrow);
fpga.addEventListener('mouseleave', linkShrink);

fpgaPaper.addEventListener('mouseover', linkGrow);
fpgaPaper.addEventListener('mouseleave', linkShrink);

fpgaNotebook.addEventListener('mouseover', linkGrow);
fpgaNotebook.addEventListener('mouseleave', linkShrink);

fpgaYoutube.addEventListener('mouseover', linkGrow);
fpgaYoutube.addEventListener('mouseleave', linkShrink);

rpi.addEventListener('mouseover', linkGrow);
rpi.addEventListener('mouseleave', linkShrink);

rpiPaper.addEventListener('mouseover', linkGrow);
rpiPaper.addEventListener('mouseleave', linkShrink);

rpiYoutube.addEventListener('mouseover', linkGrow);
rpiYoutube.addEventListener('mouseleave', linkShrink);

javaSS.addEventListener('mouseover', linkGrow);
javaSS.addEventListener('mouseleave', linkShrink);

javaPaper.addEventListener('mouseover', linkGrow);
javaPaper.addEventListener('mouseleave', linkShrink);

javaRepo.addEventListener('mouseover', linkGrow);
javaRepo.addEventListener('mouseleave', linkShrink);

javaYoutube.addEventListener('mouseover', linkGrow);
javaYoutube.addEventListener('mouseleave', linkShrink);

outserved.addEventListener('mouseover', linkGrow);
outserved.addEventListener('mouseleave', linkShrink);

outservedNotebook.addEventListener('mouseover', linkGrow);
outservedNotebook.addEventListener('mouseleave', linkShrink);

// Functions to grow or shrink cursor size
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

if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  mobileDevice = 1;
  document.getElementById('mobileCursor').remove();
}