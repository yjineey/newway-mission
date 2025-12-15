import PageLayout from '../components/layout/PageLayout'

function Missions() {
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
            '  (반드시 알아야할 문화적인 내용은 모두 숙지합니다)',
            '• 12월 둘째주, 평일 팀모임시 "예배&기도"후 내용 쉐어합니다',
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
            '',
            '아랍어 찬양 참고 (수원하나교회)',
            '• 풀세션 ver',
            '• 어쿠스틱 ver',
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
            '12/25(목) 예배후, 진행되는 바자회의 수익금이 선교지로 플로잉 될 예정입니다.',
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
          title: '1. 파송식 - 이집트팀 (1/11 주일예배)',
          items: ['(1) 팀 소개 (구호 및 인사)', '(2) 팀 사역안내 및 기도요청'],
        },
        {
          title: '2. 출정식 - 4개팀 전체 (1/11 선교스쿨 강의후)',
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
  ]

  return (
    <PageLayout title="팀미션" showTeamTabs={true}>
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          팀 미션 (WEEK 1-6)
        </h2>

        <div className="space-y-6">
          {missionData.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0">
                  <div className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold text-sm">
                    {item.week}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
                    {item.period}
                  </div>
                </div>
                <div className="flex-1">
                  {item.mission && (
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
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
                          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 whitespace-pre-line">
                            {detail.items.map((line, lIndex) => (
                              <p key={lIndex}>{line}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default Missions
