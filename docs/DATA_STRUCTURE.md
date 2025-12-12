# 데이터 구조

## Firebase Firestore 구조

프로젝트는 **Firebase Firestore**를 사용하여 동적 데이터를 관리합니다.

---

## 📊 컬렉션 구조

### 전체 구조 개요

```
firestore/
├── notices/              # 공지사항
├── prayer-trainings/     # 기도훈련
├── word-trainings/       # 말씀훈련
├── meeting-records/      # 회의록
├── team-missions/        # 팀미션
├── comments/             # 댓글 (모든 페이지)
└── users/                # 사용자 (익명 포함)
```

---

## 📝 컬렉션별 스키마

### 1. **공지사항 (notices)**

```javascript
{
  id: "auto-generated-id",        // Firestore 자동 생성
  team: "egypt" | "jordan",       // 팀
  title: "공지사항 제목",           // 제목
  content: "공지사항 내용...",     // 내용 (마크다운 지원 가능)
  author: "작성자명",              // 작성자
  authorId: "user-id",            // 작성자 ID (익명일 경우 null)
  createdAt: Timestamp,           // 작성일 (Firebase Timestamp)
  updatedAt: Timestamp,           // 수정일
  views: 0,                       // 조회수
  isPinned: false,                // 상단 고정 여부
  attachments: [                  // 첨부파일 (선택)
    {
      name: "파일명.pdf",
      url: "storage-url",
      size: 1024
    }
  ]
}
```

**인덱스:** `team`, `createdAt DESC`, `isPinned DESC`

---

### 2. **기도훈련 (prayer-trainings)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "기도훈련 제목",
  content: "훈련 내용...",
  date: Timestamp,                // 훈련 날짜
  location: "장소",                // 장소 (선택)
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0
}
```

**인덱스:** `team`, `date DESC`

---

### 3. **말씀훈련 (word-trainings)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "말씀훈련 제목",
  content: "훈련 내용...",
  scripture: "요한복음 3:16",     // 성경 구절 (선택)
  date: Timestamp,
  location: "장소",
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0
}
```

**인덱스:** `team`, `date DESC`

---

### 4. **회의록 (meeting-records)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "회의록 제목",
  content: "회의 내용...",
  meetingDate: Timestamp,         // 회의 날짜
  attendees: ["참석자1", "참석자2"], // 참석자 목록
  agenda: [                       // 안건 (선택)
    "안건 1",
    "안건 2"
  ],
  decisions: "결정사항...",        // 결정사항 (선택)
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0
}
```

**인덱스:** `team`, `meetingDate DESC`

---

### 5. **팀미션 (team-missions)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  week: 1,                        // 주차 (1-6)
  title: "팀미션 제목",
  content: "미션 내용...",
  mission: "스터디" | "양화진방문" | "기타",
  dueDate: Timestamp,             // 마감일 (선택)
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0
}
```

**인덱스:** `team`, `week ASC`

---

### 6. **댓글 (comments)**

```javascript
{
  id: "auto-generated-id",
  pageId: "mission-schedule",     // 페이지 식별자 (라우트 경로)
  team: "egypt" | "jordan",       // 팀
  postId: "post-id",              // 게시글 ID (리스트가 있는 경우)
  author: "작성자명",              // 닉네임
  authorId: "user-id",            // 사용자 ID (익명 가능)
  content: "댓글 내용...",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  parentId: null,                 // 대댓글용 (선택, null이면 댓글)
  isDeleted: false                // 삭제 여부
}
```

**인덱스:** `pageId`, `team`, `postId`, `createdAt ASC`

---

### 7. **사용자 (users)** - 선택사항

```javascript
{
  id: "user-id",                  // Firebase Auth UID 또는 익명 ID
  displayName: "홍길동",           // 표시 이름
  isAnonymous: true,              // 익명 여부
  createdAt: Timestamp,
  lastLogin: Timestamp,
  team: "egypt" | "jordan"        // 소속 팀 (선택)
}
```

---

## 🔑 정적 데이터 (Static Data)

다음 카테고리는 **정적 데이터**로 관리하며, 필요 시 관리자 페이지에서 수정:

### 정적 데이터 파일: `src/data/staticContent.js`

