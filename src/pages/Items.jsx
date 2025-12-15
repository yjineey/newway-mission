import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function Items() {
  const { selectedTeam } = useTeam()
  const [items, setItems] = useState([])

  useEffect(() => {
    loadItems()
  }, [selectedTeam])

  const loadItems = async () => {
    try {
      const data = await getPosts('items', selectedTeam)
      setItems(data)
    } catch (error) {
      console.error('선교물품 로드 실패:', error)
    }
  }

  return (
    <PageLayout title="선교물품" showTeamTabs={true}>
      {items.length > 0 ? (
        <div className="space-y-3">
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.createdAt}
              basePath="/items"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="등록된 선교물품이 없습니다" />
      )}
    </PageLayout>
  )
}

export default Items

