import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const TeamContext = createContext();

export function TeamProvider({ children }) {
  const { userTeam, effectiveTeam } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState(null);

  // selectedTeam 설정 로직
  useEffect(() => {
    // 로그인한 경우 (userTeam이 있음)
    if (userTeam !== null) {
      if (userTeam === 'admin') {
        // 관리자는 로컬스토리지에서 선택된 팀 불러오기
        const savedTeam = localStorage.getItem('selectedTeam');
        setSelectedTeam(savedTeam || null);
      } else if (userTeam === 'egypt' || userTeam === 'jordan') {
        // 이집트나 요르단으로 로그인하면 해당 팀으로 고정
        setSelectedTeam(userTeam);
      }
    } else {
      // 로그인하지 않은 경우 (userTeam이 null)
      // effectiveTeam에 따라 설정 (DEFAULT_TEAM 값)
      if (effectiveTeam === 'egypt' || effectiveTeam === 'jordan') {
        setSelectedTeam(effectiveTeam);
      } else {
        // effectiveTeam이 null이면 selectedTeam도 null
        setSelectedTeam(null);
      }
    }
  }, [userTeam, effectiveTeam]);

  // 팀 변경 시 로컬스토리지에 저장 (관리자 권한만 가능)
  const changeTeam = (team) => {
    if (effectiveTeam === 'admin') {
      setSelectedTeam(team);
      localStorage.setItem('selectedTeam', team);
    }
  };

  const value = {
    selectedTeam,
    changeTeam,
    isEgypt: selectedTeam === 'egypt',
    isJordan: selectedTeam === 'jordan',
  };

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}

// 커스텀 훅
export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within TeamProvider');
  }
  return context;
}
