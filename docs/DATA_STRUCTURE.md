# 데이터 구조

## Firebase Firestore 구조

프로젝트는 **Firebase Firestore**를 사용하여 동적 데이터를 관리합니다.

---

## 📊 컬렉션 구조

### 전체 구조 개요

```
firestore/
├── records/              # 회의록
├── praise/               # 찬양
├── prayer-request/       # 중보기도
├── preparation/          # 준비물
├── items/                # 선교물품
├── comments/             # 댓글 (모든 페이지)
└── users/                # 사용자 (선택사항)
```

---

## 📝 컬렉션별 스키마

### 1. **회의록 (records)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "회의록 제목",
  content: "회의 내용...",
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0,
  attachments: [                  // 첨부파일 (선택)
    {
      name: "파일명.pdf",
      url: "storage-url",
      size: 1024
    }
  ]
}
```

**인덱스:** `team`, `createdAt DESC`

---

### 2. **찬양 (praise)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "찬양 제목",
  content: "찬양 가사...",
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0,
  attachments: []
}
```

**인덱스:** `team`, `createdAt DESC`

---

### 3. **중보기도 (prayer-request)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "기도 제목",
  content: "기도 요청 내용...",
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0,
  attachments: []
}
```

**인덱스:** `team`, `createdAt DESC`

---

### 4. **준비물 (preparation)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "준비물 제목",
  content: "준비물 내용...",
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0,
  attachments: []
}
```

**인덱스:** `team`, `createdAt DESC`

---

### 5. **선교물품 (items)**

```javascript
{
  id: "auto-generated-id",
  team: "egypt" | "jordan",
  title: "물품 제목",
  content: "물품 내용...",
  author: "작성자명",
  authorId: "user-id",
  createdAt: Timestamp,
  updatedAt: Timestamp,
  views: 0,
  attachments: []
}
```

**인덱스:** `team`, `createdAt DESC`

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
| 회의록     | Firestore   | ✅     | ✅   |
| 찬양       | Firestore   | ✅     | ✅   |
| 중보기도   | Firestore   | ✅     | ✅   |
| 준비물     | Firestore   | ✅     | ✅   |
| 선교물품   | Firestore   | ✅     | ✅   |
| 선교스쿨   | 정적 데이터 | ❌     | ✅   |
| 선교일정   | 정적 데이터 | ❌     | ✅   |
| 훈련일정   | 정적 데이터 | ❌     | ✅   |
| 비상연락망 | 정적 데이터 | ❌     | ✅   |
| 팀빌딩     | 정적 데이터 | ❌     | ✅   |
| 준비사항   | 정적 데이터 | ❌     | ✅   |

**댓글은 모든 페이지에서 Firestore 사용**
