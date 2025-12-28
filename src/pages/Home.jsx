import CategoryGrid from '../components/category/CategoryGrid';
import { categoryGroups } from '../data/categories';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { effectiveTeam } = useAuth();

  // effectiveTeam이 null이면 공동체 그룹 전체 제외, 나머지는 모두 표시
  const filteredGroups =
    effectiveTeam === null
      ? categoryGroups.filter((group) => group.id !== 'team') // null일 때 공동체 그룹 제외
      : categoryGroups; // effectiveTeam이 있으면 모든 그룹 표시

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 카테고리 그리드 */}
        <div className="animate-fade-in">
          <CategoryGrid groups={filteredGroups} />
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
