import { useState } from "react"
import ServicesList from "./ServicesList"
import BackgroundBubbles from "./BackgroundBubbles"

type ServicesProps = {
  subtitleBackgroundColor: string
  subtitleTextColor: string
  subtitle: string
  subtitleIcon: string
  title: string
  buttonText: string
  buttonLink: string
  tabsContent: object[]
  type: string
  image: string
  additionalImage?: string
}

const Services = ({
  subtitleBackgroundColor,
  subtitleTextColor,
  subtitle,
  subtitleIcon,
  title,
  buttonText,
  buttonLink,
  tabsContent,
  type,
  image,
  additionalImage,
}: ServicesProps) => {
  let tab

  if (type === "horizontal") {
    tab = (
      <div className="horizontal-tab flex items-stretch self-stretch h-full gap-20">
        <div className="max-w-[35.4rem] w-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div
                className={`rounded-[2rem] py-3 px-4 mb-12 flex items-center justify-center gap-2 ${subtitleBackgroundColor} ${subtitleTextColor}`}
              >
                <img src={subtitleIcon} alt="" className="w-5" />
                <h3>{subtitle}</h3>
              </div>
            </div>
            <h2 className="text-headlines/h2 mb-12">{title}</h2>
          </div>
          <div>
            <ServicesList tabList={tabsContent} type={type}></ServicesList>
            <a href={buttonLink} className="btn btn-primary mt-12">
              {buttonText}
            </a>
          </div>
        </div>
        <div className="w-full relative z-10 overflow-hidden flex flex-col items-end justify-center">
          <BackgroundBubbles
            position="absolute"
            className="z-[-1] rotate-180"
          />
          <img
            src={image}
            alt={subtitle}
            className="absolute bottom-[-2rem] right-[-30rem] min-w-[71rem] rotate-[-8deg]"
          />
          {additionalImage && (
            <img
              src={additionalImage}
              alt={subtitle}
              className="absolute z-[2] right-[6.5rem] bottom-[16.5rem] max-w-[28.0815rem] rotate-[-8deg]"
            />
          )}
        </div>
      </div>
    )
  } else if (type === "vertical") {
    tab = (
      <div className="horizontal-tab radius-[2rem] h-full bg-white-background flex flex-col items-start justify-between">
        <div
          className={`rounded-[2rem] py-3 px-4 mb-6 flex items-center justify-center gap-2 ${subtitleBackgroundColor} ${subtitleTextColor}`}
        >
          <img src={subtitleIcon} alt="" className="w-5" />
          <h3 className="">{subtitle}</h3>
        </div>
        <div className="flex items-end justify-between self-stretch mb-12">
          <h2 className="text-headlines/h2 max-w-[57.778vw]">{title}</h2>
          <a href={buttonLink} className="btn btn-primary mt-12">
            {buttonText}
          </a>
        </div>
        <div className="mb-12 flex-1 self-stretch relative rounded-[0.5rem] z-10 overflow-hidden">
          <BackgroundBubbles
            position="absolute"
            className="z-[-1] rotate-180"
          />
          <img
            src={image}
            alt={subtitle}
            className="absolute top-[2.31rem] left-[50%] translate-x-[-50%] w-[80.539%] "
          />
          {additionalImage && (
            <img
              src={additionalImage}
              alt={subtitle}
              className="absolute top-[56%] left-[50%] translate-x-[-38%] w-[64.5%] z-10 shadow-custom rounded-[1rem]"
            />
          )}
        </div>
        <ServicesList tabList={tabsContent} type={type}></ServicesList>
      </div>
    )
  }

  return tab
}

export default Services
