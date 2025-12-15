import PageLayout from '../components/layout/PageLayout';
import { useTeam } from '../context/TeamContext';
import { Calendar, Users, Flag } from 'lucide-react';

function Schedule() {
  const { selectedTeam } = useTeam();

  const scheduleData = {
    egypt: {
      country: '이집트',
      period: '2026.01.14 (수) - 2026.01.22 (목)',
      trainees: '훈련생 9명',
      sendOff: '2026.01.11 (주일)',
      traineeList: [
        '박진수',
        '박동빈',
        '박재호',
        '박준영',
        '윤고은',
        '이엘림',
        '이호정',
        '전유림',
        '한아름',
      ],
    },
    jordan: {
      country: '요르단',
      period: '2026.01.19 (월) - 2026.01.27 (화)',
      trainees: '훈련생 8명',
      sendOff: '2026.01.18 (주일)',
      traineeList: [
        '위사은',
        '김난영',
        '김주은',
        '양진',
        '이종철',
        '임지원',
        '진민하',
        '최정원',
      ],
    },
  };

  const currentSchedule =
    selectedTeam === 'egypt' ? scheduleData.egypt : scheduleData.jordan;

  return (
    <PageLayout title="선교일정" showTeamTabs={true}>
      <div className="space-y-6">
        {/* 국가 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {currentSchedule.country}
          </h2>

          <div className="space-y-4">
            {/* 기간 */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <Calendar className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  기간
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentSchedule.period}
                </p>
              </div>
            </div>

            {/* 인원 */}
            <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  인원
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentSchedule.trainees}
                </span>
              </div>
              {currentSchedule.traineeList && (
                <div className="flex flex-wrap gap-2">
                  {currentSchedule.traineeList.map((name, index) => (
                    <span
                      key={name}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        index === 0
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                          : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#333333]'
                      }`}
                    >
                      {name}
                      {index === 0 && (
                        <span className="ml-1.5 text-xs opacity-80">팀장</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 출정 파송주일 */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <Flag className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  출정 파송주일
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentSchedule.sendOff}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Schedule;
