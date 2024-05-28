type TabTypes = {
  tabContent: any[]
  activeTab: number
  setActiveTab: (index: number) => void
}

function TabList({ tabContent, activeTab, setActiveTab }: TabTypes) {
  return (
    <div className="tab-list flex lg:justify-center xs:justify-start gap-2 mb-8 overflow-x-auto px-5">
      {tabContent.map((tab, index) => (
        <button
          key={index}
          className={`py-5 px-7 rounded-[2.5rem] text-nowrap outline-none border-none ${
            index === activeTab
              ? "bg-red-primary text-white-background"
              : "bg-white-background text-gray-primary"
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  )
}

export default TabList
