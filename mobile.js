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
    document.getElementById('mobileCursor').remove();
    if (browserName == "Chrome" || browserName == "Safari") {
      document.getElementById("main-section").classList.add("mobile-chrome-safari-top");
      document.getElementById("main-section-nav").classList.add("mobile-chrome-safari-bottom");
    }
    if (browserName == "MS Edge" || browserName == "Edge ( chromium based)") {
      document.getElementById("main-section").classList.remove("mobile-chrome-safari-top");
      document.getElementById("main-section-nav").classList.remove("mobile-chrome-safari-bottom");
    }
}