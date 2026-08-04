/**
 * list-page.js
 * ------------------------------------------------------------
 * restaurants.html, shopping.html처럼 "제목 + 소개문구 + 아이템 목록"
 * 구조가 똑같은 페이지들을 위한 공용 렌더러입니다.
 *
 * 사용법: 각 페이지의 <body>에서
 *   ListPageComponent.render(SITE_CONFIG.restaurantsPage)
 * 처럼 어떤 config 데이터를 그릴지만 넘겨주면 됩니다.
 * 새 목록 페이지를 추가하고 싶다면, config에 같은 모양
 * ({ title, intro, items:[{name, description, url}] })의
 * 객체를 추가하고 이 컴포넌트를 재사용하면 됩니다.
 */

const ListPageComponent = {
  /**
   * @param {Object} pageData - { title, intro, items:[{name, description, url}] }
   */
  render(pageData) {
    if (!pageData) return;

    this.setText("listPageTitle", pageData.title);
    this.setText("listPageIntro", pageData.intro);

    const list = document.getElementById("listPageItems");
    if (!list) return;

    list.innerHTML = pageData.items
      .map(
        (item) => `
        <li>
          <div class="list-item">
            <div>
              <div class="list-item-name">${item.name}</div>
              <div class="list-item-desc">${item.description}</div>
            </div>
            <a class="list-item-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.name} 자세히 보기">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
          </div>
        </li>`
      )
      .join("");
  },

  setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  },
};
