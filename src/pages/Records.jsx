import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'

function Records() {
  // TODO: Firebase에서 데이터 불러오기
  const records = []

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
              date={record.date}
              basePath="/records"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="작성된 회의록이 없습니다." />
      )}
    </PageLayout>
  )
}

export default Records

