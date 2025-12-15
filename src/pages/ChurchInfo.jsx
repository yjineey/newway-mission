import PageLayout from '../components/layout/PageLayout';
import { MapPin, Phone, Mail, CreditCard } from 'lucide-react';

function ChurchInfo() {
  return (
    <PageLayout title="교회 소개">
      <div className="space-y-6">
        {/* 인사말 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            인사말
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="font-semibold text-gray-900 dark:text-white">
              조승현 목사
            </p>
            <p>
              성경은 마지막 때를 향하여 갈수록 사랑이 식어져 갈 것이라고 이야기
              하고 있습니다. 하지만, 이 땅을 살아가는 우리에게 주신 가장 큰
              계명은 우리의 마음을 다하고 뜻을 다하고 힘을 다하여 우리 하나님을
              사랑하고 내 이웃을 내 몸과 같이 사랑하는 것입니다.
            </p>
            <p>
              뉴웨이교회는 주님이 원하시는 때에, 주님이 원하시는 것을 드리며
              주님의 마음을 시원케 해드리는 교회로 일어나기를 소망합니다. 능력의
              많고 적음에서 비롯된 것이 아닌, 하나님을 전심으로 사랑하는 그
              마음이 우리의 원동력이 될 것입니다.
            </p>
            <p className="text-sm italic text-gray-500 dark:text-gray-400">
              "주의 권능의 날에 주의 백성이 거룩한 옷을 입고 즐거이 헌신하니
              새벽 이슬 같은 주의 청년들이 주께 나오는도다" (시편 110:3)
            </p>
            <p>
              기쁨과 즐거움으로 예수 그리스도를 따르는 무리가 아닌 제자된 교회로
              일어나기를 소망합니다. 이 시대와 세대를 향하신 하나님의 꿈이
              이루어지고 완성되어지기까지, 우리는 이 걸음을 멈추지 않을
              것입니다.
            </p>
          </div>
        </div>

        {/* 뉴웨이 핵심 가치 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            뉴웨이 핵심 가치
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* LOVING GOD */}
            <div className="p-6 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                  LOVING
                </h3>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  GOD
                </h3>
                <div className="border-t border-gray-200 dark:border-[#333333] pt-4">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    하나님을 사랑하는 교회
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-[#333333] pt-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  내가 여호와께 바라는 한 가지 일 그것을 구하리니 곧 내가 내
                  평생에 여호와의 집에 살면서 여호와의 아름다움을 바라보며 그의
                  성전에서 사모하는 그것이라 (시편 27:4)
                </p>
              </div>
            </div>

            {/* BODY OF CHRIST */}
            <div className="p-6 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                  BODY OF
                </h3>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  CHRIST
                </h3>
                <div className="border-t border-gray-200 dark:border-[#333333] pt-4">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    하나되기를 힘써 지키는 교회
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-[#333333] pt-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  평안의 매는 줄로 성령이 하나 되게 하신 것을 힘써 지키라 몸이
                  하나요 성령도 한 분이시니 이와 같이 너희가 부르심을 한 소망
                  안에서 부르심을 받았느니라 (에베소서 4:3-4)
                </p>
              </div>
            </div>

            {/* SERVING ALL NATIONS */}
            <div className="p-6 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                  SERVING ALL
                </h3>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  NATIONS
                </h3>
                <div className="border-t border-gray-200 dark:border-[#333333] pt-4">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    열방을 섬기고 먹이는 교회
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-[#333333] pt-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  너희 중에 분깃이나 기업이 없는 레위인과 네 성중에 거류하는
                  객과 및 고아와 과부들이 와서 먹고 배부르게 하라 그리하면 네
                  하나님 여호와께서 네 손으로 하는 범사에 네게 복을 주시리라
                  (신명기 14:29)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 예배 시간 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            예배 시간
          </h2>

          {/* 주일 */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 px-1">
              주일
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  주일예배
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  주일 오전 11시 30분
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  키즈예배
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  주일 오전 10시
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  걸음마예배
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  주일 오전 10시
                </p>
              </div>
            </div>
          </div>

          {/* 주중 */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 px-1">
              주중
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  기도의 집
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  화/수/목 오후 8시
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  금요예배
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  금요일 오후 8시
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg opacity-0 pointer-events-none">
                {/* 빈칸 */}
              </div>
            </div>
          </div>
        </div>

        {/* 연락처 정보 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            연락처
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  주소
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  서울특별시 강서구 화곡로 64길 67 뉴웨이교회
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  전화
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  070-4047-0478
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  이메일
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  newwaychurchkr@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  온라인 헌금
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  국민은행 718201-01-219521 (뉴웨이교회)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ChurchInfo;
