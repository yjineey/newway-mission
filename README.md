# 뉴웨이교회 선교스쿨 프로젝트

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
