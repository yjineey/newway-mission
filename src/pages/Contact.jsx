import PageLayout from '../components/layout/PageLayout';
import { useTeam } from '../context/TeamContext';
import { useAuth } from '../context/AuthContext';
import { Phone } from 'lucide-react';

function Contact() {
  const { selectedTeam } = useTeam();
  const { effectiveTeam } = useAuth();

  const ministers = [{ name: '이혜연 전도사', phone: '010-8518-4610' }];

  const contactData = {
    egypt: {
      members: [
        { name: '박진수', phone: '010-', isLeader: true },
        { name: '이엘림', phone: '010-9086-1131', isSubLeader: true },
        { name: '박동빈', phone: '010-5013-7593' },
        { name: '박재호', phone: '010-8689-3959' },
        { name: '박준영', phone: '010-9920-1619' },
        { name: '윤고은', phone: '010-' },
        { name: '이호정', phone: '010-' },
        { name: '전유림', phone: '010-4039-3379' },
        { name: '한아름', phone: '010-' },
      ],
    },
    jordan: {
      members: [
        { name: '위사은', phone: '010-6586-6535', isLeader: true },
        { name: '양진', phone: '010-2567-3706', isSubLeader: true },
        { name: '김난영', phone: '010-7415-1813' },
        { name: '김주은', phone: '010-2592-2386' },
        { name: '이종철', phone: '010-3419-1909' },
        { name: '임지원', phone: '010-9314-1167' },
        { name: '진민하', phone: '010-8640-3555' },
        { name: '최정원', phone: '010-9137-2740' },
      ],
    },
  };

  // null 권한일 때는 이집트와 요르단 각각 팀장/부팀장만, 로그인 시에는 선택된 팀의 모든 멤버
  const egyptLeaders = contactData.egypt.members.filter(
    (member) => member.isLeader || member.isSubLeader
  );
  const jordanLeaders = contactData.jordan.members.filter(
    (member) => member.isLeader || member.isSubLeader
  );

  // 로그인한 경우: 팀장/부팀장 먼저, 나머지는 가나다순 정렬
  const sortMembers = (members) => {
    const leaders = members.filter((m) => m.isLeader || m.isSubLeader);
    const others = members.filter((m) => !m.isLeader && !m.isSubLeader);
    const sortedOthers = others.sort((a, b) =>
      a.name.localeCompare(b.name, 'ko')
    );
    return [...leaders, ...sortedOthers];
  };

  const currentMembers = !effectiveTeam
    ? null // effectiveTeam이 null이면 별도로 처리
    : sortMembers(
        selectedTeam === 'egypt'
          ? contactData.egypt.members
          : contactData.jordan.members
      );

  return (
    <PageLayout title="비상연락망" showTeamTabs={true}>
      <div className="space-y-6">
        {/* 사역자 */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
            사역자
          </h2>
          <div className="space-y-3">
            {ministers.map((minister, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]"
              >
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {minister.name}
                  </p>
                  <a
                    href={`tel:${minister.phone}`}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {minister.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 팀원 */}
        {!effectiveTeam ? (
          <>
            {/* 이집트 팀 */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                이집트
              </h2>
              <div className="space-y-3">
                {egyptLeaders.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]"
                  >
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </p>
                        {member.isLeader && (
                          <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded">
                            팀장
                          </span>
                        )}
                        {member.isSubLeader && (
                          <span className="px-2 py-0.5 border border-gray-900 dark:border-white text-gray-900 dark:text-white bg-transparent text-xs font-medium rounded">
                            부팀장
                          </span>
                        )}
                      </div>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 요르단 팀 */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                요르단
              </h2>
              <div className="space-y-3">
                {jordanLeaders.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]"
                  >
                    <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </p>
                        {member.isLeader && (
                          <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded">
                            팀장
                          </span>
                        )}
                        {member.isSubLeader && (
                          <span className="px-2 py-0.5 border border-gray-900 dark:border-white text-gray-900 dark:text-white bg-transparent text-xs font-medium rounded">
                            부팀장
                          </span>
                        )}
                      </div>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">
              팀원 ({currentMembers.length}명)
            </h2>
            <div className="space-y-3">
              {currentMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-[#333333]"
                >
                  <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {member.name}
                      </p>
                      {member.isLeader && (
                        <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded">
                          팀장
                        </span>
                      )}
                      {member.isSubLeader && (
                        <span className="px-2 py-0.5 border border-gray-900 dark:border-white text-gray-900 dark:text-white bg-transparent text-xs font-medium rounded">
                          부팀장
                        </span>
                      )}
                    </div>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default Contact;
