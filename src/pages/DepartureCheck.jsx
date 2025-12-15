import PageLayout from '../components/layout/PageLayout'

function DepartureCheck() {
  return (
    <PageLayout title="출발체크" showTeamTabs={true}>
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          출발 전 준비사항
        </h2>

        <div className="space-y-4">
          {/* 1. 항공권 및 여권 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                항공권 및 여권 관리
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>• 비행기 e-ticket 및 여권 사본은 팀장이 취합하여 가지고 있습니다</p>
                <p>• 출발 전 개인별 항공권 정보 재확인 (리마인드)</p>
              </div>
            </div>
          </div>

          {/* 2. 여행자 보험 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                여행자 보험
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                여행자 보험은 팀별로 가입을 진행해주세요
              </p>
            </div>
          </div>

          {/* 3. 상비약 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                상비약 준비
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>• 팀 내에서 기본 상비약을 챙기되, 개인 필수 약품은 개인이 챙기도록 합니다</p>
                <p>• 약 담당 팀원 지정 필요</p>
              </div>
            </div>
          </div>

          {/* 4. 휴대전화 로밍/유심 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              4
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                휴대전화 로밍 / 유심 구매
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p className="font-semibold">• 팀장님만 진행합니다</p>
                <div className="pl-4 space-y-1 text-xs">
                  <p>- 사역을 마친 후 숙소에서 가족에게 간단한 안부 전하는 것은 가능하지만, 필요한 경우에만 진행</p>
                  <p>- 사역 중에는 WIFI 가능 지역에서도 휴대전화를 사용하지 않습니다</p>
                  <p>- 선교지에서의 SNS 업로드는 금지합니다</p>
                  <p>- 현지인들과 SNS 친구 추가를 하지 않습니다</p>
                  <p>- 현지인들과 약속을 잡거나, 연락처를 주고 받지 않습니다</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    → "한국에 오세요, 다음에 또 올께요" 금지
                  </p>
                  <p className="text-red-600 dark:text-red-400">
                    ⚠ 우리는 돌아오면 끝이지만, 현지 선교사님들에게 데미지가 갈 수 있습니다. 꼭 유의해주세요
                  </p>
                  <p>- 현지에서 예비하신 은혜를 누리고, 영혼을 섬기는 일에 집중해주세요</p>
                  <p>- 중간에 급한 일로 본국과의 연락이 필요할 경우, 반드시 팀장님께 의논하고 팀장님 허락하에 가능</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. 공항 및 공공장소 주의사항 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              5
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                공항 및 공공장소 주의사항
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>• 공항 및 공공 장소 그리고 모든 사역지에서는 혼자 다니지 않습니다</p>
                <p>• 이동시 반드시 팀장에게 소통하고, 화장실은 꼭 2명씩 다녀오세요</p>
              </div>
            </div>
          </div>

          {/* 6. 면세점 사용 금지 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              6
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                면세점 사용 금지
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>• 선교에 집중해주시고, 재정이 어려운 지체를 돕거나 선교지를 돕는 일에 재정을 사용해주세요</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  ※ 현지에서 출국할 때에도, 면세점 사용을 금지합니다
                </p>
              </div>
            </div>
          </div>

          {/* 7. 개인 용돈 */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
              7
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                개인 용돈 관리
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p>• 개인 용돈은 가급적 사용하지 않습니다</p>
                <p>• 개인 지출 필요시, 반드시 팀장과 소통하고 팀장의 결정에 따릅니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DepartureCheck

