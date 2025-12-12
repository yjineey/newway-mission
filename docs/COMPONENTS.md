# 컴포넌트 설명

## 빌드 설정

- `package.json`: 프로젝트 의존성 및 스크립트 정의
- `vite.config.js`: Vite 빌드 설정

## 레이아웃 컴포넌트

- `Header.jsx`: 로고, 더보기 메뉴 버튼
- `Menu.jsx`: 더보기 메뉴 (교회 소개, 다크모드)
- `Footer.jsx`: 하단 고정 네비게이션 (5개 아이콘)
- `TeamSelect.jsx`: 팀 선택 UI (이집트, 요르단)
- `CategoryGrid.jsx`: 카테고리 그리드 (4열)
- `CategoryCard.jsx`: 카테고리 카드
- `Comments.jsx`: 댓글 영역 (접기/펼치기)
- `ThemeToggle.jsx`: 다크/라이트 모드 토글
- `WriteBtn.jsx`: 글쓰기 버튼
- `FileUpload.jsx`: 파일 업로드 (드래그앤드롭, 다중 선택)
- `FileList.jsx`: 첨부파일 목록 (다운로드, 삭제)

## 콘텐츠 컴포넌트

### 공지사항 (Notices)

- `NoticeList.jsx`: 리스트 + 글쓰기
- `NoticeDetail.jsx`: 상세 + 댓글 + 첨부파일
- `NoticeForm.jsx`: 작성/수정 + 파일 업로드

### 기도훈련 (Prayer)

- `PrayerList.jsx`: 리스트 + 글쓰기
- `PrayerDetail.jsx`: 상세 + 댓글 + 첨부파일
- `PrayerForm.jsx`: 작성/수정 + 파일 업로드

### 말씀훈련 (Word)

- `WordList.jsx`: 리스트 + 글쓰기
- `WordDetail.jsx`: 상세 + 댓글 + 첨부파일
- `WordForm.jsx`: 작성/수정 + 파일 업로드

### 회의록 (Records)

- `RecordList.jsx`: 리스트 + 글쓰기
- `RecordDetail.jsx`: 상세 + 댓글 + 첨부파일
- `RecordForm.jsx`: 작성/수정 + 파일 업로드

### 팀미션 (Missions)

- `MissionList.jsx`: 리스트 + 글쓰기
- `MissionDetail.jsx`: 상세 + 댓글 + 첨부파일
- `MissionForm.jsx`: 작성/수정 + 파일 업로드

### 정적 페이지

- `Schedule.jsx`: 선교일정 (표) + 댓글
- `School.jsx`: 선교스쿨 (일정표) + 댓글
- `Contact.jsx`: 비상연락망 (표) + 댓글
- `Building.jsx`: 팀빌딩 (표) + 댓글
- `Preparation.jsx`: 준비물 (체크리스트) + 댓글
- `Items.jsx`: 선교물품 (표) + 댓글
- `Praise.jsx`: 찬양 + 댓글

### 기타

- `ChurchInfo.jsx`: 교회 소개 + 저작권

## 데이터

- `data/content.js`: 팀별 정적 콘텐츠 데이터

## GitHub Actions

- `.github/workflows/deploy.yml`: 자동 빌드 및 배포 워크플로우
