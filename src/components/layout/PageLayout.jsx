import TeamTabs from '../common/TeamTabs'
import { useAuth } from '../../context/AuthContext'

function PageLayout({ title, children, actions, showTeamTabs = false, showSample = false }) {
  const { isAdmin } = useAuth()
  
  // 관리자이고 showTeamTabs가 true일 때만 탭 표시
  const shouldShowTabs = showTeamTabs && isAdmin

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 헤더 */}
        <div className="mb-8 flex items-center justify-between animate-slide-up">
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            {showSample && (
              <div className="px-2 py-1 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded text-xs inline-block">
                <p className="text-xs text-red-800 dark:text-red-200 font-medium">
                  샘플
                </p>
              </div>
            )}
          </div>
          {actions && (
            <div className="flex gap-2">
              {actions}
            </div>
          )}
        </div>

        {/* 팀 탭 (관리자이고 필요한 페이지만) */}
        {shouldShowTabs && <TeamTabs />}

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

