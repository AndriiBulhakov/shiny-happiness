import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

type PropType = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
  gap?: number
  stopOnHover?: boolean
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, gap, stopOnHover } = props
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnMouseEnter: stopOnHover ? true : false,
      stopOnInteraction: stopOnHover ? false : true,
    }),
  ])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container`} style={{ marginLeft: `-${gap}px` }}>
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{ marginLeft: `${gap}px` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
