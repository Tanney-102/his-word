export default function checkBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.search("kakaotalk") > -1) {
    if (userAgent.search("android") > -1) {
      location.href=`intent://his-word.web.app#Intent;scheme=http;package=com.android.chrome;end`;
      window.downloadBtn = 1;
    } else {
      window.downloadBtn = 0;
      document.getElementById("loading-page").style.display = "none";
      document.getElementById("app-container").style.display = "block";
    }
  } else if (userAgent.search("iphone") > -1 || userAgent.search("ipad") > -1 || userAgent.search("ipod") > -1) {
    window.downloadBtn = 0;
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("app-container").style.display = "block";
  } else {
    window.downloadBtn = 1;
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("app-container").style.display = "block";
  }
};


