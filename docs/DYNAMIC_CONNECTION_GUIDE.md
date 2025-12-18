# 동적 연결 가이드

Firebase와 동적으로 연결하여 데이터를 가져오고 저장하는 방법을 설명합니다.

## 목차

1. [Firebase 설정](#firebase-설정)
2. [서비스 레이어 사용](#서비스-레이어-사용)
3. [페이지에서 데이터 가져오기](#페이지에서-데이터-가져오기)
4. [데이터 생성/수정/삭제](#데이터-생성수정삭제)
5. [파일 업로드](#파일-업로드)
6. [실시간 업데이트](#실시간-업데이트)
7. [에러 처리](#에러-처리)
8. [실제 예제](#실제-예제)

---

## Firebase 설정

### 1. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 Firebase 설정을 추가합니다:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 2. Firebase 초기화 확인

`src/firebase/config.js`에서 Firebase가 올바르게 초기화되었는지 확인합니다:

```javascript
import { db, storage, auth, isFirebaseConfigured } from '../firebase/config'

// Firebase 설정이 되어있는지 확인
if (!isFirebaseConfigured) {
  console.warn('Firebase 설정이 없습니다')
}
```

---

## 서비스 레이어 사용

모든 Firebase 연동은 `src/services/postService.js`를 통해 이루어집니다.

### 사용 가능한 함수들

#### 1. 게시글 생성
```javascript
import { createPost } from '../services/postService'

const postData = {
  category: 'records',        // 카테고리 ID
  team: 'egypt',              // 팀 (선택사항)
  title: '제목',
  content: '내용',
  author: '작성자명'
}

const postId = await createPost(postData)
```

#### 2. 게시글 목록 조회
```javascript
import { getPosts } from '../services/postService'

// 카테고리별 조회
const posts = await getPosts('records')

// 팀별 조회
const posts = await getPosts('records', 'egypt')
```

#### 3. 게시글 상세 조회
```javascript
import { getPost } from '../services/postService'

const post = await getPost(postId)
```

#### 4. 게시글 수정
```javascript
import { updatePost } from '../services/postService'

await updatePost(postId, {
  title: '수정된 제목',
  content: '수정된 내용'
})
```

#### 5. 게시글 삭제
```javascript
import { deletePost } from '../services/postService'

await deletePost(postId)
```

#### 6. 파일 업로드
```javascript
import { uploadFile } from '../services/postService'

const fileData = await uploadFile(file, postId)
// 반환값: { name, url, path, size, type }
```

#### 7. 파일 삭제
```javascript
import { deleteFile } from '../services/postService'

await deleteFile(filePath)
```

---

## 페이지에서 데이터 가져오기

### 기본 패턴

```javascript
import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import { getPosts } from '../services/postService'

function MyPage() {
  const { selectedTeam } = useTeam()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [selectedTeam]) // 팀이 변경될 때마다 다시 로드

  const loadPosts = async () => {
    try {
      const data = await getPosts('category-id', selectedTeam)
      setPosts(data)
    } catch (error) {
      console.error('데이터 로드 실패:', error)
    }
  }

  return (
    // UI 렌더링
  )
}
```

### 실제 예제: Records.jsx

```javascript
import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import { getPosts } from '../services/postService'

function Records() {
  const { selectedTeam } = useTeam()
  const [records, setRecords] = useState([])

  useEffect(() => {
    loadRecords()
  }, [selectedTeam])

  const loadRecords = async () => {
    try {
      const data = await getPosts('records', selectedTeam)
      setRecords(data)
    } catch (error) {
      console.error('회의록 로드 실패:', error)
    }
  }

  return (
    // UI 렌더링
  )
}
```

---

## 데이터 생성/수정/삭제

### 1. 데이터 생성 (글쓰기)

```javascript
import { createPost, uploadFile } from '../services/postService'
import { useNavigate } from 'react-router-dom'
import { useTeam } from '../context/TeamContext'

function BoardWrite() {
  const navigate = useNavigate()
  const { selectedTeam } = useTeam()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData) => {
    if (isSubmitting) return
    
    try {
      setIsSubmitting(true)

      // 1. 게시글 생성
      const postData = {
        category: 'records',
        team: selectedTeam,
        title: formData.title,
        content: formData.content,
        author: '관리자',
      }

      const postId = await createPost(postData)

      // 2. 파일 업로드 (있는 경우)
      if (formData.files && formData.files.length > 0) {
        const uploadPromises = formData.files.map(file => 
          uploadFile(file, postId)
        )
        const uploadedFiles = await Promise.all(uploadPromises)
        
        // 업로드된 파일 정보를 게시글에 추가
        await updatePost(postId, {
          attachments: uploadedFiles
        })
      }

      // 3. 성공 후 목록으로 이동
      navigate('/records')
    } catch (error) {
      console.error('게시글 작성 실패:', error)
      alert('게시글 작성에 실패했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    // 폼 UI
  )
}
```

### 2. 데이터 수정

```javascript
import { getPost, updatePost } from '../services/postService'
import { useParams, useNavigate } from 'react-router-dom'

function BoardEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    loadPost()
  }, [id])

  const loadPost = async () => {
    try {
      const data = await getPost(id)
      setPost(data)
    } catch (error) {
      console.error('게시글 로드 실패:', error)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      await updatePost(id, {
        title: formData.title,
        content: formData.content
      })
      navigate(`/records/${id}`)
    } catch (error) {
      console.error('게시글 수정 실패:', error)
      alert('게시글 수정에 실패했습니다.')
    }
  }

  return (
    // 수정 폼 UI
  )
}
```

### 3. 데이터 삭제

```javascript
import { deletePost } from '../services/postService'
import { useNavigate } from 'react-router-dom'

function BoardDetail() {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return

    try {
      await deletePost(id)
      navigate('/records')
    } catch (error) {
      console.error('게시글 삭제 실패:', error)
      alert('게시글 삭제에 실패했습니다.')
    }
  }

  return (
    // 상세보기 UI + 삭제 버튼
  )
}
```

---

## 파일 업로드

### 단일 파일 업로드

```javascript
import { uploadFile } from '../services/postService'

const handleFileUpload = async (file, postId) => {
  try {
    const fileData = await uploadFile(file, postId)
    console.log('업로드된 파일:', fileData)
    // fileData: { name, url, path, size, type }
  } catch (error) {
    console.error('파일 업로드 실패:', error)
  }
}
```

### 여러 파일 업로드

```javascript
import { uploadFile } from '../services/postService'

const handleMultipleFiles = async (files, postId) => {
  try {
    const uploadPromises = files.map(file => uploadFile(file, postId))
    const uploadedFiles = await Promise.all(uploadPromises)
    
    // 업로드된 파일들을 게시글에 저장
    await updatePost(postId, {
      attachments: uploadedFiles
    })
  } catch (error) {
    console.error('파일 업로드 실패:', error)
  }
}
```

### 파일 삭제

```javascript
import { deleteFile } from '../services/postService'

const handleFileDelete = async (filePath) => {
  try {
    await deleteFile(filePath)
    console.log('파일 삭제 완료')
  } catch (error) {
    console.error('파일 삭제 실패:', error)
  }
}
```

---

## 실시간 업데이트

현재는 실시간 업데이트가 구현되어 있지 않습니다. 필요시 `onSnapshot`을 사용하여 구현할 수 있습니다:

```javascript
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'

useEffect(() => {
  const q = query(
    collection(db, 'posts'),
    where('category', '==', 'records'),
    where('team', '==', selectedTeam)
  )

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setPosts(posts)
  })

  return () => unsubscribe() // cleanup
}, [selectedTeam])
```

---

## 에러 처리

### 기본 에러 처리 패턴

```javascript
const loadData = async () => {
  try {
    const data = await getPosts('category', 'team')
    setData(data)
  } catch (error) {
    console.error('데이터 로드 실패:', error)
    // 사용자에게 알림
    alert('데이터를 불러올 수 없습니다.')
  }
}
```

### 로딩 상태 관리

```javascript
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const loadData = async () => {
  try {
    setLoading(true)
    setError(null)
    const data = await getPosts('category', 'team')
    setData(data)
  } catch (error) {
    console.error('데이터 로드 실패:', error)
    setError('데이터를 불러올 수 없습니다.')
  } finally {
    setLoading(false)
  }
}
```

---

## 실제 예제

### 예제 1: 새로운 카테고리 페이지 만들기

1. **페이지 컴포넌트 생성** (`src/pages/MyCategory.jsx`)

```javascript
import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function MyCategory() {
  const { selectedTeam } = useTeam()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [selectedTeam])

  const loadPosts = async () => {
    try {
      setLoading(true)
      const data = await getPosts('my-category', selectedTeam)
      setPosts(data)
    } catch (error) {
      console.error('데이터 로드 실패:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout 
      title="내 카테고리" 
      showTeamTabs={true}
      actions={<WriteButton category="my-category" />}
    >
      {loading ? (
        <div>로딩 중...</div>
      ) : posts.length > 0 ? (
        <div className="space-y-3">
          {posts.map((post) => (
            <ListItem
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              date={post.createdAt}
              basePath="/my-category"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="작성된 게시글이 없습니다" />
      )}
    </PageLayout>
  )
}

export default MyCategory
```

2. **라우팅 추가** (`src/App.jsx`)

```javascript
import MyCategory from './pages/MyCategory'

// Routes 안에 추가
<Route path="/my-category" element={<MyCategory />} />
```

3. **카테고리 추가** (`src/data/categories.js`)

```javascript
{
  id: 'my-category',
  name: '내 카테고리',
  icon: YourIcon,
  path: '/my-category',
  color: 'from-blue-500 to-cyan-500',
}
```

### 예제 2: 커스텀 서비스 함수 추가

`src/services/postService.js`에 새로운 함수 추가:

```javascript
/**
 * 특정 조건으로 게시글 검색
 */
export const searchPosts = async (category, searchTerm) => {
  try {
    const q = query(
      collection(db, POSTS_COLLECTION),
      where('category', '==', category),
      where('title', '>=', searchTerm),
      where('title', '<=', searchTerm + '\uf8ff'),
      orderBy('title'),
      orderBy('createdAt', 'desc')
    )

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    }))
  } catch (error) {
    console.error('게시글 검색 실패:', error)
    throw error
  }
}
```

---

## 주의사항

1. **Firebase 보안 규칙**: `firestore.rules`와 `storage.rules`에서 권한을 확인하세요.

2. **에러 처리**: 모든 비동기 작업에 try-catch를 사용하세요.

3. **로딩 상태**: 사용자 경험을 위해 로딩 상태를 표시하세요.

4. **팀 필터링**: 팀별 데이터를 가져올 때 `selectedTeam`을 사용하세요.

5. **타임스탬프**: `createdAt`과 `updatedAt`은 자동으로 설정됩니다.

6. **파일 경로**: 파일 삭제 시 `file.path`를 사용하세요.

---

## 참고 파일

- **Firebase 설정**: `src/firebase/config.js`
- **서비스 레이어**: `src/services/postService.js`
- **예제 페이지**: 
  - `src/pages/Records.jsx` (리스트)
  - `src/pages/BoardWrite.jsx` (작성)
  - `src/pages/BoardDetail.jsx` (상세)
  - `src/pages/BoardEdit.jsx` (수정)

