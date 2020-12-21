const createRippleEffect = (e) => {
  const locationX = e.clientX - e.target.getBoundingClientRect().left;
  const locationY = e.clientY - e.target.getBoundingClientRect().top;
  const ripple = document.createElement('span');
  ripple.classList.add("ripple");
  ripple.style.left = `${locationX}px`;
  ripple.style.top = `${locationY}px`;

  e.target.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 750);
};

const createShakeEffect = (element, delay) => {
  element.style.webkitAnimation = `shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) ${delay}s both`;
  element.style.animation = `shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) ${delay}s both`;
};

const createSlideInEffect = (element, delay) => {
  element.style.webkitAnimation = `slide-in-elliptic-bottom-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${delay}s both`;
  element.style.animation = `slide-in-elliptic-bottom-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${delay}s both`;
};

const createShodowDropEffect = (element, delay) => {
  element.style.webkitAnimation = `shadow-drop-center 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${delay}s both`;
  element.style.animation = `shadow-drop-center 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${delay}s both`;
};

const getRandomWordCardURL = () => {
  const randomIndex = Math.floor(Math.random() * 34 + 1)

  return `../public/img/wordcards/${randomIndex}.jpg`;
};

const fillWordCard = (container, imgURL) => {
  container.innerHTML += `
    <img src=${imgURL} class="wordcard" />
  `
};

const showDownloadButton = (container, imgURL) => {
  container.innerHTML += `
    <a href=${imgURL} download="2021년 말씀뽑기.jpg" class="download-button">다운로드</a>
  `;
};

const slidePageToLeft = ($main) => {
  const $secondPage = document.getElementById("second-page");
  const imgURL = getRandomWordCardURL();

  setTimeout(() => {
    $main.style.transform = "translateX(-50%)"
    createShakeEffect($secondPage.children[0], 0.8);
    createSlideInEffect($secondPage.children[1], 1.9);
    fillWordCard($secondPage.children[1], imgURL);
    showDownloadButton($secondPage);
  }, 700);

  setTimeout(() => {
    createShodowDropEffect($secondPage.children[1], 0);
  }, 3400);
};

export const pickButtonHandler = (e) => {
  createRippleEffect(e);
  slidePageToLeft(e.target.closest("main"));
};