var mobileDevice = 0;

if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    mobileDevice = 1;
} else{
    mobileDevice = 0;
}

var browserName = (function (agent) {
  switch (true) {
    case agent.indexOf("edga/") > -1: return "MS Edge";
    case agent.indexOf("edgios/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
  }
})(window.navigator.userAgent.toLowerCase());

const aboutSectionTwoSubheader = document.querySelector('#about-section-two-text .section-subheader');

if (mobileDevice == 1) {
  if (browserName == "Safari") {
    // HOME SECTION
    document.getElementById("main-section-one").classList.add("mobile-chrome-safari-main-one");
    document.getElementById("main-section-nav").classList.add("mobile-chrome-safari-main-nav");

    // ABOUT SECTION
    document.getElementById("about-section-one").classList.add("mobile-safari-about-one");
    document.getElementById("about-section-two").classList.add("mobile-safari-about-two");
    document.querySelector("#about-section-one-text .section-subheader").classList.add("mobile-safari-about-one-subheader");
    aboutSectionTwoSubheader.classList.add('mobile-chrome-safari-about-two-section-subheader');
    
    // PROJECT SECTION
    document.getElementById("project-section-one").classList.add("mobile-safari-project-one");
    document.getElementById("project-section-two").classList.add("mobile-safari-project-two");
    document.getElementById("back-home-project").classList.add("mobile-safari-back-home-project");

    // ROVER SECTION
    document.getElementById("rover-section-one").classList.add("mobile-safari-rover-one")
    document.querySelector("#rover-section-one-text .section-subheader").classList.add("mobile-safari-rover-one-subheader");
    document.getElementById("rover-section-two").classList.add("mobile-safari-rover-two")
    document.getElementById("back-project-rover").classList.add("mobile-safari-back-project-rover");
  }
  if (navigator.userAgent.match('CriOS')) {
    // HOME SECTION
    document.getElementById("main-section-one").classList.add("mobile-chrome-safari-main-one");
    document.getElementById("main-section-nav").classList.add("mobile-chrome-safari-main-nav");

    // ABOUT SECTION
    document.getElementById("about-section-one").classList.add("mobile-chrome-about-one");
    document.getElementById("about-section-two").classList.add("mobile-chrome-about-two");
    document.querySelector("#about-section-one-text .section-subheader").classList.add("mobile-chrome-about-one-subheader");
    aboutSectionTwoSubheader.classList.add('mobile-chrome-safari-about-two-section-subheader');

    // PROJECT SECTION
    document.getElementById("project-section-one").classList.add("mobile-chrome-project-one");
    document.getElementById("project-section-two").classList.add("mobile-chrome-project-two");
    document.getElementById("back-home-project").classList.add("mobile-chrome-back-home-project");

    // ROVER SECTION
    document.getElementById("rover-section-one").classList.add("mobile-chrome-rover-one")
    document.querySelector("#rover-section-one-text .section-subheader").classList.add("mobile-chrome-rover-one-subheader");
    document.getElementById("rover-section-two").classList.add("mobile-chrome-rover-two")
    document.getElementById("back-project-rover").classList.add("mobile-chrome-back-project-rover");
  }
  if (browserName == "MS Edge" || browserName == "Edge ( chromium based)") {
    // HOME SECTION
    document.getElementById("main-section-one").classList.remove("mobile-chrome-safari-main-one");
    document.getElementById("main-section-nav").classList.remove("mobile-chrome-safari-main-nav");

    // ABOUT SECTION
    document.getElementById("about-section-one").classList.remove("mobile-chrome-about-one");
    document.getElementById("about-section-two").classList.remove("mobile-chrome-about-two");
    document.getElementById("about-section-one").classList.remove("mobile-safari-about-one");
    document.getElementById("about-section-two").classList.remove("mobile-safari-about-two");
    document.querySelector("#about-section-one-text .section-subheader").classList.remove("mobile-chrome-about-one-subheader");
    document.querySelector("#about-section-one-text .section-subheader").classList.remove("mobile-safari-about-one-subheader");
    aboutSectionTwoSubheader.classList.remove('mobile-chrome-safari-about-two-section-subheader');

    // PROJECT SECTION
    document.getElementById("project-section-one").classList.remove("mobile-safari-project-one");
    document.getElementById("project-section-one").classList.remove("mobile-chrome-project-one");
    document.getElementById("project-section-two").classList.remove("mobile-safari-project-two");
    document.getElementById("project-section-two").classList.remove("mobile-chrome-project-two");
    document.getElementById("back-home-project").classList.remove("mobile-safari-back-home-project");
    document.getElementById("back-home-project").classList.remove("mobile-chrome-back-home-project");

    // ROVER SECTION
    document.getElementById("rover-section-one").classList.remove("mobile-safari-rover-one")
    document.querySelector("#rover-section-one-text .section-subheader").classList.remove("mobile-safari-rover-one-subheader");
    document.getElementById("rover-section-one").classList.remove("mobile-chrome-rover-one")
    document.querySelector("#rover-section-one-text .section-subheader").classList.remove("mobile-chrome-rover-one-subheader");
    document.getElementById("rover-section-two").classList.remove("mobile-safari-rover-two")
    document.getElementById("rover-section-two").classList.remove("mobile-chrome-rover-two")
    document.getElementById("back-project-rover").classList.remove("mobile-safari-back-project-rover");
    document.getElementById("back-project-rover").classList.remove("mobile-chrome-back-project-rover");
  }
}