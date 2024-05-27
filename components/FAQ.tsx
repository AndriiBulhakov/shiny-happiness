"use client"

import { useState, useEffect } from "react"
import SectionsHeader from "./ui/SectionHeader"
import Accordion from "./ui/Accordion"
import axios from "axios"

interface FaqItem {
  title: string
  content: string
}

const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(0)
  const [faqs, setFaqs] = useState<FaqItem[]>([])

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("/api/faqs")
        const items = response.data.items
        const formattedFaqs = items.map((item: any) => ({
          title: item.fieldData.name,
          content: item.fieldData["answer-3"],
        }))
        setFaqs(formattedFaqs)
      } catch (error) {
        console.error("Error fetching FAQs:", error)
      }
    }

    fetchFaqs()
  }, [])

  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index)
  }

  return (
    <section className="pt-6 pb-40 sm:px-5 xs:px-4 flex flex-col items-center gap-20">
      <SectionsHeader
        title="If you still have questions. Here are the answers"
        subtitle="Questions & Answers"
      />
      <div className="max-w-[64.3rem] w-full flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            isOpen={openAccordionIndex === index}
            onToggle={() => handleAccordionToggle(index)}
            content={faq.content}
          ></Accordion>
        ))}
      </div>
    </section>
  )
}

export default FAQ
