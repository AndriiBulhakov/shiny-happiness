import React, { useEffect, useState } from "react"
import tabStyles from "./TabContent.module.css"
import Video from "./Video"
import Lottie from "react-lottie"
import animationData1 from "../../public/assets/lottie/finalround_comp01.json"
import animationData2 from "../../public/assets/lottie/finalround_comp02.json"
import animationData3 from "../../public/assets/lottie/finalround_comp03.json"
import animationData4 from "../../public/assets/lottie/finalround_comp04.json"
import animationData5 from "../../public/assets/lottie/finalround_comp05.json"

type TabContentProps = {
  tabs: any[]
  activeTab: number
}

const animationDataArray = [
  animationData1,
  animationData2,
  animationData3,
  animationData4,
  animationData5,
]

function TabContent({ tabs, activeTab }: TabContentProps) {
  const [video, setVideo] = useState<string>(tabs[activeTab].video)
  const [defaultOptions, setDefaultOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: animationDataArray[activeTab],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  })

  useEffect(() => {
    setDefaultOptions((prevOptions) => ({
      ...prevOptions,
      animationData: animationDataArray[activeTab],
    }))
  }, [activeTab])

  useEffect(() => {
    setVideo(tabs[activeTab].video)
  }, [activeTab, tabs])

  return (
    <div className="relative">
      <Video
        key={video}
        src={video}
        className="position absolute z-[1] w-[19.3%] h-[33%] object-cover left-[5.6%] top-[14%] rounded-[1.875rem]"
      />
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default TabContent
