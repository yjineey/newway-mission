import {
  CalendarDays,
  Megaphone,
  GraduationCap,
  Heart,
  BookOpen,
  UsersRound,
  Flag,
  Music,
  PhoneCall,
  ClipboardList,
  Backpack,
  Gift,
  Target,
  CheckSquare,
  ListChecks,
  Flame,
  Cross,
} from 'lucide-react';

/**
 * 아이콘 이름을 Lucide React 아이콘 컴포넌트로 매핑
 */
export const iconMap = {
  CalendarDays,
  Megaphone,
  GraduationCap,
  Heart,
  BookOpen,
  UsersRound,
  Flag,
  Music,
  PhoneCall,
  ClipboardList,
  Backpack,
  Gift,
  Target,
  CheckSquare,
  ListChecks,
  Flame,
  Cross,
};

/**
 * 아이콘 이름 문자열로부터 아이콘 컴포넌트 가져오기
 * @param {string} iconName - 아이콘 이름 (예: 'GraduationCap')
 * @returns {React.ComponentType} - Lucide React 아이콘 컴포넌트
 */
export const getIcon = (iconName) => {
  const Icon = iconMap[iconName];
  if (!Icon) {
    console.warn(
      `아이콘을 찾을 수 없습니다: ${iconName}. 기본 아이콘을 사용합니다.`
    );
    return iconMap.Heart; // 기본 아이콘
  }
  return Icon;
};
