import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import BoardEditor from '../components/board/BoardEditor'
import { createPost, uploadFile } from '../services/postService'

function BoardWrite() {
  const navigate = useNavigate()
  const { category } = useParams()
  const { selectedTeam } = useTeam()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 카테고리별 설정
  const categoryConfig = {
    notices: {
      title: '공지사항',
      showTeamTabs: true,
      returnPath: '/notices'
    },
    records: {
      title: '회의록',
      showTeamTabs: true,
      returnPath: '/records'
    },
    'prayer-requests': {
      title: '중보기도',
      showTeamTabs: true,
      returnPath: '/prayer-request'
    }
  }

  const config = categoryConfig[category] || categoryConfig.notices

  // 카테고리 옵션
  const categoryOptions = [
    { value: 'notices', label: '공지사항' },
    { value: 'records', label: '회의록' },
    { value: 'prayer-requests', label: '중보기도' }
  ]

  const handleSubmit = async (formData) => {
    if (isSubmitting) return
    
    try {
      setIsSubmitting(true)

      // 1. 게시글 생성
      const postData = {
        category: formData.category || category,
        team: selectedTeam,
        title: formData.title,
        content: formData.content,
        author: '관리자', // AuthContext에서 가져올 수 있음
      }

      const postId = await createPost(postData)

      // 2. 파일 업로드 (있는 경우)
      if (formData.files && formData.files.length > 0) {
        const uploadPromises = formData.files.map(file => 
          uploadFile(file, postId)
        )
        await Promise.all(uploadPromises)
      }

      // 3. 성공 후 목록으로 이동
      navigate(config.returnPath)
    } catch (error) {
      console.error('게시글 작성 실패:', error)
      alert('게시글 작성에 실패했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout 
      title="글쓰기" 
      showTeamTabs={config.showTeamTabs}
    >
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <BoardEditor 
          title={config.title} 
          onSubmit={handleSubmit}
          initialData={{ title: '', content: '', category }}
          showCategorySelect={true}
          categories={categoryOptions}
          isSubmitting={isSubmitting}
        />
      </div>
    </PageLayout>
  )
}

export default BoardWrite

