import { useEffect, useState } from "react"
import Carousel from "./ui/Carousel"
import { EmblaOptionsType } from "embla-carousel"
import SectionsHeader from "./ui/SectionHeader"
import { testimonialsContent } from "@/data"

const OPTIONS: EmblaOptionsType = { loop: true }

const Testimonials = () => {
  const [testimonialsSlides, setTestimonialsSlides] = useState<JSX.Element[]>(
    []
  )

  useEffect(() => {
    const testimonialsArray = testimonialsContent.map((testimonial, index) => (
      <div
        key={index}
        className="p-6 rounded-[2rem] w-[26.375rem] flex flex-col justify-between items-start bg-white-background"
      >
        <div className="flex flex-col justify-between items-start gap-8 mb-[4.44rem] text-wrap">
          <div
            className={`rounded-[2rem] py-3 px-4 flex items-center justify-center gap-2 ${testimonial.subtitleBackgroundColor}`}
          >
            <h3>{testimonial.subtitle}</h3>
          </div>
          <h3 className="text-headlines/h3">{testimonial.title}</h3>
          <p className="text-body/medium text-gray-primary opacity-40">
            {testimonial.author}
          </p>
        </div>
        <img src={testimonial.image} alt="" className="h-[3.25rem]" />
      </div>
    ))
    setTestimonialsSlides(testimonialsArray)
  }, [])

  return (
    <section className="pt-24 pb-28 px flex flex-col items-center gap-20 overflow-hidden">
      <SectionsHeader
        title="Discover the power of our product through real stories"
        subtitle="We Are Here to Help You Succeed"
      />
      <Carousel slides={testimonialsSlides} options={OPTIONS} gap={20} />
    </section>
  )
}

export default Testimonials
