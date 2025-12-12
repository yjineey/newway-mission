# 뉴웨이교회 선교스쿨 프로젝트

## 프로젝트 문서

프로젝트 관련 문서는 기능별로 분리되어 있습니다. 아래 링크를 통해 원하는 문서를 확인하세요.

### 📋 문서 목록

- **[설치 가이드](./docs/INSTALLATION.md)** 🚀 NEW
  - 패키지 및 라이브러리 설치
  - Firebase 설정
  - 초기 설정 및 배포

- **[레이아웃 및 카테고리 구조](./docs/PROJECT_STRUCTURE.md)**
  - 메인 페이지 레이아웃 (더보기 메뉴, 댓글 포함)
  - 카테고리 페이지 레이아웃
  - UI 플로우
  - 카테고리별 구조 상세 표

- **[프로젝트 개요](./docs/PROJECT_OVERVIEW.md)**
  - 프로젝트 개요 및 목적
  - 팀 정보 (이집트, 요르단)

- **[디렉토리 구조](./docs/DIRECTORY_STRUCTURE.md)**
  - 전체 프로젝트 디렉토리 구조
  - 컴포넌트 및 페이지 파일 구조

- **[데이터 구조](./docs/DATA_STRUCTURE.md)**
  - Firebase Firestore 구조
  - 컬렉션별 스키마
  - 정적 데이터 vs 동적 데이터

- **[데이터베이스 스키마](./docs/DATABASE_SCHEMA.md)**
  - Firestore 컬렉션 상세 설계
  - 필드 스키마 및 타입
  - 인덱스 설정
  - 보안 규칙
  - 쿼리 예시

- **[파일 업로드 가이드](./docs/FILE_UPLOAD.md)** 📎 NEW
  - Firebase Storage 설정
  - 파일 업로드/다운로드 구현
  - 드래그앤드롭, 진행률 표시
  - 보안 및 최적화

- **[라우팅 구조](./docs/ROUTING.md)**
  - 페이지 라우팅 경로
  - URL 구조

- **[컴포넌트 설명](./docs/COMPONENTS.md)**
  - 레이아웃 컴포넌트 (Header, Footer, 댓글, 더보기 메뉴)
  - 콘텐츠 컴포넌트
  - 빌드 설정

- **[기술 스택](./docs/TECH_STACK.md)**
  - 사용 기술 목록
  - UI/UX 라이브러리
  - 카테고리 그룹 분류

- **[UI 디자인 가이드](./docs/UI_DESIGN_GUIDE.md)**
  - 디자인 철학 (B2C 느낌, 모던한 디자인)
  - 아이콘 시스템 (통일성, 벡터 아이콘)
  - 색상 시스템 (다크/라이트 모드)
  - 타이포그래피, 레이아웃, 애니메이션
  - 컴포넌트 스타일 가이드
  - 반응형 디자인 원칙

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

