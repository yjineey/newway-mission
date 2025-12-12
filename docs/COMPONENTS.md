# 컴포넌트 설명

## Context (상태 관리)

- `TeamContext.jsx`: 팀 선택 상태 관리 (이집트/요르단)
- `AuthContext.jsx`: 관리자 로그인 상태 관리

## 레이아웃 컴포넌트 (`components/layout/`)

- `Header.jsx`: 로고, 타이틀, 햄버거 메뉴 버튼
- `Menu.jsx`: 슬라이드 메뉴 (교회 소개, 관리자 로그인, 다크모드)
- `Footer.jsx`: 하단 고정 네비게이션 (모바일) + 저작권 (웹)
- `PageLayout.jsx`: 공통 페이지 레이아웃 (제목, 팀 탭, 액션 버튼)

## 인증 컴포넌트 (`components/auth/`)

- `LoginModal.jsx`: 관리자 로그인 모달 (비밀번호 입력)

## 카테고리 컴포넌트 (`components/category/`)

- `CategoryGrid.jsx`: 카테고리 그룹별 그리드 레이아웃
- `CategoryCard.jsx`: 개별 카테고리 카드 (아이콘 + 이름)

## 팀 컴포넌트 (`components/team/`)

- `TeamSelector.jsx`: 홈 화면 팀 선택 UI (큰 버튼)

## 공통 컴포넌트 (`components/common/`)

- `TeamTabs.jsx`: 페이지 내 팀 탭 전환

## 게시판 컴포넌트 (`components/board/`)

- `BoardEditor.jsx`: 글쓰기/편집 공통 폼 (제목, 내용, 카테고리 선택, 파일 첨부)
- `WriteButton.jsx`: 글쓰기 버튼 (관리자만 표시)
- `ListItem.jsx`: 게시글 목록 아이템 (제목, 내용 미리보기, 날짜)
- `EmptyState.jsx`: 빈 목록 상태 (카드 영역 포함)

## 페이지 컴포넌트 (`pages/`)

### 메인
- `Home.jsx`: 팀 선택 + 카테고리 그리드

### 게시판 (리스트 형식 5개)
- `Notices.jsx`: 공지사항 리스트
- `Records.jsx`: 회의록 리스트
- `Praise.jsx`: 찬양 리스트
- `Preparation.jsx`: 준비물 리스트
- `Items.jsx`: 선교물품 리스트

### 게시판 CRUD
- `BoardWrite.jsx`: 글쓰기 페이지 (공통)
- `BoardDetail.jsx`: 상세보기 페이지 (공통)
- `BoardEdit.jsx`: 편집 페이지 (공통)

### 단순 컨텐츠 페이지
- `Schedule.jsx`: 선교일정
- `School.jsx`: 선교스쿨
- `Prayer.jsx`: 기도훈련
- `Word.jsx`: 말씀훈련
- `Contact.jsx`: 비상연락망
- `Building.jsx`: 팀빌딩
- `Missions.jsx`: 팀미션
- `ChurchInfo.jsx`: 교회 소개

## 데이터

- `data/categories.js`: 카테고리 정의 (그룹, 아이콘, 색상, 경로)
