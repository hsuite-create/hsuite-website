/**
 * guest-page.js
 * ------------------------------------------------------------
 * 투숙객 전용 가이드(/guest)를 화면에 그리는 컴포넌트입니다.
 * 내용은 전부 config/guest.config.js(GUEST_CONFIG)에서 가져옵니다.
 *
 * 하는 일:
 *  1) 상단 문구 + 섹션(둘러볼 곳/맛집/산책/투숙안내)을 만들어 그림
 *  2) 한글/영문 전환 (선택한 언어는 브라우저에 기억)
 *  3) 맛집 섹션의 "이른 아침 / 늦은 밤" 필터
 */

const GuestPageComponent = {
  lang: "ko",
  filter: "all",

  /** 시작 함수: 저장된 언어를 불러오고, 화면을 그리고, 버튼 이벤트를 연결합니다. */
  init() {
    if (typeof GUEST_CONFIG === "undefined") return;
    this.lang = this.loadLang();
    this.render();
    this.bindEvents();
  },

  /** 저장된 언어를 읽어옵니다. (저장소를 못 쓰는 환경이면 브라우저 언어로 판단) */
  loadLang() {
    try {
      const saved = localStorage.getItem("hsuite-guest-lang");
      if (saved === "ko" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
  },

  /** 선택한 언어를 저장합니다. */
  saveLang() {
    try {
      localStorage.setItem("hsuite-guest-lang", this.lang);
    } catch (e) {}
  },

  /** { ko, en } 형태의 문구에서 현재 언어에 맞는 글자를 꺼냅니다. */
  t(obj) {
    if (!obj) return "";
    return obj[this.lang] || obj.ko || "";
  },

  /** HTML에 글자를 넣을 때 특수문자를 안전하게 바꿔줍니다. */
  esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },

  /** 페이지 전체(상단 + 모든 섹션 + 하단)를 다시 그립니다. */
  render() {
    const cfg = GUEST_CONFIG;
    document.documentElement.lang = this.lang;

    document.getElementById("guestHero").innerHTML = `
      <h1 class="guest-title">${this.esc(this.t(cfg.hero.title))}</h1>
      <p class="guest-lead">${this.esc(this.t(cfg.hero.lead))}</p>
      <p class="guest-desc">${this.esc(this.t(cfg.hero.desc))}</p>
      <a class="guest-insta" href="${this.esc(cfg.instagram.url)}" target="_blank" rel="noopener">${this.esc(this.t(cfg.instagram.label))} →</a>`;

    document.getElementById("guestNav").innerHTML = cfg.sections
      .map((s) => `<a href="#${s.id}">${this.esc(this.t(s.title))}</a>`)
      .join("");

    document.getElementById("guestSections").innerHTML = cfg.sections.map((s) => this.renderSection(s)).join("");
    document.getElementById("guestFooter").textContent = this.t(cfg.ui.footerNote);

    document.querySelectorAll(".guest-lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === this.lang);
    });
    this.applyFilter();
  },

  /** 섹션 하나를 종류(type)에 맞게 그립니다. */
  renderSection(sec) {
    let body = "";
    if (sec.type === "info") body = this.renderInfo(sec);
    else body = `<div class="guest-list">${sec.items.map((i) => this.renderPlace(i)).join("")}</div>`;

    const intro = sec.intro ? `<p class="guest-intro">${this.esc(this.t(sec.intro))}</p>` : "";
    const filters = sec.filters ? this.renderFilters() : "";

    return `
      <section class="guest-section" id="${sec.id}">
        <div class="guest-sec-head">
          <span class="eyebrow">${this.esc(sec.no)}</span>
          <h2>${this.esc(this.t(sec.title))}</h2>
        </div>
        ${intro}${filters}${body}
      </section>`;
  },

  /** 장소/코스 카드 하나를 그립니다. (이름, 추천 이유, 지도 버튼, 필터용 태그) */
  renderPlace(item) {
    const ui = GUEST_CONFIG.ui;
    const tags = (item.tags || []).join(" ");
    const map = item.map
      ? `<a class="guest-map" href="${this.esc(item.map)}" target="_blank" rel="noopener">${this.esc(this.t(ui.mapLabel))} ↗</a>`
      : "";
    return `
      <article class="guest-card" data-tags="${this.esc(tags)}">
        <h3>${this.esc(this.t(item.name))}</h3>
        <p class="guest-why-label">${this.esc(this.t(ui.whyLabel))}</p>
        <p class="guest-why">${this.esc(this.t(item.why))}</p>
        ${map}
      </article>`;
  },

  /** 투숙 안내(라벨 + 값 목록)를 그립니다. */
  renderInfo(sec) {
    const rows = sec.items
      .map((i) => `<div class="guest-info-row"><dt>${this.esc(this.t(i.label))}</dt><dd>${this.esc(this.t(i.value))}</dd></div>`)
      .join("");
    return `<dl class="guest-info">${rows}</dl>`;
  },

  /** 필터 칩(전체 / 이른 아침 / 늦은 밤)을 그립니다. */
  renderFilters() {
    const ui = GUEST_CONFIG.ui;
    const chips = [
      ["all", ui.filterAll],
      ["early", ui.filterEarly],
      ["late", ui.filterLate],
    ];
    return `<div class="guest-filters">${chips
      .map(([key, label]) => `<button type="button" class="guest-chip" data-filter="${key}">${this.esc(this.t(label))}</button>`)
      .join("")}</div>`;
  },

  /** 현재 필터에 맞지 않는 카드를 숨깁니다. (필터가 있는 섹션만 대상) */
  applyFilter() {
    document.querySelectorAll(".guest-chip").forEach((c) => {
      c.classList.toggle("active", c.dataset.filter === this.filter);
    });
    const filterable = document.querySelector(".guest-filters");
    if (!filterable) return;
    const list = filterable.parentElement.querySelectorAll(".guest-card");
    list.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.hidden = this.filter !== "all" && !tags.includes(this.filter);
    });
  },

  /** 언어 버튼 / 필터 칩 클릭을 처리합니다. (화면이 다시 그려져도 동작하도록 위임 방식 사용) */
  bindEvents() {
    document.addEventListener("click", (e) => {
      const langBtn = e.target.closest("[data-lang]");
      if (langBtn) {
        this.lang = langBtn.dataset.lang;
        this.saveLang();
        this.render();
        return;
      }
      const chip = e.target.closest("[data-filter]");
      if (chip) {
        this.filter = chip.dataset.filter;
        this.applyFilter();
      }
    });
  },
};
