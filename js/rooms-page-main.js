/**
 * rooms-page-main.js
 * ------------------------------------------------------------
 * rooms.html의 시작점입니다. document.readyState를 먼저 확인해서,
 * 이 스크립트가 실행되는 시점에 이미 로딩이 끝나있어도 문제없이
 * 바로 실행되도록 방어적으로 짰습니다 (자세한 이유는
 * js/main.js 상단 주석 참고).
 */

function runWhenReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

runWhenReady(() => {
  HeaderComponent.init();
  SideDockComponent.init();
  BookingPanelComponent.init();
  RoomsPageComponent.init();
});
