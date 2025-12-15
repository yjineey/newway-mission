import PageLayout from '../components/layout/PageLayout';
import { useTeam } from '../context/TeamContext';
import { Calendar, Users, Flag, Plane, Clock } from 'lucide-react';

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
      flight: {
        airline: '에티하드',
        outbound: {
          departure: '인천 23:45 (19일)',
          layover: '아부다비 | 3시간 30분',
          arrival: '암만 11:25 (20일)',
          totalTime: '17h 40m',
        },
        inbound: {
          departure: '암만 15:10 (26일)',
          layover: '아부다비 | 2시간 20분',
          arrival: '인천 10:45 (27일)',
          totalTime: '13h 35m',
        },
      },
    },
  };

  const currentSchedule =
    selectedTeam === 'egypt' ? scheduleData.egypt : scheduleData.jordan;

  return (
    <PageLayout title="선교일정" showTeamTabs={true}>
      <div className="space-y-6">
        {/* 일정 안내 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              일정 안내
            </h2>
          </div>
          <div className="space-y-4">
            {/* 기간 */}
            <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                기간
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {currentSchedule.period}
              </p>
            </div>

            {/* 인원 */}
            <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex items-center gap-2 mb-4">
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

            {/* 출정·파송주일 */}
            <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                출정·파송주일
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {currentSchedule.sendOff}
              </p>
            </div>
          </div>
        </div>

        {/* 항공편 정보 (요르단팀만) */}
        {selectedTeam === 'jordan' && currentSchedule.flight && (
          <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                항공편 정보
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              {/* 항공사 */}
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  항공사
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {currentSchedule.flight.airline}
                </p>
              </div>

              {/* 가는 편 */}
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  가는 편
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      출발
                    </span>
                    <span className="font-medium">
                      {currentSchedule.flight.outbound.departure}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      경유
                    </span>
                    <span className="font-medium">
                      {currentSchedule.flight.outbound.layover}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      도착
                    </span>
                    <span className="font-medium">
                      {currentSchedule.flight.outbound.arrival}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-[#333333]">
                    <span className="text-gray-600 dark:text-gray-400">
                      총 비행시간
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {currentSchedule.flight.outbound.totalTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* 오는 편 */}
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  오는 편
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      출발
                    </span>
                    <span className="font-medium">
                      {currentSchedule.flight.inbound.departure}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      경유
                    </span>
                    <span className="font-medium">
                      {currentSchedule.flight.inbound.layover}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      도착
                    </span>
                    <span className="font-medium">
                      {currentSchedule.flight.inbound.arrival}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-[#333333]">
                    <span className="text-gray-600 dark:text-gray-400">
                      총 비행시간
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {currentSchedule.flight.inbound.totalTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default Schedule;
