import { useState } from "react"
import { tabContent } from "@/data"
import TabList from "./ui/TabList"
import TabContent from "./ui/TabContent"

function Chat() {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section>
      <div className="mx-auto max-w-[66.125rem]">
        <TabList
          tabContent={tabContent}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabContent tabs={tabContent} activeTab={activeTab} />
      </div>
    </section>
  )
}

export default Chat
