import { useState } from "react"
import SectionsHeader from "./ui/SectionHeader"
import Accordion from "./ui/Accordion"
import { faqsContent } from "@/data"

const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(0)

  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index)
  }

  return (
    <section className="pt-6 pb-40 flex flex-col items-center gap-20">
      <SectionsHeader
        title="If you still have questions. Here are the answers"
        subtitle="Questions & Answers"
      />
      <div className="max-w-[64.3rem] w-full flex flex-col gap-2">
        {faqsContent.map((faq, index) => (
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
