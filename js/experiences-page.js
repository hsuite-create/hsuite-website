/**
 * experiences-page.js
 * ------------------------------------------------------------
 * experiences.html에서만 쓰는 동작 두 가지를 담당합니다.
 *
 *  1) 부드러운 섹션 이동
 *     - 첫 화면 INDOOR / OUTDOOR 버튼 → 각 섹션으로 스크롤
 *     - INDOOR 3분할(흥인지문 뷰 / 웰컴티 / 루프탑) 클릭 → 각 상세 섹션으로 스크롤
 *     - data-scroll-to="#아이디" 속성이 붙은 요소는 전부 같은 방식으로 동작하므로,
 *       나중에 이동 버튼을 더 추가하고 싶으면 이 속성만 붙이면 됩니다.
 *
 *  2) 스크롤 리빌 애니메이션
 *     - .exp-reveal 클래스가 붙은 요소가 화면에 들어오면 서서히 떠오르며 나타납니다.
 *     - IntersectionObserver를 사용해서, 스크롤 이벤트를 직접 계산하지 않고
 *       가볍게 처리했습니다.
 */

const ExperiencesPageComponent = {
  init() {
    this.renderOutdoorLinks();
    this.bindScrollTriggers();
    this.setupRevealAnimation();
  },

  /** OUTDOOR 섹션의 링크 목록을 config/site.config.js 값으로 채워 넣습니다 */
  renderOutdoorLinks() {
    const list = document.getElementById("outdoorLinkList");
    if (!list || !window.SITE_CONFIG) return;

    list.innerHTML = SITE_CONFIG.experiencesPage.outdoorLinks
      .map((link) => {
        // 외부 링크는 새 탭으로, 우리 사이트 내부 페이지는 같은 탭에서 이동합니다
        const targetAttrs = link.external
          ? `target="_blank" rel="noopener noreferrer"`
          : "";
        return `
        <li>
          <a href="${link.url}" ${targetAttrs}>
            ${link.name}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
          </a>
        </li>`;
      })
      .join("");
  },

  /** data-scroll-to 속성이 붙은 모든 요소에 부드러운 스크롤 이동을 연결합니다 */
  bindScrollTriggers() {
    document.querySelectorAll("[data-scroll-to]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(el.dataset.scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  },

  /** .exp-reveal 요소들이 화면에 보이기 시작하면 서서히 떠오르게 합니다 */
  setupRevealAnimation() {
    const targets = document.querySelectorAll(".exp-reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // 한 번 나타난 뒤에는 다시 계산할 필요 없음
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  },
};

document.addEventListener("DOMContentLoaded", () => {
  ExperiencesPageComponent.init();
});
