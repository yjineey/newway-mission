import PageLayout from '../components/layout/PageLayout';

function Worship() {
  return (
    <PageLayout title="예배 훈련">
      <div className="space-y-6">
        {/* 목표 */}
        <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            훈련 목표
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            모든 공예배 필참 (주일예배, 금요예배, 각 교회별로 진행되어지는 모든
            예배)
          </p>
        </div>

        {/* 세부 내용 */}
        <div className="space-y-4">
          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              1. 공예배 참석 못할 시
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              끝지 못할 사정으로 공예배 참석하지 못하는 경우 발생시, 온라인으로
              다시 예배를 드리고 예배 피드백을 제출합니다
            </p>
          </div>

          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              2. 예배 피드백
            </h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>• 1) 내용요약</p>
              <p>• 2) 느낀점</p>
              <p>• 3) 적용</p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              3. 예배 피드백 제출
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              팀장에게 제출합니다
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              ☞ 팀장은 담당 사역자에게 제출 / 기한: 다음 강의 전일인 토요일까지
            </p>
          </div>

          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              4. "끝지 못할 사정" 소통
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              "끝지 못할 사정" 에 대해서는 반드시 팀장과 소통합니다
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              ☞ 팀장은 담당 사역자에게 보고
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Worship;
