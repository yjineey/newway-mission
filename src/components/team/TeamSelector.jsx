function TeamSelector({ selectedTeam, onTeamChange }) {
  const teams = [
    { id: 'egypt', name: '이집트', color: 'from-amber-500 to-orange-500' },
    { id: 'jordan', name: '요르단', color: 'from-rose-500 to-pink-500' }
  ]

  return (
    <div className="flex gap-3 justify-center mb-8">
      {teams.map((team) => (
        <button
          key={team.id}
          onClick={() => onTeamChange(team.id)}
          className={`
            relative px-8 py-3 rounded-xl font-semibold text-base
            transition-all duration-200 
            ${selectedTeam === team.id
              ? `bg-gradient-to-r ${team.color} text-white shadow-lg scale-105`
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
            }
          `}
        >
          {team.name}
          {selectedTeam === team.id && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
          )}
        </button>
      ))}
    </div>
  )
}

export default TeamSelector

