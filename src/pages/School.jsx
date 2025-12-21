import PageLayout from '../components/layout/PageLayout';
import SchoolTabs from '../components/common/SchoolTabs';
import { useState } from 'react';
import { useTeam } from '../context/TeamContext';
import { Calendar, Users, Flag, Plane, Clock } from 'lucide-react';

function School() {
  const [selectedTab, setSelectedTab] = useState('mission-schedule');
  const { selectedTeam } = useTeam();

  // 팀 미션 데이터 (WEEK 1-6)
  const missionData = [
    {
      week: 'WEEK 1',
      period: '12/7 - 12/13',
      mission: '선교지 스터디 & 기독교 문화유산 탐방',
      details: [
        {
          title: '1. 선교지 기본 정보 공부',
          items: [
            '1) 역사적, 사회적, 문화적, 종교적 이슈',
            '2) 최근 동향',
            '• 모든 팀원들이 함께 조사하고 쉐어하여, 선교지에 대한 충분한 이해를 돕습니다',
            '  (반드시 알아야 할 문화적인 내용은 모두 숙지합니다)',
            '• 12월 둘째 주, 평일 팀 모임 시 "예배&기도" 후 내용 쉐어합니다',
          ],
        },
        {
          title: '2. 기독교 문화유산 탐방 (12월 안에 방문)',
          items: [
            '1) 필수 방문: 양화진',
            '2) 선택적 방문:',
            '   - 연세대학교 언더우드가 기념관',
            '   - 배제학당 역사 박물관 (아펜젤러관)',
            '• 따로 보고서는 필요하지 않습니다. 방문 일정만 공유해주십시오',
          ],
        },
      ],
      note: '',
    },
    {
      week: 'WEEK 2',
      period: '12/14 - 12/20',
      mission: '선교지 언어 공부',
      details: [
        {
          title: '',
          items: [
            '1. 필수 단어 & 문장 습득하기',
            '2. 아랍어 찬양으로 예배하기',
          ],
        },
      ],
      note: '',
    },
    {
      week: 'WEEK 3',
      period: '12/21 - 12/27',
      mission: '크리스마스 바자회',
      details: [
        {
          title: '',
          items: [
            '12/25(목) 예배 후, 진행되는 바자회의 수익금이 선교지로 플로잉 될 예정입니다.',
            '선교팀 차원에서 어떤 것을 진행하면 좋을지 함께 고민 후 진행 (크리스마스 TF팀과 상의)',
            '',
            'ex. 바자회 음식 코너에 국가별 음식을 준비 or 선교 굿즈 판매 등',
          ],
        },
      ],
      note: '',
    },
    {
      week: 'WEEK 4',
      period: '12/28 - 1/3',
      mission: '',
      details: [],
      note: '',
    },
    {
      week: 'WEEK 5',
      period: '1/4 - 1/10',
      mission: '선교 기도편지 발송',
      details: [
        {
          title: '',
          items: [
            '온라인 or 오프라인으로 팀별 기도편지를 발송하여 성도님들의 기도 후원을 요청',
          ],
        },
      ],
      note: '',
    },
    {
      week: 'WEEK 6',
      period: '1/11 - 1/17',
      mission: '선교지 출정',
      details: [
        {
          title: '1. 파송식 - 이집트 팀 (1/11 주일 예배)',
          items: [
            '(1) 팀 소개 (구호 및 인사)',
            '(2) 팀 사역 안내 및 기도 요청',
          ],
        },
        {
          title: '2. 출정식 - 4개팀 전체 (1/11 선교스쿨 강의 후)',
          items: [
            '(1) 나라별 발표',
            '(2) 특송 및 기도',
            '(3) 기도편지 배포',
            '(4) 선교비 전달',
          ],
        },
      ],
      note: '',
    },
    {
      week: 'WEEK 7',
      period: '1/18 - 1/24',
      mission: '선교지 출정',
      details: [
        {
          title: '1. 파송식 - 요르단 팀 (1/18 주일 예배)',
          items: [
            '(1) 팀 소개 (구호 및 인사)',
            '(2) 팀 사역 안내 및 기도 요청',
          ],
        },
      ],
      note: '선교일정\n• 1/14(수) - 1/22(목): 이집트 팀 선교\n• 1/19(월) - 1/27(화): 요르단 팀 선교',
    },
    {
      week: 'WEEK 8',
      period: '1/25 - 1/31',
      mission: '',
      details: [],
      note: '',
    },
    {
      week: 'WEEK 9',
      period: '2/1 - 2/7',
      mission: '선교 보고',
      details: [
        {
          title: '1. 선교보고 - 이집트 팀 & 요르단 팀 (2/1 주일)',
          items: [
            '(1) 하이라이트 영상 (주일 예배)',
            '(2) 선교 간증 (주일 예배 & 특정 일)',
          ],
        },
      ],
      note: '주일 예배 시, 모든 간증 및 보고 불가능하여 주일 오후 혹은 특정 일 지정하여 선교보고 진행',
    },
    {
      week: 'WEEK 10',
      period: '2/8 - 2/14',
      mission: '',
      details: [],
      note: '',
    },
    {
      week: 'WEEK 11',
      period: '2/15 - 2/21',
      mission: '',
      details: [],
      note: '',
    },
    {
      week: 'WEEK 12',
      period: '2/22 - 2/28',
      mission: '공식 훈련 종료',
      details: [
        {
          title: '',
          items: ['공식 훈련 종료 (2/28 토)'],
        },
      ],
      note: '',
    },
  ];

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
        '① 전체 모임 및 팀 모임\n② 항공권 발권 진행 안내\n③ 일정 진행 관련',
      note: '교회별 진행',
    },
    {
      year: '2025',
      date: '12/07 (주일)',
      time: '16:30 (16:10)',
      division: '1주차',
      content: '① 선교 훈련\n② 팀 모임 (팀 빌딩)',
      note: '',
    },
    {
      year: '2025',
      date: '12/14 (주일)',
      time: '17:30 (17:10)',
      division: '2주차',
      content: '① 선교 훈련\n② 팀 모임',
      note: '',
    },
    {
      year: '2025',
      date: '12/21 (주일)',
      time: '16:00 (15:40)',
      division: '3주차',
      content: '① 선교 훈련\n② 팀 모임',
      note: '',
    },
    {
      year: '2025',
      date: '12/28 (주일)',
      time: '16:00 (15:40)',
      division: '4주차',
      content: '① 선교 훈련\n② 팀 모임',
      note: '',
    },
    {
      year: '2026',
      date: '01/04 (주일)',
      time: '16:00 (15:40)',
      division: '5주차',
      content: '① 선교 훈련\n② 팀 모임',
      note: '',
    },
    {
      year: '2026',
      date: '01/11 (주일)',
      time: '16:00 (15:40)',
      division: '6주차',
      content: '① 선교 훈련\n② 팀 모임\n③ 출정식 (나라별 발표)',
      note: '',
    },
  ];

  const scheduleDataForMission = {
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
    selectedTeam === 'egypt'
      ? scheduleDataForMission.egypt
      : scheduleDataForMission.jordan;

  const renderContent = () => {
    if (selectedTab === 'mission-schedule') {
      return (
        <div className="space-y-6">
          {/* 일정 안내 */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
              일정 안내
            </h2>
            <div className="space-y-4">
              {/* 기간 */}
              <div className="p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  기간
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentSchedule.period}
                </p>
              </div>

              {/* 인원 */}
              <div className="p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]">
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
                          <span className="ml-1.5 text-xs opacity-80">
                            팀장
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 출정·파송주일 */}
              <div className="p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  출정·파송주일
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentSchedule.sendOff}
                </p>
              </div>
            </div>
          </div>

          {/* 항공편 정보 (요르단 팀만) */}
          {selectedTeam === 'jordan' && currentSchedule.flight && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                항공편 정보
              </h2>
              <div className="space-y-4 text-sm">
                {/* 항공사 */}
                <div className="p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      항공사
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {currentSchedule.flight.airline}
                    </p>
                  </div>
                </div>

                {/* 가는 편 */}
                <div className="p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]">
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
                <div className="p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]">
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
      );
    }

    if (selectedTab === 'schedule') {
      return (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            일정 안내
          </h2>
          <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
            {/* 기간 헤더 */}
            <div className="mb-6 pb-4 border-b border-gray-200 dark:border-[#333333]">
              <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                기간 : 2025년 12월 7일 (주일) ~ 2026년 1월 11일 (주일){'\n'}장소
                : 뉴웨이교회 2F 소예배실{'\n'}강사 : 윤성철 목사님 (CG선교회)
              </p>
            </div>

            {/* 일정 테이블 */}
            <div className="overflow-x-auto">
              <table
                className="w-full"
                style={{ wordBreak: 'keep-all', minWidth: '800px' }}
              >
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
                      세부 내용
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
        </div>
      );
    }

    if (selectedTab === 'training') {
      return (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            매주 강의 피드백 제출
          </h2>
          {/* 피드백 내용 */}
          <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              훈련 내용
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>1) 강의 피드백 내용 요약</p>
              <p>2) 느낀점</p>
              <p>3) 적용</p>
            </div>
          </div>

          {/* 작성 형식 */}
          <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              작성 형식
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>• A4 용지 1~2페이지 이내</p>
              <p>• 폰트 사이즈: 11pt / 줄 간격: 1.2</p>
              <p>• 파일명: "단기선교기_본인 이름" 으로 작성</p>
              <p>• "PDF" 파일로 제출</p>
            </div>
          </div>

          {/* 제출 기한 - 스텝 형식 */}
          <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              제출 기한
            </h3>
            <div className="space-y-4">
              {/* 1단계: 팀원 → 팀장 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
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
                <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
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
      );
    }

    if (selectedTab === 'mission') {
      return (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            팀 미션 (WEEK 1-12)
          </h2>
          <div className="space-y-6">
            {missionData.map((item, index) => (
              <div key={index}>
                {/* Week와 날짜를 카드 밖으로 */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold text-sm">
                    {item.week}
                  </div>
                  {item.period && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {item.period}
                    </div>
                  )}
                </div>
                {/* 카드 영역 */}
                <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
                  <div style={{ whiteSpace: 'pre-wrap' }}>
                    {item.mission ||
                    (item.details && item.details.length > 0) ||
                    item.note ? (
                      <>
                        {item.mission && (
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                            {item.mission}
                          </h3>
                        )}
                        {item.details.length > 0 && (
                          <div className="space-y-3">
                            {item.details.map((detail, dIndex) => (
                              <div key={dIndex}>
                                {detail.title && (
                                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {detail.title}
                                  </p>
                                )}
                                <div
                                  className="text-sm text-gray-700 dark:text-gray-300"
                                  style={{ whiteSpace: 'pre-wrap' }}
                                >
                                  {detail.items.join('\n')}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.note && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#333333]">
                            <p
                              className="text-sm text-gray-600 dark:text-gray-400"
                              style={{ whiteSpace: 'pre-wrap' }}
                            >
                              {item.note}
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        -
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <PageLayout title="선교스쿨">
      <SchoolTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      {renderContent()}
    </PageLayout>
  );
}

export default School;
