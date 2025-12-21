import { useTeam } from '../../context/TeamContext';
import { useAuth } from '../../context/AuthContext';

function TeamTabs() {
  const { selectedTeam, changeTeam } = useTeam();
  const { isAdmin } = useAuth();

  // 관리자가 아니면 탭 표시 안 함
  if (!isAdmin) return null;

  const teams = [
    { id: 'egypt', name: '이집트' },
    { id: 'jordan', name: '요르단' },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-[#333333] mb-8">
      <div className="flex gap-6">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => changeTeam(team.id)}
            className={`
              relative pb-3 pt-2 text-base transition-colors duration-200
              ${
                selectedTeam === team.id
                  ? 'font-bold text-gray-900 dark:text-white'
                  : 'font-medium text-gray-500 dark:text-gray-400'
              }
            `}
          >
            {team.name}
            {selectedTeam === team.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TeamTabs;
