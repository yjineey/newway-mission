import PageLayout from '../components/layout/PageLayout'

function Prayer() {
  return (
    <PageLayout title="기도훈련">
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            기도훈련 컨텐츠가 여기에 표시됩니다.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Prayer

