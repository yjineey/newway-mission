import { useState } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';

function Items() {
  const { selectedTeam } = useTeam();
  const [groupBy, setGroupBy] = useState('family'); // 'family', 'category'

  // 샘플 데이터
  const sampleItems = [
    {
      id: 1,
      name: '성경책 (한국어)',
      category: '선교활동',
      family: '김선생님',
      quantity: 5,
      unit: '권',
      description: '한국어 성경책',
    },
    {
      id: 2,
      name: '성경책 (아랍어)',
      category: '선교활동',
      family: '김선생님',
      quantity: 10,
      unit: '권',
      description: '아랍어 성경책',
    },
    {
      id: 3,
      name: '찬양집',
      category: '선교활동',
      family: '이선생님',
      quantity: 20,
      unit: '권',
      description: '찬양집',
    },
    {
      id: 4,
      name: '물티슈',
      category: '생활용품',
      family: '김선생님',
      quantity: 30,
      unit: '팩',
      description: '물티슈',
    },
    {
      id: 5,
      name: '세제',
      category: '생활용품',
      family: '박선생님',
      quantity: 15,
      unit: '병',
      description: '세제',
    },
    {
      id: 6,
      name: '선물용 소품',
      category: '선교활동',
      family: '이선생님',
      quantity: 50,
      unit: '개',
      description: '선물용 소품',
    },
  ];

  // 그룹별로 데이터 정리
  const groupedData = () => {
    if (groupBy === 'family') {
      const grouped = {};
      sampleItems.forEach((item) => {
        if (!grouped[item.family]) {
          grouped[item.family] = [];
        }
        grouped[item.family].push(item);
      });
      return grouped;
    } else {
      const grouped = {};
      sampleItems.forEach((item) => {
        if (!grouped[item.category]) {
          grouped[item.category] = [];
        }
        grouped[item.category].push(item);
      });
      return grouped;
    }
  };

  const grouped = groupedData();

  return (
    <PageLayout title="선교물품" showTeamTabs={true} showSample={true}>
      {selectedTeam === 'jordan' ? (
        <>
          {/* 그룹 선택 */}
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setGroupBy('family')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                groupBy === 'family'
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300'
              }`}
            >
              가정별
            </button>
            <button
              onClick={() => setGroupBy('category')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                groupBy === 'category'
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300'
              }`}
            >
              품목별
            </button>
          </div>

          {/* 테이블 뷰 */}
          <div className="space-y-6">
            {Object.entries(grouped).map(([groupName, items]) => (
              <div
                key={groupName}
                className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 dark:bg-[#2a2a2a] border-b border-gray-200 dark:border-[#333333]">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {groupName}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table
                    className="w-full"
                    style={{ wordBreak: 'keep-all', tableLayout: 'fixed' }}
                  >
                    <colgroup>
                      <col style={{ width: '40%' }} />
                      {groupBy === 'family' && <col style={{ width: '15%' }} />}
                      {groupBy === 'category' && (
                        <col style={{ width: '15%' }} />
                      )}
                      <col style={{ width: '15%' }} />
                      <col style={{ width: '25%' }} />
                    </colgroup>
                    <thead>
                      <tr className="bg-gray-50 dark:bg-[#2a2a2a]">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333] whitespace-nowrap">
                          물품명
                        </th>
                        {groupBy === 'family' && (
                          <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333] whitespace-nowrap">
                            품목
                          </th>
                        )}
                        {groupBy === 'category' && (
                          <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333] whitespace-nowrap">
                            선생님
                          </th>
                        )}
                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333] whitespace-nowrap">
                          갯수
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333] whitespace-nowrap">
                          비고
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items
                        .sort((a, b) => b.quantity - a.quantity)
                        .map((item) => (
                          <tr
                            key={item.id}
                            className="border-b border-gray-200 dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
                          >
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-medium whitespace-nowrap">
                              {item.name}
                            </td>
                            {groupBy === 'family' && (
                              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                                {item.category}
                              </td>
                            )}
                            {groupBy === 'category' && (
                              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                                {item.family}
                              </td>
                            )}
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-bold text-center whitespace-nowrap">
                              {item.quantity}
                              {item.unit}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          등록된 선교물품이 없습니다
        </div>
      )}
    </PageLayout>
  );
}

export default Items;
