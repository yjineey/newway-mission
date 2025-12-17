# Firestore 데이터베이스 스키마

## 📊 Firestore 컬렉션 상세 설계

---

## 1. 회의록 (records)

### 컬렉션 경로

```
/records/{recordId}
```

### 필드 스키마

| 필드명        | 타입      | 필수 | 설명                | 예시                   |
| ------------- | --------- | ---- | ------------------- | ---------------------- |
| `id`          | string    | ✅   | 문서 ID (자동 생성) | `abc123xyz`            |
| `team`        | string    | ✅   | 팀 (egypt, jordan)  | `egypt`                |
| `title`       | string    | ✅   | 제목                | `1차 팀 회의록`        |
| `content`     | string    | ✅   | 내용                | `주요 논의사항...`     |
| `author`      | string    | ✅   | 작성자 이름         | `홍길동`               |
| `authorId`    | string    | ❌   | 작성자 ID           | `user_abc123`          |
| `createdAt`   | timestamp | ✅   | 작성일시            | `2024-06-01T10:00:00Z` |
| `updatedAt`   | timestamp | ✅   | 수정일시            | `2024-06-02T15:30:00Z` |
| `views`       | number    | ✅   | 조회수              | `42`                   |
| `attachments` | array     | ❌   | 첨부파일 목록       | `[{name, url, size}]`  |

### 첨부파일 (attachments) 구조

```javascript
attachments: [
  {
    name: '파일명.pdf', // 원본 파일명
    url: 'https://storage...', // Firebase Storage URL
    size: 102400, // 바이트 단위
    type: 'application/pdf', // MIME 타입 (선택)
  },
];
```

### 인덱스

```
- team (ASC) + createdAt (DESC)
```

### 예시 문서

```json
{
  "id": "record001",
  "team": "egypt",
  "title": "1차 팀 회의록",
  "content": "주요 논의사항...",
  "author": "홍길동",
  "authorId": "user_abc123",
  "createdAt": { "_seconds": 1717228800, "_nanoseconds": 0 },
  "updatedAt": { "_seconds": 1717228800, "_nanoseconds": 0 },
  "views": 42,
  "attachments": []
}
```

---

## 2. 찬양 (praise)

### 컬렉션 경로

```
/praise/{praiseId}
```

### 필드 스키마

| 필드명        | 타입      | 필수 | 설명                | 예시                   |
| ------------- | --------- | ---- | ------------------- | ---------------------- |
| `id`          | string    | ✅   | 문서 ID (자동 생성) | `praise001`            |
| `team`        | string    | ✅   | 팀 (egypt, jordan)  | `egypt`                |
| `title`       | string    | ✅   | 제목                | `주님의 마음`          |
| `content`     | string    | ✅   | 내용                | `찬양 가사...`         |
| `author`      | string    | ✅   | 작성자 이름         | `홍길동`               |
| `authorId`    | string    | ❌   | 작성자 ID           | `user_abc123`          |
| `createdAt`   | timestamp | ✅   | 작성일시            | `2024-06-01T10:00:00Z` |
| `updatedAt`   | timestamp | ✅   | 수정일시            | `2024-06-02T15:30:00Z` |
| `views`       | number    | ✅   | 조회수              | `15`                   |
| `attachments` | array     | ❌   | 첨부파일 목록       | `[{name, url, size}]`  |

### 인덱스

```
- team (ASC) + createdAt (DESC)
```

---

## 3. 중보기도 (prayer-request)

### 컬렉션 경로

```
/prayer-request/{requestId}
```

### 필드 스키마

