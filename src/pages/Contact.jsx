import PageLayout from '../components/layout/PageLayout';
import { useTeam } from '../context/TeamContext';
import { Phone } from 'lucide-react';

function Contact() {
  const { selectedTeam } = useTeam();

  const ministers = [
    { name: '이혜연 전도사', phone: '010-8518-4610' },
  ];

  const contactData = {
    egypt: {
      members: [
        { name: '박진수', phone: '010-', isLeader: true },
        { name: '이엘림', phone: '010-9086-1131', isSubLeader: true },
        { name: '박동빈', phone: '010-5013-7593' },
        { name: '박재호', phone: '010-' },
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
        { name: '이종철', phone: '010-3419-1909' },
        { name: '임지원', phone: '010-9314-1167' },
        { name: '진민하', phone: '010-8640-3555' },
        { name: '최정원', phone: '010-9137-2740' },
      ],
    },
  };

  const currentMembers =
    selectedTeam === 'egypt'
      ? contactData.egypt.members
      : contactData.jordan.members;

  return (
    <PageLayout title="비상연락망" showTeamTabs={true}>
      <div className="space-y-6">
        {/* 사역자 */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            사역자
          </h2>
          <div className="space-y-3">
            {ministers.map((minister, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl"
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
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-soft border border-gray-200 dark:border-[#333333] p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            팀원
          </h2>
          <div className="space-y-3">
            {currentMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#2d2d2d] rounded-xl"
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
                      <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded">
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
      </div>
    </PageLayout>
  );
}

export default Contact;

