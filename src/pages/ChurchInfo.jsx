import PageLayout from '../components/layout/PageLayout'

function ChurchInfo() {
  return (
    <PageLayout title="교회 소개">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6 md:p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              뉴웨이교회
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              뉴웨이교회는 하나님의 말씀 위에 세워진 교회로, 선교와 전도에 힘쓰고 있습니다.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 뉴웨이교회. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default ChurchInfo

