import CategoryCard from './CategoryCard'

function CategoryGrid({ groups }) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.id} className="animate-slide-up">
          {/* 그룹 라벨 (카드 밖) */}
          <h2 className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 md:mb-4 px-1">
            {group.label}
          </h2>

          {/* 그룹 카드 */}
          <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
            {/* 카테고리 그리드 - B2C 실무 배치 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {group.categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryGrid

