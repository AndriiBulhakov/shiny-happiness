"use client"

import { useRef, useLayoutEffect } from "react"
import ServicesList from "./ServicesList"
import BackgroundBubbles from "./BackgroundBubbles"
import Image from "next/image"
import gsap from "gsap"

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
  const container = useRef<HTMLDivElement | null>(null)
  const imageAnimation = useRef(null)
  const additionalImageAnimation = useRef(null)

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!container.current) return

      const { clientX, clientY } = event
      const { width, height, left, top } =
        container.current.getBoundingClientRect()

      const xPos = (clientX - left) / width
      const yPos = (clientY - top) / height

      if (imageAnimation.current) {
        gsap.to(imageAnimation.current, {
          y: (yPos - 0.5) * 20,
          ease: "power2.out",
        })
      }

      if (additionalImage && additionalImageAnimation.current) {
        gsap.to(additionalImageAnimation.current, {
          y: (yPos - 0.5) * 30,
          ease: "power2.out",
        })
      }
    }

    const currentContainer = container.current
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [additionalImage])

  let tab

  if (type === "horizontal") {
    tab = (
      <div
        ref={container}
        className="horizontal-tab flex items-stretch self-stretch h-full gap-20"
      >
        <div className="lg:max-w-[35.4rem] xs:w-full w-full flex flex-col justify-between">
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
          <div className="w-full relative z-10 overflow-hidden lg:hidden xs:flex flex-col items-end justify-center lg:min-h-auto sm:min-h-[41.2rem] xs:min-h-[21.8rem] mb-12">
            <BackgroundBubbles
              position="absolute"
              className="z-[-1] rounded-lg rotate-180 overflow-hidden"
              overlayClassName="rounded-lg overflow-hidden"
            />
            <Image
              ref={imageAnimation}
              src={image}
              alt={subtitle}
              loading="lazy"
              className="absolute bottom-[-4%] right-[-76%] min-w-[164.877%]"
              width={1169.191}
              height={774.875}
            />
            {additionalImage && (
              <Image
                ref={additionalImageAnimation}
                src={additionalImage}
                alt={subtitle}
                loading="lazy"
                className="absolute z-[2] right-[8%] bottom-[42%] max-w-[65.167%]"
                width={826}
                height={99}
              />
            )}
          </div>
          <div>
            <ServicesList tabList={tabsContent} type={type}></ServicesList>
            <a href={buttonLink} className="btn btn-primary mt-12">
              {buttonText}
            </a>
          </div>
        </div>
        <div className="w-full relative z-10 overflow-hidden lg:flex xs:hidden flex-col items-end justify-center">
          <BackgroundBubbles
            position="absolute"
            className="z-[-1] rounded-lg rotate-180 overflow-hidden"
            overlayClassName="rounded-lg overflow-hidden"
          />
          <Image
            ref={imageAnimation}
            src={image}
            alt={subtitle}
            width={1169.191}
            height={774.875}
            loading="lazy"
            className="absolute bottom-[-4%] right-[-76%] min-w-[164.877%]"
          />
          {additionalImage && (
            <Image
              ref={additionalImageAnimation}
              src={additionalImage}
              alt={subtitle}
              width={826}
              height={99}
              loading="lazy"
              className="absolute z-[2] right-[8%] bottom-[42%] max-w-[65.167%]"
            />
          )}
        </div>
      </div>
    )
  } else if (type === "vertical") {
    tab = (
      <div
        ref={container}
        className="horizontal-tab radius-[2rem] h-full bg-white-background flex flex-col items-start justify-between"
      >
        <div
          className={`rounded-[2rem] py-3 px-4 mb-6 flex items-center justify-center gap-2 ${subtitleBackgroundColor} ${subtitleTextColor}`}
        >
          <img src={subtitleIcon} alt="" className="w-5" />
          <h3 className="">{subtitle}</h3>
        </div>
        <div className="flex items-end justify-between self-stretch mb-12">
          <h2 className="text-headlines/h2 max-w-[57.778vw]">{title}</h2>
          <a
            href={buttonLink}
            className="btn btn-primary mt-12 lg:inline-block xs:hidden"
          >
            {buttonText}
          </a>
        </div>
        <div className="mb-12 lg:flex-1 self-stretch relative rounded-[0.5rem] z-10 overflow-hidden lg:h-auto sm:h-[41.2rem] xs:h-[21.8rem]">
          <BackgroundBubbles
            position="absolute"
            className="z-[-1] rotate-180 rounded-lg overflow-hidden"
            overlayClassName="rounded-lg overflow-hidden"
          />
          <Image
            ref={imageAnimation}
            src={image}
            alt={subtitle}
            loading="lazy"
            className="absolute lg:top-[2.31rem] xs:top-[50%] left-[50%] lg:translate-y-[0%] xs:translate-y-[-50%] translate-x-[-50%] lg:w-[80.539%] sm:w-[86.557%] xs:w-[90.994%]"
            width={1076}
            height={672}
          />
          {additionalImage && (
            <Image
              ref={additionalImageAnimation}
              src={additionalImage}
              alt={subtitle}
              loading="lazy"
              className="absolute top-[56%] left-[50%] translate-x-[-38%] lg:w-[64.5%] sm:w-[69%] sm:top-[50%] xs:w-[72%] xs:top-[38%] z-10 shadow-custom lg:rounded-[1rem]"
              width={826}
              height={107}
            />
          )}
        </div>
        <ServicesList tabList={tabsContent} type={type}></ServicesList>
        <a
          href={buttonLink}
          className="btn btn-primary mt-12 lg:hidden xs:block"
        >
          {buttonText}
        </a>
      </div>
    )
  }

  return tab
}

export default Services
