/**
 * footer.js
 * ------------------------------------------------------------
 * 푸터의 이메일/전화번호/SNS 링크/저작권 연도를 SITE_CONFIG 값으로 채워 넣습니다.
 * index.html에는 값이 하드코딩되어 있지 않고, data-config 속성이 붙은
 * 빈 자리(placeholder)만 있습니다. 이 스크립트가 그 자리를 채웁니다.
 *
 * 예) 전화번호를 바꾸고 싶다면 config/site.config.js의 contact.phone만
 * 수정하면 헤더/푸터 등 이 값을 쓰는 모든 곳에 자동 반영됩니다.
 */

const FooterComponent = {
  init() {
    if (!window.SITE_CONFIG) return;
    const { contact, social } = SITE_CONFIG;

    this.setText("footerEmail", contact.email);
    this.setText("footerPhone", contact.phone);
    this.setHref("footerEmailLink", `mailto:${contact.email}`);

    this.setHref("dockInstagramFooter", social.instagram);
    this.setHref("dockWhatsappFooter", social.whatsapp);

    // 저작권 연도는 항상 "올해"가 자동으로 표시되도록 계산합니다
    this.setText("footerYear", new Date().getFullYear());
  },

  setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  },

  setHref(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.setAttribute("href", value);
  },
};
