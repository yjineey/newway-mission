import PageLayout from '../components/layout/PageLayout'

function Contact() {
  return (
    <PageLayout title="비상연락망">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6 md:p-8">
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            비상연락망 컨텐츠가 여기에 표시됩니다.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Contact

