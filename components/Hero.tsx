"use client"

import { heroContent } from "@/data"
import VideoIcon from "./ui/VideoIcon"
import VideoDescription from "./ui/VideoDescription"
import Video from "./ui/Video"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null)
  const videoDescription1 = useRef<HTMLDivElement>(null)
  const videoDescription2 = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // hide by deflault video, video description 1 and 2, title, description, stats, button using y: 30, opacity: 0

    gsap.set(videoRef.current, { y: 30, opacity: 0 })
    gsap.set(videoDescription1.current, { y: 30, opacity: 0 })
    gsap.set(videoDescription2.current, { y: 30, opacity: 0 })
    gsap.set(titleRef.current, { y: 30, opacity: 0 })
    gsap.set(descriptionRef.current, { y: 30, opacity: 0 })
    gsap.set(statsRef.current, { y: 30, opacity: 0 })
    gsap.set(buttonRef.current, { y: 30, opacity: 0 })

    // animate video, video description 1 and 2, title, description, stats, button using y: 0, opacity: 1 when loaded with delay .2s

    gsap.to(videoRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.8,
    })

    gsap.to(videoDescription1.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
    })

    gsap.to(videoDescription2.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
    })

    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1.2,
    })

    gsap.to(descriptionRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1.4,
    })

    gsap.to(statsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1.6,
    })

    gsap.to(buttonRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1.8,
    })
  }, [])

  return (
    <header className="flex flex-col justify-center items-center text-center overflow-hidden max-w-[48rem] min-h-[100dvh] mx-auto sm:px-5 xs:px-4  sm:pb-5xl xs:pb-[12.44rem] lg:pt-[15.529svh] sm:pt-[12.5rem] xs:pt-[9.75rem]">
      <div className="flex gap-3 text-left text-xs lg:mb-12 sm:mb-[8.69rem] xs:mb-[4rem] sm:h-[29.412svh] xs:h-[10.625rem] relative">
        <div
          ref={videoDescription1}
          className="video-description md:flex flex-col gap-2 self-end xs:hidden sm:mb-[1.56rem] xs:mb-0 absolute sm:left-[-0.75rem] xs:left-[1rem] sm:translate-x-[-100%] sm:translate-y-0 xs:translate-y-[100%] xs:translate-x-[-50%] tracking-[-0.015rem] max-w-[11.0625rem] w-full text-gray-primary"
        >
          <VideoDescription
            src={heroContent.videoIcon1}
            title={heroContent.videoTitle1}
            description={heroContent.videoDescription1}
          />
        </div>
        <div ref={videoRef} className="relative z-[-1] self-stretch">
          <VideoIcon
            color="bg-white-background"
            className="absolute top-[1.38rem] right-[1.38rem] z-10"
          />
          <div className="absolute w-[270.259%] h-[250.8%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center blur">
            <Image
              src="/assets/images/hero-video-bg-1.svg"
              alt="Hero"
              className="hero-star w-[66.507%] absolute h-[66.507%]"
              width={627}
              height={627}
            />
            <Image
              src="/assets/images/hero-video-bg-2.svg"
              alt="Hero"
              className="hero-star w-full h-full"
              width={417}
              height={417}
            />
          </div>
          <Video
            className="sm:w-[16.111vw] xs:w-[9.875rem] h-full object-cover rounded-[1.88rem]"
            src="/assets/video/hero-1.mp4"
          />
          <Video
            className="small-video sm:w-[16.111vw] xs:w-[9.875rem] h-full object-cover absolute inset-x-0 inset-y-0 rounded-[1.88rem]"
            src="/assets/video/hero-2.mp4"
          />
        </div>

        <div
          ref={videoDescription2}
          className="video-description md:flex flex-col gap-2 xs:hidden mt-[1.56rem] right-[-3.38rem] absolute translate-x-[100%] tracking-[-0.015rem] max-w-[11.0625rem] text-gray-primary"
        >
          <VideoDescription
            src={heroContent.videoIcon2}
            title={heroContent.videoTitle2}
            description={heroContent.videoDescription2}
          />
        </div>
      </div>
      <h1 ref={titleRef} className="text-headlines/h1 lg:mb-10 xs:mb-8">
        {heroContent.title}
      </h1>
      <div
        ref={descriptionRef}
        className="text-body/large text-gray-quaternary max-w-[27.375rem]"
      >
        {heroContent.description}
      </div>
      <ul
        ref={statsRef}
        className="hero-stats flex justify-center lg:my-8 sm:my-16 xs:my-8"
      >
        {heroContent.stats.map((stat) => (
          <li key={stat.id} className="px-5 border-r border-gray-primary/10">
            {stat.value}
          </li>
        ))}
      </ul>
      <a
        ref={buttonRef}
        href={heroContent.button.href}
        className="btn btn-secondary"
      >
        {heroContent.button.text}
      </a>
    </header>
  )
}

export { Hero }
