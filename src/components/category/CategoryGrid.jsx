import CategoryCard from './CategoryCard'

function CategoryGrid({ groups }) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.id} className="animate-slide-up">
          {/* 그룹 라벨 */}
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 px-1">
            {group.label}
          </h2>

          {/* 카테고리 그리드 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryGrid

