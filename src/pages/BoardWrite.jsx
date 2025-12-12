import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import BoardEditor from '../components/board/BoardEditor'

function BoardWrite() {
  const navigate = useNavigate()
  const { category } = useParams()

  // 카테고리별 설정 (리스트 5개만)
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
    praise: {
      title: '찬양',
      showTeamTabs: true,
      returnPath: '/praise'
    },
    preparation: {
      title: '준비물',
      showTeamTabs: true,
      returnPath: '/preparation'
    },
    items: {
      title: '선교물품',
      showTeamTabs: true,
      returnPath: '/items'
    }
  }

  const config = categoryConfig[category] || categoryConfig.notices

  // 카테고리 옵션 (리스트 5개)
  const categoryOptions = [
    { value: 'notices', label: '공지사항' },
    { value: 'records', label: '회의록' },
    { value: 'praise', label: '찬양' },
    { value: 'preparation', label: '준비물' },
    { value: 'items', label: '선교물품' },
  ]

  const handleSubmit = async (formData) => {
    console.log(`${config.title} 저장:`, formData)
    // TODO: Firebase에 저장
    setTimeout(() => {
      navigate(config.returnPath)
    }, 500)
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
        />
      </div>
    </PageLayout>
  )
}

export default BoardWrite

