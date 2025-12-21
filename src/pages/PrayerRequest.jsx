import { useState, useEffect } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import WriteButton from '../components/board/WriteButton';
import ListItem from '../components/board/ListItem';
import EmptyState from '../components/board/EmptyState';
import { getPosts } from '../services/postService';
import { ChevronDown } from 'lucide-react';

function PrayerRequest() {
  const { selectedTeam } = useTeam();
  const [allPrayerRequests, setAllPrayerRequests] = useState([]);
  const [filteredPrayerRequests, setFilteredPrayerRequests] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState('요르단을 위한 기도');

  // 요르단 팀원 목록 (가나다순)
  const categories = [
    '요르단을 위한 기도',
    '위사은',
    '양진',
    '김난영',
    '김주은',
    '이종철',
    '임지원',
    '진민하',
    '최정원',
  ];

  // 요르단 팀원 역할 정보 및 공통 기도 설명 (Building.jsx 기반, 정 역할과 부 역할 모두 포함)
  const jordanRoles = {
    '요르단을 위한 기도': [
      '요르단을 위한, 선교사님을 위한, 선교 사역을 위한, 팀을 위한 기도',
    ],
    위사은: ['팀장'],
    양진: ['부팀장', '라스트키퍼'],
    김난영: ['서기', '타임키퍼', '중보자(부)', '미디어(부)'],
    김주은: ['중보자', '서기(부)', '미디어(부)'],
    이종철: ['예배자', '미디어(부)'],
    임지원: ['미디어', '예배자(부)'],
    진민하: ['회계', '하스피(부)'],
    최정원: ['하스피', '중보자(부)', '라스트키퍼(부)'],
  };

  useEffect(() => {
    loadPrayerRequests();
  }, [selectedTeam]);

  useEffect(() => {
    filterPrayerRequests();
  }, [selectedCategory, allPrayerRequests]);

  const loadPrayerRequests = async () => {
    try {
      const data = await getPosts('prayer-requests', selectedTeam);
      setAllPrayerRequests(data);
    } catch (error) {
      console.error('중보기도 로드 실패:', error);
    }
  };

  const filterPrayerRequests = () => {
    if (selectedCategory === '요르단을 위한 기도') {
      // 요르단을 위한 기도 + 모든 개인별 기도제목 합쳐서 표시
      const jordanPrayers = allPrayerRequests.filter(
        (request) =>
          !request.author ||
          request.author === '공통' ||
          request.author === '요르단을 위한 기도'
      );
      const personalPrayers = allPrayerRequests.filter(
        (request) =>
          request.author &&
          request.author !== '공통' &&
          request.author !== '요르단을 위한 기도' &&
          categories.slice(1).includes(request.author)
      );
      setFilteredPrayerRequests([...jordanPrayers, ...personalPrayers]);
    } else {
      // 선택한 개인별 기도제목만 표시
      const filtered = allPrayerRequests.filter(
        (request) => request.author === selectedCategory
      );
      setFilteredPrayerRequests(filtered);
    }
  };

  return (
    <PageLayout
      title="중보기도"
      showTeamTabs={true}
      actions={<WriteButton category="prayer-requests" />}
    >
      {selectedTeam === 'jordan' ? (
        <>
          {/* 셀렉트 박스 */}
          <div className="mb-6 relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] text-sm font-medium text-gray-900 dark:text-white appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
              style={{ wordBreak: 'keep-all' }}
            >
              <option value="요르단을 위한 기도">요르단을 위한 기도</option>
              {categories.slice(1).map((category) => {
                const roles = jordanRoles[category];
                const mainRole = roles
                  ? roles.filter((role) => !role.includes('(부)')).join(', ')
                  : '';
                return (
                  <option key={category} value={category}>
                    {category}
                    {mainRole && ` (${mainRole})`}
                  </option>
                );
              })}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* 선택된 카테고리의 기도제목 목록 */}
          {filteredPrayerRequests.length > 0 ? (
            <div className="space-y-3">
              {filteredPrayerRequests.map((request) => (
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
            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
              <h3
                className="text-base font-semibold text-gray-900 dark:text-white mb-2"
                style={{ wordBreak: 'keep-all' }}
              >
                {selectedCategory}
              </h3>
              {jordanRoles[selectedCategory] &&
                jordanRoles[selectedCategory].length > 0 && (
                  <p
                    className="text-sm text-gray-600 dark:text-gray-400"
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {selectedCategory === '요르단을 위한 기도'
                      ? jordanRoles[selectedCategory][0]
                      : jordanRoles[selectedCategory]
                          .map((role) => role.replace('(부)', ''))
                          .join(', ')}
                  </p>
                )}
            </div>
          )}
        </>
      ) : (
        <>
          {allPrayerRequests.length > 0 ? (
            <div className="space-y-3">
              {allPrayerRequests.map((request) => (
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
        </>
      )}
    </PageLayout>
  );
}

export default PrayerRequest;
