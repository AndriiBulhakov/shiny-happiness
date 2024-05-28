"use client"
import { useEffect, useState } from "react"
import Carousel from "./ui/Carousel"
import { EmblaOptionsType } from "embla-carousel"
import SectionsHeader from "./ui/SectionHeader"
import axios from "axios"
import Image from "next/image"

interface Logo {
  fileId: string
  url: string
  alt: string | null
}

interface FieldData {
  type: string
  testimonial: string
  name: string
  slug: string
  logo: Logo
}

interface Testimonial {
  id: string
  cmsLocaleId: string
  lastPublished: string | null
  lastUpdated: string
  createdOn: string
  isArchived: boolean
  isDraft: boolean
  fieldData: FieldData
}

interface ApiResponse {
  items: Testimonial[]
  pagination: {
    limit: number
    offset: number
    total: number
  }
}

const OPTIONS: EmblaOptionsType = { loop: true }

const Testimonials = () => {
  const [testimonialsSlides, setTestimonialsSlides] = useState<JSX.Element[]>(
    []
  )

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<ApiResponse>("/api/testimonials")
        const fetchedTestimonials = response.data.items

        const testimonialsArray = fetchedTestimonials.map(
          (testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="p-6 rounded-[2rem] sm:w-[26.375rem] xs:w-[21.375rem] self-stretch flex flex-col justify-between items-start bg-white-background"
            >
              <div className="flex flex-col justify-between items-start gap-8 mb-[2rem] text-wrap">
                <div
                  className={`testimonial-tag rounded-[2rem] py-3 px-4 flex items-center justify-center gap-2`}
                  data-content={testimonial.fieldData.type}
                >
                  <h3>{testimonial.fieldData.type}</h3>
                </div>
                <h3 className="text-headlines/h3">
                  {testimonial.fieldData.testimonial}
                </h3>
                <p className="text-body/medium text-gray-primary opacity-40">
                  {testimonial.fieldData.name}
                </p>
              </div>
              <img
                src={testimonial.fieldData.logo.url}
                alt={testimonial.fieldData.logo.alt || ""}
                className="max-h-[3.25rem]"
              />
            </div>
          )
        )
        setTestimonialsSlides(testimonialsArray)
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <section
      className="pt-24 pb-28 px flex flex-col items-center gap-20 overflow-hidden"
      id="testimonials"
    >
      <SectionsHeader
        title="Discover the power of our product through real stories"
        subtitle="We Are Here to Help You Succeed"
      />
      <Carousel
        slides={testimonialsSlides}
        options={OPTIONS}
        gap={20}
        stopOnHover={true}
      />
    </section>
  )
}

export default Testimonials
