import PageLayout from '../components/layout/PageLayout'

function FieldCheck() {
  return (
    <PageLayout title="현지체크" showTeamTabs={true}>
      <div className="space-y-6">
        {/* 출발 후 - 입/출국 주의사항 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            출발 후 - 입/출국 주의사항
          </h2>

          <div className="space-y-4">
            {/* 1. 팀 나누기 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  선교지 보안상 너무 많은 인원이 같이 온 팀으로 보이면 안되기 때문에,
                  선교사님의 안내에 따라 일정 인원이 나눠서 다녀야 할 수 있습니다
                  (그럴 경우, 가급적 팀장과 부팀장으로 나누어서 다닐 수 있도록 하되
                  최종 결정은 팀장이 합니다)
                </p>
              </div>
            </div>

            {/* 2. 입국시 답변 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>
                    선교지 입국시, 방문 목적은 반드시{' '}
                    <span className="font-bold text-gray-900 dark:text-white">
                      여행온 것으로 답변
                    </span>
                    합니다.
                  </p>
                  <p>
                    수화물에 (선물로 준비한) 한국 음식이 많은 것에 대하여 질문을
                    받게 되면 꼭 한국 음식을 먹어야 한다는 식으로 대답할 수
                    있도록 합니다
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    • 영어를 잘하면 질문이 자세하게 올 수 있습니다. 영어를
                    어느정도 못하는 척하는 것도 방법입니다
                  </p>
                </div>
              </div>
            </div>

            {/* 3. 공항 픽업 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  선교사님들께서 공항으로 픽업 나오실 때, 주차장에서 만나야하는
                  경우도 있습니다 (보안 이슈)
                </p>
              </div>
            </div>

            {/* 4. 용어 사용 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  선교지에서는 사용하는 용어와 말에 신경을 써야 합니다
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>• 자신의 감정을 날 것 그대로 표현하지 않습니다</p>
                  <div className="pl-4 space-y-1">
                    <p>- 목사님: 사장님/대표님</p>
                    <p>- 선교사님: 선생님</p>
                    <p>- 형제&자매&집사님 등: 삼촌, 언니, 이모 등</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    ※ 팀장님의 경우, 선교사님들과의 소통시 단어 사용에
                    유의해주세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 현지에서 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            현지에서
          </h2>

          <div className="space-y-4">
            {/* 1. 시간 약속 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>
                    선교지에서는 시간 약속을 더욱 잘 지켜야 합니다. 팀에 피해가
                    가지 않도록 타임키퍼를 통하여 시간을 엄수할 수 있도록
                    합니다.
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    절대 개별 행동을 하지 않습니다
                  </p>
                </div>
              </div>
            </div>

            {/* 2. 예배와 기도 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  매일 아침과 저녁으로 30분동안 예배와 기도를 진행합니다
                </p>
              </div>
            </div>

            {/* 3. 소통 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  본부와 현지 선생님들과의 소통은 반드시 팀장을 통해서만 합니다
                  (가벼운 대화 제외)
                </p>
              </div>
            </div>

            {/* 4. 이슈 발생시 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  개인적 이슈 및 팀 이슈 발생시, 즉시 팀장과 소통할 수 있도록
                  합니다
                </p>
              </div>
            </div>

            {/* 5. 말씀 묵상과 기도 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                5
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  현지에서도 말씀 묵상과 개인 기도의 시간을 반드시 가질 수
                  있도록 합니다
                </p>
              </div>
            </div>

            {/* 6. 영양제 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                6
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  비타민 C등 영양제를 잘 챙겨가서, 서로 지치지 않도록 챙겨
                  줍니다 (선교사님의 비타민까지 챙겨드리면 더욱 좋습니다)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 사역 후 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            사역 후
          </h2>

          <div className="space-y-4">
            {/* 1. 현지 출발시 면세점 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  현지에서 출국할 때에도, 면세점 사용을 금지합니다
                </p>
              </div>
            </div>

            {/* 2. 한국 도착시 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  한국 도착시, 교회에 와서 기도하고 모든 정리를 마치고 집으로
                  돌아갑니다
                </p>
              </div>
            </div>

            {/* 3. 간증 준비 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  모든 팀원이 단기 선교에 대한 간증을 준비할 수 있도록 합니다
                </p>
              </div>
            </div>

            {/* 4. 영상 제작 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  팀의 여정을 영상으로 제작하여 교회 광고로 공유할 수 있도록
                  합니다
                </p>
              </div>
            </div>

            {/* 5. 성전 기도 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                5
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  단기 선교 후, 한달 동안은 주 3회 이상 성전 기도를 사수하며
                  받은 은혜를 기억하고 살아냅니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default FieldCheck

