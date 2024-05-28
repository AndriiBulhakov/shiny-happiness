import React, { useEffect, useState, useRef } from "react"
import tabStyles from "./TabContent.module.css"
import Video from "./Video"
import Lottie from "react-lottie"
import { gsap } from "gsap"
import animationData1 from "../../public/assets/lottie/finalround_comp01.json"
import animationData2 from "../../public/assets/lottie/finalround_comp02.json"
import animationData3 from "../../public/assets/lottie/finalround_comp03.json"
import animationData4 from "../../public/assets/lottie/finalround_comp04.json"
import animationData5 from "../../public/assets/lottie/finalround_comp05.json"
import animationData1mob from "../../public/assets/lottie/finalround_comp01_mob.json"
import animationData2mob from "../../public/assets/lottie/finalround_comp02_mob.json"
import animationData3mob from "../../public/assets/lottie/finalround_comp03_mob.json"
import animationData4mob from "../../public/assets/lottie/finalround_comp04_mob.json"
import animationData5mob from "../../public/assets/lottie/finalround_comp05_mob.json"

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

const animationDataArrayMobile = [
  animationData1mob,
  animationData2mob,
  animationData3mob,
  animationData4mob,
  animationData5mob,
]

const animationsDurationDelay = [
  [
    [1, 3.7],
    [0, 1.7],
  ],
  [
    [1, 3.7],
    [0, 1.7],
  ],
  [
    [1, 3.7],
    [0, 1.7],
  ],
  [
    [1, 3.7],
    [0, 1.7],
  ],
  [
    [1, 3.7],
    [0, 1.7],
  ],
]

function TabContent({ tabs, activeTab }: TabContentProps) {
  const [video, setVideo] = useState<string>(tabs[activeTab].video)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768
    }
    return false
  })

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [defaultOptions, setDefaultOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: isMobile
      ? animationDataArrayMobile[activeTab]
      : animationDataArray[activeTab],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setDefaultOptions({
      loop: true,
      autoplay: true,
      animationData: isMobile
        ? animationDataArrayMobile[activeTab]
        : animationDataArray[activeTab],
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    })
  }, [activeTab, isMobile])

  useEffect(() => {
    setVideo(tabs[activeTab].video)
  }, [activeTab, tabs])

  useEffect(() => {
    if (isMobile && videoRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      tl.to(videoRef.current, {
        x: "-113%",
        duration: 1,
        ease: "power1.out",
        delay: 3.7,
      }).to(
        videoRef.current,
        { x: "0%", duration: 0, ease: "power1.inOut", delay: 1.7 },
        "+=1.5"
      )
    }
  }, [isMobile, video])

  return (
    <div className="relative sm:mx-5 xs:mx-4 overflow-hidden">
      <Video
        ref={videoRef}
        key={video}
        src={video}
        className="position absolute z-[1] sm:w-[19.3%] sm:h-[33%] object-cover sm:left-[5.6%] sm:top-[14%] sm:rounded-[1.875rem] xs:w-[87%] xs:h-[47%] xs:top-[11.5%] xs:left-[7.5%] xs:rounded-[0.875rem]"
      />
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default TabContent
