import { useState, useEffect } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import WriteButton from '../components/board/WriteButton';
import ListItem from '../components/board/ListItem';
import EmptyState from '../components/board/EmptyState';
import { getPosts } from '../services/postService';

function PrayerRequest() {
  const { selectedTeam } = useTeam();
  const [prayerRequests, setPrayerRequests] = useState([]);

  useEffect(() => {
    loadPrayerRequests();
  }, [selectedTeam]);

  const loadPrayerRequests = async () => {
    try {
      const data = await getPosts('prayer-requests', selectedTeam);
      setPrayerRequests(data);
    } catch (error) {
      console.error('중보기도 로드 실패:', error);
    }
  };

  return (
    <PageLayout
      title="중보기도"
      showTeamTabs={true}
      actions={<WriteButton category="prayer-requests" />}
    >
      {prayerRequests.length > 0 ? (
        <div className="space-y-3">
          {prayerRequests.map((request) => (
            <ListItem
              key={request.id}
              id={request.id}
              title={request.title}
              content={request.content}
              date={request.createdAt}
              basePath="/prayer-request"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="작성된 기도제목이 없습니다" />
      )}
    </PageLayout>
  );
}

export default PrayerRequest;
