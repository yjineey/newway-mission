import { 
  collection, 
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase/config'
import { iconMap } from '../utils/iconMap'

// 카테고리 컬렉션 이름
const CATEGORIES_COLLECTION = 'categories'

/**
 * Firebase 연결 확인
 */
const checkFirebaseConnection = () => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase가 설정되지 않았습니다. .env 파일을 확인하세요.')
  }
}

/**
 * 아이콘 문자열을 컴포넌트로 변환
 */
const getIconComponent = (iconName) => {
  return iconMap[iconName] || iconMap.Heart
}

/**
 * 모든 카테고리 그룹 조회
 */
export const getCategoryGroups = async () => {
  try {
    checkFirebaseConnection()
    
    const q = query(
      collection(db, CATEGORIES_COLLECTION),
      orderBy('order', 'asc')
    )
    
    const querySnapshot = await getDocs(q)
    const groups = querySnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        ...data,
        // 아이콘 문자열을 컴포넌트로 변환
        categories: (data.categories || []).map(cat => ({
          ...cat,
          icon: getIconComponent(cat.icon)
        }))
      }
    })

    // 그룹별로 카테고리 정렬
    return groups.map(group => ({
      ...group,
      categories: (group.categories || []).sort((a, b) => (a.order || 0) - (b.order || 0))
    }))
  } catch (error) {
    console.error('카테고리 그룹 조회 실패:', error)
    throw error
  }
}

/**
 * 카테고리 그룹 생성
 */
export const createCategoryGroup = async (groupData) => {
  try {
    checkFirebaseConnection()
    
    const docRef = await addDoc(collection(db, CATEGORIES_COLLECTION), {
      ...groupData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return docRef.id
  } catch (error) {
    console.error('카테고리 그룹 생성 실패:', error)
    throw error
  }
}

/**
 * 카테고리 그룹 수정
 */
export const updateCategoryGroup = async (groupId, groupData) => {
  try {
    checkFirebaseConnection()
    
    const docRef = doc(db, CATEGORIES_COLLECTION, groupId)
    await updateDoc(docRef, {
      ...groupData,
      updatedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error('카테고리 그룹 수정 실패:', error)
    throw error
  }
}

/**
 * 카테고리 그룹 삭제
 */
export const deleteCategoryGroup = async (groupId) => {
  try {
    checkFirebaseConnection()
    
    const docRef = doc(db, CATEGORIES_COLLECTION, groupId)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('카테고리 그룹 삭제 실패:', error)
    throw error
  }
}

/**
 * 특정 카테고리 그룹 조회
 */
export const getCategoryGroup = async (groupId) => {
  try {
    checkFirebaseConnection()
    
    const docRef = doc(db, CATEGORIES_COLLECTION, groupId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      const data = docSnap.data()
      return {
        id: docSnap.id,
        ...data,
        // 아이콘 문자열을 컴포넌트로 변환
        categories: (data.categories || []).map(cat => ({
          ...cat,
          icon: getIconComponent(cat.icon)
        }))
      }
    }
    return null
  } catch (error) {
    console.error('카테고리 그룹 조회 실패:', error)
    throw error
  }
}

