/**
 * rooms-page.js
 * ------------------------------------------------------------
 * rooms.html에서만 쓰는 동작 두 가지를 담당합니다. experiences.html의
 * data-scroll-to / .exp-reveal 패턴을 그대로 재사용했습니다 (이 방식은
 * config 값을 읽지 않는 순수 DOM 조작이라, 지금까지 문제였던 것과
 * 무관하게 안정적으로 동작하는 걸 이미 확인했습니다).
 *
 *  1) 부드러운 섹션 이동
 *     - 객실 4종 카드 클릭 → 각 상세 섹션으로 스크롤
 *     - data-scroll-to="#아이디" 속성이 붙은 요소는 전부 같은 방식으로 동작
 *
 *  2) 스크롤 리빌 애니메이션
 *     - .room-reveal 클래스가 붙은 요소가 화면에 들어오면 서서히 떠오르며 나타남
 */

const RoomsPageComponent = {
  init() {
    this.bindScrollTriggers();
    this.setupRevealAnimation();
  },

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

  setupRevealAnimation() {
    const targets = document.querySelectorAll(".room-reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  },
};
