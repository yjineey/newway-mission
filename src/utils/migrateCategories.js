/**
 * Firestore에 카테고리 데이터를 초기화하는 마이그레이션 스크립트
 * 
 * 사용법:
 * 1. 개발자 도구 콘솔에서 실행: await window.migrateCategoriesToFirestore()
 * 2. 또는 별도의 마이그레이션 스크립트로 실행
 */

import { categoryGroups as staticCategories } from '../data/categories';
import { createCategoryGroup } from '../services/categoryService';
import { isFirebaseConfigured } from '../firebase/config';
import { iconMap } from './iconMap';

/**
 * 아이콘 컴포넌트를 문자열 이름으로 변환
 */
const getIconName = (iconComponent) => {
  // iconMap에서 일치하는 아이콘 찾기
  for (const [name, Icon] of Object.entries(iconMap)) {
    if (Icon === iconComponent) {
      return name;
    }
  }
  // 기본값
  return 'Heart';
};

/**
 * 정적 카테고리 데이터를 Firestore로 마이그레이션
 */
export const migrateCategoriesToFirestore = async () => {
  if (!isFirebaseConfigured) {
    console.error('Firebase가 설정되지 않았습니다.');
    return;
  }

  try {
    console.log('카테고리 마이그레이션 시작...');

    for (let i = 0; i < staticCategories.length; i++) {
      const group = staticCategories[i];
      
      // 아이콘 컴포넌트를 문자열로 변환
      const migratedGroup = {
        id: group.id,
        label: group.label,
        order: i,
        categories: group.categories.map((cat, catIndex) => ({
          id: cat.id,
          name: cat.name,
          icon: getIconName(cat.icon),
          path: cat.path,
          color: cat.color,
          order: catIndex,
        })),
      };

      // Firestore에 저장
      await createCategoryGroup(migratedGroup);
      console.log(`✅ 그룹 "${group.label}" 마이그레이션 완료`);
    }

    console.log('✅ 모든 카테고리 마이그레이션 완료!');
  } catch (error) {
    console.error('❌ 마이그레이션 실패:', error);
    throw error;
  }
};

// 브라우저 콘솔에서 직접 사용할 수 있도록 export
if (typeof window !== 'undefined') {
  window.migrateCategoriesToFirestore = migrateCategoriesToFirestore;
}