```javascript
export const staticContent = {
  egypt: {
    missionSchedule: {
      // 선교일정 정보 (표 형태)
      departure: '2024-07-01',
      arrival: '2024-07-15',
      flight: 'KE123',
      schedule: [
        { date: '2024-07-01', activity: '출발' },
        { date: '2024-07-02', activity: '현지 도착' },
      ],
    },
    school: {
      // 선교스쿨 일정표
      schedule: [
        { week: 1, topic: '선교 이해', instructor: '김목사' },
        { week: 2, topic: '문화 이해', instructor: '이목사' },
      ],
    },
    emergencyContact: {
      // 비상연락망 (표)
      contacts: [
        { name: '팀장', phone: '010-1234-5678', role: '리더' },
        { name: '부팀장', phone: '010-2345-6789', role: '부리더' },
      ],
    },
    teamBuilding: {
      // 팀빌딩 정보
      activities: [
        { name: '아이스브레이킹', date: '2024-06-01' },
        { name: 'MT', date: '2024-06-15' },
      ],
    },
    preparation: {
      // 준비물 체크리스트
      items: [
        { category: '의류', items: ['여름옷', '겨울옷', '모자'] },
        { category: '서류', items: ['여권', '비자', '항공권'] },
      ],
    },
    missionItems: {
      // 선교물품
      items: [
        { name: '성경', quantity: 100, status: '준비 완료' },
        { name: '전도지', quantity: 500, status: '준비 중' },
      ],
    },
    praise: {
      // 찬양
      songs: [
        { title: '주님의 마음', lyrics: '가사...', youtubeUrl: 'url' },
        { title: '하나님의 은혜', lyrics: '가사...', youtubeUrl: 'url' },
      ],
    },
  },
  jordan: {
    // 동일한 구조
  },
};
```

---

## 📁 파일 업로드 (Firebase Storage)

### 구조

```
storage/
├── notices/
│   ├── egypt/
│   │   └── {noticeId}/
│   │       └── file.pdf
│   └── jordan/
└── attachments/
```

### 업로드 예시

```javascript
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// 파일 업로드
const storageRef = ref(storage, `notices/${team}/${noticeId}/${file.name}`);
await uploadBytes(storageRef, file);
const url = await getDownloadURL(storageRef);
```

---

## 🔐 보안 규칙 (Firestore Rules)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 모든 사용자 읽기 가능
    match /{document=**} {
      allow read: if true;
    }

    // 인증된 사용자만 쓰기 가능
    match /notices/{noticeId} {
      allow write: if request.auth != null;
    }

    match /comments/{commentId} {
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null
        && request.auth.uid == resource.data.authorId;
    }
  }
}
```

---

## 📊 데이터 흐름

### 1. **리스트 페이지 로드**

```javascript
// 실시간 구독
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

const q = query(
  collection(db, 'notices'),
  where('team', '==', 'egypt'),
  orderBy('isPinned', 'desc'),
  orderBy('createdAt', 'desc')
);

onSnapshot(q, (snapshot) => {
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setNotices(data);
});
```

### 2. **글 작성**

```javascript
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

await addDoc(collection(db, 'notices'), {
  team: 'egypt',
  title: '새 공지사항',
  content: '내용...',
  author: '홍길동',
  authorId: user.uid,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
  views: 0,
  isPinned: false,
});
```

### 3. **댓글 작성**

```javascript
await addDoc(collection(db, 'comments'), {
  pageId: 'notices',
  team: 'egypt',
  postId: noticeId,
  author: '김철수',
  authorId: user.uid,
  content: '댓글 내용...',
  createdAt: serverTimestamp(),
  parentId: null,
  isDeleted: false,
});
```

---

## 🎯 요약

| 카테고리   | 데이터 저장 | 글쓰기 | 댓글 |
| ---------- | ----------- | ------ | ---- |
| 공지사항   | Firestore   | ✅     | ✅   |
| 기도훈련   | Firestore   | ✅     | ✅   |
| 말씀훈련   | Firestore   | ✅     | ✅   |
| 회의록     | Firestore   | ✅     | ✅   |
| 팀미션     | Firestore   | ✅     | ✅   |
| 선교일정   | 정적 파일   | ❌     | ✅   |
| 선교스쿨   | 정적 파일   | ❌     | ✅   |
| 비상연락망 | 정적 파일   | ❌     | ✅   |
| 팀빌딩     | 정적 파일   | ❌     | ✅   |
| 준비물     | 정적 파일   | ❌     | ✅   |
| 선교물품   | 정적 파일   | ❌     | ✅   |
| 찬양       | 정적 파일   | ❌     | ✅   |

**댓글은 모든 페이지에서 Firestore 사용**
