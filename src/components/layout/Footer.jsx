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
    { path: '/schedule', label: '선교일정', icon: Calendar },
    { path: '/school', label: '선교스쿨', icon: GraduationCap },
    { path: '/', label: '홈', icon: Home },
    { path: '/prayer', label: '기도훈련', icon: Heart },
    { path: '/word', label: '말씀훈련', icon: BookOpen },
  ]

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg">
      <nav className="flex items-center justify-around h-20 px-2">
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
    </footer>
  )
}

export default Footer

