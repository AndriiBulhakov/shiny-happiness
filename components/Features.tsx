import { featureContent } from "@/data"
import Feature from "./ui/Feature"
import SectionHeader from "./ui/SectionHeader"

const Features = () => {
  return (
    <section className="py-[9.412svh] flex flex-col items-center lg:gap-[8svh] xs:gap-[7.5rem] px-5 lg:sticky lg:top-0 lg:min-h-[100svh]">
      <SectionHeader
        title="A suite of AI tools to navigate through this difficult recruiting season"
        subtitle="AI Superpower for You"
        className="max-w-[40.1rem]"
      />

      <ul className="flex lg:flex-row xs:flex-col justify-between gap-14 max-w-[63.8rem]">
        {featureContent.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </ul>
      <a href="#" className="btn btn-tetriary">
        Learn more
      </a>
    </section>
  )
}

export default Features
