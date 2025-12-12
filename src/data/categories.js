import { 
  CalendarDays, 
  Megaphone, 
  School, 
  Heart, 
  BookOpen, 
  UsersRound, 
  Flag, 
  Music,
  PhoneCall,
  ClipboardList,
  Backpack,
  Gift
} from 'lucide-react'

export const categoryGroups = [
  {
    id: 'essential',
    label: '📋 필수 정보',
    categories: [
      {
        id: 'schedule',
        name: '선교일정',
        icon: CalendarDays,
        path: '/schedule',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'notices',
        name: '공지사항',
        icon: Megaphone,
        path: '/notices',
        color: 'from-orange-500 to-amber-500'
      },
      {
        id: 'records',
        name: '회의록',
        icon: ClipboardList,
        path: '/records',
        color: 'from-purple-500 to-violet-500'
      },
      {
        id: 'contact',
        name: '비상연락망',
        icon: PhoneCall,
        path: '/contact',
        color: 'from-red-500 to-rose-500'
      }
    ]
  },
  {
    id: 'education',
    label: '📚 교육/훈련',
    categories: [
      {
        id: 'school',
        name: '선교스쿨',
        icon: School,
        path: '/school',
        color: 'from-indigo-500 to-blue-500'
      },
      {
        id: 'prayer',
        name: '기도훈련',
        icon: Heart,
        path: '/prayer',
        color: 'from-pink-500 to-rose-500'
      },
      {
        id: 'word',
        name: '말씀훈련',
        icon: BookOpen,
        path: '/word',
        color: 'from-teal-500 to-emerald-500'
      }
    ]
  },
  {
    id: 'team',
    label: '👥 팀',
    categories: [
      {
        id: 'building',
        name: '팀빌딩',
        icon: UsersRound,
        path: '/building',
        color: 'from-green-500 to-lime-500'
      },
      {
        id: 'missions',
        name: '팀미션',
        icon: Flag,
        path: '/missions',
        color: 'from-sky-500 to-blue-500'
      },
      {
        id: 'praise',
        name: '찬양',
        icon: Music,
        path: '/praise',
        color: 'from-violet-500 to-purple-500'
      }
    ]
  },
  {
    id: 'preparation',
    label: '📦 준비/물품',
    categories: [
      {
        id: 'preparation',
        name: '준비물',
        icon: Backpack,
        path: '/preparation',
        color: 'from-cyan-500 to-teal-500'
      },
      {
        id: 'items',
        name: '선교물품',
        icon: Gift,
        path: '/items',
        color: 'from-amber-500 to-yellow-500'
      }
    ]
  }
]
