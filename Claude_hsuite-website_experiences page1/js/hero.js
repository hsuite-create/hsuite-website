/**
 * hero.js
 * ------------------------------------------------------------
 * 히어로 배경 슬라이드쇼를 SITE_CONFIG.heroImages 배열로부터 자동 생성합니다.
 * 즉, 사진을 추가/교체하고 싶으면 config/site.config.js의 heroImages 배열만
 * 수정하면 되고, 이 파일이나 index.html은 건드릴 필요가 없습니다.
 */

const HeroComponent = {
  init() {
    this.slidesContainer = document.getElementById("heroSlides");
    if (!this.slidesContainer) return;

    const images = (window.SITE_CONFIG && SITE_CONFIG.heroImages) || [];

    images.forEach((imagePath) => {
      const slide = document.createElement("div");
      slide.className = "hero-slide";
      slide.style.backgroundImage = `url('${imagePath}')`;
      this.slidesContainer.appendChild(slide);
    });
  },
};
