import CategoryGrid from '../components/category/CategoryGrid';
import { categoryGroups } from '../data/categories';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { effectiveTeam } = useAuth();

  // 로그인한 사용자(effectiveTeam이 null이 아니면)는 모든 카테고리 표시, 아니면 제한된 카테고리만 표시
  const filteredGroups = effectiveTeam
    ? categoryGroups
    : categoryGroups
        .map((group) => {
          if (group.id === 'essential') {
            // 기본정보: 선교스쿨, 선교일정, 훈련일정, 비상연락망
            return {
              ...group,
              categories: group.categories.filter((cat) =>
                ['school', 'schedule', 'training-schedule', 'contact'].includes(
                  cat.id
                )
              ),
            };
          } else if (group.id === 'preparation') {
            // 준비사항: 준비물, 선교물품, 준비사항
            return {
              ...group,
              categories: group.categories.filter((cat) =>
                ['preparation', 'items', 'checklist'].includes(cat.id)
              ),
            };
          } else {
            // 다른 그룹은 표시하지 않음
            return null;
          }
        })
        .filter((group) => group !== null);

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
