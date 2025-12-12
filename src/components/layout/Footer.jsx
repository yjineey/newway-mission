import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Calendar, 
  GraduationCap, 
  Heart, 
  BookOpen 
} from 'lucide-react'

function Footer() {
  const location = useLocation()

  const navItems = [
    { path: '/school', label: '선교스쿨', icon: GraduationCap },
    { path: '/schedule', label: '선교일정', icon: Calendar },
    { path: '/', label: '홈', icon: Home },
    { path: '/prayer', label: '기도훈련', icon: Heart },
    { path: '/word', label: '말씀훈련', icon: BookOpen },
  ]

  return (
    <footer>
      {/* 모바일 네비게이션 */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#f5f5f5]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg flex items-center justify-around h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Icon 
                className={`w-6 h-6 transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs font-medium ${
                isActive ? 'font-semibold' : ''
              }`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* 웹 저작권 */}
      <div className="hidden md:block py-6 bg-[#f5f5f5] dark:bg-[#1a1a1a] border-t border-gray-400 dark:border-[#333333]">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 뉴웨이교회
        </p>
      </div>
    </footer>
  )
}

export default Footer

