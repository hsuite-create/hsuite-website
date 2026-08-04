/**
 * experiences-page-main.js
 * ------------------------------------------------------------
 * experiences.html의 "시작점"입니다. index.html의 js/main.js와 역할은
 * 같지만, 이 페이지에는 히어로 슬라이드쇼가 없고 대신
 * ExperiencesPageComponent가 필요하기 때문에 페이지별로 따로 둡니다.
 */

document.addEventListener("DOMContentLoaded", () => {
  HeaderComponent.init();
  FooterComponent.init();
  SideDockComponent.init();
  BookingPanelComponent.init();
  ExperiencesPageComponent.init();
});
