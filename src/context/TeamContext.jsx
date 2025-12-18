import { createContext, useContext, useState, useEffect } from 'react';

const TeamContext = createContext();

export function TeamProvider({ children }) {
  // 항상 요르단으로 고정
  const [selectedTeam, setSelectedTeam] = useState('jordan');

  useEffect(() => {
    // 항상 요르단으로 설정
    setSelectedTeam('jordan');
  }, []);

  // 팀 변경 불가 (요르단만 사용)
  const changeTeam = (team) => {
    // 변경하지 않음
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
