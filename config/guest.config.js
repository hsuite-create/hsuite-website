/**
 * guest.config.js
 * ------------------------------------------------------------
 * 투숙객 전용 가이드(/guest) 페이지의 "모든 내용"이 들어있는 파일입니다.
 * 문구/장소/링크를 바꾸고 싶으면 이 파일만 수정하세요. (HTML/JS는 건드릴 필요 없음)
 *
 * [작성 규칙]
 *  - 글자가 들어가는 곳은 { ko: "한글", en: "English" } 형태입니다.
 *  - "여기에 입력" 이라고 표시된 값은 실제 정보로 꼭 교체해 주세요.
 *  - 새 장소를 추가하려면 items 배열에 { ... } 한 덩어리를 복사해 붙이면 됩니다.
 */

const GUEST_CONFIG = {
  // ── 페이지 상단(히어로) 문구 ─────────────────────────
  hero: {
    title: { ko: "Beyond Your Stay", en: "Beyond Your Stay" },
    lead: {
      ko: "머무는 곳에서, 서울을 발견하는 곳으로.",
      en: "From where you stay, to where Seoul begins.",
    },
    desc: {
      ko: "H Suite가 큐레이션한 주변의 장소와 여행 정보를 편리하게 탐색할 수 있는 투숙객 전용 로컬 가이드.",
      en: "A local guide for H Suite guests, with places and travel tips curated by our team.",
    },
  },

  // ── 인스타그램 (릴스/피드로 자세한 내용을 보여줄 때 사용) ───
  instagram: {
    url: "https://instagram.com", // ← 실제 H Suite 인스타그램 주소로 교체
    label: { ko: "인스타그램에서 더 보기", en: "See more on Instagram" },
  },

  // ── 섹션 제목에 쓰는 공통 문구 ────────────────────────
  ui: {
    whyLabel: { ko: "H Suite의 추천 이유", en: "Why we recommend it" },
    mapLabel: { ko: "지도 보기", en: "Open map" },
    filterAll: { ko: "전체", en: "All" },
    filterEarly: { ko: "이른 아침", en: "Early morning" },
    filterLate: { ko: "늦은 밤", en: "Late night" },
    footerNote: {
      ko: "투숙객 전용 안내 페이지입니다.",
      en: "This page is for H Suite guests only.",
    },
  },

  // ── 섹션들 ───────────────────────────────────────
  sections: [
    // 01. 둘러볼 곳 ─────────────────────────────────
    {
      id: "explore",
      type: "places",
      no: "01",
      title: { ko: "둘러볼 곳", en: "Explore" },
      items: [
        {
          name: { ko: "흥인지문", en: "Heunginjimun Gate" },
          why: {
            ko: "객실 유리창 너머로도 보이는 서울의 동쪽 성문. 낮에는 성곽, 밤에는 조명이 아름다워요.",
            en: "Seoul's eastern gate, visible even from the Heritage rooms. Lovely by day and lit up at night.",
          },
          map: "https://map.naver.com/p/search/흥인지문",
        },
        {
          name: { ko: "광장시장", en: "Gwangjang Market" },
          why: {
            ko: "걸어서 갈 수 있는 서울의 대표 전통시장. 길거리 음식과 시장 분위기를 함께 즐길 수 있어요.",
            en: "A classic Seoul market within walking distance, great for street food and local atmosphere.",
          },
          map: "https://map.naver.com/p/search/광장시장",
        },
        {
          name: { ko: "청계천", en: "Cheonggyecheon Stream" },
          why: {
            ko: "도심 한가운데를 흐르는 산책로. 가볍게 걷기만 해도 서울의 쉼표가 되어줘요.",
            en: "A stream-side promenade in the middle of the city, a gentle pause in your day.",
          },
          map: "https://map.naver.com/p/search/청계천",
        },
        {
          name: { ko: "DDP (동대문디자인플라자)", en: "DDP (Dongdaemun Design Plaza)" },
          why: {
            ko: "독특한 건축과 전시, 야간 조명까지. 비 오는 날에도 즐기기 좋아요.",
            en: "Striking architecture, exhibitions and night lighting. A good rainy-day option too.",
          },
          map: "https://map.naver.com/p/search/동대문디자인플라자",
        },
        {
          name: { ko: "동묘시장", en: "Dongmyo Flea Market" },
          why: {
            ko: "빈티지와 중고 물건을 구경하는 재미가 있는 시장. 천천히 둘러보기 좋아요.",
            en: "A vintage and second-hand market, fun to browse at a slow pace.",
          },
          map: "https://map.naver.com/p/search/동묘시장",
        },
        {
          name: { ko: "노랑풍선 시티버스", en: "Noranbalsun City Bus" },
          why: {
            ko: "서울 주요 명소를 한 번에 이어주는 시티투어버스. 처음 방문하는 분께 추천해요.",
            en: "A city tour bus linking Seoul's main sights, ideal for first-time visitors.",
          },
          map: "", // ← 예약/안내 링크가 있으면 입력
        },
      ],
    },

    // 02. 맛집과 카페 ───────────────────────────────
    // tags: "early"(이른 아침 이용 가능) / "late"(늦은 밤 이용 가능)
    {
      id: "eat",
      type: "places",
      no: "02",
      title: { ko: "맛집과 카페", en: "Eat & Drink" },
      intro: {
        ko: "이른 아침이나 늦은 밤에도 갈 수 있는 곳을 먼저 골라볼 수 있어요. (영업시간은 방문 전 확인해 주세요)",
        en: "Filter for places you can visit early in the morning or late at night. Please check opening hours before you go.",
      },
      filters: true,
      items: [
        {
          name: { ko: "광장시장 먹거리", en: "Gwangjang Market Eats" },
          tags: ["early"],
          why: {
            ko: "아침 일찍부터 여는 가게가 많아 가볍게 한 끼 하기 좋아요.",
            en: "Many stalls open early, perfect for a light breakfast.",
          },
          map: "https://map.naver.com/p/search/광장시장",
        },
        {
          name: { ko: "동대문 닭한마리 골목", en: "Dongdaemun Dakhanmari Alley" },
          tags: ["late"],
          why: {
            ko: "늦은 시간까지 따뜻한 국물을 나눌 수 있는 동대문의 대표 먹거리 골목이에요.",
            en: "A well-known alley for a hot chicken stew, open into the evening.",
          },
          map: "https://map.naver.com/p/search/동대문닭한마리골목",
        },
        {
          name: { ko: "(카페 이름 입력)", en: "(Cafe name)" },
          tags: ["early"],
          why: { ko: "추천 이유를 입력하세요.", en: "Enter your reason here." },
          map: "",
        },
      ],
    },

    // 03. 로컬 산책 코스 ────────────────────────────
    {
      id: "walks",
      type: "walks",
      no: "03",
      title: { ko: "로컬 산책 코스", en: "Local Walks" },
      items: [
        {
          name: { ko: "청계천 → 광화문광장", en: "Cheonggyecheon to Gwanghwamun Square" },
          why: {
            ko: "밤에도 안전하게 걸을 수 있어요! 세계적으로도 걷기 좋은 도시로 꼽히는 서울의 매력을 느껴보세요.",
            en: "Safe to walk even at night! Feel why Seoul is regarded as a great walking city.",
          },
          map: "https://map.naver.com/p/search/청계천",
        },
        {
          name: { ko: "낙산 성곽길 → 낙산공원", en: "Naksan Fortress Trail to Naksan Park" },
          why: {
            ko: "성곽을 따라 오르며 서울 야경과 동네 풍경을 함께 볼 수 있는 길이에요.",
            en: "Follow the old city wall up for neighborhood views and the Seoul skyline.",
          },
          map: "https://map.naver.com/p/search/낙산공원",
        },
        {
          name: { ko: "동대문종합시장 기념품 코스", en: "Dongdaemun General Market Souvenir Route" },
          why: {
            ko: "송월타올 같은 실용적인 기념품을 한 번에 둘러볼 수 있는 코스예요.",
            en: "A practical souvenir route, with items like Songwol towels.",
          },
          map: "https://map.naver.com/p/search/동대문종합시장",
        },
      ],
    },

    // 04. 투숙 안내 ─────────────────────────────────
    // 각 항목: { label, value, link(선택) } — 값은 모두 실제 정보로 교체하세요.
    {
      id: "stay",
      type: "info",
      no: "04",
      title: { ko: "투숙 안내", en: "Stay Essentials" },
      items: [
        {
          label: { ko: "와이파이", en: "Wi-Fi" },
          value: { ko: "여기에 입력 (네트워크 이름 / 안내)", en: "Enter here (network name / note)" },
        },
        {
          label: { ko: "체크아웃", en: "Check-out" },
          value: { ko: "여기에 입력 (예: 오전 11시)", en: "Enter here (e.g. 11:00 AM)" },
        },
        {
          label: { ko: "객실 내 기기 사용", en: "In-room devices" },
          value: { ko: "여기에 입력 (TV, 에어컨 등 사용법)", en: "Enter here (TV, A/C, etc.)" },
        },
        {
          label: { ko: "프런트 연락처", en: "Front desk" },
          value: { ko: "여기에 입력 (전화번호)", en: "Enter here (phone number)" },
        },
        {
          label: { ko: "문의 방법", en: "How to reach us" },
          value: { ko: "여기에 입력 (전화 / 메신저 안내)", en: "Enter here (phone / messenger)" },
        },
        {
          label: { ko: "짐 보관", en: "Luggage storage" },
          value: { ko: "여기에 입력 (이용 방법)", en: "Enter here (how it works)" },
        },
      ],
    },
  ],
};
