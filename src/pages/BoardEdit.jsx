import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import BoardEditor from '../components/board/BoardEditor'

function BoardEdit() {
  const navigate = useNavigate()
  const { category, id } = useParams()

  // 카테고리별 설정
  const categoryConfig = {
    notices: { title: '공지사항', showTeamTabs: true, returnPath: '/notices' },
    records: { title: '회의록', showTeamTabs: true, returnPath: '/records' },
    praise: { title: '찬양', showTeamTabs: true, returnPath: '/praise' },
    preparation: { title: '준비물', showTeamTabs: true, returnPath: '/preparation' },
    items: { title: '선교물품', showTeamTabs: true, returnPath: '/items' },
  }

  const config = categoryConfig[category] || categoryConfig.notices

  // TODO: Firebase에서 기존 데이터 불러오기
  const initialData = {
    title: '기존 게시글 제목',
    content: '기존 게시글 내용입니다.',
    category: category
  }

  const handleSubmit = async (formData) => {
    console.log(`${config.title} 수정:`, formData)
    // TODO: Firebase에 업데이트
    setTimeout(() => {
      navigate(`/${category}/${id}`)
    }, 500)
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
          initialData={initialData}
          showCategorySelect={false}
        />
      </div>
    </PageLayout>
  )
}

export default BoardEdit

