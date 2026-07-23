/**
 * header.js
 * ------------------------------------------------------------
 * 헤더(상단바)와 관련된 동작만 모아둔 파일입니다.
 *  - 스크롤에 따라 헤더 글자색을 밝게/어둡게 전환
 *  - 스크롤 60px부터 가운데 내비게이션 숨김
 *  - 모바일 햄버거 메뉴 열고 닫기
 *
 * 전역 객체 HeaderComponent 하나만 만들고, init()을 밖에서 호출하는
 * 구조입니다(js/main.js 참고). 이렇게 하면 다른 파일과 이름이 겹칠
 * 걱정 없이 안전하게 스크립트를 나눠 관리할 수 있습니다.
 */

const HeaderComponent = {
  /** 초기화: DOM이 준비된 뒤 한 번만 호출됩니다 */
  init() {
    this.header = document.getElementById("siteHeader");
    this.nav = document.getElementById("mainNav");
    this.burger = document.getElementById("burgerBtn");

    if (!this.header || !this.nav || !this.burger) return;

    // 히어로 섹션 높이를 기준으로 "얼마나 스크롤해야 헤더가 바뀔지" 계산합니다
    this.getHeroHeight = () => {
      const hero = document.querySelector(".hero");
      return hero ? hero.offsetHeight : 0;
    };

    window.addEventListener("scroll", () => this.handleScroll());
    this.handleScroll(); // 새로고침 시 스크롤 위치가 남아있을 수 있으니 최초 1회 실행

    this.burger.addEventListener("click", () => {
      this.nav.classList.toggle("open");
    });

    // 모바일 메뉴에서 링크를 누르면 메뉴가 자동으로 닫히도록
    this.nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => this.nav.classList.remove("open"));
    });
  },

  /** 스크롤 위치에 따라 헤더 상태(.solid)와 내비게이션(.hide)을 갱신합니다 */
  handleScroll() {
    const scrollY = window.scrollY;
    const heroHeight = this.getHeroHeight();

    // 히어로를 거의 다 지났을 때 글자색을 어두운 색으로 전환합니다.
    // (배경은 항상 투명하게 유지하기로 했으므로, 어두운 히어로 사진 위에서
    //  어두운 글자가 겹쳐 안 보이지 않도록 임계값을 히어로 끝부분으로 잡았습니다.)
    this.header.classList.toggle("solid", scrollY > heroHeight - 140);

    // 가운데 카테고리 메뉴는 스크롤을 조금만 내려도 바로 사라지게
    this.nav.classList.toggle("hide", scrollY > 60);
  },
};
