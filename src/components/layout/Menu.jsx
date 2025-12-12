import { useState } from 'react'
import { X, Moon, Sun, Info, LogIn, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoginModal from '../auth/LoginModal'

function Menu({ isOpen, onClose, theme, toggleTheme }) {
  const { isAdmin, logout } = useAuth()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  if (!isOpen) return null

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  const handleLogout = () => {
    logout()
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#f5f5f5] dark:bg-[#1a1a1a] z-50 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex items-center justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2d2d2d] transition-colors"
              aria-label="메뉴 닫기"
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 pb-6">
            <ul className="space-y-2">
              {/* 교회 소개 */}
              <li>
                <Link
                  to="/church-info"
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2d2d2d] transition-colors group"
                >
                  <Info className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  <span className="text-gray-900 dark:text-white font-medium">
                    교회 소개
                  </span>
                </Link>
              </li>

              {/* 관리자 로그인/로그아웃 */}
              <li>
                {isAdmin ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2d2d2d] transition-colors group"
                  >
                    <LogOut className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                    <span className="text-gray-900 dark:text-white font-medium">
                      로그아웃
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleLoginClick}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2d2d2d] transition-colors group"
                  >
                    <LogIn className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                    <span className="text-gray-900 dark:text-white font-medium">
                      관리자 로그인
                    </span>
                  </button>
                )}
              </li>

              {/* 다크모드 토글 */}
              <li>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2d2d2d] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {theme === 'light' ? (
                      <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600" />
                    ) : (
                      <Sun className="w-5 h-5 text-gray-400 group-hover:text-primary-400" />
                    )}
                    <span className="text-gray-900 dark:text-white font-medium">
                      다크모드
                    </span>
                  </div>
                  
                  {/* Toggle Switch */}
                  <div className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'dark' ? 'bg-primary-500' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 mt-0.5 ${
                      theme === 'dark' ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'
                    }`} />
                  </div>
                </button>
              </li>
            </ul>
          </nav>

          {/* 로그인 모달 */}
          <LoginModal 
            isOpen={isLoginModalOpen} 
            onClose={() => setIsLoginModalOpen(false)} 
          />

          {/* Footer */}
          <div className="p-6 border-t border-gray-400 dark:border-[#333333]">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © 2025 뉴웨이교회
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu

