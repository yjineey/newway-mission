import { useNavigate, useParams } from 'react-router-dom'
import { Edit, Trash2, Download, Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import PageLayout from '../components/layout/PageLayout'
import { useAuth } from '../context/AuthContext'

function BoardDetail() {
  const navigate = useNavigate()
  const { category, id } = useParams()
  const { isAdmin } = useAuth()

  // 카테고리별 설정
  const categoryConfig = {
    notices: { title: '공지사항', showTeamTabs: true, listPath: '/notices' },
    records: { title: '회의록', showTeamTabs: true, listPath: '/records' },
    praise: { title: '찬양', showTeamTabs: true, listPath: '/praise' },
    preparation: { title: '준비물', showTeamTabs: true, listPath: '/preparation' },
    items: { title: '선교물품', showTeamTabs: true, listPath: '/items' },
  }

  const config = categoryConfig[category] || categoryConfig.notices

  // TODO: Firebase에서 데이터 불러오기
  const post = {
    id: id,
    title: '샘플 게시글 제목입니다',
    content: '게시글 내용이 여기에 표시됩니다.\n\n여러 줄의 내용을 작성할 수 있습니다.',
    author: '관리자',
    date: new Date('2025-01-10'),
    files: [
      { name: '첨부파일1.pdf', size: 1024 },
      { name: '이미지.jpg', size: 2048 },
    ]
  }

  const handleEdit = () => {
    navigate(`/edit/${category}/${id}`)
  }

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      // TODO: Firebase에서 삭제
      navigate(config.listPath)
    }
  }

  return (
    <PageLayout 
      title={config.title}
      showTeamTabs={config.showTeamTabs}
      actions={
        isAdmin && (
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Edit className="w-4 h-4" />
              <span>편집</span>
            </button>
            <button
              onClick={handleDelete}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 border border-red-400 dark:border-red-600 text-white font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Trash2 className="w-4 h-4" />
              <span>삭제</span>
            </button>
          </div>
        )
      }
    >
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        {/* 제목 */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h2>

        {/* 메타 정보 */}
        <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200 dark:border-[#333333]">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{format(post.date, 'yyyy년 MM월 dd일', { locale: ko })}</span>
          </div>
          <span className="text-gray-400 dark:text-gray-600">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
        </div>

        {/* 내용 */}
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-gray-900 dark:text-white whitespace-pre-wrap leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* 첨부파일 */}
        {post.files && post.files.length > 0 && (
          <div className="pt-6 border-t border-gray-200 dark:border-[#333333]">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              첨부파일 ({post.files.length})
            </h3>
            <div className="space-y-2">
              {post.files.map((file, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg border border-gray-200 dark:border-[#333333] hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Download className="w-4 h-4 text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-white truncate">
                      {file.name}
                    </span>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      ({(file.size / 1024).toFixed(1)}KB)
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}

export default BoardDetail

