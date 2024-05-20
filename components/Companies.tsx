import { useEffect, useState } from "react"
import { companies } from "@/data"
import { EmblaOptionsType } from "embla-carousel"
import Carousel from "./ui/Carousel"
import SectionHeader from "./ui/SectionHeader"

const OPTIONS: EmblaOptionsType = { loop: true }

const Companies = () => {
  const [companiesElements, setCompaniesElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    const logosArray = companies.map((logo, index) => (
      <img key={index} src={logo.logo} alt={logo.name} />
    ))
    setCompaniesElements(logosArray)
  }, [])

  return (
    <section className="py-56 flex flex-col items-center gap-16 overflow-hidden">
      <SectionHeader title="A suite of AI tools to navigate through this difficult recruiting season" />
      <Carousel slides={companiesElements} options={OPTIONS} gap={72} />
    </section>
  )
}

export default Companies
