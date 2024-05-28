// Tutorials.tsx
"use client"

import SectionHeader from "./ui/SectionHeader"
import { useEffect, useState } from "react"
import Carousel from "./ui/Carousel"
import { EmblaOptionsType } from "embla-carousel"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"

interface Tutorial {
  id: string
  date: string
  description: string
  title: string
  image: {
    url: string
  }
}

interface ApiResponse {
  items: {
    id: string
    fieldData: {
      "date-of-create": string
      "short-description": string
      name: string
      image: {
        url: string
      }
      link?: string
    }
  }[]
}

const OPTIONS: EmblaOptionsType = { loop: true }

const Tutorials = () => {
  const [tutorialsSlides, setTutorialsSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get<ApiResponse>("/api/tutorials")
        const tutorialsContent = response.data.items.map((item) => ({
          id: item.id,
          date: new Date(item.fieldData["date-of-create"]).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }
          ),
          description: item.fieldData["short-description"],
          title: item.fieldData.name,
          image: item.fieldData.image.url,
          link: item.fieldData.link,
        }))

        const testimonialsArray = tutorialsContent.map((tutorial, index) => {
          const truncatedDescription =
            tutorial.description
              .split("\n")
              .slice(0, 4)
              .join("\n")
              .slice(0, 220) + "..."
          return tutorial.link ? (
            <Link href={tutorial.link}>
              <div
                key={index}
                className="p-8 rounded-[2rem] sm:w-[25.9rem] xs:w-[21.375rem] self-stretch flex flex-col justify-start items-start gap-6 bg-white-background text-wrap"
              >
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full rounded-lg max-h-[10.125rem]"
                  width={350}
                  height={162}
                />
                <p className="text-body/medium text-gray-primary opacity-40">
                  {tutorial.date}
                </p>
                <h3 className="text-headlines/h3">{tutorial.title}</h3>
                <p className="text-body/medium text-gray-primary opacity-40">
                  {truncatedDescription}
                </p>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="p-8 rounded-[2rem] sm:w-[25.9rem] xs:w-[21.375rem] self-stretch flex flex-col justify-start items-start gap-6 bg-white-background text-wrap"
            >
              <img
                src={tutorial.image}
                alt=""
                className="w-full rounded-lg max-h-[10.125rem]"
              />
              <p className="text-body/medium text-gray-primary opacity-40">
                {tutorial.date}
              </p>
              <h3 className="text-headlines/h3">{tutorial.title}</h3>
              <p className="text-body/medium text-gray-primary opacity-40">
                {truncatedDescription}
              </p>
            </div>
          )
        })

        setTutorialsSlides(testimonialsArray)
      } catch (error) {
        console.error("Error fetching tutorials:", error)
      }
    }

    fetchTutorials()
  }, [])

  return (
    <section className="pt-24 pb-28 px flex flex-col items-center gap-20 overflow-hidden">
      <SectionHeader
        title="Learn more about AI superpowers to navigate this recruiting season"
        subtitle="AI Will Not Take Your Job But Someone Using AI Will"
      />
      <Carousel
        slides={tutorialsSlides}
        options={OPTIONS}
        gap={20}
        stopOnHover={true}
      />
    </section>
  )
}

export default Tutorials
