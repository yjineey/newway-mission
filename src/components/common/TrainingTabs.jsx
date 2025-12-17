function TrainingTabs({ selectedTab, onTabChange }) {
  const tabs = [
    { id: 'worship', name: '예배훈련' },
    { id: 'word', name: '말씀훈련' },
    { id: 'prayer', name: '기도훈련' },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-[#333333] mb-8">
      <div className="flex gap-6 px-4">
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

export default TrainingTabs;

