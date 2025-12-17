import CategoryGrid from '../components/category/CategoryGrid';
import { categoryGroups } from '../data/categories';

function Home() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 카테고리 그리드 */}
        <div className="animate-fade-in">
          <CategoryGrid groups={categoryGroups} />
        </div>

        {/* 하단 저작권 (모바일만) */}
        <div className="md:hidden mt-12 pt-8 border-t border-gray-400 dark:border-[#333333]">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 뉴웨이교회
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
