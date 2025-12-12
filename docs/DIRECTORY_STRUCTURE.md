# 디렉토리 구조

```
newway-mission/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       │   └── icons/          # 카테고리 아이콘
│       └── fonts/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx           # 로고, 더보기 버튼
│   │   │   ├── Menu.jsx             # 더보기 메뉴
│   │   │   ├── Footer.jsx           # 하단 네비게이션
│   │   │   ├── Comments.jsx         # 댓글 영역
│   │   │   ├── ThemeToggle.jsx      # 다크모드 토글
│   │   │   ├── WriteBtn.jsx         # 글쓰기 버튼
│   │   │   ├── FileUpload.jsx       # 파일 업로드
│   │   │   └── FileList.jsx         # 첨부파일 목록
│   │   ├── team/
│   │   │   └── TeamSelect.jsx       # 팀 선택
│   │   ├── category/
│   │   │   ├── CategoryGrid.jsx     # 카테고리 그리드
│   │   │   └── CategoryCard.jsx     # 카테고리 카드
│   │   └── content/
│   │       ├── notices/
│   │       │   ├── NoticeList.jsx       # 공지사항 리스트
│   │       │   ├── NoticeDetail.jsx     # 공지사항 상세
│   │       │   └── NoticeForm.jsx       # 공지사항 작성/수정
│   │       ├── prayer/
│   │       │   ├── PrayerList.jsx       # 기도훈련 리스트
│   │       │   ├── PrayerDetail.jsx     # 기도훈련 상세
│   │       │   └── PrayerForm.jsx       # 기도훈련 작성/수정
│   │       ├── word/
│   │       │   ├── WordList.jsx         # 말씀훈련 리스트
│   │       │   ├── WordDetail.jsx       # 말씀훈련 상세
│   │       │   └── WordForm.jsx         # 말씀훈련 작성/수정
│   │       ├── records/
│   │       │   ├── RecordList.jsx       # 회의록 리스트
│   │       │   ├── RecordDetail.jsx     # 회의록 상세
│   │       │   └── RecordForm.jsx       # 회의록 작성/수정
│   │       ├── missions/
│   │       │   ├── MissionList.jsx      # 팀미션 리스트
│   │       │   ├── MissionDetail.jsx    # 팀미션 상세
│   │       │   └── MissionForm.jsx      # 팀미션 작성/수정
│   │       ├── Schedule.jsx             # 선교일정
│   │       ├── School.jsx               # 선교스쿨
│   │       ├── Contact.jsx              # 비상연락망
│   │       ├── Building.jsx             # 팀빌딩
│   │       ├── Preparation.jsx          # 준비물
│   │       ├── Items.jsx                # 선교물품
│   │       ├── Praise.jsx               # 찬양
│   │       └── ChurchInfo.jsx           # 교회 소개
│   ├── pages/
│   │   ├── Home.jsx                     # 메인 페이지
│   │   ├── Schedule.jsx                 # 선교일정
│   │   ├── Notices.jsx                  # 공지사항
│   │   ├── School.jsx                   # 선교스쿨
│   │   ├── Prayer.jsx                   # 기도훈련
│   │   ├── Word.jsx                     # 말씀훈련
│   │   ├── Records.jsx                  # 회의록
│   │   ├── Contact.jsx                  # 비상연락망
│   │   ├── Building.jsx                 # 팀빌딩
│   │   ├── Missions.jsx                 # 팀미션
│   │   ├── Preparation.jsx              # 준비물
│   │   ├── Items.jsx                    # 선교물품
│   │   ├── Praise.jsx                   # 찬양
│   │   └── ChurchInfo.jsx               # 교회 소개
│   ├── data/
│   │   └── static.js            # 정적 데이터
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── components/          # 컴포넌트별 스타일
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```
