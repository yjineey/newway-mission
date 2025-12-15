import CategoryCard from './CategoryCard';

function CategoryGrid({ groups }) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.id} className="animate-slide-up">
          {/* 그룹 라벨 (배민 스타일) */}
          <h2 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 px-1">
            {group.label}
          </h2>

          {/* 카테고리 그리드 - 모바일/데스크탑 모두 4열 */}
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {group.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;
