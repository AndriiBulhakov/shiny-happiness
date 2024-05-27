"use client"

import SectionsHeader from "./ui/SectionHeader"
import { useEffect, useState } from "react"
import Carousel from "./ui/Carousel"
import axios from "axios"
import { EmblaOptionsType } from "embla-carousel"

interface Mention {
  id: string
  cmsLocaleId: string
  lastPublished: string | null
  lastUpdated: string
  createdOn: string
  isArchived: boolean
  isDraft: boolean
  fieldData: {
    quote: string
    name: string
    logo: {
      fileId: string
      url: string
      alt: string | null
    }
    slug: string
  }
}

const OPTIONS: EmblaOptionsType = { loop: true }

const Mentions = () => {
  const [mentionsSlides, setMentionsSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    const fetchMentions = async () => {
      try {
        const response = await axios.get("/api/mentions")
        const mentions: Mention[] = response.data.items

        const slides = mentions.map((mention: Mention, index: number) => (
          <div
            key={index}
            className="flex flex-col items-start max-w-[19.4rem] text-wrap"
          >
            <h3 className="text-headlines/h3 text-blue-secondary mb-6">
              {mention.fieldData.quote}
            </h3>
            <p className="text-body/medium text-pink-secondary mb-10">
              {mention.fieldData.name}
            </p>
            <img
              src={mention.fieldData.logo.url}
              alt={mention.fieldData.name}
            />
          </div>
        ))

        setMentionsSlides(slides)
      } catch (error) {
        console.error("Failed to fetch mentions:", error)
      }
    }

    fetchMentions()
  }, [])

  return (
    <section className="sm:px-5 xs:px-4">
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
