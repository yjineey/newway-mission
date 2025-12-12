import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  const Icon = category.icon

  return (
    <Link
      to={category.path}
      className="group flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 active:scale-95"
    >
      {/* 아이콘 */}
      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200`}>
        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
      </div>

      {/* 이름 */}
      <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
        {category.name}
      </h3>
    </Link>
  )
}

export default CategoryCard