| 필드명        | 타입      | 필수 | 설명                | 예시                   |
| ------------- | --------- | ---- | ------------------- | ---------------------- |
| `id`          | string    | ✅   | 문서 ID (자동 생성) | `prayer001`            |
| `team`        | string    | ✅   | 팀 (egypt, jordan)  | `jordan`               |
| `title`       | string    | ✅   | 제목                | `선교지를 위한 기도`   |
| `content`     | string    | ✅   | 내용                | `기도 요청 내용...`     |
| `author`      | string    | ✅   | 작성자 이름         | `김기도`               |
| `authorId`    | string    | ❌   | 작성자 ID           | `user_def456`          |
| `createdAt`   | timestamp | ✅   | 작성일시            | `2024-06-01T10:00:00Z` |
| `updatedAt`   | timestamp | ✅   | 수정일시            | `2024-06-02T15:30:00Z` |
| `views`       | number    | ✅   | 조회수              | `23`                   |
| `attachments` | array     | ❌   | 첨부파일 목록       | `[{name, url, size}]`  |

### 인덱스

```
- team (ASC) + createdAt (DESC)
```

---

## 4. 준비물 (preparation)

### 컬렉션 경로

```
/preparation/{preparationId}
```

### 필드 스키마

| 필드명        | 타입      | 필수 | 설명                | 예시                   |
| ------------- | --------- | ---- | ------------------- | ---------------------- |
| `id`          | string    | ✅   | 문서 ID (자동 생성) | `prep001`              |
| `team`        | string    | ✅   | 팀 (egypt, jordan)  | `egypt`                |
| `title`       | string    | ✅   | 제목                | `여름 준비물`          |
| `content`     | string    | ✅   | 내용                | `준비물 목록...`       |
| `author`      | string    | ✅   | 작성자 이름         | `이준비`               |
| `authorId`    | string    | ❌   | 작성자 ID           | `user_ghi789`          |
| `createdAt`   | timestamp | ✅   | 작성일시            | `2024-06-01T10:00:00Z` |
| `updatedAt`   | timestamp | ✅   | 수정일시            | `2024-06-02T15:30:00Z` |
| `views`       | number    | ✅   | 조회수              | `18`                   |
| `attachments` | array     | ❌   | 첨부파일 목록       | `[{name, url, size}]`  |

### 인덱스

```
- team (ASC) + createdAt (DESC)
```

---

## 5. 선교물품 (items)

### 컬렉션 경로

```
/items/{itemId}
```

### 필드 스키마

| 필드명        | 타입      | 필수 | 설명                | 예시                   |
| ------------- | --------- | ---- | ------------------- | ---------------------- |
| `id`          | string    | ✅   | 문서 ID (자동 생성) | `item001`              |
| `team`        | string    | ✅   | 팀 (egypt, jordan)  | `jordan`               |
| `title`       | string    | ✅   | 제목                | `성경 100권`           |
| `content`     | string    | ✅   | 내용                | `물품 상세 내용...`    |
| `author`      | string    | ✅   | 작성자 이름         | `최물품`               |
| `authorId`    | string    | ❌   | 작성자 ID           | `user_jkl012`          |
| `createdAt`   | timestamp | ✅   | 작성일시            | `2024-06-01T10:00:00Z` |
| `updatedAt`   | timestamp | ✅   | 수정일시            | `2024-06-02T15:30:00Z` |
| `views`       | number    | ✅   | 조회수              | `31`                   |
| `attachments` | array     | ❌   | 첨부파일 목록       | `[{name, url, size}]`  |

### 인덱스

```
- team (ASC) + createdAt (DESC)
```

---

## 6. 댓글 (comments)

### 컬렉션 경로

```
/comments/{commentId}
```

### 필드 스키마

| 필드명      | 타입      | 필수 | 설명                    | 예시          |
| ----------- | --------- | ---- | ----------------------- | ------------- |
| `id`        | string    | ✅   | 문서 ID                 | `comment001`  |
| `pageId`    | string    | ✅   | 페이지 식별자           | `notices`     |
| `team`      | string    | ✅   | 팀                      | `egypt`       |
| `postId`    | string    | ❌   | 게시글 ID               | `notice001`   |
| `author`    | string    | ✅   | 작성자 닉네임           | `김댓글`      |
| `authorId`  | string    | ❌   | 작성자 ID               | `user_ghi789` |
| `content`   | string    | ✅   | 댓글 내용               | `감사합니다!` |
| `createdAt` | timestamp | ✅   | 작성일시                | -             |
| `updatedAt` | timestamp | ✅   | 수정일시                | -             |
| `parentId`  | string    | ❌   | 부모 댓글 ID (대댓글용) | `comment000`  |
| `isDeleted` | boolean   | ✅   | 삭제 여부               | `false`       |

