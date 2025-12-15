import PageLayout from '../components/layout/PageLayout';

function TeamTraining() {
  return (
    <PageLayout title="팀 훈련">
      {/* 팀 훈련 지침 */}
      <div>
        <div className="space-y-4">
          {/* 피드백 내용 */}
          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              강의 피드백 내용
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>1) 내용요약</p>
              <p>2) 느낀점</p>
              <p>3) 적용</p>
            </div>
          </div>

          {/* 작성 형식 */}
          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              작성 형식
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>• A4 용지 1~2페이지 이내</p>
              <p>• 폰트사이즈: 11pt / 줄간격: 1.2</p>
              <p>• 파일명: "단기선교기_본인이름" 으로 작성</p>
              <p>• "PDF" 파일로 제출</p>
            </div>
          </div>

          {/* 제출 기한 - 스텝 형식 */}
          <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              제출 기한
            </h3>
            <div className="space-y-4">
              {/* 1단계: 팀원 → 팀장 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
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
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
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
      </div>
    </PageLayout>
  );
}

export default TeamTraining;
