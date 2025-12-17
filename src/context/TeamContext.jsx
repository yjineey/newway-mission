import { createContext, useContext, useState, useEffect } from 'react'

const TeamContext = createContext()

export function TeamProvider({ children }) {
  const [selectedTeam, setSelectedTeam] = useState('jordan')

  // 로컬스토리지에서 초기값 불러오기
  useEffect(() => {
    const savedTeam = localStorage.getItem('selectedTeam') || 'jordan'
    // 이집트가 저장되어 있으면 요르단으로 변경
    const team = savedTeam === 'egypt' ? 'jordan' : savedTeam
    setSelectedTeam(team)
  }, [])

  // 팀 변경 시 로컬스토리지에 저장
  const changeTeam = (team) => {
    setSelectedTeam(team)
    localStorage.setItem('selectedTeam', team)
  }

  const value = {
    selectedTeam,
    changeTeam,
    isEgypt: selectedTeam === 'egypt',
    isJordan: selectedTeam === 'jordan',
  }

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
}

// 커스텀 훅
export function useTeam() {
  const context = useContext(TeamContext)
  if (!context) {
    throw new Error('useTeam must be used within TeamProvider')
  }
  return context
}

