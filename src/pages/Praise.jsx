import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'

function Praise() {
  // TODO: Firebase에서 데이터 불러오기
  const praiseList = []

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
              date={item.date}
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

