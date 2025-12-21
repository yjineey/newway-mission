import PageLayout from '../components/layout/PageLayout';
import TrainingTabs from '../components/common/TrainingTabs';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

function TrainingSchedule() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'worship';
  const [trainingTab, setTrainingTab] = useState(tabFromUrl); // 예배/말씀/기도 탭
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false); // 훈련지침 드롭다운
  const [isEgyptOpen, setIsEgyptOpen] = useState(false); // 이집트 드롭다운
  const [isJordanOpen, setIsJordanOpen] = useState(true); // 요르단 드롭다운 (기본 열림)

  // URL 쿼리 파라미터가 변경되면 탭 업데이트
  useEffect(() => {
    const tab = searchParams.get('tab') || 'worship';
    if (tab === 'worship' || tab === 'word' || tab === 'prayer') {
      setTrainingTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setTrainingTab(tab);
    setSearchParams({ tab });
  };

  // 예배훈련 내용
  const renderWorshipContent = () => (
    <div className="space-y-6">
      {/* 목표 */}
      <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          훈련 지침
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          모든 공예배 필참 (주일 예배, 금요 예배, 각 교회별로 진행되어지는 모든
          예배)
        </p>
      </div>

      {/* 세부 내용 */}
      <div className="space-y-4">
        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            1. 공예배 참석 못할 시
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            끝지 못할 사정으로 공예배 참석하지 못하는 경우 발생 시, 온라인으로
            다시 예배를 드리고 예배 피드백을 제출합니다
          </p>
        </div>

        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            2. 예배 피드백
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>• 1) 내용요약</p>
            <p>• 2) 느낀점</p>
            <p>• 3) 적용</p>
          </div>
        </div>

        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
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

        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
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
  );

  // 기도훈련 내용
  const renderPrayerContent = () => (
    <div className="space-y-6">
      {/* 목표 */}
      <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          훈련 지침
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>• 성전 기도 (주 3회)</p>
          <p>• 팀 기도 모임 (주 1회 함께 모여서)</p>
        </div>
      </div>

      {/* 세부 내용 */}
      <div className="space-y-4">
        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            1. 기도 시간
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            개인기도와 팀기도모임은 최소 1시간 이상으로 작성하십시오
          </p>
        </div>

        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            2. 크로스체크
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            크로스체크를 통하여, 서로의 기도훈련을 돕습니다
          </p>
        </div>

        <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
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
  );

  // 말씀훈련 내용
  const renderWordContent = () => (
    <div className="space-y-6">
      {/* 훈련 지침 드롭다운 */}
      <div className="bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333] overflow-hidden">
        <button
          onClick={() => setIsGuidelinesOpen(!isGuidelinesOpen)}
          className="w-full p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#333333] transition-colors"
        >
          <span className="font-bold text-gray-900 dark:text-white">
            훈련 지침
          </span>
          {isGuidelinesOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {isGuidelinesOpen && (
          <div className="px-5 pb-5 space-y-4">
            {/* 훈련 지침 텍스트 */}
            <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333] mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                훈련 지침
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• 하루에 말씀 5장 읽기</p>
                <p>• 말씀 묵상하기</p>
              </div>
            </div>

            {/* 세부 내용 카드들 */}
            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. 말씀 읽기
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  동일한 본문을 읽을지 or 분량만 맞추지 결정하여 진행합니다
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. 말씀 묵상
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  동일한 본문으로 진행합니다 (팀별로 교재 혹은 본문을 정하여
                  진행)
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333]">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. 크로스체크
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  크로스체크를 통하여, 서로의 말씀훈련을 돕습니다
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 이집트 드롭다운 */}
      {/* <div className="bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333] overflow-hidden">
        <button
          onClick={() => setIsEgyptOpen(!isEgyptOpen)}
          className="w-full p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#333333] transition-colors"
        >
          <span className="font-bold text-gray-900 dark:text-white">
            이집트
          </span>
          {isEgyptOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {isEgyptOpen && (
          <div className="px-5 pb-5">
            <div className="p-5 bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333] mt-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                이집트 팀 말씀 훈련 내용이 여기에 표시됩니다.
              </div>
            </div>
          </div>
        )}
      </div> */}

      {/* 요르단 드롭다운 */}
      {/* <div className="bg-white dark:bg-[#2d2d2d] rounded-xl border border-gray-200 dark:border-[#333333] overflow-hidden">
        <button
          onClick={() => setIsJordanOpen(!isJordanOpen)}
          className="w-full p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#333333] transition-colors"
        >
          <span className="font-bold text-gray-900 dark:text-white">
            요르단
          </span>
          {isJordanOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {isJordanOpen && (
          <div className="px-5 pb-5 space-y-6"> */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-bold text-gray-900 dark:text-white">
              말씀 묵상
            </h2>
          </div>

          <div className="overflow-x-auto">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              12월
            </h3>
            <table
              className="w-full border-collapse"
              style={{ wordBreak: 'keep-all' }}
            >
              <thead>
                <tr className="bg-gray-200 dark:bg-[#2d2d2d]">
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-red-600 dark:text-red-400">
                    일
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-gray-900 dark:text-white">
                    월
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-gray-900 dark:text-white">
                    화
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-gray-900 dark:text-white">
                    수
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-gray-900 dark:text-white">
                    목
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-gray-900 dark:text-white">
                    금
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-xs font-bold text-gray-900 dark:text-white">
                    토
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 1주차 */}
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center" />
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      1
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수1:1-9
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      2
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수1:10-18
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      3
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수2:1-7
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      4
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수2:8-14
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      5
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수2:15-24
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      6
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수3:1-8
                    </div>
                  </td>
                </tr>
                {/* 2주차 */}
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-red-600 dark:text-red-400">
                      7
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수3:9-17
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      8
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수4:1-14
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      9
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수4:15-5:1
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      10
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수5:2-15
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      11
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수6:1-14
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      12
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수6:15-27
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      13
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수7:1-15
                    </div>
                  </td>
                </tr>
                {/* 3주차 */}
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-red-600 dark:text-red-400">
                      14
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수7:16-26
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      15
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수8:1-9
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      16
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수8:10-23
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      17
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수8:24-35
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      18
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수9:1-15
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      19
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수9:16-27
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      20
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수10:1-14
                    </div>
                  </td>
                </tr>
                {/* 4주차 */}
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-red-600 dark:text-red-400">
                      21
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수10:15-28
                    </div>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      22
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      수10:29-43
                    </div>
                  </td>
                  <td
                    className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center"
                    colSpan={5}
                  >
                    <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      23
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      12월 1주차 시작
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">
                성경 읽기
              </h2>
            </div>

            {/* 12월 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                12월
              </h3>
              <div className="overflow-x-auto">
                <table
                  className="w-full border-collapse"
                  style={{ wordBreak: 'keep-all' }}
                >
                  <thead>
                    <tr className="bg-gray-200 dark:bg-[#2d2d2d]">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-red-600 dark:text-red-400">
                        주일
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        월
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        화
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        수
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        목
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        금
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        토
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          1
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          2
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬6-10
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          3
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬11-15
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          4
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬16,고전1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          5
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전5-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          6
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전10-14
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          7
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전15-16,
                          <br />
                          고후1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          8
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          9
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          10
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          11
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈6,엡1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          12
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          엡5-6,
                          <br />
                          빌1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          13
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          빌4,골1-4
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          14
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살전1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          15
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살후1-3,
                          <br />
                          딤전1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          16
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤전3-6,
                          <br />
                          딤후1
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          17
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤후2-4,
                          <br />
                          딛1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          18
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딛3,몬1,
                          <br />
                          히1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          19
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          20
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히9-13
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          21
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          22
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬6-10
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          23
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬11-15
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          24
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬16,
                          <br />
                          고전1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          25
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전5-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          26
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전10-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          27
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전15-16,
                          <br />
                          고후1-3
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          28
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          29
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          30
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          31
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈6,엡1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1월 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                1월
              </h3>
              <div className="overflow-x-auto">
                <table
                  className="w-full border-collapse"
                  style={{ wordBreak: 'keep-all' }}
                >
                  <thead>
                    <tr className="bg-gray-200 dark:bg-[#2d2d2d]">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-red-600 dark:text-red-400">
                        주일
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        월
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        화
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        수
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        목
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        금
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        토
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300 whitespace-nowrap [&_td]:font-normal [&_td>*:first-child]:font-bold">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          1
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          엡5-6,
                          <br />
                          빌1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          2
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          빌4,골1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          3
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살전1-5
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          4
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살후1-3,
                          <br />
                          딤전1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          5
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤전3-6,
                          <br />
                          딤후1
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          6
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤후2-4,
                          <br />
                          딛1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          7
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딛3,몬1,
                          <br />
                          히1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          8
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          9
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          10
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬1-5
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          11
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬6-10
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          12
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬11-15
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          13
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬16,
                          <br />
                          고전1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          14
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전5-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          15
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전10-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          16
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전15-16,
                          <br />
                          고후1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          17
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후4-8
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          18
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          19
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          20
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈6,엡1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          21
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          엡5-6,
                          <br />
                          빌1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          22
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          빌4,골1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          23
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살전1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          24
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살후1-3,
                          <br />
                          딤전1-2
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          25
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤전3-6,
                          <br />
                          딤후1
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          26
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤후2-4,
                          <br />
                          딛1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          27
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딛3,몬1,
                          <br />
                          히1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          28
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          29
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          30
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          31
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬6-10
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2월 */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                2월
              </h3>
              <div className="overflow-x-auto">
                <table
                  className="w-full border-collapse"
                  style={{ wordBreak: 'keep-all' }}
                >
                  <thead>
                    <tr className="bg-gray-200 dark:bg-[#2d2d2d]">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-red-600 dark:text-red-400">
                        주일
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        월
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        화
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        수
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        목
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        금
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-gray-900 dark:text-white">
                        토
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          1
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬11-15
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          2
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬16,
                          <br />
                          고전1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          3
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전5-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          4
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전10-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          5
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전15-16,
                          <br />
                          고후1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          6
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          7
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후9-13
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          8
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          9
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈6,엡1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          10
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          엡5-6,
                          <br />
                          빌1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          11
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          빌4,골1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          12
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살전1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          13
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          살후1-3,
                          <br />
                          딤전1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          14
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤전3-6,
                          <br />
                          딤후1
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          15
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딤후2-4,
                          <br />
                          딛1-2
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          16
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          딛3,몬1,
                          <br />
                          히1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          17
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          18
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          히9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          19
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬1-5
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          20
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬6-10
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          21
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬11-15
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                          22
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          롬16,
                          <br />
                          고전1-4
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          23
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전5-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          24
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전10-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          25
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고전15-16,
                          <br />
                          고후1-3
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          26
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후4-8
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          27
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          고후9-13
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                        <div className="font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          28
                        </div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          갈1-5
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )}
      </div> */}
    </div>
  );

  return (
    <PageLayout title="훈련지침" showTeamTabs={false}>
      <TrainingTabs selectedTab={trainingTab} onTabChange={handleTabChange} />
      <div className="space-y-6">
        {trainingTab === 'worship' && renderWorshipContent()}
        {trainingTab === 'word' && renderWordContent()}
        {trainingTab === 'prayer' && renderPrayerContent()}
      </div>
    </PageLayout>
  );
}

export default TrainingSchedule;
