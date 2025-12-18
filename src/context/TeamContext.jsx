import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const TeamContext = createContext()

export function TeamProvider({ children }) {
  const { userTeam, effectiveTeam } = useAuth()
  const [selectedTeam, setSelectedTeam] = useState('jordan')

  // 로그인한 팀이 있으면 자동으로 그 팀으로 설정, 관리자는 선택 가능
  useEffect(() => {
    if (userTeam === 'egypt' || userTeam === 'jordan') {
      // 사용자 권한이 있으면 해당 팀으로 고정
      setSelectedTeam(userTeam)
    } else if (effectiveTeam === 'admin') {
      // 관리자 권한(기본 권한 포함)은 로컬스토리지에서 선택된 팀 불러오기
      const savedTeam = localStorage.getItem('selectedTeam') || 'jordan'
      setSelectedTeam(savedTeam)
    } else {
      // 기본값
      setSelectedTeam('jordan')
    }
  }, [userTeam, effectiveTeam])

  // 팀 변경 시 로컬스토리지에 저장 (관리자 권한만 가능)
  const changeTeam = (team) => {
    if (effectiveTeam === 'admin') {
      setSelectedTeam(team)
      localStorage.setItem('selectedTeam', team)
    }
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

