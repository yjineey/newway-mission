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
  serverTimestamp,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage, isFirebaseConfigured } from '../firebase/config';

// 게시글 컬렉션 이름
const POSTS_COLLECTION = 'posts';

/**
 * Firebase 연결 확인
 */
const checkFirebaseConnection = () => {
  if (!isFirebaseConfigured || !db) {
    throw new Error('Firebase가 설정되지 않았습니다. .env 파일을 확인하세요.');
  }
};

/**
 * Storage 연결 확인
 */
const checkStorageConnection = () => {
  if (!isFirebaseConfigured || !storage) {
    throw new Error('Firebase Storage가 설정되지 않았습니다.');
  }
};

/**
 * 게시글 생성
 */
export const createPost = async (postData) => {
  try {
    checkFirebaseConnection();

    const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
      ...postData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('게시글 생성 실패:', error);
    throw error;
  }
};

/**
 * 게시글 목록 조회
 */
export const getPosts = async (category, team = null) => {
  try {
    checkFirebaseConnection();

    let q = query(
      collection(db, POSTS_COLLECTION),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );

    if (team) {
      q = query(
        collection(db, POSTS_COLLECTION),
        where('category', '==', category),
        where('team', '==', team),
        orderBy('createdAt', 'desc')
      );
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    }));
  } catch (error) {
    console.error('게시글 목록 조회 실패:', error);
    // Firebase가 설정되지 않았을 때는 빈 배열 반환
    if (error.message.includes('Firebase가 설정되지 않았습니다')) {
      console.warn('Firebase 미설정: 빈 배열 반환');
      return [];
    }
    throw error;
  }
};

/**
 * 게시글 상세 조회
 */
export const getPost = async (postId) => {
  try {
    checkFirebaseConnection();

    const docRef = doc(db, POSTS_COLLECTION, postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate(),
        updatedAt: docSnap.data().updatedAt?.toDate(),
      };
    }
    return null;
  } catch (error) {
    console.error('게시글 조회 실패:', error);
    throw error;
  }
};

/**
 * 게시글 수정
 */
export const updatePost = async (postId, postData) => {
  try {
    checkFirebaseConnection();

    const docRef = doc(db, POSTS_COLLECTION, postId);
    await updateDoc(docRef, {
      ...postData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('게시글 수정 실패:', error);
    throw error;
  }
};

/**
 * 게시글 삭제
 */
export const deletePost = async (postId) => {
  try {
    checkFirebaseConnection();

    const docRef = doc(db, POSTS_COLLECTION, postId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('게시글 삭제 실패:', error);
    throw error;
  }
};

/**
 * 파일 업로드
 */
export const uploadFile = async (file, postId) => {
  try {
    checkStorageConnection();

    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `posts/${postId}/${fileName}`);

    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    return {
      name: file.name,
      url: downloadURL,
      path: storageRef.fullPath,
      size: file.size,
      type: file.type,
    };
  } catch (error) {
    console.error('파일 업로드 실패:', error);
    throw error;
  }
};

/**
 * 파일 삭제
 */
export const deleteFile = async (filePath) => {
  try {
    checkStorageConnection();

    const fileRef = ref(storage, filePath);
    await deleteObject(fileRef);
  } catch (error) {
    console.error('파일 삭제 실패:', error);
    throw error;
  }
};
