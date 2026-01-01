import { useState } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';

function Arabic() {
  const { selectedTeam } = useTeam();

  // 아랍어 학습 데이터
  const arabicContent = [
    {
      id: 1,
      title: '👋 인사·기본',
      items: [
        {
          arabic: 'مرحبا',
          pronunciation: '마르하바',
          korean: '안녕하세요',
        },
        {
          arabic: 'السلام عليكم',
          pronunciation: '앗살라무 알레이쿰',
          korean: '평안이 있기를',
        },
        {
          arabic: 'وعليكم السلام',
          pronunciation: '와 알레이쿰 앗살람',
          korean: '평안이 있기를',
        },
        {
          arabic: 'أهلاً',
          pronunciation: '아홀란',
          korean: '안녕하세요',
        },
        {
          arabic: 'مع السلامة',
          pronunciation: '마아 살라메',
          korean: '안녕히 가세요',
        },
      ],
    },
    {
      id: 2,
      title: '🙇 예의',
      items: [
        {
          arabic: 'شكراً',
          pronunciation: '슈크란',
          korean: '감사합니다',
        },
        {
          arabic: 'عفواً',
          pronunciation: '아프완',
          korean: '천만에요 / 실례합니다',
        },
        {
          arabic: 'لو سمحت',
          pronunciation: '라우 사마흐트',
          korean: '부탁합니다',
        },
        {
          arabic: 'آسف',
          pronunciation: '아세프',
          korean: '미안합니다',
        },
        {
          arabic: 'الله يخليك',
          pronunciation: '알라 이할릭',
          korean: '고마워요 진짜',
        },
      ],
    },
    {
      id: 3,
      title: '😊 상태·반응',
      items: [
        {
          arabic: 'نعم',
          pronunciation: '나암',
          korean: '네',
        },
        {
          arabic: 'لا',
          pronunciation: '라',
          korean: '아니요',
        },
        {
          arabic: 'تمام',
          pronunciation: '타맘',
          korean: '좋아요 / 오케이',
        },
        {
          arabic: 'ماشي مشكلة',
          pronunciation: '마쉬 무슈킬레',
          korean: '문제없어요',
        },
        {
          arabic: 'الحمد لله',
          pronunciation: '알함둘릴라',
          korean: '다행이에요 / 감사합니다',
        },
      ],
    },
    {
      id: 4,
      title: '🗣️ 기본 대화',
      items: [
        {
          arabic: 'كيفك',
          pronunciation: '키팍',
          korean: '잘 지내요',
        },
        {
          arabic: 'منيح',
          pronunciation: '므니흐',
          korean: '잘 지내요 / 좋아요',
        },
        {
          arabic: 'تشرفت',
          pronunciation: '타샤라프나',
          korean: '만나서 반가워요',
        },
        {
          arabic: 'اسمي ____',
          pronunciation: '이스미 ____',
          korean: '제 이름은 ____예요',
        },
        {
          arabic: 'أنا من كوريا',
          pronunciation: '아나 민 코리아',
          korean: '저는 한국에서 왔어요',
        },
      ],
    },
    {
      id: 5,
      title: '🧭 길·장소',
      items: [
        {
          arabic: 'وين',
          pronunciation: '웬',
          korean: '어디',
        },
        {
          arabic: 'وين الحمام',
          pronunciation: '웬 알함맘',
          korean: '화장실 어디예요',
        },
        {
          arabic: 'قريب',
          pronunciation: '까리브',
          korean: '가까워요',
        },
        {
          arabic: 'بعيد',
          pronunciation: '바이드',
          korean: '멀어요',
        },
        {
          arabic: 'يمين',
          pronunciation: '야민',
          korean: '오른쪽',
        },
        {
          arabic: 'شمال',
          pronunciation: '샤말',
          korean: '왼쪽',
        },
      ],
    },
    {
      id: 6,
      title: '🍽️ 음식·카페',
      items: [
        {
          arabic: 'مي لو سمحت',
          pronunciation: '마이 라우 사마흐트',
          korean: '물 주세요',
        },
        {
          arabic: 'أكل',
          pronunciation: '아클',
          korean: '음식',
        },
        {
          arabic: 'القائمة لو سمحت',
          pronunciation: '알 카에메 라우 사마흐트',
          korean: '메뉴 주세요',
        },
        {
          arabic: 'طيب كثير',
          pronunciation: '타이예브 크띠르',
          korean: '진짜 맛있어요',
        },
        {
          arabic: 'الحساب لو سمحت',
          pronunciation: '알 히사브 라우 사마흐트',
          korean: '계산서 주세요',
        },
        {
          arabic: 'كم',
          pronunciation: '깜',
          korean: '얼마',
        },
        {
          arabic: 'كم سعره',
          pronunciation: '깜 싸으루',
          korean: '이거 얼마예요',
        },
      ],
    },
    {
      id: 7,
      title: '🚨 도움·긴급',
      items: [
        {
          arabic: 'ساعدني',
          pronunciation: '사아드니',
          korean: '도와주세요',
        },
        {
          arabic: 'تعبان',
          pronunciation: '타아반',
          korean: '아파요',
        },
        {
          arabic: 'دكتور',
          pronunciation: '닥투르',
          korean: '의사',
        },
        {
          arabic: 'مستشفى',
          pronunciation: '무스타슈파',
          korean: '병원',
        },
        {
          arabic: 'شرطة',
          pronunciation: '쇼르타',
          korean: '경찰',
        },
      ],
    },
    {
      id: 8,
      title: '🌱 호감도',
      items: [
        {
          arabic: 'إن شاء الله',
          pronunciation: '인샬라',
          korean: '신의 뜻이면',
        },
        {
          arabic: 'ما شاء الله',
          pronunciation: '마샬라',
          korean: '와 좋다',
        },
        {
          arabic: 'لله معك',
          pronunciation: '알라 마악',
          korean: '신이 함께하길',
        },
        {
          arabic: 'نحبكم',
          pronunciation: '느헙쿰',
          korean: '우리는 여러분을 사랑합니다',
        },
        {
          arabic: 'أهلا وسهلاً',
          pronunciation: '아홀란 와 살란',
          korean: '환영합니다',
        },
        {
          arabic: 'تفضل',
          pronunciation: '트파달',
          korean: '여기요 / 먼저 하세요',
        },
        {
          arabic: 'ولا يهمك',
          pronunciation: '왈라 이힘막',
          korean: '신경 쓰지 마요',
        },
      ],
    },
  ];

  const [selectedContent, setSelectedContent] = useState(arabicContent[0]);

  return (
    <PageLayout title="아랍어" showTeamTabs={true} showSample={false}>
      {selectedTeam === 'jordan' ? (
        <>
          {/* 탭 */}
          <div className="border-b border-gray-200 dark:border-[#333333] mb-6 overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              {arabicContent.map((content) => (
                <button
                  key={content.id}
                  onClick={() => setSelectedContent(content)}
                  className={`
                    relative pb-3 pt-2 text-sm transition-colors duration-200 whitespace-nowrap
                    ${
                      selectedContent?.id === content.id
                        ? 'font-bold text-gray-900 dark:text-white'
                        : 'font-medium text-gray-500 dark:text-gray-400'
                    }
                  `}
                >
                  {content.title}
                  {selectedContent?.id === content.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 아랍어 콘텐츠 */}
          {selectedContent ? (
            <div className="mb-6 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] overflow-hidden">
              <h3 className="text-base font-bold mb-0 px-6 py-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-[#333333]">
                {selectedContent.title
                  .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
                  .trim()}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full" style={{ wordBreak: 'keep-all' }}>
                  <thead>
                    <tr className="bg-gray-50 dark:bg-[#2a2a2a]">
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333]">
                        한국어
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333]">
                        발음
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333]">
                        아랍어
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedContent.items.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
                      >
                        <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-white font-medium">
                          {item.korean}
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300">
                          {item.pronunciation}
                        </td>
                        <td
                          className="px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300"
                          dir="rtl"
                        >
                          {item.arabic}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
              콘텐츠를 선택해주세요
            </div>
          )}
        </>
      ) : (
        <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          등록된 콘텐츠가 없습니다
        </div>
      )}
    </PageLayout>
  );
}

export default Arabic;