### 인덱스

```
- pageId (ASC) + team (ASC) + postId (ASC) + createdAt (ASC)
- pageId (ASC) + team (ASC) + createdAt (ASC)
```

### 예시 문서 (댓글)

```json
{
  "id": "comment001",
  "pageId": "notices",
  "team": "egypt",
  "postId": "notice001",
  "author": "김댓글",
  "authorId": "user_ghi789",
  "content": "정보 감사합니다!",
  "createdAt": { "_seconds": 1717315200, "_nanoseconds": 0 },
  "updatedAt": { "_seconds": 1717315200, "_nanoseconds": 0 },
  "parentId": null,
  "isDeleted": false
}
```

### 예시 문서 (대댓글)

```json
{
  "id": "comment002",
  "pageId": "notices",
  "team": "egypt",
  "postId": "notice001",
  "author": "이답글",
  "authorId": "user_jkl012",
  "content": "저도 동의합니다!",
  "createdAt": { "_seconds": 1717318800, "_nanoseconds": 0 },
  "updatedAt": { "_seconds": 1717318800, "_nanoseconds": 0 },
  "parentId": "comment001",
  "isDeleted": false
}
```

---

## 7. 사용자 (users) - 선택사항

### 컬렉션 경로

```
/users/{userId}
```

### 필드 스키마

| 필드명        | 타입      | 필수 | 설명                 | 예시          |
| ------------- | --------- | ---- | -------------------- | ------------- |
| `id`          | string    | ✅   | 사용자 ID (Auth UID) | `user_abc123` |
| `displayName` | string    | ✅   | 표시 이름            | `홍길동`      |
| `isAnonymous` | boolean   | ✅   | 익명 여부            | `true`        |
| `team`        | string    | ❌   | 소속 팀              | `egypt`       |
| `createdAt`   | timestamp | ✅   | 가입일시             | -             |
| `lastLogin`   | timestamp | ✅   | 마지막 로그인        | -             |

---

## 🔍 쿼리 예시

### 1. 특정 팀의 공지사항 가져오기 (최신순, 고정 우선)

```javascript
import { collection, query, where, orderBy } from 'firebase/firestore';

const q = query(
  collection(db, 'notices'),
  where('team', '==', 'egypt'),
  orderBy('isPinned', 'desc'),
  orderBy('createdAt', 'desc')
);
```

### 2. 특정 게시글의 댓글 가져오기

```javascript
const q = query(
  collection(db, 'comments'),
  where('pageId', '==', 'notices'),
  where('postId', '==', 'notice001'),
  where('isDeleted', '==', false),
  orderBy('createdAt', 'asc')
);
```

### 3. 팀미션 주차별 정렬

```javascript
const q = query(
  collection(db, 'team-missions'),
  where('team', '==', 'jordan'),
  orderBy('week', 'asc')
);
```

### 4. 최근 7일 내 작성된 회의록

```javascript
import { Timestamp } from 'firebase/firestore';

const sevenDaysAgo = Timestamp.fromDate(
  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
);

const q = query(
  collection(db, 'meeting-records'),
  where('team', '==', 'egypt'),
  where('createdAt', '>=', sevenDaysAgo),
  orderBy('createdAt', 'desc')
);
```

---

