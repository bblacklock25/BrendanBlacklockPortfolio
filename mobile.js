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

if (mobileDevice == 1) {
  console.log(0);
  if (browserName == "Chrome" || browserName == "Safari") {
    console.log(1);
    document.getElementById("main-section-one").classList.add("mobile-chrome-safari-main-one");
    document.getElementById("main-section-nav").classList.add("mobile-chrome-safari-main-nav");
    document.getElementById("about-section-one").classList.add("mobile-chrome-safari-about-one");
    document.getElementById("about-section-two").classList.add("mobile-chrome-safari-about-two");
  }
  if (browserName == "MS Edge" || browserName == "Edge ( chromium based)") {
    document.getElementById("main-section-one").classList.remove("mobile-chrome-safari-main-one");
    document.getElementById("main-section-nav").classList.remove("mobile-chrome-safari-main-nav");
    document.getElementById("about-section-one").classList.remove("mobile-chrome-safari-about-one");
    document.getElementById("about-section-two").classList.remove("mobile-chrome-safari-about-two");
  }
}