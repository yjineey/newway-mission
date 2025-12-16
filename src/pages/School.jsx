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

        {/* 팀 훈련 지침 */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#333333]">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            📝 팀 훈련: 매주 강의 피드백 제출
          </h2>

          <div className="space-y-4">
            {/* 피드백 내용 */}
            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                강의 피드백 내용
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>1) 내용요약</p>
                <p>2) 느낀점</p>
                <p>3) 적용</p>
              </div>
            </div>

            {/* 작성 형식 */}
            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                작성 형식
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• A4 용지 1~2페이지 이내</p>
                <p>• 폰트사이즈: 11pt / 줄간격: 1.2</p>
                <p>• 파일명: "단기선교기_본인이름" 으로 작성</p>
                <p>• "PDF" 파일로 제출</p>
              </div>
            </div>

            {/* 제출 기한 - 스텝 형식으로 변경 */}
            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                제출 기한
              </h3>
              <div className="space-y-4">
                {/* 1단계: 팀원 → 팀장 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      팀원 → 팀장
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      다음 강의 전{' '}
                      <span className="font-bold text-gray-900 dark:text-white">
                        금요일 23:59
                      </span>
                      까지 팀장에게 제출
                    </p>
                  </div>
                </div>

                {/* 2단계: 팀장 → 사역자 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      팀장 → 사역자
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-bold text-gray-900 dark:text-white">
                        토요일 오전 10시
                      </span>{' '}
                      이전에 사역자에게 제출
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default School;
