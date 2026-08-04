/**
 * site.config.js
 * ------------------------------------------------------------
 * 이 사이트에서 "자주 바뀔 수 있는 값"은 전부 이 파일 하나에 모아뒀습니다.
 * 예: 예약 버튼 링크, 연락처, SNS 주소, 히어로 이미지 경로 등.
 *
 * 초보자를 위한 사용법:
 *  - HTML/CSS/JS 코드는 절대 건드릴 필요 없이, 아래 값만 바꾸면
 *    사이트 전체에 자동으로 반영됩니다.
 *  - 예) OTA 예약 링크를 바꾸고 싶다면 bookingPartners 배열의
 *    url 값만 수정하면 됩니다.
 *
 * 이 파일은 일반 <script> 태그로 index.html에서 가장 먼저 불러오기 때문에,
 * import/export 문법을 쓰지 않고 전역 변수(window.SITE_CONFIG)로 노출합니다.
 * (로컬에서 더블클릭으로 파일을 열어도 깨지지 않도록 하기 위한 선택입니다.)
 */

const SITE_CONFIG = {
  // ── 브랜드 기본 정보 ─────────────────────────────
  brand: {
    name: "Hsuite",
    branchLabel: "H SUITE DONGDAEMUN BRANCH",
    legalName: "주식회사 Hsuite 호텔앤리조트",
    ceo: "김수현",
    address: "서울특별시 강남구 해안로 128, 7층",
    businessRegNo: "214-88-00921",
    mailOrderNo: "제2024-서울강남-1029호",
  },

  // ── 연락처 (헤더/푸터에서 공통으로 사용) ─────────────
  contact: {
    email: "hello@hsuite-hotel.com",
    phone: "+82 2 1234 5678",
  },

  // ── SNS 링크 ────────────────────────────────────
  social: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/0000000000",
  },

  // ── 히어로 섹션 슬라이드 이미지 ───────────────────────
  // 사진을 추가/교체하고 싶으면 이 배열에 파일 경로만 추가하면
  // hero.js가 알아서 슬라이드 개수를 늘려서 렌더링합니다.
  heroImages: [
    "assets/hero-reception.jpg",
    "assets/hero-living-room.jpg",
  ],

  // ── 로고 이미지 (밝은 배경용 / 어두운 배경용) ─────────
  logo: {
    ink: "assets/logo-ink.png",   // 밝은(크림) 배경 위에 쓰는 어두운 로고
    white: "assets/logo-white.png", // 어두운 배경(히어로/푸터) 위에 쓰는 흰 로고
  },

  // ── 예약(OTA) 버튼 링크 ──────────────────────────
  // "모든 예약 버튼 링크는 이 파일 하나에서 관리" 요구사항을 위한 부분입니다.
  // BOOK 버튼을 누르면 열리는 패널이 아래 배열을 그대로 읽어서 렌더링합니다.
  bookingPartners: {
    // 상단에 큰 카드로 노출되는 주요 파트너
    main: [
      {
        name: "Agoda",
        description: "Popular with international travelers",
        url: "https://www.agoda.com",
      },
      {
        name: "Trip.com",
        description: "Multilingual booking support",
        url: "https://www.trip.com",
      },
      {
        name: "Expedia",
        description: "International booking platform",
        url: "https://www.expedia.com",
      },
    ],
    // "Other Booking Options" 아코디언에 작은 버튼으로 노출되는 파트너
    other: [
      { name: "Yanolja", url: "https://www.yanolja.com" },
      { name: "Yeogi Eottae", url: "https://www.yeogi.com" },
    ],
  },

  // ── Experiences 페이지 전용 값 ────────────────────
  // experiences.html 하단 OUTDOOR 섹션의 링크 목록입니다.
  // 실제 예약/제휴 링크가 정해지면 url 값만 채워 넣으면 됩니다.
  experiencesPage: {
    outdoorLinks: [
      { name: "서울투어버스 예약", url: "#" },
      { name: "근처 맛집 리스트", url: "#" },
      { name: "동대문 쇼핑 리스트", url: "#" },
    ],
  },

  // ── reservation.html(예약 소개 페이지) 전용 값 ─────────
  // 아직 실제 사진이 준비되지 않아, 경로를 채워 넣기 전까지는
  // 기본 placeholder 배경색으로 보입니다. 사진이 준비되면 아래 각 항목에
  // 파일 경로만 적어 넣으면 자동으로 배경 사진으로 반영됩니다.
  reservationImages: {
    hero: "",          // INDOOR/OUTDOOR 상단 배너
    gallery: "",       // "어울리고 있는 사람들" 섹션
    hongindoor: "",    // 홍인지문 뷰 상세 섹션
    welcomeTea: "",    // 웰컴티 상세 섹션
    rooftop: "",       // 루프탑 상세 섹션
  },

  // OUTDOOR 섹션의 외부 링크 목록. url을 실제 예약/리스트 페이지 주소로
  // 교체하면 됩니다(지금은 임시로 "#"이 들어가 있습니다).
  reservationOutdoorLinks: [
    { name: "서울투어버스 예약", url: "#" },
    { name: "근처 맛집 리스트", url: "#" },
    { name: "동대문 쇼핑 리스트", url: "#" },
  ],
};
