# 기술 스택

> ✅ 모든 버전은 상호 호환성 및 안정성을 검증한 조합입니다.

## 핵심 기술

- **React** (18.3.1): UI 라이브러리 (React 19는 일부 라이브러리와 호환 이슈 있음)
- **React DOM** (18.3.1): React 렌더링
- **React Router DOM** (6.28.0): 페이지 라우팅 (React 18 완벽 호환)
- **Vite** (5.4.11): 빌드 도구 (React 18 최적화)

## 백엔드

- **Firebase** (10.14.1): 최신 안정 버전
  - Firestore: 데이터베이스
  - Storage: 파일 저장소 (10MB 제한 권장)
  - Auth: 익명 인증

## UI/UX 라이브러리

- **Tailwind CSS** (3.4.15): 스타일링 (PostCSS 8 호환)
- **PostCSS** (8.4.49): CSS 처리
- **Autoprefixer** (10.4.20): CSS 벤더 프리픽스
- **Lucide React** (0.469.0): 벡터 아이콘 (React 18 호환)
- **classnames** (2.5.1): 조건부 클래스

## 유틸리티

- **date-fns** (2.30.0): 날짜 처리 (v3는 breaking changes 많음, v2 권장)

## 개발 도구

- **ESLint** (8.57.1): 코드 품질 (v9는 config 변경 주의)
- **eslint-plugin-react** (7.37.2): React ESLint
- **Prettier** (3.3.3): 코드 포맷팅

## 배포

- **gh-pages** (6.2.0): GitHub Pages 배포

---

## 설치 명령어

### 필수 패키지 (검증된 버전)

```bash
npm install react@18.3.1 react-dom@18.3.1
npm install react-router-dom@6.28.0
npm install firebase@10.14.1
npm install lucide-react@0.469.0
npm install date-fns@2.30.0
npm install classnames@2.5.1
```

### 개발 의존성

```bash
npm install -D vite@5.4.11
npm install -D tailwindcss@3.4.15 postcss@8.4.49 autoprefixer@10.4.20
npm install -D eslint@8.57.1 eslint-plugin-react@7.37.2
npm install -D prettier@3.3.3
npm install -D gh-pages@6.2.0
```

---

## ⚠️ 주의사항

### 피해야 할 버전

- ❌ **React 19**: 아직 많은 라이브러리가 호환 안 됨
- ❌ **date-fns 3.x**: Breaking changes 많음, v2 권장
- ❌ **ESLint 9.x**: Config 형식 변경, v8 권장
- ❌ **Firebase 9.x 이하**: 구버전 API

### 보안 권장사항

- ✅ Firebase 10.14.1 이상 (보안 패치 포함)
- ✅ 정기적인 `npm audit` 실행
- ✅ `npm outdated` 로 업데이트 확인

---

## 카테고리 그룹 분류

- **필수 정보**: 선교일정, 공지사항, 회의록, 비상연락망
- **교육/훈련**: 선교스쿨, 기도훈련, 말씀훈련
- **팀**: 팀빌딩, 팀미션, 찬양
- **준비/물품**: 준비물, 선교물품
