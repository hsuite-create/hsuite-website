/**
 * experiences-page-main.js
 * ------------------------------------------------------------
 * experiences.html의 "시작점"입니다. index.html의 js/main.js와 역할은
 * 같지만, 이 페이지에는 히어로 슬라이드쇼가 없고 대신
 * ExperiencesPageComponent가 필요하기 때문에 페이지별로 따로 둡니다.
 *
 * document.readyState를 먼저 확인하는 이유:
 *  "DOMContentLoaded" 이벤트는 페이지 로딩 중 딱 한 번만 발생합니다.
 *  만약 이 스크립트가 실행되는 시점에 이미 그 이벤트가 지나가버렸다면
 *  (캐시, 뒤로가기로 페이지 복원 등으로 타이밍이 어긋나는 경우),
 *  아래에서 이벤트를 아무리 기다려도 다시 오지 않아서 영원히 실행되지
 *  않는 버그가 생깁니다. 그래서 "이미 로딩이 끝났으면 바로 실행,
 *  아직 로딩 중이면 이벤트를 기다렸다가 실행"하도록 방어적으로 짰습니다.
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
  FooterComponent.init();
  SideDockComponent.init();
  BookingPanelComponent.init();
  ExperiencesPageComponent.init();
});
