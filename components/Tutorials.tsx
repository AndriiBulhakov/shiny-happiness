import SectionHeader from "./ui/SectionHeader"
import { useEffect, useState } from "react"
import Carousel from "./ui/Carousel"
import { EmblaOptionsType } from "embla-carousel"
import { tutorialsContent } from "@/data"

const OPTIONS: EmblaOptionsType = { loop: true }

const Tutorials = () => {
  const [tutorialsSlides, setTutorialsSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    const testimonialsArray = tutorialsContent.map((tutorials, index) => {
      const truncatedDescription =
        tutorials.description.split("\n").slice(0, 4).join("\n").slice(0, 220) +
        "..."
      return (
        <div
          key={index}
          className="p-8 rounded-[2rem] w-[25.9rem] flex flex-col justify-between items-start gap-6 bg-white-background text-wrap"
        >
          <img
            src={tutorials.image}
            alt=""
            className="w-full rounded-lg max-h-[10.125rem]"
          />
          <p className="text-body/medium text-gray-primary opacity-40">
            {tutorials.date}
          </p>
          <h3 className="text-headlines/h3">{tutorials.title}</h3>
          <p className="text-body/medium text-gray-primary opacity-40">
            {truncatedDescription}
          </p>
        </div>
      )
    })
    setTutorialsSlides(testimonialsArray)
  }, [])

  return (
    <section className="pt-24 pb-28 px flex flex-col items-center gap-20 overflow-hidden">
      <SectionHeader
        title="Learn more about AI superpowers to navigate this recruiting season"
        subtitle="AI Will Not Take Your Job But Someone Using AI Will"
      />
      <Carousel slides={tutorialsSlides} options={OPTIONS} gap={20} />
    </section>
  )
}

export default Tutorials