## 🔐 Firestore 보안 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 헬퍼 함수
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    // 공지사항
    match /notices/{noticeId} {
      allow read: if true;  // 모두 읽기 가능
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated()
        && isOwner(resource.data.authorId);
    }

    // 기도훈련
    match /prayer-trainings/{trainingId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated()
        && isOwner(resource.data.authorId);
    }

    // 말씀훈련
    match /word-trainings/{trainingId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated()
        && isOwner(resource.data.authorId);
    }

    // 회의록
    match /meeting-records/{recordId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated()
        && isOwner(resource.data.authorId);
    }

    // 팀미션
    match /team-missions/{missionId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated()
        && isOwner(resource.data.authorId);
    }

    // 댓글
    match /comments/{commentId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated()
        && isOwner(resource.data.authorId);
    }

    // 사용자
    match /users/{userId} {
      allow read: if true;
      allow write: if isOwner(userId);
    }
  }
}
```

---

## 📊 Firebase Storage 구조

### 파일 저장 경로

```
storage/
├── notices/
│   ├── egypt/
│   │   ├── {noticeId}/
│   │   │   ├── file1.pdf
│   │   │   └── image1.jpg
│   │   └── ...
│   └── jordan/
│       └── ...
├── prayer-trainings/
├── word-trainings/
├── meeting-records/
└── team-missions/
```

### Storage 보안 규칙

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 모두 읽기 가능
    match /{allPaths=**} {
      allow read: if true;
    }

    // 인증된 사용자만 업로드 가능
    match /{category}/{team}/{postId}/{fileName} {
      allow write: if request.auth != null
        && request.resource.size < 10 * 1024 * 1024  // 10MB 제한
        && request.resource.contentType.matches(
          'image/.*|application/pdf|application/msword|application/vnd.openxmlformats.*'
        );
    }
  }
}
```

**지원 파일 타입:**

- 이미지: jpg, png, gif, webp
- 문서: pdf, doc, docx, xls, xlsx
- 최대 크기: 10MB

---

## 🎯 데이터 흐름 다이어그램

```
사용자 → React App → Firebase SDK → Firestore
                                    → Storage
                                    → Auth

[읽기]
1. 페이지 로드
2. Firestore 쿼리
3. 실시간 스냅샷 수신
4. UI 업데이트

[쓰기]
1. 폼 제출
2. Auth 확인
3. Firestore 쓰기
4. (파일 있으면) Storage 업로드
5. 실시간 반영
```

---

## 📈 예상 데이터 용량

### Firestore (데이터베이스)

| 컬렉션           | 예상 문서 수 | 문서당 크기 | 총 용량     |
| ---------------- | ------------ | ----------- | ----------- |
| notices          | 200          | 5 KB        | 1 MB        |
| prayer-trainings | 100          | 3 KB        | 300 KB      |
| word-trainings   | 100          | 3 KB        | 300 KB      |
| meeting-records  | 50           | 4 KB        | 200 KB      |
| team-missions    | 24           | 3 KB        | 72 KB       |
| comments         | 1,000        | 1 KB        | 1 MB        |
| **총계**         | **1,474**    | -           | **약 3 MB** |

**무료 플랜 (1GB) 대비 여유: 330배 이상** ✅

### Storage (파일)

| 항목               | 예상  | 크기     |
| ------------------ | ----- | -------- |
| 게시글당 평균 파일 | 2개   | 각 2MB   |
| 월 게시글          | 100개 | 400MB/월 |
| 연간 예상          | -     | 약 5GB   |

**무료 플랜 (5GB) 대비: 여유 있음** ✅

---

## 🛠 초기 데이터 세팅 (Seed Data)

### 개발용 테스트 데이터 생성 스크립트

```javascript
// src/utils/seedData.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function seedNotices() {
  const teams = ['egypt', 'jordan'];

  for (const team of teams) {
    await addDoc(collection(db, 'notices'), {
      team,
      title: '환영 공지사항',
      content: '선교스쿨에 오신 것을 환영합니다!',
      author: '관리자',
      authorId: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      views: 0,
      isPinned: true,
      attachments: [],
    });
  }
}
```

---

## 📚 참고사항

### Firebase 제한사항

- 단일 문서 크기: 최대 1MB
- 컬렉션 깊이: 최대 100 레벨
- 쿼리 결과: 권장 500개 이하
- 복합 인덱스: 수동 생성 필요

### 최적화 팁

- 자주 조회되는 쿼리는 인덱스 생성
- 대용량 데이터는 페이지네이션 사용
- 불필요한 필드는 제외하고 조회
- 실시간 리스너는 필요한 곳에만 사용
