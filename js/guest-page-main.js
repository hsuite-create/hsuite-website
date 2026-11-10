/**
 * guest-page-main.js
 * ------------------------------------------------------------
 * guest.html의 시작점입니다. 로딩이 이미 끝났어도 바로 실행되도록
 * document.readyState를 먼저 확인합니다.
 */

function runWhenReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

runWhenReady(() => {
  GuestPageComponent.init();
});
