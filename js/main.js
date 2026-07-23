/**
 * main.js
 * ------------------------------------------------------------
 * 이 사이트의 "시작점"입니다. 페이지가 다 로드되면 각 컴포넌트의
 * init()을 순서대로 호출해서 화면을 완성합니다.
 *
 * 새 컴포넌트를 추가하는 방법:
 *  1. js/새컴포넌트.js 파일을 만들고 { init() {...} } 형태로 작성
 *  2. index.html <body> 맨 아래에 <script src="js/새컴포넌트.js"></script> 추가
 *  3. 아래 목록에 NewComponent.init() 한 줄 추가
 */

document.addEventListener("DOMContentLoaded", () => {
  HeroComponent.init();
  HeaderComponent.init();
  FooterComponent.init();
  SideDockComponent.init();
  BookingPanelComponent.init();
});
