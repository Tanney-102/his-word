export default function checkBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.search("kakaotalk") > -1 && userAgent.search("android") > -1) {
    document.getElementById("app-container").style.display = "none";
    location.href=`intent://his-word.web.app#Intent;scheme=http;package=com.android.chrome;end`;
  }
};


