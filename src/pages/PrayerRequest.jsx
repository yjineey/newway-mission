import { useState, useEffect } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import WriteButton from '../components/board/WriteButton';
import ListItem from '../components/board/ListItem';
import EmptyState from '../components/board/EmptyState';
import { ChevronDown } from 'lucide-react';
import { getPosts } from '../services/postService';

function PrayerRequest() {
  const { selectedTeam } = useTeam();
  const [selectedCategory, setSelectedCategory] =
    useState('요르단 땅 위한 기도');
  const [prayerRequests, setPrayerRequests] = useState([]);

  // 요르단 팀원 목록 (가나다순)
  const categories = [
    '기도 무기',
    '요르단 땅 위한 기도',
    '선교사님을 위한 중보',
    '요르단 선교팀을 위한 중보',
    '요르단 사역을 위한 중보',
    // '위사은',
    // '양진',
    // '김난영',
    // '김주은',
    // '이종철',
    // '임지원',
    // '진민하',
    // '최정원',
  ];

  useEffect(() => {
    if (selectedTeam) {
      loadPrayerRequests();
    }
  }, [selectedTeam]);

  const loadPrayerRequests = async () => {
    try {
      const data = await getPosts('prayer-requests', selectedTeam);
      setPrayerRequests(data);
    } catch (error) {
      console.error('기도제목 로드 실패:', error);
    }
  };

  // 선택된 카테고리에 해당하는 기도제목 필터링
  const filteredPrayerRequests = prayerRequests.filter(
    (request) => request.subCategory === selectedCategory
  );

  // 기도 무기 성경 구절
  const prayerWeapons = [
    {
      verse: '마태복음 6:33',
      text: '그런즉 너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라',
    },
    {
      verse: '이사야 43:18–19',
      text: '18 너희는 이전 일을 기억하지 말며 옛날 일을 생각하지 말라\n19 보라 내가 새 일을 행하리니 이제 나타낼 것이라 너희가 그것을 알지 못하겠느냐 반드시 내가 광야에 길을 사막에 강을 내리니',
    },
    {
      verse: '스가랴 4:6–7',
      text: '6 그가 내게 대답하여 이르되 여호와께서 스룹바벨에게 하신 말씀이 이러하니라 만군의 여호와께서 말씀하시되 <strong>이는 힘으로 되지 아니하며 능력으로 되지 아니하고 오직 나의 영으로 되느니라</strong>\n7 큰 산아 네가 무엇이냐 네가 스룹바벨 앞에서 평지가 되리라 그가 머릿돌을 내놓을 때에 무리가 외치기를 은총, 은총이 그에게 있을지어다 하리라 하셨고',
    },
    {
      verse: '고린도후서 10:4–5',
      text: '4 <strong>우리의 싸우는 무기는 육신에 속한 것이 아니요 오직 어떤 견고한 진도 무너뜨리는 하나님의 능력</strong>이라\n5 모든 이론을 파하며 하나님 아는 것을 대적하여 높아진 것을 다 파하고 모든 생각을 사로잡아 그리스도에게 복종하게 하니',
    },
    {
      verse: '에베소서 6:10–20',
      text: '10 끝으로 너희가 주 안에서와 그 힘의 능력으로 강건하여지고\n11 마귀의 간계를 능히 대적하기 위하여 하나님의 전신 갑주를 입으라\n12 <strong>우리의 씨름은 혈과 육을 상대하는 것이 아니요 통치자들과 권세들과 이 어둠의 세상 주관자들과 하늘에 있는 악의 영들을 상대함이라</strong>\n<strong>13 그러므로 하나님의 전신 갑주를 취하라 이는 악한 날에 너희가 능히 대적하고 모든 일을 행한 후에 서기 위함이라</strong>\n14 그런즉 서서 진리로 너희 허리 띠를 띠고 의의 호심경을 붙이고\n15 평안의 복음이 준비한 것으로 신을 신고\n16 모든 것 위에 믿음의 방패를 가지고 이로써 능히 악한 자의 모든 불화살을 소멸하고\n17 구원의 투구와 성령의 검 곧 하나님의 말씀을 가지라\n18 모든 기도와 간구를 하되 항상 성령 안에서 기도하고 이를 위하여 깨어 구하기를 항상 힘쓰며 여러 성도를 위하여 구하라\n19 또 나를 위하여 구할 것은 내게 말씀을 주사 나로 입을 열어 복음의 비밀을 담대히 알리게 하옵소서 할 것이니\n20 이 일을 위하여 내가 쇠사슬에 매인 사신이 된 것은 나로 이 일에 당연히 할 말을 담대히 하게 하려 하심이라',
    },
    {
      verse: '사도행전 10:1–2',
      text: '1 가이사랴에 고넬료라 하는 사람이 있으니 이달리야 부대라 하는 군대의 백부장이라\n2 그가 경건하여 온 집안과 더불어 하나님을 경외하며 백성을 많이 구제하고 하나님께 항상 기도하더니',
    },
    {
      verse: '사도행전 4:31',
      text: '빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라',
    },
    {
      verse: '로마서 1:16',
      text: '개역개정\n내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력이 됨이라 먼저는 유대인에게요 그리고 헬라인에게로다\n\n새번역\n나는 복음을 부끄러워하지 않습니다. 이 복음은 유대 사람을 비롯하여 그리스 사람에게 이르기까지, 모든 믿는 사람을 구원하는 하나님의 능력입니다.',
    },
    {
      verse: '신명기 4:7',
      text: '<strong>우리가 기도할 때마다 가까이 다가오시는 우리 하나님 여호와</strong>께서 우리가 부를 때마다 우리에게 가까이 하심과 같이 자기들에게 가까이 하는 신이 어느 큰 나라에게 있느냐',
    },
    {
      verse: '사무엘상 17:45, 47',
      text: '45 다윗이 블레셋 사람에게 이르되 너는 칼과 창과 단창으로 내게 나아오거니와 <strong>나는 만군의 여호와의 이름 곧 네가 모욕하는 이스라엘 군대의 하나님의 이름으로 네게 나아가노라</strong>\n47 또 여호와의 구원하심이 칼과 창에 있지 아니함을 이 무리에게 알게 하리라 <strong>전쟁은 여호와께 속한 것인즉 그가 너희를 우리 손에 넘기시리라</strong>',
    },
    {
      verse: '고린도후서 3:17',
      text: '주는 영이시니 주의 영이 계신 곳에는 자유가 있느니라',
    },
  ];

  // 요르단 팀원 역할 정보 및 공통 기도 설명 (Building.jsx 기반, 정 역할과 부 역할 모두 포함)
  const jordanRoles = {
    '기도 무기': ['아래 말씀들을 붙잡고 기도해주시기 바랍니다'],
    '요르단 땅 위한 기도': ['요르단 땅을 위한 기도'],
    '선교사님을 위한 중보': ['선교사님을 위한 중보기도'],
    '요르단 선교팀을 위한 중보': ['요르단 선교팀을 위한 중보기도'],
    '요르단 사역을 위한 중보': ['요르단 사역을 위한 중보기도'],
    // 위사은: ['팀장'],
    // 양진: ['부팀장', '라스트키퍼'],
    // 김난영: ['서기', '타임키퍼', '중보자(부)', '미디어(부)'],
    // 김주은: ['중보자', '서기(부)', '미디어(부)'],
    // 이종철: ['예배자', '미디어(부)'],
    // 임지원: ['미디어', '예배자(부)'],
    // 진민하: ['회계', '하스피(부)'],
    // 최정원: ['하스피', '중보자(부)', '라스트키퍼(부)'],
  };

  // 중보기도 상세 내용
  const prayerContents = {
    '요르단 땅 위한 기도': `요르단의 영혼들이 하나님을 향한 경외의 마음을 회복하게 하시고, 오랫동안 막혀있던 요르단 하늘의 문을 여셔서 예배의 제단이 쌓이게 하시고, 그들이 다시 하나님께로 돌아오고 회복되고 치유되는 하나님의 놀라운 임재가 임하기를
요르단 땅에서 요르단을 지으신 하나님, 요르단의 주인 되신 하나님을 향한 찬양과 경배가 흘러넘쳐, 모든 혼돈이 질서로, 공허가 충만으로, 어둠이 빛으로, 죽음이 생명으로 변화되는 역사가 임하기를
암만에 거주하는 난민들에게 필요한 회복과 자원이 공급될 수 있도록, 어린이와 청소년들이 학습 기회, 정서적 안정, 미래의 꿈을 잃지 않도록
이번 요르단 선교팀을 통해 그 땅 가운데 막혔던 모든 물 근원이 생명으로 회복되는 놀라운 은혜가 부어져, 하나님의 뜻이 온전히 이루어지도록.`,
    '선교사님을 위한 중보': `하나님 나라의 비전을 품고 요르단에서 살아가시는 선교사님과 그 가족들을 주님의 너른 날개 아래에 보호하여 주시도록
암만의 선교사님께 영육의 보호와 성령의 인도하심을 주시고, 복음의 문이 열리는 역사가 임하고, 사역과 가정의 모든 필요가 섬세하게 채워지도록
만나 뵙게 될 선교사님 가정 가운데 그동안 경험하지 못했던 하나님의 놀라운 사랑이 풍성히 흘러가게 되고, 그 깊은 사랑 안에 매여 더욱 주님께 사로잡히는 은혜 새 시즌이 시작되도록
함께하게 될 선교사님께 지혜와 계시의 영을 부어주셔서 이 시즌, 우리 선교팀과 함께할 사역들에 대해, 하나님이 원하시는 대로 그림 그리고 인도해 주시기를.
선교사님과 선교팀이 하나님 안에서 하나 되며, 하나님 안에서 소통할 수 있도록 모든 미팅들을 주관하여 인도해 주시고, 선교사님의 필요에 선교팀이 전적으로 순종하고 따를 수 있도록.`,
    '요르단 선교팀을 위한 중보': `요르단 선교팀이 어떠한 사역과 준비에 앞서, 무엇보다 요르단을 향하신 하나님의 마음과 얼굴을 구하는 것을 가장 우선순위에 두고 준비할 수 있도록. 하나님이 이 간구를 들으시고, 하나님의 마음과 뜻을 우리 팀에게 계시하여 주시기를.
요르단 선교팀 팀원들 각 사람이 각자의 삶에서 먼저 복음을 기쁜 소식으로 받아들이고 누리는 은혜를 경험할 수 있도록. 복음이 실제적 능력이 됨을 몸소 먼저 체험케 하시고 복음으로 새생명을 얻은 것에 대한 감격, 기쁨, 평안, 자유가 회복되도록.
하나님이 우리를 사랑하시고 우리가 하나님을 사랑하는 하나 됨의 언약적 관계가 회복되게 하시고, 우리 선교팀 안에서 그 언약적 관계가 풀어져 서로 사랑하여 한마음, 한뜻의 연합이 일어나도록.
난민들의 삶을 속속들이 아시는 하나님, 그들의 고통과 슬픔을 함께하시는 하나님의 마음을 우리 선교팀에게도 부어주셔서 요르단의 난민들에 대한 하나님의 마음을 닮아가도록
현지에서 물·음식·환경의 차이로 인한 질병과 피로에서 팀을 보호하시고 육체적 건강과 정신적 회복력이 유지되도록, 이동·사역·생활 전반에서 하나님의 안전하심이 함께하도록.
선교를 준비하고 다녀오는 모든 여정 가운데, 영적 전쟁임을 깨달아 항상 성령으로 깨어, 하나님의 전신 갑주를 입고 매 전투에서 승리할 수 있는 팀원들 되도록.`,
    '요르단 사역을 위한 중보': `맡게 될 모든 사역들 위에 예수 그리스도의 보혈로 덮으니, 오로지 예수 그리스도만이 드러나지는 사역이 될 수 있기를. 이를 방해하는 어떠한 사탄의 공격도 틈타지 못하도록 천군천사들로 우리 팀과 선교지를 둘러싸 주시기를.
선교지에서의 작은 만남 하나하나, 하나님 나라의 열매로 연결되도록 그 순간들에 하나님 임재해 주시고, 마음 문이 열리는 은혜가 있기를.
요르단 선교팀이 문화와 언어의 장벽을 넘어, 요르단 영혼들에게 복음을 자연스럽고 안전하게 전할 수 있는 길이 열리도록.`,
  };

  return (
    <PageLayout
      title="중보기도"
      showTeamTabs={true}
      actions={<WriteButton category="prayer-requests" />}
    >
      {selectedTeam === 'jordan' ? (
        <>
          {/* 셀렉트 박스 */}
          <div className="mb-6 relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] text-sm font-medium text-gray-900 dark:text-white appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
              style={{ wordBreak: 'keep-all' }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* 선택된 카테고리의 기도제목 목록 */}
          {selectedCategory === '기도 무기' ? (
            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
              <h3
                className="text-base font-semibold text-gray-900 dark:text-white mb-2"
                style={{ wordBreak: 'keep-all' }}
              >
                {selectedCategory}
              </h3>
              {jordanRoles[selectedCategory] &&
                jordanRoles[selectedCategory].length > 0 && (
                  <>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400 mb-6"
                      style={{ wordBreak: 'keep-all' }}
                    >
                      {jordanRoles[selectedCategory][0]}
                    </p>
                    <div className="border-b border-gray-200 dark:border-[#333333] mb-6"></div>
                  </>
                )}
              {prayerWeapons.map((weapon, index) => (
                <div key={index}>
                  <h4
                    className="text-sm font-semibold text-gray-900 dark:text-white mb-3"
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {weapon.verse}
                  </h4>
                  <p
                    className={`text-xs text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap ${index < prayerWeapons.length - 1 ? 'mb-6' : ''}`}
                    style={{ wordBreak: 'keep-all' }}
                    dangerouslySetInnerHTML={{
                      __html: weapon.text.replace(/\n/g, '<br />'),
                    }}
                  />
                  {index < prayerWeapons.length - 1 && (
                    <div className="border-b border-gray-200 dark:border-[#333333] mb-6"></div>
                  )}
                </div>
              ))}
            </div>
          ) : prayerContents[selectedCategory] ? (
            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
              <h3
                className="text-base font-semibold text-gray-900 dark:text-white mb-4"
                style={{ wordBreak: 'keep-all' }}
              >
                {selectedCategory}
              </h3>
              <div className="space-y-4">
                {prayerContents[selectedCategory]
                  .split('\n')
                  .filter((p) => p.trim())
                  .map((paragraph, index, array) => (
                    <div key={index}>
                      <p
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                        style={{
                          wordBreak: 'keep-all',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {paragraph.trim()}
                      </p>
                      {index < array.length - 1 && (
                        <div className="border-b border-gray-200 dark:border-[#333333] mt-4"></div>
                      )}
                    </div>
                  ))}
              </div>
              {filteredPrayerRequests.length > 0 && (
                <>
                  <div className="border-t border-gray-200 dark:border-[#333333] mt-6 pt-6">
                    <h4
                      className="text-sm font-semibold text-gray-900 dark:text-white mb-3"
                      style={{ wordBreak: 'keep-all' }}
                    >
                      기도제목
                    </h4>
                    <div className="space-y-3">
                      {filteredPrayerRequests.map((request) => (
                        <ListItem
                          key={request.id}
                          id={request.id}
                          title={request.title}
                          content={request.content}
                          date={request.createdAt}
                          basePath="/prayer-request"
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : filteredPrayerRequests.length > 0 ? (
            <div className="space-y-3">
              {filteredPrayerRequests.map((request) => (
                <ListItem
                  key={request.id}
                  id={request.id}
                  title={request.title}
                  content={request.content}
                  date={request.createdAt}
                  basePath="/prayer-request"
                />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
              <h3
                className="text-base font-semibold text-gray-900 dark:text-white mb-2"
                style={{ wordBreak: 'keep-all' }}
              >
                {selectedCategory}
              </h3>
              {jordanRoles[selectedCategory] &&
                jordanRoles[selectedCategory].length > 0 && (
                  <p
                    className="text-sm text-gray-600 dark:text-gray-400"
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {selectedCategory === '요르단 땅 위한 기도' ||
                    selectedCategory === '선교사님을 위한 중보' ||
                    selectedCategory === '요르단 선교팀을 위한 중보' ||
                    selectedCategory === '요르단 사역을 위한 중보'
                      ? jordanRoles[selectedCategory]?.[0] || ''
                      : jordanRoles[selectedCategory]
                          ?.map((role) => role.replace('(부)', ''))
                          .join(', ') || ''}
                  </p>
                )}
            </div>
          )}
        </>
      ) : (
        <>
          {prayerRequests.length > 0 ? (
            <div className="space-y-3">
              {prayerRequests.map((request) => (
                <ListItem
                  key={request.id}
                  id={request.id}
                  title={request.title}
                  content={request.content}
                  date={request.createdAt}
                  basePath="/prayer-request"
                />
              ))}
            </div>
          ) : (
            <EmptyState message="작성된 기도제목이 없습니다" />
          )}
        </>
      )}
    </PageLayout>
  );
}

export default PrayerRequest;
