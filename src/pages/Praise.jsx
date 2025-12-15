import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function Praise() {
  const { selectedTeam } = useTeam()
  const [praiseList, setPraiseList] = useState([])

  useEffect(() => {
    loadPraise()
  }, [selectedTeam])

  const loadPraise = async () => {
    try {
      const data = await getPosts('praise', selectedTeam)
      setPraiseList(data)
    } catch (error) {
      console.error('찬양 로드 실패:', error)
    }
  }

  return (
    <PageLayout title="찬양" showTeamTabs={true}>
      {praiseList.length > 0 ? (
        <div className="space-y-3">
          {praiseList.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.createdAt}
              basePath="/praise"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="등록된 찬양이 없습니다" />
      )}
    </PageLayout>
  )
}

export default Praise

