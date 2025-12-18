import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [userTeam, setUserTeam] = useState(null) // 'egypt' | 'jordan' | 'admin' | null

  // 초기화: localStorage에서 로그인 상태 확인
  useEffect(() => {
    const savedUserTeam = localStorage.getItem('userTeam')
    if (savedUserTeam && ['egypt', 'jordan', 'admin'].includes(savedUserTeam)) {
      setUserTeam(savedUserTeam)
    }
  }, [])

  const login = (password) => {
    // 비밀번호에 따라 권한 설정
    if (password === 'e2025') {
      setUserTeam('egypt')
      localStorage.setItem('userTeam', 'egypt')
      return true
    } else if (password === 'j2025') {
      setUserTeam('jordan')
      localStorage.setItem('userTeam', 'jordan')
      return true
    } else if (password === 'nw2025') {
      setUserTeam('admin')
      localStorage.setItem('userTeam', 'admin')
      return true
    }
    return false
  }

  const logout = () => {
    setUserTeam(null)
    localStorage.removeItem('userTeam')
  }

  const isLoggedIn = userTeam !== null
  const isAdmin = userTeam === 'admin'

  return (
    <AuthContext.Provider value={{ userTeam, isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

