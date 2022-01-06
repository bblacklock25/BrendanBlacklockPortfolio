const aboutLink = document.getElementById("About");
// const projectsLink = document.getElementById("Projects");
const resumeLink = document.getElementById("Resume");
const contactLink = document.getElementById("Contact");
const backHomeButton = document.getElementById("back-home-button")

const sectionOne = document.getElementsByClassName('section-one');
const sectionTwo = document.getElementsByClassName('section-two');
const mainSection =  document.getElementById("main-section");
const aboutSection = document.getElementById("about-section");

aboutLink.addEventListener('click', homeToAbout, false);
resumeLink.addEventListener('click', openResumePDF, false);
contactLink.addEventListener('click', openEmailContact, false);
backHomeButton.addEventListener('click', backHome, false);

function homeToAbout() {
    sectionOne[0].classList.add('slide-text-left');
    sectionTwo[0].classList.add('slide-text-right');
    setTimeout(function() {
        if (aboutSection.classList.contains("section-hidden")) {
            sectionOne[1].classList.remove('slide-text-left');
            sectionTwo[1].classList.remove('slide-text-right');
            aboutSection.classList.remove('section-hidden');
        }
        mainSection.classList.remove('section-fadein');
        mainSection.classList.add('section-hidden');
        aboutSection.classList.add('section-fadein');
    }, 1700);
}

function backHome() {
    sectionOne[0].classList.remove('slide-text-left');
    sectionTwo[0].classList.remove('slide-text-right');
    sectionOne[1].classList.add('slide-text-left');
    sectionTwo[1].classList.add('slide-text-right');
    setTimeout(function() {
        aboutSection.classList.remove('section-fadein');
        aboutSection.classList.add('section-hidden');
        mainSection.classList.remove('section-hidden');
        mainSection.classList.add('section-fadein');
    }, 1700);
}

function openResumePDF() {
    window.open('BrendanBlacklockPortfolio/resumePortfolio.pdf', '_blank').focus();
}

function openEmailContact() {
    window.open("mailto:bblacklock25@gmail.com").focus();
}

