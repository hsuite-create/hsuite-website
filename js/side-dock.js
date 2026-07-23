/**
 * side-dock.js
 * ------------------------------------------------------------
 * 화면 오른쪽 세로 아이콘 도크의 동작을 담당합니다.
 *  - 히어로를 60% 이상 스크롤하면 서서히 나타남
 *  - "맨 위로" 버튼 클릭 시 부드럽게 스크롤
 *  - SNS 아이콘 링크도 SITE_CONFIG 값으로 채워 넣습니다
 */

const SideDockComponent = {
  init() {
    this.dock = document.getElementById("sideDock");
    this.toTopBtn = document.getElementById("toTop");
    if (!this.dock) return;

    // SNS 링크를 config에서 채워 넣기
    if (window.SITE_CONFIG) {
      const igLink = document.getElementById("dockInstagram");
      const waLink = document.getElementById("dockWhatsapp");
      if (igLink) igLink.setAttribute("href", SITE_CONFIG.social.instagram);
      if (waLink) waLink.setAttribute("href", SITE_CONFIG.social.whatsapp);
    }

    window.addEventListener("scroll", () => this.handleScroll());
    this.handleScroll();

    if (this.toTopBtn) {
      this.toTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  },

  handleScroll() {
    const hero = document.querySelector(".hero");
    const heroHeight = hero ? hero.offsetHeight : 0;
    this.dock.classList.toggle("show", window.scrollY > heroHeight * 0.6);
  },
};
