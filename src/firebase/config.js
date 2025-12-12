import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// Firebase 설정
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Firebase 설정 확인
const isFirebaseConfigured = Object.values(firebaseConfig).every(val => val)

if (!isFirebaseConfigured) {
  console.warn('⚠️ Firebase 설정이 없습니다. .env 파일을 확인하세요.')
  console.warn('📝 개발 중에는 로컬 상태로 작동합니다.')
}

// Firebase 초기화 (설정이 있을 때만)
let app = null
let db = null
let storage = null
let auth = null

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    storage = getStorage(app)
    auth = getAuth(app)
  } catch (error) {
    console.error('Firebase 초기화 실패:', error)
  }
}

export { db, storage, auth, isFirebaseConfigured }
export default app
