import { useState, useEffect } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import PreparationTabs from '../components/common/PreparationTabs';
import ListItem from '../components/board/ListItem';
import EmptyState from '../components/board/EmptyState';
import { getPosts } from '../services/postService';

function Preparation() {
  const { selectedTeam } = useTeam();
  const [selectedTab, setSelectedTab] = useState('personal');
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, [selectedTeam]);

  const loadItems = async () => {
    try {
      const data = await getPosts('preparation', selectedTeam);
      setItems(data);
    } catch (error) {
      console.error('준비물 로드 실패:', error);
    }
  };

  // 탭에 따라 필터링 (현재는 모든 아이템을 보여주지만, 나중에 카테고리 필드로 필터링 가능)
  const filteredItems = items; // TODO: selectedTab에 따라 필터링

  return (
    <PageLayout title="준비물" showTeamTabs={false}>
      <PreparationTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      {filteredItems.length > 0 ? (
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.createdAt}
              basePath="/preparation"
            />
          ))}
        </div>
      ) : (
        <EmptyState message="등록된 준비물이 없습니다" />
      )}
    </PageLayout>
  );
}

export default Preparation;
