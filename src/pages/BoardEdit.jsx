import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import BoardEditor from '../components/board/BoardEditor'
import { getPost, updatePost } from '../services/postService'

function BoardEdit() {
  const navigate = useNavigate()
  const { category, id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 카테고리별 설정
  const categoryConfig = {
    notices: { title: '공지사항', showTeamTabs: true, returnPath: `/notices/${id}` },
    records: { title: '회의록', showTeamTabs: true, returnPath: `/records/${id}` },
    praise: { title: '찬양', showTeamTabs: true, returnPath: `/praise/${id}` },
    preparation: { title: '준비물', showTeamTabs: true, returnPath: `/preparation/${id}` },
    items: { title: '선교물품', showTeamTabs: true, returnPath: `/items/${id}` },
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
      navigate(`/${category}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    if (isSubmitting) return

    try {
      setIsSubmitting(true)

      // 게시글 업데이트
      const updateData = {
        title: formData.title,
        content: formData.content,
      }

      await updatePost(id, updateData)

      // 성공 후 상세페이지로 이동
      navigate(config.returnPath)
    } catch (error) {
      console.error('게시글 수정 실패:', error)
      alert('게시글 수정에 실패했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <PageLayout 
        title={`${config.title} 수정`}
        showTeamTabs={config.showTeamTabs}
      >
        <EmptyState message="데이터를 불러오고 있습니다" />
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout 
        title={`${config.title} 수정`}
        showTeamTabs={config.showTeamTabs}
      >
        <EmptyState message="게시글을 찾을 수 없습니다" />
      </PageLayout>
    )
  }

  return (
    <PageLayout 
      title={`${config.title} 수정`}
      showTeamTabs={config.showTeamTabs}
    >
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <BoardEditor 
          title={config.title} 
          onSubmit={handleSubmit}
          initialData={{
            title: post.title,
            content: post.content,
            category: post.category
          }}
          showCategorySelect={false}
          isSubmitting={isSubmitting}
        />
      </div>
    </PageLayout>
  )
}

export default BoardEdit

