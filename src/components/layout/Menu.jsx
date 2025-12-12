import { X, Moon, Sun, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

function Menu({ isOpen, onClose, theme, toggleTheme }) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              메뉴
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="메뉴 닫기"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {/* 교회 소개 */}
              <li>
                <Link
                  to="/church-info"
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <Info className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  <span className="text-gray-900 dark:text-white font-medium">
                    교회 소개
                  </span>
                </Link>
              </li>

              {/* 다크모드 토글 */}
              <li>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
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

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
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

