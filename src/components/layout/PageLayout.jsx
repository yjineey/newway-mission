import TeamTabs from '../common/TeamTabs'

function PageLayout({ title, children, actions, showTeamTabs = false }) {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 헤더 */}
        <div className="mb-8 flex items-center justify-between animate-slide-up">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          {actions && (
            <div className="flex gap-2">
              {actions}
            </div>
          )}
        </div>

        {/* 팀 탭 (필요한 페이지만) */}
        {showTeamTabs && <TeamTabs />}

        {/* 컨텐츠 */}
        <div className="animate-fade-in">
          {children}
        </div>

        {/* 하단 저작권 (모바일만) */}
        <div className="md:hidden mt-12 pt-8 border-t border-gray-400 dark:border-[#333333]">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 뉴웨이교회
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageLayout

