import { useState } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import { ChevronDown } from 'lucide-react';

function Praise() {
  const { selectedTeam } = useTeam();

  // 찬양 데이터
  const praiseList = [
    {
      id: 1,
      title: '주 예수 안에 | 수원하나교회 | 아랍어',
      youtubeId: 'rZYk_D3x3BE',
      lyrics: [
        {
          arabic: 'فيك يا يسوع فيك حرية فيك شفاء',
          pronunciation: '피잌 야 예수 피잌 후리야 피잌 쉬파-',
          korean: '예수 안에 자유있네 치유있네',
        },
        {
          arabic: 'فيك سالم فيك حياة فيك يا يسوع',
          pronunciation: '피잌 살람 피잌 하야 피잌 야 예수',
          korean: '평화있네 생명있네 예수 안에',
        },
        {
          arabic: 'حرية شفاء سالم حياة',
          pronunciation: '호뤼아 쉬파 살람 하야',
          korean: '자유 치유 평화 생명',
        },
        {
          arabic: 'في يسوع في يسوع فيك يا يسوع',
          pronunciation: '피 예수 피 예수 피잌 야 예수',
          korean: '예수 안에 예수 안에 예수 안에',
        },
        {
          arabic: 'أمواج شفاء أمواج حياة',
          pronunciation: '암와즈 쉬파 암와즈 하야',
          korean: '치유의 파도 생명의 파도',
        },
        {
          arabic: 'أمواج محبة من عرش الآب',
          pronunciation: '암와즈 마합빠 민 아르쉴랍',
          korean: '사랑의 파도가 아버지 보좌로부터',
        },
      ],
    },
    {
      id: 2,
      title: '주 예수 안에 | 뉴웨이교회 | 아랍어',
      lyrics: [
        {
          arabic: 'فيك يا يسوع فيك حرية فيك شفاء',
          pronunciation: '피잌 야 예수 피잌 후리야 피잌 쉬파-',
          korean: '예수 안에 자유있네 치유있네',
        },
        {
          arabic: 'فيك سالم فيك حياة فيك يا يسوع',
          pronunciation: '피잌 살람 피잌 하야 피잌 야 예수',
          korean: '평화있네 생명있네 예수 안에',
        },
        {
          arabic: 'حرية شفاء سالم حياة',
          pronunciation: '호뤼아 쉬파 살람 하야',
          korean: '자유 치유 평화 생명',
        },
        {
          arabic: 'في يسوع في يسوع فيك يا يسوع',
          pronunciation: '피 예수 피 예수 피잌 야 예수',
          korean: '예수 안에 예수 안에 예수 안에',
        },
        {
          arabic: 'أمواج شفاء أمواج حياة',
          pronunciation: '암와즈 쉬파 암와즈 하야',
          korean: '치유의 파도 생명의 파도',
        },
        {
          arabic: 'أمواج محبة من عرش الآب',
          pronunciation: '암와즈 마합빠 민 아르쉴랍',
          korean: '사랑의 파도가 아버지 보좌로부터',
        },
      ],
    },
    {
      id: 3,
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
      id: 4,
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
          {/* 셀렉트 박스 */}
          <div className="mb-6 relative">
            <select
              value={selectedPraise?.id || ''}
              onChange={(e) => {
                const selected = praiseList.find(
                  (p) => p.id === parseInt(e.target.value)
                );
                if (selected) {
                  setSelectedPraise(selected);
                }
              }}
              className="w-full px-4 py-3 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] text-sm font-medium text-gray-900 dark:text-white appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
              style={{ wordBreak: 'keep-all' }}
            >
              {praiseList.map((praise) => (
                <option key={praise.id} value={praise.id}>
                  {praise.title}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* 선택된 찬양의 동영상과 가사 */}
          {selectedPraise ? (
            <>
              {/* YouTube 동영상 */}
              {selectedPraise.youtubeId && (
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
              )}

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
