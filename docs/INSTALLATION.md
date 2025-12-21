---
liquid: false
---

# 설치 가이드

> ✅ 모든 버전은 상호 호환성 및 안정성을 검증한 조합입니다.

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
# 필수 패키지 (검증된 버전)
npm install react@18.3.1 react-dom@18.3.1
npm install react-router-dom@6.28.0
npm install firebase@10.14.1
npm install lucide-react@0.469.0
npm install classnames@2.5.1
```

---

### 3️⃣ 스타일링 (Tailwind CSS)

```bash
# Tailwind CSS 설치
npm install -D tailwindcss@3.4.15 postcss@8.4.49 autoprefixer@10.4.20

# Tailwind 초기화
npx tailwindcss init -p
```

---

### 4️⃣ 개발 도구 (선택사항)

```bash
# 코드 품질 및 포맷팅
npm install -D eslint@8.57.1 eslint-plugin-react@7.37.2 prettier@3.3.3
```

---

### 5️⃣ 배포 도구

```bash
# GitHub Pages 배포
npm install -D gh-pages@6.2.0
```

---

## 🚀 한 번에 설치 (권장)

```bash
# 프로젝트 생성
npm create vite@latest newway-mission -- --template react
cd newway-mission

# 모든 패키지 한 번에 설치 (검증된 버전)
npm install react@18.3.1 react-dom@18.3.1 react-router-dom@6.28.0 firebase@10.14.1 lucide-react@0.469.0 classnames@2.5.1

# 개발 의존성
npm install -D vite@5.4.11 tailwindcss@3.4.15 postcss@8.4.49 autoprefixer@10.4.20 gh-pages@6.2.0 eslint@8.57.1 eslint-plugin-react@7.37.2 prettier@3.3.3

# Tailwind 초기화
npx tailwindcss init -p
```

---

## 📋 설치 패키지 목록

### 핵심 기술
| 패키지 | 버전 | 용도 | 카테고리 |
|--------|------|------|----------|
| `react` | 18.3.1 | UI 라이브러리 | 필수 |
| `react-dom` | 18.3.1 | React 렌더링 | 필수 |
| `react-router-dom` | 6.28.0 | 페이지 라우팅 | 필수 |
| `vite` | 5.4.11 | 빌드 도구 | 필수 |

### 백엔드
| 패키지 | 버전 | 용도 | 카테고리 |
|--------|------|------|----------|
| `firebase` | 10.14.1 | Firestore, Storage, Auth | 필수 |

### UI/UX 라이브러리
| 패키지 | 버전 | 용도 | 카테고리 |
|--------|------|------|----------|
| `tailwindcss` | 3.4.15 | 스타일링 | 필수 |
| `postcss` | 8.4.49 | CSS 처리 | 필수 |
| `autoprefixer` | 10.4.20 | CSS 벤더 프리픽스 | 필수 |
| `lucide-react` | 0.469.0 | 벡터 아이콘 | 필수 |
| `classnames` | 2.5.1 | 조건부 클래스 | 필수 |

### 개발 도구
| 패키지 | 버전 | 용도 | 카테고리 |
|--------|------|------|----------|
| `eslint` | 8.57.1 | 코드 품질 | 선택 |
| `eslint-plugin-react` | 7.37.2 | React ESLint | 선택 |
| `prettier` | 3.3.3 | 코드 포맷팅 | 선택 |

### 배포
| 패키지 | 버전 | 용도 | 카테고리 |
|--------|------|------|----------|
| `gh-pages` | 6.2.0 | GitHub Pages 배포 | 배포 |

---

## ⚠️ 주의사항

### 피해야 할 버전
- ❌ **React 19**: 아직 많은 라이브러리가 호환 안 됨
- ❌ **ESLint 9.x**: Config 형식 변경, v8 권장
- ❌ **Firebase 9.x 이하**: 구버전 API

### 보안 권장사항
- ✅ Firebase 10.14.1 이상 (보안 패치 포함)
- ✅ 정기적인 `npm audit` 실행
- ✅ `npm outdated` 로 업데이트 확인

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

