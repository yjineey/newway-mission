import TeamSelector from '../components/team/TeamSelector'
import CategoryGrid from '../components/category/CategoryGrid'
import { categoryGroups } from '../data/categories'

function Home({ selectedTeam, onTeamChange }) {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 팀 선택 */}
        <div className="mb-12 animate-fade-in">
          <TeamSelector 
            selectedTeam={selectedTeam} 
            onTeamChange={onTeamChange} 
          />
        </div>

        {/* 카테고리 그리드 */}
        <div className="animate-fade-in">
          <CategoryGrid groups={categoryGroups} />
        </div>

        {/* 하단 저작권 */}
        <div className="mt-16 py-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 뉴웨이교회. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

