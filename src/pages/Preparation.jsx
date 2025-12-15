import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function Preparation() {
  const { selectedTeam } = useTeam()
  const [items, setItems] = useState([])

  useEffect(() => {
    loadItems()
  }, [selectedTeam])

  const loadItems = async () => {
    try {
      const data = await getPosts('preparation', selectedTeam)
      setItems(data)
    } catch (error) {
      console.error('준비물 로드 실패:', error)
    }
  }

  return (
    <PageLayout title="준비물" showTeamTabs={true}>
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          팀별 준비물
        </h2>
        
        {items.length > 0 ? (
          <div className="space-y-3">
            {items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                date={item.createdAt}
                basePath="/preparation"
              />
            ))}
          </div>
        ) : (
          <EmptyState message="등록된 준비물이 없습니다" />
        )}
      </div>
    </PageLayout>
  )
}

export default Preparation
