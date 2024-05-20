import { heroContent } from "@/data"
import VideoIcon from "./ui/VideoIcon"
import VideoDescription from "./ui/VideoDescription"
import Video from "./ui/Video"

const Hero = () => (
  <header className="flex flex-col justify-center items-center text-center overflow-hidden max-w-[48rem] mx-auto px-4 pb-5xl lg:pt-[8.75rem] sm:pt-[12.5rem] xs:pt-[9.75rem]">
    <div className="flex gap-3 text-left text-xs lg:mb-[4.19rem] sm:mb-[8.69rem] xs:mb-[6.75rem] sm:h-[15.625rem] xs:h-[10.625rem] relative">
      <div className="video-description flex flex-col gap-2 self-end sm:mb-[1.56rem] xs:mb-0 absolute sm:left-[-0.75rem] xs:left-[1rem] sm:translate-x-[-100%] sm:translate-y-0 xs:translate-y-[100%] xs:translate-x-[-50%] tracking-[-0.015rem] max-w-[11.0625rem] w-full text-gray-primary">
        <VideoDescription
          src={heroContent.videoIcon1}
          title={heroContent.videoTitle1}
          description={heroContent.videoDescription1}
        />
      </div>
      <div className="relative self-stretch">
        <VideoIcon
          color="bg-white-background"
          className="absolute top-[1.38rem] right-[1.38rem] z-10"
        />
        <Video className="sm:w-[14.5rem] xs:w-[9.875rem] h-full object-cover rounded-[1.88rem]" src="/assets/video/hero.mp4"/>
        <Video className="sm:w-[14.5rem] xs:w-[9.875rem] h-full object-cover absolute inset-x-0 inset-y-0 rounded-[1.88rem]" src="/assets/video/hero.mp4"/>
      </div> 

      <div className="video-description flex flex-col gap-2 mt-[1.56rem] right-[-3.38rem] absolute translate-x-[100%] tracking-[-0.015rem] max-w-[11.0625rem] text-gray-primary">
        <VideoDescription
          src={heroContent.videoIcon2}
          title={heroContent.videoTitle2}
          description={heroContent.videoDescription2}
        />
      </div>
    </div>
    <h1 className="text-headlines/h1 lg:mb-10 xs:mb-8">{heroContent.title}</h1>
    <div className="text-body/large text-gray-quaternary max-w-[27.375rem]">
      {heroContent.description}
    </div>
    <ul className="hero-stats flex justify-center lg:my-8 sm:my-16 xs:my-8">
      {heroContent.stats.map((stat) => (
        <li key={stat.id} className="px-5 border-r border-gray-primary/10">
          {stat.value}
        </li>
      ))}
    </ul>
    <a href={heroContent.button.href} className="btn btn-secondary">
      {heroContent.button.text}
    </a>
  </header>
)

export { Hero }
