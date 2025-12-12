function EmptyState({ message = '아직 작성된 글이 없습니다.' }) {
  return (
    <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
      <div className="text-center py-12">
      <p className="text-gray-600 dark:text-gray-400">
        {message}
      </p>
      </div>
    </div>
  )
}

export default EmptyState

