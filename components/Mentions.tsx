import SectionsHeader from "./ui/SectionHeader"
import { useEffect, useState } from "react"
import Carousel from "./ui/Carousel"
import { mentionsContent } from "@/data"
import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = { loop: true }

const Mentions = () => {
  const [mentionsSlides, setMentionsSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    const slides = mentionsContent.map((mention, index) => (
      <div
        key={index}
        className="flex flex-col items-start max-w-[19.4rem] text-wrap"
      >
        <h3 className="text-headlines/h3 text-blue-secondary mb-6">
          {mention.description}
        </h3>
        <p className="text-body/medium text-pink-secondary mb-10">
          {mention.author}, {mention.company}
        </p>
        <img src={mention.image} alt={mention.company} />
      </div>
    ))
    setMentionsSlides(slides)
  }, [])

  return (
    <section className="p-4">
      <div className="mentions-wrapper py-[5.5rem] rounded-[2rem] overflow-hidden flex flex-col items-center gap-20">
        <SectionsHeader
          title="Groundbreaking innovation for interviewees, as featured on"
          subtitle="We're Humble to Mention"
          textColor="text-blue-secondary"
        />
        <Carousel options={OPTIONS} slides={mentionsSlides} gap={57} />
      </div>
    </section>
  )
}

export default Mentions
