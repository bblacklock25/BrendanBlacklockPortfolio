// HOME LINKS AND BUTTONS
const aboutLink = document.getElementById("About");
const projectsLink = document.getElementById("Projects");
const resumeLink = document.getElementById("Resume");
const contactLink = document.getElementById("Contact");
const backHomeButtonAbout = document.getElementById("back-home-button-about");
const backHomeButtonProject = document.getElementById("back-home-button-project");

// PROJECT LINKS AND BUTTONS
const fpgaLink = document.getElementById("FPGA");
const fpgaPaperLink = document.getElementById("rover-paper");
const fpgaNotebookLink = document.getElementById("rover-notebook");
const fpgaYoutubeLink = document.getElementById("rover-youtube");
const rpiLink = document.getElementById("RPi");
const javaLink = document.getElementById("JavaSS");
const outservedLink = document.getElementById("Outserved");
const backProjectButtonRover = document.getElementById("back-project-button-rover");

// HOME SECTIONS
const sectionOne = document.getElementsByClassName('section-one');
const sectionTwo = document.getElementsByClassName('section-two');
const mainSection =  document.getElementById("main-section");
const aboutSection = document.getElementById("about-section");
const projectSection = document.getElementById("project-section");

// PROJECT SECTIONS
const fpgaSection = document.getElementById("rover-section");

// HOME LINK EVENT LISTENERS
aboutLink.addEventListener('click', homeToAbout, false);
projectsLink.addEventListener('click', homeToProjects, false);
resumeLink.addEventListener('click', openResumePDF, false);
contactLink.addEventListener('click', openEmailContact, false);
backHomeButtonAbout.addEventListener('click', backHomeAbout, false);
backHomeButtonProject.addEventListener('click', backHomeProject, false);

// PROJECT LINK EVENT LISTENERS
fpgaLink.addEventListener('click', projectsToRover, false);
fpgaPaperLink.addEventListener('click', openRoverPaper, false);
fpgaNotebookLink.addEventListener('click', openRoverNotebook, false);
fpgaYoutubeLink.addEventListener('click', openRoverYoutube, false);
backProjectButtonRover.addEventListener('click', backProjectsRover, false);



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

function backHomeAbout() {
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

function backHomeProject() {
    sectionOne[0].classList.remove('slide-text-left');
    sectionTwo[0].classList.remove('slide-text-right');
    sectionOne[2].classList.add('slide-text-left');
    sectionTwo[2].classList.add('slide-text-right');
    setTimeout(function() {
        projectSection.classList.remove('section-fadein');
        projectSection.classList.add('section-hidden');
        mainSection.classList.remove('section-hidden');
        mainSection.classList.add('section-fadein');
    }, 1700);
}

function homeToProjects() {
    sectionOne[0].classList.add('slide-text-left');
    sectionTwo[0].classList.add('slide-text-right');
    setTimeout(function() {
        if (projectSection.classList.contains("section-hidden")) {
            sectionOne[2].classList.remove('slide-text-left');
            sectionTwo[2].classList.remove('slide-text-right');
            projectSection.classList.remove('section-hidden');
        }
        mainSection.classList.remove('section-fadein');
        mainSection.classList.add('section-hidden');
        projectSection.classList.add('section-fadein');
    }, 1700);
}

function openResumePDF() {
    window.open('BrendanBlacklockPortfolio/resumePortfolio.pdf', '_blank').focus();
}

function openEmailContact() {
    window.open("mailto:bblacklock25@gmail.com").focus();
}

function projectsToRover() {
    sectionOne[2].classList.add('slide-text-left');
    sectionTwo[2].classList.add('slide-text-right');
    setTimeout(function() {
        if (fpgaSection.classList.contains("section-hidden")) {
            sectionOne[3].classList.remove('slide-text-left');
            sectionTwo[3].classList.remove('slide-text-right');
            fpgaSection.classList.remove('section-hidden');
        }
        projectSection.classList.remove('section-fadein');
        projectSection.classList.add('section-hidden');
        fpgaSection.classList.add('section-fadein');
    }, 1700);
}

function backProjectsRover() {
    sectionOne[2].classList.remove('slide-text-left');
    sectionTwo[2].classList.remove('slide-text-right');
    sectionOne[3].classList.add('slide-text-left');
    sectionTwo[3].classList.add('slide-text-right');
    setTimeout(function() {
        fpgaSection.classList.remove('section-fadein');
        fpgaSection.classList.add('section-hidden');
        projectSection.classList.remove('section-hidden');
        projectSection.classList.add('section-fadein');
    }, 1700);
}

function openRoverPaper() {
    window.open('BrendanBlacklockPortfolio/BrendanBlacklock_FinalReport.pdf', '_blank').focus();
}

function openRoverNotebook() {
    window.open('BrendanBlacklockPortfolio/LabTeam6FinalNotebook.pdf', '_blank').focus();
}

function openRoverYoutube() {
    window.open('https://www.youtube.com/playlist?list=PLLfB6FCCB5Cd5DCn-X1VjnWNtZrDeek6D', '_blank').focus();
}

