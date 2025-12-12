# 파일 업로드 가이드

## 📎 첨부파일 기능

Firebase Storage를 사용하여 파일 업로드/다운로드 기능을 구현합니다.

---

## 🎯 지원 기능

- ✅ **파일 업로드** (드래그앤드롭, 다중 선택)
- ✅ **파일 다운로드**
- ✅ **파일 삭제** (작성자만)
- ✅ **파일 미리보기** (이미지)
- ✅ **진행률 표시**
- ✅ **파일 타입 및 크기 제한**

---

## 📦 필요 패키지

```bash
# 이미 설치됨 (firebase 패키지에 포함)
npm install firebase
```

---

## 🔧 Firebase Storage 설정

### 1. Storage 활성화

Firebase Console → Storage → 시작하기

### 2. 보안 규칙

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 모두 읽기 가능
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // 인증된 사용자만 업로드
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

---

## 📁 Storage 구조

```
storage/
├── notices/
│   ├── egypt/
│   │   └── {postId}/
│   │       ├── file1.pdf
│   │       └── image1.jpg
│   └── jordan/
├── prayer/
├── word/
├── records/
└── missions/
```

---

## 💻 컴포넌트 구현

### FileUpload.jsx

```javascript
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { Upload } from 'lucide-react';

function FileUpload({ category, team, postId, onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (files) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    const uploaded = [];

    for (const file of files) {
      // 파일 크기 체크 (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name}은(는) 10MB를 초과합니다.`);
        continue;
      }

      // Storage 경로
      const path = `${category}/${team}/${postId}/${file.name}`;
      const storageRef = ref(storage, path);

      // 업로드
      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(prog);
          },
          (error) => {
            console.error('Upload error:', error);
            reject(error);
          },
          async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            uploaded.push({
              name: file.name,
              url,
              size: file.size
            });
            resolve();
          }
        );
      });
    }

    setUploading(false);
    setProgress(0);
    onUpload(uploaded);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleUpload(files);
  };

  return (
    <div
      className="upload-area"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        multiple
        id="file-input"
        className="hidden"
        onChange={(e) => handleUpload(Array.from(e.target.files))}
        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
      />
      
      <label htmlFor="file-input" className="upload-label">
        <Upload size={24} />
        <span>파일 선택 또는 드래그앤드롭</span>
        <span className="text-sm">이미지, PDF, 문서 (최대 10MB)</span>
      </label>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
          <span>{Math.round(progress)}%</span>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
```

---

### FileList.jsx

```javascript
import { Download, X, FileIcon } from 'lucide-react';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/config';

function FileList({ files, canDelete, onDelete }) {
  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleDownload = (file) => {
    window.open(file.url, '_blank');
  };

  const handleDelete = async (file) => {
    if (!confirm(`${file.name}을(를) 삭제하시겠습니까?`)) return;

    try {
      const fileRef = ref(storage, file.url);
      await deleteObject(fileRef);
      onDelete(file);
    } catch (error) {
      console.error('Delete error:', error);
      alert('파일 삭제에 실패했습니다.');
    }
  };

  const isImage = (fileName) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);
  };

  return (
    <div className="file-list">
      {files.map((file, idx) => (
        <div key={idx} className="file-item">
          {isImage(file.name) ? (
            <img src={file.url} alt={file.name} className="file-thumb" />
          ) : (
            <FileIcon size={20} />
          )}
          
          <div className="file-info">
            <span className="file-name">{file.name}</span>
            <span className="file-size">{formatSize(file.size)}</span>
          </div>

          <div className="file-actions">
            <button onClick={() => handleDownload(file)} title="다운로드">
              <Download size={18} />
            </button>
            
            {canDelete && (
              <button onClick={() => handleDelete(file)} title="삭제">
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FileList;
```

---

## 🎨 스타일 예시 (Tailwind CSS)

```css
/* FileUpload */
.upload-area {
  @apply border-2 border-dashed border-gray-300 rounded-lg p-8 text-center;
  @apply hover:border-gray-400 transition-colors;
}

.upload-label {
  @apply flex flex-col items-center gap-2 cursor-pointer;
}

.progress-bar {
  @apply relative mt-4 h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress {
  @apply absolute top-0 left-0 h-full bg-blue-500 transition-all;
}

/* FileList */
.file-list {
  @apply space-y-2 mt-4;
}

.file-item {
  @apply flex items-center gap-3 p-3 border rounded-lg;
  @apply hover:bg-gray-50 transition-colors;
}

.file-thumb {
  @apply w-12 h-12 object-cover rounded;
}

.file-info {
  @apply flex-1 flex flex-col;
}

.file-name {
  @apply font-medium text-sm;
}

.file-size {
  @apply text-xs text-gray-500;
}

.file-actions {
  @apply flex gap-2;
}

.file-actions button {
  @apply p-2 hover:bg-gray-100 rounded transition-colors;
}
```

---

## 🔌 사용 예시

### NoticeForm.jsx (글 작성/수정)

```javascript
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import FileUpload from '../components/layout/FileUpload';

function NoticeForm({ team, onSuccess }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const [tempPostId] = useState(Date.now().toString()); // 임시 ID

  const handleFileUpload = (uploadedFiles) => {
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'notices'), {
      team,
      title,
      content,
      author: '홍길동',
      authorId: 'user123',
      attachments: files,  // 첨부파일 배열
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      views: 0,
      isPinned: false
    });

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <FileUpload
        category="notices"
        team={team}
        postId={tempPostId}
        onUpload={handleFileUpload}
      />

      <FileList
        files={files}
        canDelete={true}
        onDelete={(file) => setFiles(files.filter(f => f !== file))}
      />

      <button type="submit">작성</button>
    </form>
  );
}
```

### NoticeDetail.jsx (글 상세)

```javascript
import FileList from '../components/layout/FileList';

function NoticeDetail({ notice, isAuthor }) {
  return (
    <div>
      <h1>{notice.title}</h1>
      <p>{notice.content}</p>

      {notice.attachments && notice.attachments.length > 0 && (
        <div className="attachments">
          <h3>첨부파일 ({notice.attachments.length})</h3>
          <FileList
            files={notice.attachments}
            canDelete={isAuthor}
            onDelete={handleFileDelete}
          />
        </div>
      )}
    </div>
  );
}
```

---

## 🔐 보안 고려사항

### 1. 파일 타입 제한

```javascript
const allowedTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

function isAllowedType(file) {
  return allowedTypes.includes(file.type);
}
```

### 2. 파일 크기 제한

```javascript
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

function isAllowedSize(file) {
  return file.size <= MAX_SIZE;
}
```

### 3. 파일명 검증

```javascript
function sanitizeFileName(fileName) {
  // 특수문자 제거, 고유 ID 추가
  const cleaned = fileName.replace(/[^a-zA-Z0-9가-힣.-]/g, '_');
  const timestamp = Date.now();
  return `${timestamp}_${cleaned}`;
}
```

---

## 📊 제한사항

| 항목 | 무료 플랜 | 설명 |
|------|----------|------|
| **저장 용량** | 5GB | 총 파일 용량 |
| **다운로드** | 1GB/일 | 일일 다운로드 제한 |
| **업로드 작업** | 20,000회/일 | 일일 업로드 횟수 |

**예상 사용량 (교회 규모):**
- 게시글당 평균 2개 파일 (각 2MB)
- 월 100개 게시글 = 400MB
- **연간 약 5GB → 무료 플랜으로 충분** ✅

---

## 🚀 최적화 팁

### 1. 이미지 압축

```javascript
import imageCompression from 'browser-image-compression';

async function compressImage(file) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };
  
  return await imageCompression(file, options);
}
```

설치: `npm install browser-image-compression`

### 2. 썸네일 생성

Firebase Functions 사용 (선택사항)

### 3. 캐싱

다운로드 URL을 Firestore에 저장하여 재사용

---

## 🆘 문제 해결

### 업로드 실패

```javascript
try {
  await uploadBytes(storageRef, file);
} catch (error) {
  if (error.code === 'storage/unauthorized') {
    alert('업로드 권한이 없습니다. 로그인해주세요.');
  } else if (error.code === 'storage/quota-exceeded') {
    alert('저장 공간이 부족합니다.');
  } else {
    alert('업로드에 실패했습니다.');
  }
}
```

### CORS 오류

Firebase Console → Storage → CORS 설정

---

## 📝 체크리스트

개발 시 확인사항:

- [ ] Firebase Storage 활성화
- [ ] 보안 규칙 설정
- [ ] 파일 타입 검증
- [ ] 파일 크기 제한 (10MB)
- [ ] 진행률 표시
- [ ] 에러 핸들링
- [ ] 드래그앤드롭 지원
- [ ] 다중 파일 업로드
- [ ] 이미지 미리보기
- [ ] 다운로드 기능
- [ ] 삭제 권한 확인

