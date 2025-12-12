import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function Praise() {
  const { selectedTeam } = useTeam()
  const [praiseList, setPraiseList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPraise()
  }, [selectedTeam])

  const loadPraise = async () => {
    try {
      setLoading(true)
      const data = await getPosts('praise', selectedTeam)
      setPraiseList(data)
    } catch (error) {
      console.error('찬양 로드 실패:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <PageLayout title="찬양" showTeamTabs={true} actions={<WriteButton category="praise" />}>
        <EmptyState message="데이터를 불러오고 있습니다" />
      </PageLayout>
    )
  }

  return (
    <PageLayout title="찬양" showTeamTabs={true} actions={<WriteButton category="praise" />}>
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
        <EmptyState message="등록된 찬양이 없습니다." />
      )}
    </PageLayout>
  )
}

export default Praise

