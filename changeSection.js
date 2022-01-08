// HOME LINKS AND BUTTONS
const homeLink = document.getElementById('name');
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
const rpiPaperLink = document.getElementById("catapult-paper");
const rpiYoutubeLink = document.getElementById("catapult-youtube");
const javaLink = document.getElementById("JavaSS");
const javaPaperLink = document.getElementById("supermarket-paper");
const javaRepoLink = document.getElementById("supermarket-repo");
const javaYoutubeLink = document.getElementById("supermarket-youtube");
const outservedLink = document.getElementById("Outserved");
const outservedNotebookLink = document.getElementById("outserved-notebook");
const backProjectButtonRover = document.getElementById("back-project-button-rover");
const backProjectButtonCatapult = document.getElementById("back-project-button-catapult");
const backProjectButtonSupermarket = document.getElementById("back-project-button-supermarket");
const backProjectButtonOutserved = document.getElementById("back-project-button-outserved");

// HOME SECTIONS
const sectionOne = document.getElementsByClassName('section-one');
const sectionTwo = document.getElementsByClassName('section-two');
const mainSection =  document.getElementById("main-section");
const aboutSection = document.getElementById("about-section");
const projectSection = document.getElementById("project-section");

// PROJECT SECTIONS
const fpgaSection = document.getElementById("rover-section");
const rpiSection = document.getElementById("catapult-section");
const javaSection = document.getElementById("supermarket-section");
const outservedSection = document.getElementById("outserved-section");

// HOME LINK EVENT LISTENERS
homeLink.addEventListener('click', toHome, false);
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

rpiLink.addEventListener('click', projectsToCatapult, false);
rpiPaperLink.addEventListener('click', openCatapultPaper, false);
rpiYoutubeLink.addEventListener('click', openCatapultYoutube, false);

javaLink.addEventListener('click', projectsToSupermarket, false);
javaPaperLink.addEventListener('click', openSupermarketPaper, false);
javaRepoLink.addEventListener('click', openSupermarketRepo, false);
javaYoutubeLink.addEventListener('click', openSupermarketYoutube, false);

outservedLink.addEventListener('click', projectsToOutserved, false);
outservedNotebookLink.addEventListener('click', openOutservedNotebook, false);

backProjectButtonRover.addEventListener('click', backProjectsRover, false);
backProjectButtonCatapult.addEventListener('click', backProjectsCatapult, false);
backProjectButtonSupermarket.addEventListener('click', backProjectsSupermarket, false);
backProjectButtonOutserved.addEventListener('click', backProjectsOutserved, false);

function toHome() {
    window.open('BrendanBlacklockPortfolio/index.html').focus();
}

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
    window.open('BrendanBlacklockPortfolio/ResumeDec2021.pdf', '_blank').focus();
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

function projectsToCatapult() {
    sectionOne[2].classList.add('slide-text-left');
    sectionTwo[2].classList.add('slide-text-right');
    setTimeout(function() {
        if (rpiSection.classList.contains("section-hidden")) {
            sectionOne[4].classList.remove('slide-text-left');
            sectionTwo[4].classList.remove('slide-text-right');
            rpiSection.classList.remove('section-hidden');
        }
        projectSection.classList.remove('section-fadein');
        projectSection.classList.add('section-hidden');
        rpiSection.classList.add('section-fadein');
    }, 1700);
}

function backProjectsCatapult() {
    sectionOne[2].classList.remove('slide-text-left');
    sectionTwo[2].classList.remove('slide-text-right');
    sectionOne[4].classList.add('slide-text-left');
    sectionTwo[4].classList.add('slide-text-right');
    setTimeout(function() {
        rpiSection.classList.remove('section-fadein');
        rpiSection.classList.add('section-hidden');
        projectSection.classList.remove('section-hidden');
        projectSection.classList.add('section-fadein');
    }, 1700);
}

function openCatapultPaper() {
    window.open('BrendanBlacklockPortfolio/ECE3332_AutomatedCatapult_BrendanBlacklock_FinalReport.pdf', '_blank').focus();
}

function openCatapultYoutube() {
    window.open('https://www.youtube.com/playlist?list=PLLfB6FCCB5CdtsvPQ7Bs0q3EcEazYo1-1', '_blank').focus();
}

function projectsToSupermarket() {
    sectionOne[2].classList.add('slide-text-left');
    sectionTwo[2].classList.add('slide-text-right');
    setTimeout(function() {
        if (javaSection.classList.contains("section-hidden")) {
            sectionOne[5].classList.remove('slide-text-left');
            sectionTwo[5].classList.remove('slide-text-right');
            javaSection.classList.remove('section-hidden');
        }
        projectSection.classList.remove('section-fadein');
        projectSection.classList.add('section-hidden');
        javaSection.classList.add('section-fadein');
    }, 1700);
}

function backProjectsSupermarket() {
    sectionOne[2].classList.remove('slide-text-left');
    sectionTwo[2].classList.remove('slide-text-right');
    sectionOne[5].classList.add('slide-text-left');
    sectionTwo[5].classList.add('slide-text-right');
    setTimeout(function() {
        javaSection.classList.remove('section-fadein');
        javaSection.classList.add('section-hidden');
        projectSection.classList.remove('section-hidden');
        projectSection.classList.add('section-fadein');
    }, 1700);
}

function openSupermarketPaper() {
    window.open('BrendanBlacklockPortfolio/ProjectReportFile.pdf', '_blank').focus();
}

function openSupermarketRepo() {
    window.open('https://github.com/Refractedd/CS3365_SCIS_Project', '_blank').focus();
}

function openSupermarketYoutube() {
    window.open('https://youtu.be/mFpt0a1EStc', '_blank').focus();
}

function projectsToOutserved() {
    sectionOne[2].classList.add('slide-text-left');
    sectionTwo[2].classList.add('slide-text-right');
    setTimeout(function() {
        if (outservedSection.classList.contains("section-hidden")) {
            sectionOne[6].classList.remove('slide-text-left');
            sectionTwo[6].classList.remove('slide-text-right');
            outservedSection.classList.remove('section-hidden');
        }
        projectSection.classList.remove('section-fadein');
        projectSection.classList.add('section-hidden');
        outservedSection.classList.add('section-fadein');
    }, 1700);
}

function backProjectsOutserved() {
    sectionOne[2].classList.remove('slide-text-left');
    sectionTwo[2].classList.remove('slide-text-right');
    sectionOne[6].classList.add('slide-text-left');
    sectionTwo[6].classList.add('slide-text-right');
    setTimeout(function() {
        outservedSection.classList.remove('section-fadein');
        outservedSection.classList.add('section-hidden');
        projectSection.classList.remove('section-hidden');
        projectSection.classList.add('section-fadein');
    }, 1700);
}

function openOutservedNotebook() {
    window.open('https://www.kaggle.com/brendanblacklock/outservedmain?kernelSessionId=67202744', '_blank').focus();
}
