function TeamSelector({ selectedTeam, onTeamChange }) {
  const teams = [
    { id: 'egypt', name: '이집트' },
    { id: 'jordan', name: '요르단' },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex gap-6 px-4">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => onTeamChange(team.id)}
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

export default TeamSelector;
