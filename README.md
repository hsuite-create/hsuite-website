# Hsuite 웹사이트

정적(static) HTML/CSS/JS로만 만든 호텔 웹사이트입니다. 빌드 과정이 필요 없어서
GitHub에 올리고 Vercel에 연결하면 바로 배포됩니다.

## 폴더 구조

```
hsuite-website/
├── index.html              메인 페이지 (컴포넌트별로 주석 구분되어 있음)
├── config/
│   └── site.config.js      ⭐ 자주 바뀌는 값 전부 (예약 링크, 연락처, 사진 경로 등)
├── css/
│   ├── base.css             색상/폰트 변수, 리셋
│   ├── header.css           상단 헤더
│   ├── hero.css              히어로(첫 화면) 배너
│   ├── experiences.css      3장짜리 소개 배너
│   ├── footer.css            하단 푸터
│   ├── side-dock.css        우측 플로팅 아이콘
│   └── booking-panel.css    예약 패널(OTA 연결)
├── js/
│   ├── header.js
│   ├── hero.js
│   ├── footer.js
│   ├── side-dock.js
│   ├── booking-panel.js
│   └── main.js               모든 컴포넌트를 초기화하는 진입점
└── assets/
    ├── logo-ink.png / logo-white.png
    └── hero-reception.jpg / hero-living-room.jpg
```

## 초보자를 위한 수정 가이드

**"이것만 알면 대부분의 수정이 가능합니다."**

| 바꾸고 싶은 것 | 수정할 파일 |
|---|---|
| 예약 사이트 링크 (Agoda, Trip.com 등) | `config/site.config.js` → `bookingPartners` |
| 연락처(이메일/전화번호) | `config/site.config.js` → `contact` |
| SNS 링크 | `config/site.config.js` → `social` |
| 히어로 배경 사진 추가/교체 | `config/site.config.js` → `heroImages` (사진 파일은 `assets/`에 추가) |
| 브랜드 컬러 | `css/base.css` 맨 위 `:root { ... }` |
| 문구(카피) 텍스트 | `index.html` 안에서 직접 수정 (컴포넌트 이름이 주석으로 표시되어 있어 찾기 쉬움) |

즉, **링크/연락처/사진 같은 "운영 데이터"는 config 파일에서**, **디자인은 css
폴더에서**, **문구 같은 "콘텐츠"는 index.html에서** 고친다고 생각하시면 됩니다.

## 로컬에서 미리보기

이 프로젝트는 `<script src="config/site.config.js">`처럼 여러 파일을 불러오기
때문에, `index.html`을 그냥 더블클릭해서 열면 일부 브라우저에서 파일 간 연결이
막힐 수 있습니다. 아래 중 하나로 로컬 서버를 띄워서 확인하는 걸 권장합니다.

```bash
# 파이썬이 설치되어 있다면
python3 -m http.server 8000

# Node.js가 설치되어 있다면
npx serve .
```

이후 브라우저에서 `http://localhost:8000` 접속.

## GitHub + Vercel로 배포하기

1. 이 폴더를 그대로 GitHub 저장소에 올립니다.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <본인의 GitHub 저장소 주소>
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com)에서 "Add New Project" → 방금 만든 GitHub
   저장소 선택.
3. Framework Preset은 **Other**(정적 사이트)로 두고, Build Command와 Output
   Directory는 비워둔 채로 "Deploy" 클릭.
4. 별도 빌드 과정이 없는 순수 정적 사이트라서, `vercel.json`이 그대로
   있으면 자동으로 설정을 인식합니다.

배포 후 코드를 수정하고 GitHub에 다시 `git push`하면 Vercel이 자동으로
재배포합니다.

## Adobe Fonts(Haboro Contrast) 참고

`index.html` 상단에 Adobe Fonts(Typekit) 임베드 코드가 연결되어 있습니다. 이
폰트는 라이선스가 필요한 유료 폰트라, 실제로 화면에 보이게 하려면 Adobe Fonts
구독이 살아있는 계정으로 해당 웹 프로젝트가 연결되어 있어야 합니다. 구독이
끊기면 자동으로 대체 폰트(Libre Baskerville → 시스템 기본 폰트)로 표시됩니다.
