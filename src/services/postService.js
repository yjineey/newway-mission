import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  where,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db, storage } from '../firebase/config'

// 게시글 컬렉션 이름
const POSTS_COLLECTION = 'posts'

/**
 * 게시글 생성
 */
export const createPost = async (postData) => {
  try {
    const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
      ...postData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return docRef.id
  } catch (error) {
    console.error('게시글 생성 실패:', error)
    throw error
  }
}

/**
 * 게시글 목록 조회
 */
export const getPosts = async (category, team = null) => {
  try {
    let q = query(
      collection(db, POSTS_COLLECTION),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    )

    if (team) {
      q = query(
        collection(db, POSTS_COLLECTION),
        where('category', '==', category),
        where('team', '==', team),
        orderBy('createdAt', 'desc')
      )
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    }))
  } catch (error) {
    console.error('게시글 목록 조회 실패:', error)
    throw error
  }
}

/**
 * 게시글 상세 조회
 */
export const getPost = async (postId) => {
  try {
    const docRef = doc(db, POSTS_COLLECTION, postId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate(),
        updatedAt: docSnap.data().updatedAt?.toDate(),
      }
    }
    return null
  } catch (error) {
    console.error('게시글 조회 실패:', error)
    throw error
  }
}

/**
 * 게시글 수정
 */
export const updatePost = async (postId, postData) => {
  try {
    const docRef = doc(db, POSTS_COLLECTION, postId)
    await updateDoc(docRef, {
      ...postData,
      updatedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error('게시글 수정 실패:', error)
    throw error
  }
}

/**
 * 게시글 삭제
 */
export const deletePost = async (postId) => {
  try {
    const docRef = doc(db, POSTS_COLLECTION, postId)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('게시글 삭제 실패:', error)
    throw error
  }
}

/**
 * 파일 업로드
 */
export const uploadFile = async (file, postId) => {
  try {
    const fileName = `${Date.now()}_${file.name}`
    const storageRef = ref(storage, `posts/${postId}/${fileName}`)
    
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    
    return {
      name: file.name,
      url: downloadURL,
      path: storageRef.fullPath,
      size: file.size,
      type: file.type,
    }
  } catch (error) {
    console.error('파일 업로드 실패:', error)
    throw error
  }
}

/**
 * 파일 삭제
 */
export const deleteFile = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath)
    await deleteObject(fileRef)
  } catch (error) {
    console.error('파일 삭제 실패:', error)
    throw error
  }
}

