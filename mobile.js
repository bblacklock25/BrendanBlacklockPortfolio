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
    document.getElementById("rover-section-one").classList.add("mobile-safari-rover-one");
    document.querySelector("#rover-section-one-text .section-subheader").classList.add("mobile-safari-rover-one-subheader");
    document.getElementById("rover-section-two").classList.add("mobile-safari-rover-two");
    
    // CATAPULT SECTION
    document.getElementById("catapult-section-one").classList.add("mobile-safari-catapult-one");
    document.querySelector("#catapult-section-one-text .section-subheader").classList.add("mobile-safari-catapult-one-subheader");
    document.getElementById("catapult-section-two").classList.add("mobile-safari-catapult-two");
    
    // SUPERMARKET SECTION
    document.getElementById("supermarket-section-one").classList.add("mobile-safari-supermarket-one");
    document.querySelector("#supermarket-section-one-text .section-subheader").classList.add("mobile-safari-supermarket-one-subheader");
    document.getElementById("supermarket-section-two").classList.add("mobile-safari-supermarket-two");

    // OUTSERVED SECTION
    document.getElementById("outserved-section-one").classList.add("mobile-safari-outserved-one");
    document.querySelector("#outserved-section-one-text .section-subheader").classList.add("mobile-safari-outserved-one-subheader");
    document.getElementById("outserved-section-two").classList.add("mobile-safari-outserved-two");
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
    document.getElementById("rover-section-one").classList.add("mobile-chrome-rover-one");
    document.querySelector("#rover-section-one-text .section-subheader").classList.add("mobile-chrome-rover-one-subheader");
    document.getElementById("rover-section-two").classList.add("mobile-chrome-rover-two");
    
    // CATAPULT SECTION
    document.getElementById("catapult-section-one").classList.add("mobile-chrome-catapult-one");
    document.querySelector("#catapult-section-one-text .section-subheader").classList.add("mobile-chrome-catapult-one-subheader");
    document.getElementById("catapult-section-two").classList.add("mobile-chrome-catapult-two");
    
    // SUPERMARKET SECTION
    document.getElementById("supermarket-section-one").classList.add("mobile-chrome-supermarket-one");
    document.querySelector("#supermarket-section-one-text .section-subheader").classList.add("mobile-chrome-supermarket-one-subheader");
    document.getElementById("supermarket-section-two").classList.add("mobile-chrome-supermarket-two");

    // OUTSERVED SECTION
    document.getElementById("outserved-section-one").classList.add("mobile-chrome-outserved-one");
    document.querySelector("#outserved-section-one-text .section-subheader").classList.add("mobile-chrome-outserved-one-subheader");
    document.getElementById("outserved-section-two").classList.add("mobile-chrome-outserved-two");
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
    document.getElementById("rover-section-one").classList.remove("mobile-safari-rover-one");
    document.querySelector("#rover-section-one-text .section-subheader").classList.remove("mobile-safari-rover-one-subheader");
    document.getElementById("rover-section-one").classList.remove("mobile-chrome-rover-one");
    document.querySelector("#rover-section-one-text .section-subheader").classList.remove("mobile-chrome-rover-one-subheader");
    document.getElementById("rover-section-two").classList.remove("mobile-safari-rover-two");
    document.getElementById("rover-section-two").classList.remove("mobile-chrome-rover-two");
    
    // CATAPULT SECTION
    document.getElementById("catapult-section-one").classList.remove("mobile-safari-catapult-one");
    document.querySelector("#catapult-section-one-text .section-subheader").classList.remove("mobile-safari-catapult-one-subheader");
    document.getElementById("catapult-section-one").classList.remove("mobile-chrome-catapult-one");
    document.querySelector("#catapult-section-one-text .section-subheader").classList.remove("mobile-chrome-catapult-one-subheader");
    document.getElementById("catapult-section-two").classList.remove("mobile-safari-catapult-two");
    document.getElementById("catapult-section-two").classList.remove("mobile-chrome-catapult-two");
    
    // SUPERMARKET SECTION
    document.getElementById("supermarket-section-one").classList.remove("mobile-safari-supermarket-one");
    document.querySelector("#supermarket-section-one-text .section-subheader").classList.remove("mobile-safari-supermarket-one-subheader");
    document.getElementById("supermarket-section-one").classList.remove("mobile-chrome-supermarket-one");
    document.querySelector("#supermarket-section-one-text .section-subheader").classList.remove("mobile-chrome-supermarket-one-subheader");
    document.getElementById("supermarket-section-two").classList.remove("mobile-safari-supermarket-two");
    document.getElementById("supermarket-section-two").classList.remove("mobile-chrome-supermarket-two");

    // OUTSERVED SECTION
    document.getElementById("outserved-section-one").classList.remove("mobile-safari-outserved-one");
    document.querySelector("#outserved-section-one-text .section-subheader").classList.remove("mobile-safari-outserved-one-subheader");
    document.getElementById("outserved-section-one").classList.remove("mobile-chrome-outserved-one");
    document.querySelector("#outserved-section-one-text .section-subheader").classList.remove("mobile-chrome-outserved-one-subheader");
    document.getElementById("outserved-section-two").classList.remove("mobile-safari-outserved-two");
    document.getElementById("outserved-section-two").classList.remove("mobile-chrome-outserved-two");
  }
}