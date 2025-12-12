import { useTeam } from '../../context/TeamContext'

function TeamTabs() {
  const { selectedTeam, changeTeam } = useTeam()

  const teams = [
    { id: 'egypt', name: '이집트', color: 'from-amber-500 to-orange-500' },
    { id: 'jordan', name: '요르단', color: 'from-rose-500 to-pink-500' },
    // 추가 팀은 여기에 (최대 4개)
    // { id: 'team3', name: '팀3', color: 'from-blue-500 to-indigo-500' },
    // { id: 'team4', name: '팀4', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <div className="mb-8 animate-slide-up">
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-[#2d2d2d] rounded-xl">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => changeTeam(team.id)}
            className={`
              flex-1 px-4 py-2.5 rounded-lg font-semibold text-sm
              transition-all duration-200
              ${selectedTeam === team.id
                ? `bg-gradient-to-r ${team.color} text-white shadow-md`
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }
            `}
          >
            {team.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TeamTabs

