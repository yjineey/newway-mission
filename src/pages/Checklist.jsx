import PageLayout from '../components/layout/PageLayout';
import ChecklistTabs from '../components/common/ChecklistTabs';
import { useState } from 'react';

function Checklist() {
  const [selectedTab, setSelectedTab] = useState('departure');

  const renderContent = () => {
    if (selectedTab === 'departure') {
      return (
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            출발 전 준비사항
          </h2>

          <div className="space-y-4">
            {/* 5) 팀 준비사항 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  팀 준비사항
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>
                    • 모든 준비 진행 시, 사역자와 세밀하게 소통할 수 있도록
                    합니다 (진행 관련하여, 사역자가 모르는 것이 없어야 합니다)
                  </p>
                  <p>
                    • 모든 준비 진행 시, 개인이 단독으로 결정하지 않고 팀장 &
                    사역자와 반드시 소통합니다
                  </p>
                </div>
              </div>
            </div>

            {/* 항공권 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  항공권
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>1. 항공권 구매 시, 수화물 허용 무게에 대해 확인해주세요</p>
                  <div className="pl-4 space-y-1 text-xs">
                    <p>
                      ① 하스피 담당자는 팀원 전체의 수화물 총량을 파악하여, 짐
                      패킹에 대비합니다
                    </p>
                    <div className="pl-4 space-y-1">
                      <p>
                        a. 구매한 항공권의 종류에 따라, 수화물 무게가 달라질 수
                        있습니다
                      </p>
                      <p>
                        b. 수화물의 총량으로 체크하는 항공사와 수화물의 무게별로
                        체크하는 항공사가 각각 있습니다. 미리 파악해주세요
                      </p>
                    </div>
                  </div>
                  <p>
                    2. 출발 & 도착 날짜와 시간 및 항공편, 여권 등의 이슈를 잘
                    확인해주세요
                  </p>
                </div>
              </div>
            </div>

            {/* 사역 준비 및 예산안 작성 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  사역 준비 및 예산안 작성
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>
                    1. 선교사님의 요청에 대하여, 능동적인 자세로 준비합니다
                    (선교사님의 필요를 최우선으로 합니다)
                  </p>
                  <p>
                    2. 선교사님들이 보내주신 체류비에 공용물품
                    (사역물품/선물비), 준비비, 예비비 등을 추가하여 전체 예산을
                    측정해봅니다
                  </p>
                  <p>
                    3. 선교사님들 선물은 공동 경비에서 같이 구매하도록 합니다
                    (개인이 준비하고 싶은 경우, 팀장과 소통하고 팀 차원으로
                    전달합니다)
                  </p>
                  <p>4. 팀 후원금 항목도 예산안에 모두 표시합니다</p>
                </div>
              </div>
            </div>

            {/* 선교사님 선물 준비 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  선교사님 선물 준비
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>
                    1. 기도하면서 선교사님들을 위한 작은 선물(편지 등)을
                    준비하는 것을 추천드립니다
                  </p>
                  <p className="pl-4">
                    ▶ 큰 위로와 관심 그리고 사랑이 전해집니다
                  </p>
                  <p>
                    2. 선교사님의 가정의 가족 관계를 미리 파악해주는 것을
                    추천합니다
                  </p>
                  <p className="pl-4">
                    ▶ 자녀들을 챙기는 것은 기쁨과 감동을 드릴 수 있는 좋은
                    방법입니다
                  </p>
                  <p>
                    3. 선교사님의 입장에서 생각해보고, 선교사님들이 필요하신
                    물건을 하나라도 더 가져가는 마음으로 준비해 주십시오
                  </p>
                </div>
              </div>
            </div>

            {/* 수화물/공용짐 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  수화물/공용짐
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>
                    1. 개인짐은 기내캐리어로 최소화합니다. 부치는 수화물은
                    최대한 공용짐으로 준비해주세요
                  </p>
                  <p>
                    2. 선물이나 공용물품들은 파손되지 않도록 뽁뽁이, 랩,
                    진공포장 등으로 잘 포장해주세요
                  </p>
                  <p>
                    3. 팀이 함께 교회에 모여 공용 짐을 포장합니다 (무게를 꼭
                    확인해주세요)
                  </p>
                  <p>
                    4. 냉장/냉동 식품은 출발 전날 공용 짐을 포장하면서 짐에 넣은
                    무게를 미리 확인하고, 다시 냉장/냉동 보관해주세요. 그리고
                    출발 직전에 다시 포장합니다
                  </p>
                  <p>
                    5. 하스피 팀원은 공용 짐 리스트에 누락이 없도록 꼼꼼히
                    체크합니다 (물품 리스트 & 무게 체크 등)
                  </p>
                  <p>
                    6. 공용 짐에는 각각 담당자를 배정하여, 자신의 짐처럼 끝까지
                    챙길 수 있도록 합니다
                  </p>
                  <p>
                    7. 우리 팀의 수화물임을 알아볼 수 있는 숫자 or 표식을 할 수
                    있도록 합니다
                  </p>
                </div>
              </div>
            </div>

            {/* 교회 출발 시 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  교회 출발 시
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>1. 모든 출발은 교회에서 할 수 있도록 합니다</p>
                  <p>
                    2. 출국 전, 반드시 조승현 목사님의 기도를 받고 출국할 수
                    있도록 합니다 (스케줄 사전에 조율하기)
                  </p>
                  <p>
                    3. 라이드는 팀 내에서 계획해주시고, 계획된 내용은 반드시
                    사전에 사역자에게 소통 후 조율할 수 있도록 합니다
                  </p>
                </div>
              </div>
            </div>

            {/* 출국시 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  출국 시
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>
                    1. 여권 확인: 유효 기간 확인 / 출발 당일에도 여권 소지했는지
                    반드시 확인 하기
                  </p>
                  <p className="pl-4 text-xs">
                    - 여권을 재발급 받았을 경우, 반드시 새 여권으로 챙깁니다
                    (여권 담당 팀원을 정하여 계속 리마인드)
                  </p>
                  <p>
                    2. 비행기 e-ticket 및 여권 사본은 팀장이 취합하여 가지고
                    있습니다
                  </p>
                  <p>3. 여행자 보험은 팀별로 가입을 진행해주세요</p>
                  <p>
                    4. 팀 내에서 기본 상비약을 챙기되, 개인 필수 약품은 개인이
                    챙기도록 합니다 (약 담당 팀원 지정)
                  </p>
                  <p>5. 휴대전화 로밍 / 유심 구매는 팀장님만 진행합니다</p>
                  <div className="pl-4 space-y-1 text-xs">
                    <p>
                      - 사역을 마친 후 숙소에서 가족에게 간단한 안부 전하는 것은
                      가능하지만, 필요한 경우에만 진행
                    </p>
                    <p>
                      - 사역 중에는 WIFI 가능 지역에서도 휴대전화를 사용하지
                      않습니다
                    </p>
                    <p>
                      - 선교지에서의 SNS 업로드는 금지합니다. 그리고 현지인들과
                      SNS 친구 추가를 하지 않습니다
                    </p>
                    <p>
                      - (현지인들과 약속을 잡거나, 연락처를 주고 받지 않습니다 -
                      '한국에 오세요, 다음에 또 올께요' 금지)
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ▶ 우리는 돌아오면 끝이지만, 현지 선교사님들에게 데미지가
                      갈 수 있습니다. 꼭 유의해주세요
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ▶ 그리고 현지에서 예비하신 은혜를 누리고, 영혼을 섬기는
                      일에 집중해주세요
                    </p>
                    <p>
                      - 중간에 급한 일로 본국과의 연락이 필요할 경우, 반드시
                      팀장님께 의논하고 팀장님 허락하에 가능
                    </p>
                  </div>
                  <p>
                    6. 공항 및 공공 장소 그리고 모든 사역지에서는 혼자 다니지
                    않습니다
                  </p>
                  <p className="pl-4 text-xs">
                    - 이동 시 반드시 팀장에게 소통하고, 화장실은 꼭 2명씩
                    다녀오세요
                  </p>
                  <p>7. 면세점 사용은 금지합니다</p>
                  <p className="pl-4 text-xs">
                    - 선교에 집중해주시고, 재정이 어려운 지체를 돕거나 선교지를
                    돕는 일에 재정을 사용해주세요
                  </p>
                  <p>8. 개인 용돈은 가급적 사용하지 않습니다</p>
                  <p className="pl-4 text-xs">
                    - 개인 지출 필요 시, 반드시 팀장과 소통하고 팀장의 결정에
                    따릅니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (selectedTab === 'afterDeparture') {
      return (
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            입/출국 주의사항
          </h2>

          <div className="space-y-4">
            {/* 1. 팀 나누기 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  선교지 보안상 너무 많은 인원이 같이 온 팀으로 보이면 안되기
                  때문에, 선교사님의 안내에 따라 일정 인원이 나누어서 다녀야 할
                  수 있습니다 (그럴 경우, 가급적 팀장과 부팀장으로 나누어서 다닐
                  수 있도록 하되 최종 결정은 팀장이 합니다)
                </p>
              </div>
            </div>

            {/* 2. 입국 시 답변 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>
                    선교지 입국 시, 방문 목적은 반드시 여행온 것으로 답변합니다.
                    수화물에 (선물로 준비한) 한국 음식이 많은 것에 대하여 질문을
                    받게 되면 꼭 한국 음식을 먹어야 한다는 식으로 대답할 수
                    있도록 합니다
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    - 영어를 잘하면 질문이 자세하게 올 수 있습니다. 영어를 어느
                    정도 못하는 척하는 것도 방법입니다
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
                  선교사님들께서 공항으로 픽업 나오실 때, 주차장에서 만나야 하는
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
                  <p>- 자신의 감정을 날 것 그대로 표현하지 않습니다.</p>
                  <div className="pl-4 space-y-1">
                    <p>
                      - 목사님: 사장님/대표님, 선교사님: 선생님,
                      형제&자매&집사님 등: 삼촌, 언니, 이모 등
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    - 팀장님의 경우, 선교사님들과의 소통 시 단어 사용에
                    유의해주세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (selectedTab === 'field') {
      return (
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            현지에서
          </h2>

          <div className="space-y-4">
            {/* 1. 시간 약속 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  선교지에서는 시간 약속을 더욱 잘 지켜야 합니다. 팀에 피해가
                  가지 않도록 타임키퍼를 통하여 시간을 엄수할 수 있도록 합니다.
                  절대 개별 행동을 하지 않습니다
                </p>
              </div>
            </div>

            {/* 2. 예배와 기도 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  매일 아침과 저녁으로 30분 동안 예배와 기도를 진행합니다
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

            {/* 4. 이슈 발생 시 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  개인적 이슈 및 팀 이슈 발생 시, 즉시 팀장과 소통할 수 있도록
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
      );
    }

    if (selectedTab === 'afterMinistry') {
      return (
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            사역 후
          </h2>

          <div className="space-y-4">
            {/* 1. 현지 출발 시 면세점 */}
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

            {/* 2. 한국 도착 시 */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  한국 도착 시, 교회에 와서 기도하고 모든 정리를 마치고 집으로
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
                <p className="text-sm text-gray-700 dark:text-gray-300 ">
                  단기 선교 후, 한 달 동안은 주 3회 이상 성전 기도를 사수하며
                  받은 은혜를 기억하고 살아냅니다
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <PageLayout title="체크리스트" showTeamTabs={false}>
      <ChecklistTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      {renderContent()}
    </PageLayout>
  );
}

export default Checklist;
