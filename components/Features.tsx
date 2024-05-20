import { featureContent } from "@/data"
import Feature from "./ui/Feature"
import SectionHeader from "./ui/SectionHeader"

const Features = () => {
  return (
    <section className="pb-40 flex flex-col items-center gap-20">
      <SectionHeader
        title="A suite of AI tools to navigate through this difficult recruiting season"
        subtitle="AI Superpower for You"
      />

      <ul className="flex justify-between gap-14 max-w-[63.8rem]">
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
