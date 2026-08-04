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

/**
 * main.js
 * ------------------------------------------------------------
 * 이 사이트의 "시작점"입니다. 페이지가 다 로드되면 각 컴포넌트의
 * init()을 순서대로 호출해서 화면을 완성합니다.
 *
 * 이 파일은 index.html, reservation.html 등 여러 페이지에서 공통으로
 * 재사용됩니다. 페이지마다 필요한 컴포넌트 스크립트만 골라서 불러오기
 * 때문에(예: reservation.html에는 hero.js가 없음), 아직 정의되지 않은
 * 컴포넌트를 호출하다가 에러가 나지 않도록 typeof로 존재 여부를 먼저
 * 확인합니다.
 *
 * 새 컴포넌트를 추가하는 방법:
 *  1. js/새컴포넌트.js 파일을 만들고 { init() {...} } 형태로 작성
 *  2. 그 컴포넌트가 필요한 페이지의 <body> 맨 아래에
 *     <script src="js/새컴포넌트.js"></script> 추가
 *  3. 아래 목록에 한 줄 추가
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof HeroComponent !== "undefined") HeroComponent.init();
  if (typeof HeaderComponent !== "undefined") HeaderComponent.init();
  if (typeof FooterComponent !== "undefined") FooterComponent.init();
  if (typeof SideDockComponent !== "undefined") SideDockComponent.init();
  if (typeof BookingPanelComponent !== "undefined") BookingPanelComponent.init();
  if (typeof ReservationComponent !== "undefined") ReservationComponent.init();
});
