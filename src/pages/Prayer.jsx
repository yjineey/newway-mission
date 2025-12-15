import PageLayout from '../components/layout/PageLayout';
import { Church } from 'lucide-react';

function Prayer() {
  return (
    <PageLayout title="기도훈련">
      <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            기도 훈련
          </h2>
        </div>

        <div className="space-y-6">
          {/* 목표 */}
          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              훈련 목표
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>• 성전 기도 (주 3회)</p>
              <p>• 팀 기도 모임 (주 1회 함께 모여서)</p>
            </div>
          </div>

          {/* 세부 내용 */}
          <div className="space-y-4">
            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                1. 기도 시간
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                개인기도와 팀기도모임은 최소 1시간 이상으로 작성하십시오
              </p>
            </div>

            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                2. 크로스체크
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                크로스체크를 통하여, 서로의 기도훈련을 돕습니다
              </p>
            </div>

            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                3. 기도로 시작하고 마무리
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                모든 모임은 기도로 시작하고, 기도로 마무리 합니다
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                ☞ 다함께 통성기도로, 1명이 마무리 기도
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Prayer;
