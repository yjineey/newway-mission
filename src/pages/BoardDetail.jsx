import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Edit, Trash2, Download, Calendar } from 'lucide-react'
import { formatDateKorean } from '../utils/dateFormat'
import PageLayout from '../components/layout/PageLayout'
import { useAuth } from '../context/AuthContext'
import { getPost, deletePost } from '../services/postService'

function BoardDetail() {
  const navigate = useNavigate()
  const { category, id } = useParams()
  const { isAdmin } = useAuth()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  // 카테고리별 설정
  const categoryConfig = {
    notices: { title: '공지사항', showTeamTabs: true, listPath: '/notices' },
    records: { title: '회의록', showTeamTabs: true, listPath: '/records' },
    praise: { title: '찬양', showTeamTabs: true, listPath: '/praise' },
    preparation: { title: '준비물', showTeamTabs: true, listPath: '/preparation' },
    items: { title: '선교물품', showTeamTabs: true, listPath: '/items' },
  }

  const config = categoryConfig[category] || categoryConfig.notices

  useEffect(() => {
    loadPost()
  }, [id])

  const loadPost = async () => {
    try {
      setLoading(true)
      const data = await getPost(id)
      setPost(data)
    } catch (error) {
      console.error('게시글 로드 실패:', error)
      alert('게시글을 불러올 수 없습니다.')
      navigate(config.listPath)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = () => {
    navigate(`/edit/${category}/${id}`)
  }

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return

    try {
      await deletePost(id)
      navigate(config.listPath)
    } catch (error) {
      console.error('게시글 삭제 실패:', error)
      alert('게시글 삭제에 실패했습니다.')
    }
  }

  if (loading) {
    return (
      <PageLayout 
        title={config.title}
        showTeamTabs={config.showTeamTabs}
      >
        <EmptyState message="데이터를 불러오고 있습니다" />
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout 
        title={config.title}
        showTeamTabs={config.showTeamTabs}
      >
        <EmptyState message="게시글을 찾을 수 없습니다" />
      </PageLayout>
    )
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
            <span>{post.createdAt && formatDateKorean(post.createdAt)}</span>
          </div>
          {post.author && (
            <>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
            </>
          )}
        </div>

        {/* 내용 */}
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-gray-900 dark:text-white whitespace-pre-wrap leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* 첨부파일 */}
        {post.attachments && post.attachments.length > 0 && (
          <div className="pt-6 border-t border-gray-200 dark:border-[#333333]">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              첨부파일 ({post.attachments.length})
            </h3>
            <div className="space-y-2">
              {post.attachments.map((file, index) => (
                <a
                  key={index}
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg border border-gray-200 dark:border-[#333333] hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Download className="w-4 h-4 text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-shrink-0" />
                    <span className="text-sm text-gray-900 dark:text-white truncate">
                      {file.name}
                    </span>
                    {file.size && (
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        ({(file.size / 1024).toFixed(1)}KB)
                      </span>
                    )}
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

