import PageLayout from '../components/layout/PageLayout'
import WriteButton from '../components/board/WriteButton'
import ListItem from '../components/board/ListItem'
import EmptyState from '../components/board/EmptyState'

function Notices() {
  // TODO: Firebase에서 데이터 불러오기
  const notices = [
    {
      id: '1',
      title: '첫 번째 공지사항입니다',
      content: '공지사항 내용 미리보기입니다. 자세한 내용은 클릭해서 확인하세요.',
      date: new Date('2025-01-10')
    },
    {
      id: '2',
      title: '두 번째 공지사항',
      content: '중요한 공지사항입니다.',
      date: new Date('2025-01-09')
    },
  ]

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
              date={notice.date}
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

