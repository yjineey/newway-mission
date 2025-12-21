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

## 공통 컴포넌트 (`components/common/`)

- `TeamTabs.jsx`: 페이지 내 팀 탭 전환
- `ChecklistTabs.jsx`: 준비사항 체크리스트 탭
- `ChurchInfoTabs.jsx`: 교회소개 탭
- `PreparationTabs.jsx`: 준비물 탭
- `SchoolTabs.jsx`: 선교스쿨 탭
- `TrainingTabs.jsx`: 훈련일정 탭 (기도훈련/말씀훈련)
- `ScrollToTop.jsx`: 페이지 이동 시 스크롤 상단 이동

## 게시판 컴포넌트 (`components/board/`)

- `BoardEditor.jsx`: 글쓰기/편집 공통 폼 (제목, 내용, 카테고리 선택, 파일 첨부)
- `WriteButton.jsx`: 글쓰기 버튼 (관리자만 표시)
- `ListItem.jsx`: 게시글 목록 아이템 (제목, 내용 미리보기, 날짜)
- `EmptyState.jsx`: 빈 목록 상태 (카드 영역 포함)

## 페이지 컴포넌트 (`pages/`)

### 메인
- `Home.jsx`: 카테고리 그리드 (12개 카테고리, 3개 그룹)

### 기본정보
- `School.jsx`: 선교스쿨
- `Schedule.jsx`: 선교일정
- `TrainingSchedule.jsx`: 훈련일정 (기도훈련/말씀훈련 탭)
- `Contact.jsx`: 비상연락망

### 공동체
- `Building.jsx`: 팀빌딩
- `Records.jsx`: 회의록 리스트
- `Praise.jsx`: 찬양 리스트
- `PrayerRequest.jsx`: 중보기도 리스트

### 준비사항
- `Preparation.jsx`: 준비물 리스트
- `Items.jsx`: 선교물품 리스트
- `Checklist.jsx`: 준비사항 체크리스트

### 기타
- `ChurchInfo.jsx`: 교회 소개

### 게시판 CRUD (공통)
- `BoardWrite.jsx`: 글쓰기 페이지 (카테고리별 공통)
- `BoardDetail.jsx`: 상세보기 페이지 (카테고리별 공통)
- `BoardEdit.jsx`: 편집 페이지 (카테고리별 공통)

## 데이터

- `data/categories.js`: 카테고리 정의 (그룹, 아이콘, 색상, 경로)
