import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function Notices() {
  const { selectedTeam } = useTeam()
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNotices()
  }, [selectedTeam])

  const loadNotices = async () => {
    try {
      setLoading(true)
      const data = await getPosts('notices', selectedTeam)
      setNotices(data)
    } catch (error) {
      console.error('공지사항 로드 실패:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <PageLayout title="공지사항" showTeamTabs={true} actions={<WriteButton category="notices" />}>
        <EmptyState message="데이터를 불러오고 있습니다" />
      </PageLayout>
    )
  }

  return (
    <PageLayout title="공지사항" showTeamTabs={true} actions={<WriteButton category="notices" />}>
      {notices.length > 0 ? (
        <div className="space-y-3">
          {notices.map((notice) => (
            <ListItem
              key={notice.id}
              id={notice.id}
              title={notice.title}
              content={notice.content}
              date={notice.createdAt}
              basePath="/notices"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="작성된 공지사항이 없습니다." />
      )}
    </PageLayout>
  )
}

export default Notices

