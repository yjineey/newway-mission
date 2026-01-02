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
          pronunciation: '마르하반\n(종교적 의미 없음)',
          korean: '안녕하세요',
        },
        {
          arabic: 'السلام عليكم',
          pronunciation: '앗쌀라-무 알라이꿈\n(이슬람 인사)',
          korean: '안녕하세요(평안이 있기를)',
        },
        {
          arabic: 'وعليكم السلام',
          pronunciation: '와 알라이꾸무ㅅ 쌀람',
          korean: '안녕하세요 (답어)',
        },

        {
          arabic: 'أهلاً',
          pronunciation: '아홀란',
          korean: '안녕하세요',
        },
        {
          arabic: 'مع السلامة',
          pronunciation: '마아 쌀라-마',
          korean: '안녕히 가세요',
        },
        {
          arabic: 'صباح الخير',
          pronunciation: '싸바힐 키-르',
          korean: '좋은 아침이에요',
        },
        {
          arabic: 'صباح النور',
          pronunciation: '싸바힐 누-르',
          korean: '좋은 아침이에요 (답어)',
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
          korean: '감사합니다/고맙습니다',
        },
        {
          arabic: 'عفواً',
          pronunciation: '아프(f)완',
          korean: '고맙습니다 (답어)',
        },
        {
          arabic: 'لو سمحت',
          pronunciation: '라우 사마흐트',
          korean: '부탁합니다',
        },
        {
          arabic: 'آسف',
          pronunciation: '아-쓰ㅍ',
          korean: '미안합니다(남자)',
        },
        {
          arabic: 'آسفة',
          pronunciation: '아- 쓰파',
          korean: '미안합니다(여자)',
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
          arabic: 'ايوه',
          pronunciation: '아이와',
          korean: '예',
        },
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
          pronunciation: '아나-민 꾸리야',
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

  // 학습 이미지 데이터 (categoryId는 arabicContent의 id와 매핑, 테이블 순서대로 정렬)
  const arabicImages = [
    // 인사·기본 (categoryId: 1) - 테이블 순서대로
    {
      id: 1,
      categoryId: 1,
      image: `${import.meta.env.BASE_URL}images/arabic/assalamu-alaykum.jpg`,
      title: '평안이 있기를',
      korean: '안녕하세요(평안이 있기를)',
    },
    {
      id: 2,
      categoryId: 1,
      image: `${import.meta.env.BASE_URL}images/arabic/wa-alaykum-assalam.jpg`,
      title: '안녕하세요 (답어)',
      korean: '안녕하세요 (답어)',
    },
    {
      id: 3,
      categoryId: 1,
      image: `${import.meta.env.BASE_URL}images/arabic/ma-salama.jpg`,
      title: '안녕히 가세요',
      korean: '안녕히 가세요',
    },
    {
      id: 4,
      categoryId: 1,
      image: `${import.meta.env.BASE_URL}images/arabic/subah-al-khair.jpg`,
      title: '좋은 아침이에요',
      korean: '좋은 아침이에요',
    },
    {
      id: 5,
      categoryId: 1,
      image: `${import.meta.env.BASE_URL}images/arabic/sabah-an-noor.jpg`,
      title: '좋은 아침이에요 (답어)',
      korean: '좋은 아침이에요 (답어)',
    },
    // 예의 (categoryId: 2) - 테이블 순서대로

    {
      id: 8,
      categoryId: 2,
      image: `${import.meta.env.BASE_URL}images/arabic/asf.jpg`,
      title: '미안합니다',
      korean: '미안합니다(남자)',
    },
    {
      id: 9,
      categoryId: 2,
      image: `${import.meta.env.BASE_URL}images/arabic/asfa.jpg`,
      title: '미안합니다 (여자)',
      korean: '미안합니다(여자)',
    },
    // 상태·반응 (categoryId: 3) - 테이블 순서대로
    {
      id: 10,
      categoryId: 3,
      image: `${import.meta.env.BASE_URL}images/arabic/aiwa.jpeg`,
      title: '예',
      korean: '예',
    },
    {
      id: 11,
      categoryId: 3,
      image: `${import.meta.env.BASE_URL}images/arabic/la.jpeg`,
      title: '아니요',
      korean: '아니요',
    },
    // 기본 대화 (categoryId: 4) - 테이블 순서대로
    {
      id: 12,
      categoryId: 4,
      image: `${import.meta.env.BASE_URL}images/arabic/korea.jpeg`,
      title: '저는 한국에서 왔어요',
      korean: '저는 한국에서 왔어요',
    },
  ];

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
                        <td className="px-4 py-3 text-center text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
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

          {/* 학습 이미지 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedContent?.items
              .map((item) => {
                // 테이블 항목과 매칭되는 이미지 찾기
                const matchedImage = arabicImages.find(
                  (img) =>
                    img.categoryId === selectedContent.id &&
                    img.korean === item.korean
                );
                return matchedImage ? { ...matchedImage, item } : null;
              })
              .filter((img) => img !== null)
              .map((img) => (
                <div
                  key={`${img.id}-${img.item.korean}`}
                  className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 dark:bg-[#2a2a2a] relative overflow-hidden flex items-center justify-center">
                    <img
                      src={img.image}
                      alt={img.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        console.error('이미지 로드 실패:', img.image);
                        e.target.style.display = 'none';
                        const errorDiv =
                          e.target.parentElement?.querySelector('.image-error');
                        if (errorDiv) {
                          errorDiv.classList.remove('hidden');
                          errorDiv.classList.add('flex');
                        }
                      }}
                      onLoad={() => {
                        console.log('이미지 로드 성공:', img.image);
                      }}
                    />
                    <div className="hidden image-error absolute inset-0 w-full h-full items-center justify-center text-gray-400 dark:text-gray-500 text-xs bg-gray-100 dark:bg-[#2a2a2a]">
                      이미지 없음
                    </div>
                  </div>
                  <div className="px-3 py-2 text-center">
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {img.item.korean}
                    </p>
                  </div>
                </div>
              ))}
          </div>
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
