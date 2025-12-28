import { useState, useEffect } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import PreparationTabs from '../components/common/PreparationTabs';
import EmptyState from '../components/board/EmptyState';
import { getPosts } from '../services/postService';

function Preparation() {
  const { selectedTeam } = useTeam();
  const [selectedTab, setSelectedTab] = useState('personal');

  // 샘플 데이터 (초기값으로 사용)
  const getSampleData = () => [
    {
      id: 'sample-1',
      title: '필수 체크리스트',
      content: `• 여권 및 비자 (유효기간 확인)
• 항공권 (출발/귀국)
• 여행자 보험 증서
• 현지 통화 및 환전
• 신용카드 및 현금
• 여권 사본 (별도 보관)
• 비상연락처 목록
• 개인 의약품 (처방전 포함)`,
      createdAt: new Date('2024-12-15'),
      category: 'personal',
      team: selectedTeam || 'jordan',
    },
    {
      id: 'sample-2',
      title: '의류 및 용품',
      content: `• 여름옷
• 긴팔 옷
• 편한 신발
• 샌들
• 양말
• 속옷
• 수건
• 개인 위생용품
• 선크림 및 모자`,
      createdAt: new Date('2024-12-14'),
      category: 'personal',
      team: selectedTeam || 'jordan',
    },
    {
      id: 'sample-3',
      title: '전자기기',
      content: `• 스마트폰 및 충전기
• 어댑터 (현지 전압 확인)
• 보조배터리
• 카메라 (선택)
• 노트북 (필요시)
• 이어폰
• 멀티탭`,
      createdAt: new Date('2024-12-13'),
      category: 'personal',
      team: selectedTeam || 'jordan',
    },
    {
      id: 'sample-4',
      title: '선교활동용',
      content: `• 성경책 (한국어/아랍어)
• 찬양집
• 선교 자료
• 현지어 학습 자료
• 선물용 소품
• 카드 및 편지지`,
      createdAt: new Date('2024-12-12'),
      category: 'shared',
      team: selectedTeam || 'jordan',
    },
    {
      id: 'sample-5',
      title: '생활용품',
      content: `• 물티슈
• 휴지
• 세제
• 샴푸/바디워시
• 드라이기 (공용)
• 다리미 (필요시)
• 빨래줄 및 집게`,
      createdAt: new Date('2024-12-11'),
      category: 'shared',
      team: selectedTeam || 'jordan',
    },
  ];

  const [items, setItems] = useState(getSampleData());

  useEffect(() => {
    loadItems();
  }, [selectedTeam]);

  const loadItems = async () => {
    try {
      const data = await getPosts('preparation', selectedTeam);
      // Firebase 데이터가 있으면 사용, 없으면 샘플 데이터 유지
      if (data.length > 0) {
        setItems(data);
      }
    } catch (error) {
      console.error('준비물 로드 실패:', error);
      // 에러 발생 시 샘플 데이터 유지
    }
  };

  // 탭에 따라 필터링
  const filteredItems = items.filter((item) => {
    if (selectedTab === 'personal') {
      return item.category === 'personal';
    } else if (selectedTab === 'shared') {
      return item.category === 'shared';
    }
    return true;
  });

  // 샘플 데이터 사용 여부 확인
  const isUsingSample = items.length > 0 && items[0]?.id?.startsWith('sample');

  return (
    <PageLayout title="준비물" showTeamTabs={false} showSample={isUsingSample}>
      <PreparationTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      {filteredItems.length > 0 ? (
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-6"
            >
              <h3 className="text-base font-bold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <div
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                style={{ wordBreak: 'keep-all' }}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState message="등록된 준비물이 없습니다" />
      )}
    </PageLayout>
  );
}

export default Preparation;
