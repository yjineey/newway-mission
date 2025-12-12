import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon } from 'lucide-react'
import Menu from './Menu'

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* 로고 */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">NW</span>
              </div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                뉴웨이 선교스쿨
              </h1>
            </Link>

            {/* 더보기 버튼 */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="메뉴 열기"
            >
              <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      {/* 메뉴 */}
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  )
}

export default Header

