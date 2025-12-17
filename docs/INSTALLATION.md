# 설치 가이드

## 📦 패키지 및 라이브러리 설치

### 1️⃣ 프로젝트 생성

```bash
# Vite + React 프로젝트 생성
npm create vite@latest newway-mission -- --template react

# 프로젝트 폴더로 이동
cd newway-mission
```

---

### 2️⃣ 필수 라이브러리 설치

```bash
# 기본 의존성
npm install

# 라우팅
npm install react-router-dom

# Firebase (백엔드, 데이터베이스, 인증)
npm install firebase

# 아이콘 (통일된 벡터 아이콘)
npm install lucide-react

# 조건부 클래스 관리
npm install classnames
```

---

### 3️⃣ 스타일링 (Tailwind CSS)

```bash
# Tailwind CSS 설치
npm install -D tailwindcss postcss autoprefixer

# Tailwind 초기화
npx tailwindcss init -p
```

---

### 4️⃣ 개발 도구 (선택사항)

```bash
# 코드 품질 및 포맷팅
npm install -D eslint eslint-plugin-react prettier
```

---

### 5️⃣ 배포 도구

```bash
# GitHub Pages 배포
npm install -D gh-pages
```

---

## 🚀 한 번에 설치 (권장)

```bash
# 프로젝트 생성
npm create vite@latest newway-mission -- --template react
cd newway-mission

# 모든 패키지 한 번에 설치
npm install react-router-dom firebase lucide-react classnames

# 개발 의존성
npm install -D tailwindcss postcss autoprefixer gh-pages eslint eslint-plugin-react prettier

# Tailwind 초기화
npx tailwindcss init -p
```

---

## 📋 설치 패키지 목록

| 패키지 | 버전 | 용도 | 카테고리 |
|--------|------|------|----------|
| `react` | ^18.3.1 | UI 라이브러리 | 필수 |
| `react-dom` | ^18.3.1 | React DOM 렌더링 | 필수 |
| `react-router-dom` | ^6.28.0 | 페이지 라우팅 | 필수 |
| `firebase` | ^10.14.1 | 백엔드, DB, 인증 | 필수 |
| `lucide-react` | ^0.469.0 | 벡터 아이콘 | 필수 |
| `classnames` | ^2.5.1 | 조건부 클래스 | 필수 |
| `tailwindcss` | ^3.x | 스타일링 | 필수 |
| `postcss` | ^8.x | CSS 처리 | 필수 |
| `autoprefixer` | ^10.x | CSS 벤더 프리픽스 | 필수 |
| `gh-pages` | ^6.x | GitHub Pages 배포 | 배포 |
| `eslint` | ^8.x | 코드 품질 | 선택 |
| `prettier` | ^3.x | 코드 포맷팅 | 선택 |

---

## ⚙️ 초기 설정

### 1. Tailwind CSS 설정

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 다크모드 지원
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/styles/global.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 2. Firebase 설정

**src/firebase/config.js**
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 서비스 초기화
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
```

---

### 3. Vite 설정

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/newway-mission/', // GitHub Pages 배포 시 저장소 이름
})
```

**App.jsx**
```javascript
<Router basename="/newway-mission">
  {/* ... */}
</Router>
```

---

### 4. package.json 스크립트

**package.json**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "lint": "eslint . --ext js,jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,css}\""
  }
}
```

---

## 🔥 Firebase 프로젝트 설정

### 1. Firebase 콘솔에서 프로젝트 생성

1. https://console.firebase.google.com/ 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름: `newway-mission`
4. Google Analytics: 선택 사항

### 2. Firestore Database 활성화

1. 왼쪽 메뉴 → "Firestore Database"
2. "데이터베이스 만들기" 클릭
3. 테스트 모드로 시작 (개발용)
4. 위치: `asia-northeast3` (서울)

### 3. Authentication 활성화

1. 왼쪽 메뉴 → "Authentication"
2. "시작하기" 클릭
3. 로그인 방법 → "익명" 활성화
4. (선택) 이메일/비밀번호 활성화

### 4. Storage 활성화 (이미지 업로드용)

1. 왼쪽 메뉴 → "Storage"
2. "시작하기" 클릭
3. 테스트 모드로 시작

### 5. 웹 앱 추가 및 설정 정보 복사

1. 프로젝트 설정 → 앱 추가 → 웹 (</>)
2. 앱 닉네임: `newway-mission-web`
3. Firebase SDK 설정 정보 복사
4. `src/firebase/config.js`에 붙여넣기

---

## ✅ 설치 확인

```bash
# 개발 서버 실행
npm run dev

# 브라우저에서 확인
# http://localhost:5173
```

---

## 📌 참고사항

### Firebase 무료 플랜 (Spark Plan)
- ✅ Firestore: 1GB 저장소, 50K 읽기/일, 20K 쓰기/일
- ✅ Storage: 5GB 저장소, 1GB/일 다운로드
- ✅ Authentication: 무제한
- ✅ 교회 규모로 충분히 사용 가능

### 권장 폴더 구조
```
src/
├── components/     # 컴포넌트
├── pages/          # 페이지
├── firebase/       # Firebase 설정
├── hooks/          # Custom Hooks
├── utils/          # 유틸리티 함수
└── styles/         # 스타일
```

---

## 🆘 문제 해결

### Firebase 연결 오류
```bash
# Firebase CLI 설치
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트 초기화
firebase init
```

### Tailwind 적용 안 됨
- `src/index.css`에 Tailwind 디렉티브 확인
- `tailwind.config.js`의 `content` 경로 확인
- 개발 서버 재시작

---

## 📚 추가 리소스

- [React 공식 문서](https://react.dev/)
- [Firebase 공식 문서](https://firebase.google.com/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Router 공식 문서](https://reactrouter.com/)

