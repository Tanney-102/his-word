const openInOtherBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.search("android") > -1) {
    location.href=`intent://his-word.web.app#Intent;scheme=http;package=com.android.chrome;end`;
  } else if (userAgent.search("iphone") > -1 || userAgent.search("ipad") > -1 || userAgent.search("ipod") > -1) {
    location.href = `ftp://his-word.web.app/bridge.html`;
  } else {
    alert("주소창의 링크를 복사해 다른 브라우저에서 열어주세요.");
  }
}

export default function checkBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.search("kakaotalk") > -1) {
    document.getElementById("app-container").style.display = "none";
    openInOtherBrowser();
  }
};


