import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <Link
      to={category.path}
      className="group flex flex-col items-center gap-3 p-5 rounded-xl transition-all duration-200 active:scale-95"
    >
      {/* Lucide 아이콘 */}
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700/50 rounded-2xl flex items-center justify-center transition-all duration-200">
        <Icon
          className="w-8 h-8 text-gray-600 dark:text-gray-400"
          strokeWidth={2}
        />
      </div>

      {/* 카테고리명 */}
      <h3 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 text-center transition-colors leading-tight">
        {category.name}
      </h3>
    </Link>
  );
}

export default CategoryCard;
