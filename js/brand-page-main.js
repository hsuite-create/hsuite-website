/**
 * brand-page-main.js
 * ------------------------------------------------------------
 * brand.html의 시작점입니다. document.readyState를 먼저 확인해서
 * 이미 로딩이 끝난 시점에 실행돼도 문제없이 바로 실행되도록 했습니다
 * (자세한 이유는 js/main.js 상단 주석 참고).
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
  BrandPageComponent.init();
});
