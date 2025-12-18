import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// 기본 권한 설정 (로그인하지 않은 상태에서 사용할 권한)
// 'admin' | 'egypt' | 'jordan' | null 중 선택 가능
// null로 설정하면 비로그인 상태 (제한된 메뉴만 표시)
const DEFAULT_TEAM = null;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [userTeam, setUserTeam] = useState(null); // 'egypt' | 'jordan' | 'admin' | null

  // 초기화: localStorage에서 로그인 상태 확인
  useEffect(() => {
    const savedUserTeam = localStorage.getItem('userTeam');
    if (savedUserTeam && ['egypt', 'jordan', 'admin'].includes(savedUserTeam)) {
      setUserTeam(savedUserTeam);
    }
  }, []);

  const login = (password) => {
    // 비밀번호에 따라 권한 설정
    if (password === 'e2025') {
      setUserTeam('egypt');
      localStorage.setItem('userTeam', 'egypt');
      return true;
    } else if (password === 'j2025') {
      setUserTeam('jordan');
      localStorage.setItem('userTeam', 'jordan');
      return true;
    } else if (password === 'nw2025') {
      setUserTeam('admin');
      localStorage.setItem('userTeam', 'admin');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUserTeam(null);
    localStorage.removeItem('userTeam');
  };

  // 실제 로그인 여부 (userTeam이 null이 아니면 로그인한 것)
  const isLoggedIn = userTeam !== null;

  // 효과적인 권한 (로그인하지 않았으면 기본 권한 사용)
  const effectiveTeam = userTeam || DEFAULT_TEAM;

  // 효과적인 권한 기반으로 계산 (null일 수 있음)
  const isAdmin = effectiveTeam === 'admin';
  const isEgypt = effectiveTeam === 'egypt';
  const isJordan = effectiveTeam === 'jordan';

  return (
    <AuthContext.Provider
      value={{
        userTeam,
        effectiveTeam,
        isLoggedIn,
        isAdmin,
        isEgypt,
        isJordan,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
