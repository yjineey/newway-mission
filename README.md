# 뉴웨이교회 선교스쿨 프로젝트

## 프로젝트 소개

다팀(최대 4팀) 선교 준비를 위한 **모바일 우선 B2C 웹 애플리케이션**

### ✨ 주요 기능

- **팀 관리**: 팀별 데이터 분리 (현재: 이집트, 요르단 / 최대 4팀 확장 가능)
- **게시판 시스템**: 5개 카테고리 CRUD 기능 (공지사항, 회의록, 찬양, 준비물, 선교물품)
- **관리자 인증**: 로그인 시스템으로 글쓰기/편집/삭제 권한 관리
- **파일 첨부**: 게시글에 파일 업로드 UI (PPT, Excel, Word, Image, Video)
- **13개 카테고리**: 선교일정, 공지사항, 선교스쿨, 기도/말씀훈련, 회의록, 팀빌딩, 팀미션, 찬양, 비상연락망, 준비물, 선교물품, 교회소개
- **팀 탭**: 페이지 상단에서 팀 전환 (교육/훈련 페이지 제외)
- **다크모드**: Cursor 스타일 라이트/다크 테마
- **모던 UI**: Lucide React 아이콘, 은은한 그림자, 깔끔한 레이아웃

### 🎨 디자인

- **색상**: Cursor IDE 스타일 (자연스럽고 눈편한 회색 톤)
- **아이콘**: Lucide React 통일 (이모지 ❌)
- **반응형**: Mobile-First 디자인
- **애니메이션**: 부드러운 fade-in, slide-up 효과
- **버튼**: 얇은 테두리, hover 없음, 일관된 스타일

### 🔐 관리자 기능

- **비밀번호**: `newway2025`
- **권한**: 글쓰기, 편집, 삭제 버튼 표시
- **로그인 유지**: localStorage 사용 (새로고침해도 유지)

### 🛠 기술 스택

React 18 • React Router • Firebase • Tailwind CSS • Vite • Lucide React • date-fns

---

## 프로젝트 문서

프로젝트 관련 문서는 기능별로 분리되어 있습니다. 아래 링크를 통해 원하는 문서를 확인하세요.

### 📋 문서 목록

#### 시작하기

- **[프로젝트 개요](./docs/PROJECT_OVERVIEW.md)** - 프로젝트 소개 및 주요 기능
- **[설치 가이드](./docs/INSTALLATION.md)** - 패키지 설치 및 Firebase 설정

#### 구조 설계

- **[프로젝트 구조](./docs/PROJECT_STRUCTURE.md)** - 레이아웃 및 카테고리
- **[디렉토리 구조](./docs/DIRECTORY_STRUCTURE.md)** - 파일 및 폴더
- **[라우팅](./docs/ROUTING.md)** - 페이지 경로
- **[컴포넌트](./docs/COMPONENTS.md)** - 컴포넌트 목록

#### 데이터베이스

- **[데이터 구조](./docs/DATA_STRUCTURE.md)** - Firestore 개요
- **[DB 스키마](./docs/DATABASE_SCHEMA.md)** - 필드 상세 및 보안 규칙

#### 기능 가이드

- **[파일 업로드](./docs/FILE_UPLOAD.md)** - 첨부파일 구현
- **[UI 디자인](./docs/UI_DESIGN_GUIDE.md)** - 디자인 시스템
- **[기술 스택](./docs/TECH_STACK.md)** - 사용 기술

---

## 빠른 시작

1. [프로젝트 개요](./docs/PROJECT_OVERVIEW.md) 확인
2. [설치 가이드](./docs/INSTALLATION.md)로 개발 환경 설정
3. [프로젝트 구조](./docs/PROJECT_STRUCTURE.md)와 [DB 스키마](./docs/DATABASE_SCHEMA.md) 파악
4. [UI 디자인 가이드](./docs/UI_DESIGN_GUIDE.md) 참고하여 개발 시작

---

## 🚀 한 줄 설치

```bash
npm create vite@latest newway-mission -- --template react && cd newway-mission && npm install react-router-dom firebase lucide-react date-fns classnames && npm install -D tailwindcss postcss autoprefixer gh-pages && npx tailwindcss init -p
```

자세한 내용은 [설치 가이드](./docs/INSTALLATION.md)를 참조하세요.
