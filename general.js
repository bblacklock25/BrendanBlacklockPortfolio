document.addEventListener("DOMContentLoaded", resizeCorners);
window.addEventListener('resize', resizeCorners);

function resizeCorners() {
    if (window.innerHeight < 700 || window.innerWidth < 700) {
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