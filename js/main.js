/**
 * main.js
 * ------------------------------------------------------------
 * 이 사이트의 "시작점"입니다. 페이지가 다 로드되면 각 컴포넌트의
 * init()을 순서대로 호출해서 화면을 완성합니다.
 *
 * document.readyState를 먼저 확인하는 이유:
 *  "DOMContentLoaded" 이벤트는 페이지 로딩 중 딱 한 번만 발생합니다.
 *  이 스크립트가 실행되는 시점에 이미 그 이벤트가 지나가버렸다면
 *  (캐시, 뒤로가기로 페이지 복원 등) 이벤트를 기다려도 다시 오지 않아서
 *  영원히 실행되지 않는 버그가 생길 수 있습니다. 그래서 "이미 로딩이
 *  끝났으면 바로 실행, 아직이면 이벤트를 기다렸다가 실행"하도록
 *  방어적으로 짰습니다.
 *
 * 새 컴포넌트를 추가하는 방법:
 *  1. js/새컴포넌트.js 파일을 만들고 { init() {...} } 형태로 작성
 *  2. index.html <body> 맨 아래에 <script src="js/새컴포넌트.js"></script> 추가
 *  3. 아래 목록에 NewComponent.init() 한 줄 추가
 */

function runWhenReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

runWhenReady(() => {
  HeroComponent.init();
  HeaderComponent.init();
  FooterComponent.init();
  SideDockComponent.init();
  BookingPanelComponent.init();
});
