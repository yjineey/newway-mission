import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  const Icon = category.icon

  return (
    <Link
      to={category.path}
      className="group"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-200 hover:-translate-y-1">
        {/* 그라디언트 배경 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-200`} />
        
        {/* 아이콘 */}
        <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-200`}>
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        {/* 이름 */}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {category.name}
        </h3>
      </div>
    </Link>
  )
}

export default CategoryCard

