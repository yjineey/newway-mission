import { useState, useEffect } from 'react'
import { useTeam } from '../context/TeamContext'
import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'
import { getPosts } from '../services/postService'

function Records() {
  const { selectedTeam } = useTeam()
  const [records, setRecords] = useState([])

  useEffect(() => {
    loadRecords()
  }, [selectedTeam])

  const loadRecords = async () => {
    try {
      const data = await getPosts('records', selectedTeam)
      setRecords(data)
    } catch (error) {
      console.error('회의록 로드 실패:', error)
    }
  }

  return (
    <PageLayout title="회의록" showTeamTabs={true} actions={<WriteButton category="records" />}>
      {records.length > 0 ? (
        <div className="space-y-3">
          {records.map((record) => (
            <ListItem
              key={record.id}
              id={record.id}
              title={record.title}
              content={record.content}
              date={record.createdAt}
              basePath="/records"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="작성된 회의록이 없습니다" />
      )}
    </PageLayout>
  )
}

export default Records

