/**
 * brand-page.js
 * ------------------------------------------------------------
 * brand.html에서 쓰는 스크롤 리빌 애니메이션을 담당합니다.
 * .brand-reveal 클래스가 붙은 요소가 화면에 들어오면 서서히
 * 떠오르며 나타납니다 (rooms-page.js, experiences-page.js와
 * 같은 검증된 패턴입니다).
 */

const BrandPageComponent = {
  init() {
    this.setupRevealAnimation();
  },

  setupRevealAnimation() {
    const targets = document.querySelectorAll(".brand-reveal");
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
