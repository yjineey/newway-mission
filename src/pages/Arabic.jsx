import { useState } from 'react';
import React from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';

function Arabic() {
  const { selectedTeam } = useTeam();

  // 아랍어 학습 데이터
  const arabicContent = [
    {
      id: 1,
      title: '인사',
      items: [
        {
          category: '인사말',
          arabic: 'مرحبا',
          pronunciation: '마르하바',
          korean: '안녕하세요',
        },
        {
          category: '인사말',
          arabic: 'السلام عليكم',
          pronunciation: '앗살라무 알라이쿰',
          korean: '평화가 있기를',
        },
        {
          category: '인사말',
          arabic: 'مع السلامة',
          pronunciation: '마앗살라마',
          korean: '안녕히 가세요',
        },
        {
          category: '감사/사과',
          arabic: 'شكرا',
          pronunciation: '슈크란',
          korean: '감사합니다',
        },
        {
          category: '감사/사과',
          arabic: 'شكرا جزيلا',
          pronunciation: '슈크란 자질란',
          korean: '대단히 감사합니다',
        },
        {
          category: '감사/사과',
          arabic: 'عفوا',
          pronunciation: '아프완',
          korean: '천만에요',
        },
        {
          category: '감사/사과',
          arabic: 'آسف',
          pronunciation: '아시프',
          korean: '미안합니다',
        },
        {
          category: '감사/사과',
          arabic: 'المعذرة',
          pronunciation: '알마아즈라',
          korean: '실례합니다',
        },
      ],
    },
    {
      id: 2,
      title: '기본 표현',
      items: [
        {
          category: '긍정/부정',
          arabic: 'نعم',
          pronunciation: '나암',
          korean: '네',
        },
        {
          category: '긍정/부정',
          arabic: 'لا',
          pronunciation: '라',
          korean: '아니요',
        },
        {
          category: '긍정/부정',
          arabic: 'تمام',
          pronunciation: '타맘',
          korean: '괜찮아요 / 좋아요',
        },
        {
          category: '부탁',
          arabic: 'من فضلك',
          pronunciation: '민 파들락',
          korean: '부탁합니다',
        },
        {
          category: '부탁',
          arabic: 'لو سمحت',
          pronunciation: '루 스마흐트',
          korean: '실례합니다 (부탁할 때)',
        },
        {
          category: '질문',
          arabic: 'كيفك؟',
          pronunciation: '케이팍/케이픽',
          korean: '어떻게 지내?',
        },
      ],
    },
    {
      id: 3,
      title: '사람',
      items: [
        {
          category: '일반',
          arabic: 'شخص',
          pronunciation: '샤흐스',
          korean: '사람',
        },
        {
          category: '일반',
          arabic: 'رجل',
          pronunciation: '라줄',
          korean: '남자',
        },
        {
          category: '일반',
          arabic: 'امرأة',
          pronunciation: '임라아',
          korean: '여자',
        },
        {
          category: '일반',
          arabic: 'طفل',
          pronunciation: '투풀',
          korean: '아이',
        },
        {
          category: '일반',
          arabic: 'طفلة',
          pronunciation: '투풀라',
          korean: '여자 아이',
        },
        {
          category: '가족',
          arabic: 'أب',
          pronunciation: '압',
          korean: '아빠',
        },
        {
          category: '가족',
          arabic: 'أم',
          pronunciation: '움',
          korean: '엄마',
        },
        {
          category: '가족',
          arabic: 'أخ',
          pronunciation: '아흐',
          korean: '형/오빠/동생 (남자)',
        },
        {
          category: '가족',
          arabic: 'أخت',
          pronunciation: '우흐트',
          korean: '누나/언니/동생 (여자)',
        },
        {
          category: '가족',
          arabic: 'أخ صغير',
          pronunciation: '아흐 사기르',
          korean: '남동생',
        },
        {
          category: '가족',
          arabic: 'أخت صغيرة',
          pronunciation: '우흐트 사기라',
          korean: '여동생',
        },
        {
          category: '직업',
          arabic: 'معلم',
          pronunciation: '무알림',
          korean: '선생님',
        },
        {
          category: '직업',
          arabic: 'طبيب',
          pronunciation: '타비브',
          korean: '의사',
        },
        {
          category: '직업',
          arabic: 'ممرض',
          pronunciation: '무마리드',
          korean: '간호사',
        },
        {
          category: '친구',
          arabic: 'صديق',
          pronunciation: '사디크',
          korean: '친구',
        },
      ],
    },
    {
      id: 4,
      title: '기본 명사',
      items: [
        {
          category: '장소',
          arabic: 'بيت',
          pronunciation: '바이트',
          korean: '집',
        },
        {
          category: '장소',
          arabic: 'مدرسة',
          pronunciation: '마드라사',
          korean: '학교',
        },
        {
          category: '물건',
          arabic: 'ماء',
          pronunciation: '마아',
          korean: '물',
        },
        {
          category: '물건',
          arabic: 'طعام',
          pronunciation: '타아암',
          korean: '음식',
        },
      ],
    },
    {
      id: 5,
      title: '숫자',
      items: [
        {
          category: '1-10',
          arabic: 'واحد',
          pronunciation: '와히드',
          korean: '1',
        },
        {
          category: '1-10',
          arabic: 'اثنان',
          pronunciation: '이쓰난',
          korean: '2',
        },
        {
          category: '1-10',
          arabic: 'ثلاثة',
          pronunciation: '쌀라사',
          korean: '3',
        },
        {
          category: '1-10',
          arabic: 'أربعة',
          pronunciation: '아르바아',
          korean: '4',
        },
        {
          category: '1-10',
          arabic: 'خمسة',
          pronunciation: '함사',
          korean: '5',
        },
        {
          category: '1-10',
          arabic: 'ستة',
          pronunciation: '씻타',
          korean: '6',
        },
        {
          category: '1-10',
          arabic: 'سبعة',
          pronunciation: '사브아',
          korean: '7',
        },
        {
          category: '1-10',
          arabic: 'ثمانية',
          pronunciation: '싸마니야',
          korean: '8',
        },
        {
          category: '1-10',
          arabic: 'تسعة',
          pronunciation: '티스아',
          korean: '9',
        },
        {
          category: '1-10',
          arabic: 'عشرة',
          pronunciation: '아샤라',
          korean: '10',
        },
        {
          category: '큰 수',
          arabic: 'مئة',
          pronunciation: '미아',
          korean: '100',
        },
        {
          category: '큰 수',
          arabic: 'ألف',
          pronunciation: '알프',
          korean: '1000',
        },
      ],
    },
    {
      id: 6,
      title: '화폐',
      items: [
        {
          category: '단위',
          arabic: 'دينار',
          pronunciation: '디나르',
          korean: '디나르',
          note: '1 JD ≈ 1,500원',
        },
        {
          category: '단위',
          arabic: 'دينار أردني',
          pronunciation: '디나르 우르두니',
          korean: '요르단 디나르',
          note: '1 JD ≈ 1,500원',
        },
        {
          category: '단위',
          arabic: 'JD',
          pronunciation: 'JD',
          korean: '요르단 디나르 (약자)',
          note: '1 JD ≈ 1,500원',
        },
        {
          category: '보조 단위',
          arabic: 'قرش',
          pronunciation: '끄르쉬',
          korean: '끄르쉬',
          note: '1 디나르 = 100 끄르쉬 (1 끄르쉬 ≈ 15원)',
        },
        {
          category: '보조 단위',
          arabic: 'فلس',
          pronunciation: '필스',
          korean: '필스',
          note: '1 끄르쉬 = 10 필스 (1 필스 ≈ 1.5원)',
        },
        {
          category: '환율 정보',
          arabic: '1 JD',
          pronunciation: '와히드 디나르',
          korean: '1 디나르',
          note: '≈ 1,500원 (환율 변동)',
        },
        {
          category: '환율 정보',
          arabic: '10 JD',
          pronunciation: '아샤라 디나르',
          korean: '10 디나르',
          note: '≈ 15,000원',
        },
        {
          category: '환율 정보',
          arabic: '100 JD',
          pronunciation: '미아 디나르',
          korean: '100 디나르',
          note: '≈ 150,000원',
        },
      ],
    },
    {
      id: 7,
      title: '음식 주문',
      items: [
        {
          category: '기본 표현',
          arabic: 'قائمة الطعام',
          pronunciation: '까이마툴 타아암',
          korean: '메뉴',
        },
        {
          category: '기본 표현',
          arabic: 'أريد',
          pronunciation: '우리드',
          korean: '~을 주세요 / ~을 원해요',
        },
        {
          category: '기본 표현',
          arabic: 'بدون',
          pronunciation: '비둔',
          korean: '~없이 / ~빼고',
        },
        {
          category: '음식',
          arabic: 'ماء',
          pronunciation: '마아',
          korean: '물',
        },
        {
          category: '음식',
          arabic: 'شاي',
          pronunciation: '샤이',
          korean: '차',
        },
        {
          category: '음식',
          arabic: 'قهوة',
          pronunciation: '까흐와',
          korean: '커피',
        },
        {
          category: '음식',
          arabic: 'خبز',
          pronunciation: '흐브즈',
          korean: '빵',
        },
        {
          category: '음식',
          arabic: 'كزبرة',
          pronunciation: '쿠즈바라',
          korean: '고수',
        },
        {
          category: '음식',
          arabic: 'كزبرة لو سمحت',
          pronunciation: '쿠즈바라 루 스마흐트',
          korean: '고수 주세요',
        },
        {
          category: '음식',
          arabic: 'بدون كزبرة',
          pronunciation: '비둔 쿠즈바라',
          korean: '고수 빼주세요',
        },
        {
          category: '계산',
          arabic: 'الحساب',
          pronunciation: '알히사브',
          korean: '계산서',
        },
        {
          category: '계산',
          arabic: 'الحساب لو سمحت',
          pronunciation: '알히사브 루 스마흐트',
          korean: '계산서 주세요',
        },
      ],
    },
  ];

  const [selectedContent, setSelectedContent] = useState(arabicContent[0]);

  return (
    <PageLayout title="아랍어" showTeamTabs={true}>
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
                {selectedContent.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full" style={{ wordBreak: 'keep-all' }}>
                  <thead>
                    <tr className="bg-gray-50 dark:bg-[#2a2a2a]">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333]">
                        한국어
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333]">
                        발음
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-[#333333]">
                        아랍어
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      // 카테고리별로 그룹화
                      const groupedItems = selectedContent.items.reduce(
                        (acc, item) => {
                          const category = item.category || '기타';
                          if (!acc[category]) {
                            acc[category] = [];
                          }
                          acc[category].push(item);
                          return acc;
                        },
                        {}
                      );

                      // 카테고리별로 렌더링
                      return Object.entries(groupedItems).map(
                        ([category, items], categoryIndex) => (
                          <React.Fragment key={category}>
                            {/* 카테고리 헤더 */}
                            <tr className="bg-gray-100 dark:bg-[#2d2d2d]">
                              <td
                                colSpan={3}
                                className="px-4 py-2 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                              >
                                {category}
                              </td>
                            </tr>
                            {/* 카테고리 항목들 */}
                            {items.map((item, index) => (
                              <tr
                                key={`${category}-${index}`}
                                className="border-b border-gray-200 dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
                              >
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-medium">
                                  <div>
                                    {item.korean}
                                    {item.note && (
                                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {item.note}
                                      </div>
                                    )}
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                  {item.pronunciation}
                                </td>
                                <td
                                  className="px-4 py-3 text-sm text-gray-900 dark:text-white text-right font-medium"
                                  dir="rtl"
                                >
                                  {item.arabic}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        )
                      );
                    })()}
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
