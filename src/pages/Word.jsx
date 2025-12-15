import PageLayout from '../components/layout/PageLayout';
import { useTeam } from '../context/TeamContext';
import { BookOpen } from 'lucide-react';

function Word() {
  const { selectedTeam } = useTeam();

  return (
    <PageLayout title="말씀훈련" showTeamTabs={true}>
      <div className="space-y-6">
        {/* 1. 팀 훈련 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              팀 훈련
            </h2>
          </div>

          <div className="space-y-6">
            {/* 목표 */}
            <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                훈련 목표
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• 하루에 말씀 5장 읽기</p>
                <p>• 말씀 묵상하기</p>
              </div>
            </div>

            {/* 세부 내용 */}
            <div className="space-y-4">
              <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. 말씀 읽기
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  동일한 본문을 읽을지 or 분량만 맞추지 결정하여 진행합니다
                </p>
              </div>

              <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. 말씀 묵상
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  동일한 본문으로 진행합니다 (팀별로 교재 혹은 본문을 정하여
                  진행)
                </p>
              </div>

              <div className="p-5 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. 크로스체크
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  크로스체크를 통하여, 서로의 말씀훈련을 돕습니다
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 말씀 읽기 표 */}
        {selectedTeam === 'jordan' && (
          <>
            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  말씀 묵상
                </h2>
              </div>

              <div className="overflow-x-auto">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  12월
                </h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-[#2d2d2d]">
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-red-600 dark:text-red-400">
                        일
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-900 dark:text-white">
                        월
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-900 dark:text-white">
                        화
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-900 dark:text-white">
                        수
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-900 dark:text-white">
                        목
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-900 dark:text-white">
                        금
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-900 dark:text-white">
                        토
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1주차 */}
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center" />
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          1
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수1:1-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          2
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수1:10-18
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          3
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수2:1-7
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          4
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수2:8-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          5
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수2:15-24
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          6
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수3:1-8
                        </div>
                      </td>
                    </tr>
                    {/* 2주차 */}
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400">
                          7
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수3:9-17
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          8
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수4:1-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          9
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수4:15-5:1
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          10
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수5:2-15
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          11
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수6:1-14
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          12
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수6:15-27
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          13
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수7:1-15
                        </div>
                      </td>
                    </tr>
                    {/* 3주차 */}
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400">
                          14
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수7:16-26
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          15
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수8:1-9
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          16
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수8:10-23
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          17
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수8:24-35
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          18
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수9:1-15
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          19
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수9:16-27
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          20
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수10:1-14
                        </div>
                      </td>
                    </tr>
                    {/* 4주차 */}
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-red-600 dark:text-red-400">
                          21
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수10:15-28
                        </div>
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center">
                        <div className="font-bold text-gray-900 dark:text-white">
                          22
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          수10:29-43
                        </div>
                      </td>
                      <td
                        className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-center"
                        colSpan={5}
                      >
                        <div className="font-bold text-gray-900 dark:text-white">
                          23
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
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
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    성경 읽기
                  </h2>
                </div>

                {/* 12월 */}
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    12월
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
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
                            1<br />
                            롬1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            2<br />
                            롬6-10
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            3<br />
                            롬11-15
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            4<br />
                            롬16,고전1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            5<br />
                            고전5-9
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            6<br />
                            고전10-14
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            7<br />
                            고전15-16,
                            <br />
                            고후1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            8<br />
                            고후4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            9<br />
                            고후9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            10
                            <br />
                            갈1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            11
                            <br />
                            갈6,엡1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            12
                            <br />
                            엡5-6,
                            <br />
                            빌1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            13
                            <br />
                            빌4,골1-4
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            14
                            <br />
                            살전1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            15
                            <br />
                            살후1-3,
                            <br />
                            딤전1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            16
                            <br />
                            딤전3-6,
                            <br />
                            딤후1
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            17
                            <br />
                            딤후2-4,
                            <br />
                            딛1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            18
                            <br />
                            딛3,몬1,
                            <br />
                            히1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            19
                            <br />
                            히4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            20
                            <br />
                            히9-13
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            21
                            <br />
                            롬1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            22
                            <br />
                            롬6-10
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            23
                            <br />
                            롬11-15
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            24
                            <br />
                            롬16,
                            <br />
                            고전1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            25🎄
                            <br />
                            고전5-9
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            26
                            <br />
                            고전10-14
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            27
                            <br />
                            고전15-16,
                            <br />
                            고후1-3
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            28
                            <br />
                            고후4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            29
                            <br />
                            고후9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            30
                            <br />
                            갈1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            31
                            <br />
                            갈6,엡1-4
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
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    1월
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
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
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center" />
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            1<br />
                            엡5-6,
                            <br />
                            빌1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            2<br />
                            빌4,골1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            3<br />
                            살전1-5
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            4<br />
                            살후1-3,
                            <br />
                            딤전1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            5<br />
                            딤전3-6,
                            <br />
                            딤후1
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            6<br />
                            딤후2-4,
                            <br />
                            딛1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            7<br />
                            딛3,몬1,
                            <br />
                            히1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            8<br />
                            히4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            9<br />
                            히9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            10
                            <br />
                            롬1-5
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            11
                            <br />
                            롬6-10
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            12
                            <br />
                            롬11-15
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            13
                            <br />
                            롬16,
                            <br />
                            고전1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            14
                            <br />
                            고전5-9
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            15
                            <br />
                            고전10-14
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            16
                            <br />
                            고전15-16,
                            <br />
                            고후1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            17
                            <br />
                            고후4-8
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            18
                            <br />
                            고후9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            19
                            <br />
                            갈1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            20
                            <br />
                            갈6,엡1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            21
                            <br />
                            엡5-6,
                            <br />
                            빌1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            22
                            <br />
                            빌4,골1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            23
                            <br />
                            살전1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            24
                            <br />
                            살후1-3,
                            <br />
                            딤전1-2
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            25
                            <br />
                            딤전3-6,
                            <br />
                            딤후1
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            26
                            <br />
                            딤후2-4,
                            <br />
                            딛1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            27
                            <br />
                            딛3,몬1,
                            <br />
                            히1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            28
                            <br />
                            히4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            29
                            <br />
                            히9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            30
                            <br />
                            롬1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            31
                            <br />
                            롬6-10
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 2월 */}
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    2월
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
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
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            1<br />
                            롬11-15
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            2<br />
                            롬16,
                            <br />
                            고전1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            3<br />
                            고전5-9
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            4<br />
                            고전10-14
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            5<br />
                            고전15-16,
                            <br />
                            고후1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            6<br />
                            고후4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            7<br />
                            고후9-13
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            8<br />
                            갈1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            9<br />
                            갈6,엡1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            10
                            <br />
                            엡5-6,
                            <br />
                            빌1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            11
                            <br />
                            빌4,골1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            12
                            <br />
                            살전1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            13
                            <br />
                            살후1-3,
                            <br />
                            딤전1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            14
                            <br />
                            딤전3-6,
                            <br />
                            딤후1
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            15
                            <br />
                            딤후2-4,
                            <br />
                            딛1-2
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            16
                            <br />
                            딛3,몬1,
                            <br />
                            히1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            17
                            <br />
                            히4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            18
                            <br />
                            히9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            19
                            <br />
                            롬1-5
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            20
                            <br />
                            롬6-10
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            21
                            <br />
                            롬11-15
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center text-red-600 dark:text-red-400">
                            22
                            <br />
                            롬16,
                            <br />
                            고전1-4
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            23
                            <br />
                            고전5-9
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            24
                            <br />
                            고전10-14
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            25
                            <br />
                            고전15-16,
                            <br />
                            고후1-3
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            26
                            <br />
                            고후4-8
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            27
                            <br />
                            고후9-13
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-2 py-2 text-center">
                            28
                            <br />
                            갈1-5
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
}

export default Word;
