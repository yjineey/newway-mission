import { useState } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';

function Praise() {
  const { selectedTeam } = useTeam();

  // 찬양 데이터
  const praiseList = [
    {
      id: 1,
      title: '온 성도와 천사 | 수원하나교회 | 아랍어',
      youtubeId: 'tQ4e51h76ho',
      lyrics: [
        {
          arabic: 'يجثو أمام عرشك ألوف وربوات',
          pronunciation: '야즈두 아마마 아르쉬카 울루프 와라바와트',
          korean: '온 성도와 천사 보좌에 경배해',
        },
        {
          arabic: 'ويطرح الشيوخ أكاليلهم لك ويهتفون',
          pronunciation: '와야트라후 쉬유크 아칼리라훔 라카 와야흐티푼',
          korean: '모든 장로들 면류관을 드리네 어린양께',
        },
        {
          arabic: 'أنت وحدك مستحق أنت وحدك مستحق',
          pronunciation: '안타 와흐다카 무쓰타히쿤 안타 와흐다카 무쓰타히쿤',
          korean: '주는 존귀하신 분 주는 존귀하신 분',
        },
        {
          arabic: 'فمنك كل الاشياء وبك كل الاشياء ولمجدك',
          pronunciation: '파민카 쿨룰 아쉬야 와비카 쿨룰 아쉬야아 와리마즈드카',
          korean: '만물 주께 나와 주께 돌아가니 영광 받으소서',
        },
        {
          arabic: 'نرفع تسبيحنا ليللا و نهار',
          pronunciation: '나르파우 타쓰비하나 레일라 와나하르',
          korean: '주야로 기도의 향 올라가네',
        },
      ],
    },
    {
      id: 2,
      title: '온 성도와 천사 | 뉴웨이교회 | 아랍어',
      youtubeId: 'miM8ZQOB4bA',
      lyrics: [
        {
          arabic: 'يجثو أمام عرشك ألوف وربوات',
          pronunciation: '야즈두 아마마 아르쉬카 울루프 와라바와트',
          korean: '온 성도와 천사 보좌에 경배해',
        },
        {
          arabic: 'ويطرح الشيوخ أكاليلهم لك ويهتفون',
          pronunciation: '와야트라후 쉬유크 아칼리라훔 라카 와야흐티푼',
          korean: '모든 장로들 면류관을 드리네 어린양께',
        },
        {
          arabic: 'أنت وحدك مستحق أنت وحدك مستحق',
          pronunciation: '안타 와흐다카 무쓰타히쿤 안타 와흐다카 무쓰타히쿤',
          korean: '주는 존귀하신 분 주는 존귀하신 분',
        },
        {
          arabic: 'فمنك كل الاشياء وبك كل الاشياء ولمجدك',
          pronunciation: '파민카 쿨룰 아쉬야 와비카 쿨룰 아쉬야아 와리마즈드카',
          korean: '만물 주께 나와 주께 돌아가니 영광 받으소서',
        },
        {
          arabic: 'نرفع تسبيحنا ليللا و نهار',
          pronunciation: '나르파우 타쓰비하나 레일라 와나하르',
          korean: '주야로 기도의 향 올라가네',
        },
      ],
    },
  ];

  const [selectedPraise, setSelectedPraise] = useState(praiseList[0]);

  return (
    <PageLayout title="찬양" showTeamTabs={true}>
      {selectedTeam === 'jordan' ? (
        <>
          {/* 찬양 리스트 */}
          <div className="mb-6 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] overflow-hidden">
            <div className="divide-y dark:divide-gray-700">
              {praiseList.map((praise) => (
                <button
                  key={praise.id}
                  onClick={() => setSelectedPraise(praise)}
                  className={`w-full px-4 py-3 text-left ${
                    selectedPraise?.id === praise.id
                      ? 'bg-gray-100 dark:bg-[#2d2d2d]'
                      : ''
                  }`}
                >
                  <h3
                    className="text-sm font-medium text-gray-900 dark:text-white"
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {praise.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* 선택된 찬양의 동영상과 가사 */}
          {selectedPraise ? (
            <>
              {/* YouTube 동영상 */}
              <div className="mb-6 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedPraise.youtubeId}`}
                    title={selectedPraise.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* 가사 */}
              <div className="mb-6 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-6">
                <h3 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
                  가사
                </h3>
                <div
                  className="space-y-6 text-sm leading-relaxed"
                  style={{ wordBreak: 'keep-all' }}
                >
                  {selectedPraise.lyrics.map((lyric, index) => (
                    <div key={index} className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-400">
                        {lyric.korean}
                      </p>
                      <p className="text-gray-800 dark:text-white">
                        {lyric.pronunciation}
                      </p>
                      <p
                        className="text-gray-600 dark:text-gray-400 text-right"
                        dir="rtl"
                      >
                        {lyric.arabic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
              찬양을 선택해주세요
            </div>
          )}
        </>
      ) : (
        <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          등록된 찬양이 없습니다
        </div>
      )}
    </PageLayout>
  );
}

export default Praise;
