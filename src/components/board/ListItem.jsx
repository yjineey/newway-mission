import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { formatDate } from '../../utils/dateFormat'

function ListItem({ id, title, content, date, basePath }) {
  return (
    <Link
      to={`${basePath}/${id}`}
      className="block bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333] p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* 제목 */}
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
            {title}
          </h3>
          
          {/* 내용 미리보기 */}
          {content && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {content}
            </p>
          )}
          
          {/* 날짜 */}
          {date && (
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {formatDate(date)}
            </p>
          )}
        </div>

        {/* 화살표 아이콘 */}
        <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1" />
      </div>
    </Link>
  )
}

export default ListItem

