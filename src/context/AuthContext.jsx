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
  const [isAdmin, setIsAdmin] = useState(false)

  // 초기화: localStorage에서 로그인 상태 확인
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin')
    if (adminStatus === 'true') {
      setIsAdmin(true)
    }
  }, [])

  const login = (password) => {
    // 간단한 비밀번호 체크 (실제로는 서버에서 검증해야 함)
    if (password === 'nw2025') {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

