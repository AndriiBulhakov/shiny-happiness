"use client"

import { useEffect, useState } from "react"
import { companies } from "@/data"
import { EmblaOptionsType } from "embla-carousel"
import Carousel from "./ui/Carousel"
import SectionHeader from "./ui/SectionHeader"

const OPTIONS: EmblaOptionsType = { loop: true }

const Companies = () => {
  const [companiesElements, setCompaniesElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    const logosArray = companies.map(
      (logo: { logo: string; name: string }, index: number) => (
        <img key={index} src={logo.logo} alt={logo.name} />
      )
    )
    setCompaniesElements(logosArray)
  }, [])

  return (
    <section className="pt-[12.44rem] lg:pb-[14.06rem] sm:pb-[12.18rem] xs:pb-[9.38rem] flex flex-col items-center gap-16 overflow-hidden">
      <SectionHeader
        className="max-w-[38rem] sm:px-5 xs:px-4"
        title="250,000+ offers from only the most exciting companies & startups"
      />
      <Carousel slides={companiesElements} options={OPTIONS} gap={72} />
    </section>
  )
}

export default Companies
