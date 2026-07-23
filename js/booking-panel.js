/**
 * booking-panel.js
 * ------------------------------------------------------------
 * BOOK 버튼 클릭 시 열리는 예약 패널을 담당합니다.
 *
 * 중요: 이 사이트는 직접 예약을 받지 않고 OTA(여행사) 파트너 사이트로
 * 새 탭 연결만 해줍니다. 파트너 목록(이름/설명/링크)은 이 파일이 아니라
 * config/site.config.js 의 SITE_CONFIG.bookingPartners 에서 관리합니다.
 * → 즉, "예약 버튼 링크를 한 파일에서 관리"하는 요구사항을 위해
 *    새 파트너를 추가/삭제하거나 링크만 바꾸고 싶을 때는
 *    이 js 파일이 아니라 config 파일만 수정하면 됩니다.
 */

const BookingPanelComponent = {
  hasOpenedOnce: false,

  init() {
    this.panel = document.getElementById("bookingPanel");
    this.overlay = document.getElementById("bookingOverlay");
    this.closeBtn = document.getElementById("bookingClose");
    this.confirmStayBtn = document.getElementById("confirmStay");
    this.partnerToggle = document.getElementById("partnerToggle");
    this.partnerOtherGrid = document.getElementById("partnerOther");

    if (!this.panel) return;

    this.renderPartnerLinks();
    this.bindEvents();
  },

  /** config에 있는 예약 파트너 목록을 읽어서 DOM에 그려 넣습니다 */
  renderPartnerLinks() {
    if (!window.SITE_CONFIG) return;
    const { main, other } = SITE_CONFIG.bookingPartners;

    const mainList = document.getElementById("partnerMainList");
    if (mainList) {
      mainList.innerHTML = main.map((partner) => this.mainPartnerHTML(partner)).join("");
    }

    if (this.partnerOtherGrid) {
      this.partnerOtherGrid.innerHTML = other
        .map((partner) => this.otherPartnerHTML(partner))
        .join("");
    }
  },

  /** 큰 카드 형태(Agoda, Trip.com, Expedia 등)의 마크업을 만듭니다 */
  mainPartnerHTML(partner) {
    return `
      <a class="partner-row" href="${partner.url}" target="_blank" rel="noopener noreferrer">
        <span class="partner-text">
          <strong>${partner.name}</strong>
          <span>${partner.description}</span>
        </span>
        ${this.externalIconSVG()}
      </a>`;
  },

  /** 작은 버튼 형태(Yanolja, 여기어때 등)의 마크업을 만듭니다 */
  otherPartnerHTML(partner) {
    return `
      <a class="partner-pill" href="${partner.url}" target="_blank" rel="noopener noreferrer">
        ${partner.name}
        ${this.externalIconSVG()}
      </a>`;
  },

  externalIconSVG() {
    return `<svg class="ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>`;
  },

  bindEvents() {
    // 화면 어디에 있는 Book 버튼이든(.js-book-trigger) 전부 같은 패널을 엽니다
    document.querySelectorAll(".js-book-trigger").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });
    });

    this.closeBtn.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", () => this.close());
    this.confirmStayBtn.addEventListener("click", () => this.open());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.panel.classList.contains("open")) {
        this.close();
      }
    });

    if (this.partnerToggle && this.partnerOtherGrid) {
      this.partnerToggle.addEventListener("click", () => {
        const isOpen = this.partnerOtherGrid.classList.toggle("open");
        this.partnerToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  },

  open() {
    this.panel.classList.add("open");
    this.overlay.classList.add("show");
    this.panel.setAttribute("aria-hidden", "false");
    this.hasOpenedOnce = true;
    this.confirmStayBtn.classList.remove("show");
    document.body.style.overflow = "hidden";
  },

  close() {
    this.panel.classList.remove("open");
    this.overlay.classList.remove("show");
    this.panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // 한 번이라도 열었다가 닫은 적이 있으면 재진입 버튼을 보여줍니다
    if (this.hasOpenedOnce) {
      this.confirmStayBtn.classList.add("show");
    }
  },
};
