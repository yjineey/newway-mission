import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'

function Items() {
  // TODO: Firebase에서 데이터 불러오기
  const items = []

  return (
    <PageLayout title="선교물품" showTeamTabs={true} actions={<WriteButton category="items" />}>
      {items.length > 0 ? (
        <div className="space-y-3">
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
              basePath="/items"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="등록된 선교물품이 없습니다." />
      )}
    </PageLayout>
  )
}

export default Items

