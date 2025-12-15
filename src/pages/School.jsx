import PageLayout from '../components/layout/PageLayout';

function School() {
  const scheduleData = [
    {
      year: '2025',
      date: '11/23 (주일)',
      time: '',
      division: '팀 발표 & 팀장 발표',
      content: '① 공지용 카톡방 개설',
      note: '교회별 진행',
    },
    {
      year: '2025',
      date: '11/30 (주일)',
      time: '',
      division: '오리엔테이션',
      content:
        '① 전체 모임 및 팀모임\n② 항공권 발권 진행안내\n③ 일정 진행 관련',
      note: '교회별 진행',
    },
    {
      year: '2025',
      date: '12/07 (주일)',
      time: '16:30 (16:10)',
      division: '1주차',
      content: '① 선교훈련\n② 팀모임 (팀 빌딩)',
      note: '',
    },
    {
      year: '2025',
      date: '12/14 (주일)',
      time: '17:30 (17:10)',
      division: '2주차',
      content: '① 선교훈련\n② 팀모임',
      note: '',
    },
    {
      year: '2025',
      date: '12/21 (주일)',
      time: '16:00 (15:40)',
      division: '3주차',
      content: '① 선교훈련\n② 팀모임',
      note: '',
    },
    {
      year: '2025',
      date: '12/28 (주일)',
      time: '16:00 (15:40)',
      division: '4주차',
      content: '① 선교훈련\n② 팀모임',
      note: '',
    },
    {
      year: '2026',
      date: '01/04 (주일)',
      time: '16:00 (15:40)',
      division: '5주차',
      content: '① 선교훈련\n② 팀모임',
      note: '',
    },
    {
      year: '2026',
      date: '01/11 (주일)',
      time: '16:00 (15:40)',
      division: '6주차',
      content: '① 선교훈련\n② 팀모임\n③ 출정식 (나라별 발표)',
      note: '',
    },
  ];

  return (
    <PageLayout title="선교스쿨">
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        {/* 기간 헤더 */}
        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-[#333333]">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            선교스쿨 일정
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
            기간 : 2025년 12월 7일 (주일) ~ 2026년 1월 11일 (주일){'\n'}장소 :
            뉴웨이교회 2f 소예배실{'\n'}강사 : 윤성철 목사님 (CG선교회)
          </p>
        </div>

        {/* 일정 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                  연도
                </th>
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                  날짜
                </th>
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                  시간
                </th>
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                  내용
                </th>
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                  세부내용
                </th>
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => {
                // 연도가 처음 나타나는지 확인
                const isFirstYear =
                  index === 0 || scheduleData[index - 1].year !== item.year;
                // 같은 연도의 행 개수 계산
                const yearRowCount = scheduleData.filter(
                  (d) => d.year === item.year
                ).length;

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-[#333333] last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
                  >
                    {isFirstYear && (
                      <td
                        rowSpan={yearRowCount}
                        className="px-4 py-4 text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap align-top border-r border-gray-300 dark:border-gray-600 text-center"
                      >
                        {item.year}
                      </td>
                    )}
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap text-center">
                      {item.date}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap text-center">
                      {item.time}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap text-center">
                      {item.division}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line text-left">
                      {item.content}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                      {item.note}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}

export default School;
