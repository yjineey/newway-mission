function PreparationTabs({ selectedTab, onTabChange }) {
  const tabs = [
    { id: 'personal', name: '개인물품' },
    { id: 'shared', name: '공용물품' },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-[#333333] mb-8">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative pb-3 pt-2 text-base transition-colors duration-200
              ${
                selectedTab === tab.id
                  ? 'font-bold text-gray-900 dark:text-white'
                  : 'font-medium text-gray-500 dark:text-gray-400'
              }
            `}
          >
            {tab.name}
            {selectedTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PreparationTabs;
