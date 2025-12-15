import PageLayout from '../components/layout/PageLayout';
import { useTeam } from '../context/TeamContext';

function Building() {
  const { selectedTeam } = useTeam();

  // 팀별 데이터
  const teamData = {
    egypt: [
      {
        role: '팀장',
        main: '박진수',
        sub: null,
        detail:
          '모든 일정 동안 팀 전체를 총괄하며 한국 본부와 현지 선생님들 사이에서 원활한 소통을 담당\n- 선교지의 소통: 훈련 및 선교기간 선교사님과 직접 소통\n- 교회와의 소통: 팀 훈련 상황 및 매일 1회 상황 보고\n- 태도와 자세: 선교사님의 지시와 일정 변동에 우선적으로 순종하며 팀을 이끔',
        merged: true,
      },
      {
        role: '부팀장',
        main: '',
        sub: '',
        detail:
          '팀장의 손과 발이 되며, 팀의 필요를 살피고, 팀장과 긴밀히 소통\n- 팀장 케어, 관리, 연락 등을 맡아서 분담하여 진행\n- 팀장을 적극적으로 돕고, 필요한 팀원 발견하며 상의 후 도움\n- 다같이 정돈하며 순종할 수 있도록 분위기 조성',
      },
      {
        role: '서기',
        main: '',
        sub: '',
        detail:
          '출발 전 모임부터 현지 일정까지 팀의 모든 활동을 기록\n- 훈련기간: 팀 모임 & 선교 준비 관련 모든 회의와 나눔 기록, 문서화\n- 선교기간: 선교지 모든 일정 기록, 귀국 후 모든 여정 정리',
      },
      {
        role: '회계',
        main: '',
        sub: '',
        detail:
          '팀장과 긴밀히 소통하며, 현지 선교사님을 섬기는 것을 1순위로 하여 재정 관리\n- 훈련기간: 팀 모임 & 선교 준비 재정 지출 관리, 예산안 & 결산안 작성\n- 선교기간: 현지 사역 관련 재정 지출 관리',
      },
      {
        role: '예배자',
        main: '',
        sub: '',
        detail:
          '팀원들이 하나님께 집중하며 예배할 수 있도록, 예배를 준비하고 인도\n- 팀 내에서 계속해서 예배로 분위기 조성\n- 예배를 위해 계속 중보하며 깨어서 관여하여 준비',
      },
      {
        role: '중보자',
        main: '',
        sub: '',
        detail:
          '팀의 모든 팀원들 & 현지 선교사님을 기도로 보호하며, 모든 일정을 위해 중보\n- 훈련기간: 기도 일정 관리, 모든 팀원 동참 독려, 영적 분위기 형성\n- 선교기간: 팀 기도 제목 작성, 현지 모든 상황 중보 기도',
      },
      {
        role: '하스피',
        main: '',
        sub: '',
        detail:
          '현지에서 필요한 물품 세밀하게 살피고, 물품을 준비하고 관리 (선물, 응급물품, 간식 등)\n- 팀장 및 회계와 긴밀히 협력하여 물품 준비 조율\n- 모든 물품은 리스트로 작성하여 체계적으로 관리',
      },
      {
        role: '미디어',
        main: '',
        sub: '',
        detail:
          '모든 순간을 기록하며, 영적인 메시지가 담긴 의미 있는 장면을 포착\n- 사진&영상 촬영 및 모임 기록 담당\n- 선교 후, 하이라이트 영상 제작',
      },
      {
        role: '타임키퍼',
        main: '',
        sub: '',
        detail:
          '철저히 시간을 관리\n- 훈련기간: 공지된 모임 시간 지속 알림, 10분 전 모든 팀원 대기 확인\n- 선교기간: 훈련기간과 동일, 선교사님들이 기다리는 일 없도록 철저히 관리',
      },
      {
        role: '라스트키퍼',
        main: '',
        sub: '',
        detail:
          '항상 팀의 마지막에 움직이며, 이동시 낙오자나 두고가는 물품이 없는지 확인\n- 인원체크: 모든 현장에서 가장 마지막 들어오고 나가며 인원 확인\n- 물품확인: 놓고가는 물품 꼼꼼히 확인, 이슈 발생시 팀장에게 최우선 보고',
      },
    ],
    jordan: [
      {
        role: '팀장',
        main: '위사은',
        sub: null,
        detail:
          '모든 일정 동안 팀 전체를 총괄하며 한국 본부와 현지 선생님들 사이에서 원활한 소통을 담당\n- 선교지의 소통: 훈련 및 선교기간 선교사님과 직접 소통\n- 교회와의 소통: 팀 훈련 상황 및 매일 1회 상황 보고\n- 태도와 자세: 선교사님의 지시와 일정 변동에 우선적으로 순종하며 팀을 이끔',
        merged: true,
      },
      {
        role: '부팀장',
        main: '',
        sub: '',
        detail:
          '팀장의 손과 발이 되며, 팀의 필요를 살피고, 팀장과 긴밀히 소통\n- 팀장 케어, 관리, 연락 등을 맡아서 분담하여 진행\n- 팀장을 적극적으로 돕고, 필요한 팀원 발견하며 상의 후 도움\n- 다같이 정돈하며 순종할 수 있도록 분위기 조성',
      },
      {
        role: '서기',
        main: '',
        sub: '',
        detail:
          '출발 전 모임부터 현지 일정까지 팀의 모든 활동을 기록\n- 훈련기간: 팀 모임 & 선교 준비 관련 모든 회의와 나눔 기록, 문서화\n- 선교기간: 선교지 모든 일정 기록, 귀국 후 모든 여정 정리',
      },
      {
        role: '회계',
        main: '',
        sub: '',
        detail:
          '팀장과 긴밀히 소통하며, 현지 선교사님을 섬기는 것을 1순위로 하여 재정 관리\n- 훈련기간: 팀 모임 & 선교 준비 재정 지출 관리, 예산안 & 결산안 작성\n- 선교기간: 현지 사역 관련 재정 지출 관리',
      },
      {
        role: '예배자',
        main: '',
        sub: '',
        detail:
          '팀원들이 하나님께 집중하며 예배할 수 있도록, 예배를 준비하고 인도\n- 팀 내에서 계속해서 예배로 분위기 조성\n- 예배를 위해 계속 중보하며 깨어서 관여하여 준비',
      },
      {
        role: '중보자',
        main: '',
        sub: '',
        detail:
          '팀의 모든 팀원들 & 현지 선교사님을 기도로 보호하며, 모든 일정을 위해 중보\n- 훈련기간: 기도 일정 관리, 모든 팀원 동참 독려, 영적 분위기 형성\n- 선교기간: 팀 기도 제목 작성, 현지 모든 상황 중보 기도',
      },
      {
        role: '하스피',
        main: '',
        sub: '',
        detail:
          '현지에서 필요한 물품 세밀하게 살피고, 물품을 준비하고 관리 (선물, 응급물품, 간식 등)\n- 팀장 및 회계와 긴밀히 협력하여 물품 준비 조율\n- 모든 물품은 리스트로 작성하여 체계적으로 관리',
      },
      {
        role: '미디어',
        main: '',
        sub: '',
        detail:
          '모든 순간을 기록하며, 영적인 메시지가 담긴 의미 있는 장면을 포착\n- 사진&영상 촬영 및 모임 기록 담당\n- 선교 후, 하이라이트 영상 제작',
      },
      {
        role: '타임키퍼',
        main: '',
        sub: '',
        detail:
          '철저히 시간을 관리\n- 훈련기간: 공지된 모임 시간 지속 알림, 10분 전 모든 팀원 대기 확인\n- 선교기간: 훈련기간과 동일, 선교사님들이 기다리는 일 없도록 철저히 관리',
      },
      {
        role: '라스트키퍼',
        main: '',
        sub: '',
        detail:
          '항상 팀의 마지막에 움직이며, 이동시 낙오자나 두고가는 물품이 없는지 확인\n- 인원체크: 모든 현장에서 가장 마지막 들어오고 나가며 인원 확인\n- 물품확인: 놓고가는 물품 꼼꼼히 확인, 이슈 발생시 팀장에게 최우선 보고',
      },
    ],
  };

  const currentTeamData = teamData[selectedTeam] || teamData.jordan;

  return (
    <PageLayout title="팀 빌딩" showTeamTabs={true}>
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        {/* 역할 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full" style={{ wordBreak: 'keep-all' }}>
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th
                  rowSpan={2}
                  className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white w-32 border-r border-gray-300 dark:border-gray-600"
                >
                  역할
                </th>
                <th
                  colSpan={2}
                  className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                >
                  담당
                </th>
                <th
                  rowSpan={2}
                  className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white"
                >
                  상세내용
                </th>
              </tr>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white w-40">
                  정
                </th>
                <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white w-40 border-r border-gray-300 dark:border-gray-600">
                  부
                </th>
              </tr>
            </thead>
            <tbody>
              {currentTeamData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-[#333333] last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
                >
                  <td className="px-4 py-4 text-sm font-semibold text-gray-900 dark:text-white text-center border-r border-gray-300 dark:border-gray-600">
                    {item.role}
                  </td>
                  {item.merged ? (
                    <td
                      colSpan={2}
                      className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 text-center border-r border-gray-300 dark:border-gray-600"
                    >
                      {item.main || '-'}
                    </td>
                  ) : (
                    <>
                      <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 text-center">
                        {item.main || '-'}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 text-center border-r border-gray-300 dark:border-gray-600">
                        {item.sub || '-'}
                      </td>
                    </>
                  )}
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300 text-left" style={{ whiteSpace: 'pre' }}>
                    {item.detail ? (
                      <>
                        {item.detail.split('\n')[0] && (
                          <>
                            <strong className="font-bold">
                              {item.detail.split('\n')[0]}
                            </strong>
                            {'\n'}
                          </>
                        )}
                        {item.detail.split('\n').slice(1).join('\n')}
                      </>
                    ) : (
                      '-'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}

export default Building;
