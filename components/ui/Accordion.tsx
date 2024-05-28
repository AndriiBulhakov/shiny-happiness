import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface AccordionProps {
  title: string
  isOpen: boolean
  content: string
  onToggle: () => void
}

const Accordion = ({ title, isOpen, onToggle, content }: AccordionProps) => {
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  return (
    <div
      className={`p-2 rounded-[2rem] bg-white-background w-full transition-all duration-300 cursor-pointer ${
        isOpen ? "pb-2" : "pb-2"
      }`}
      onClick={onToggle}
    >
      <div
        className={`p-8 rounded-3xl flex flex-col text-left transition-all duration-300 hover:bg-blue-secondary ${
          isOpen ? "bg-blue-secondary" : "bg-white"
        }`}
      >
        <div className="accordion-header w-full flex flex-row justify-between items-center">
          {title}
          <Image
            src={`/assets/images/icon-${isOpen ? "minus" : "plus-small"}.svg`}
            alt={isOpen ? "minus" : "plus"}
            width={24}
            height={24}
          />
        </div>
        <div
          className="accordion-content transition-all duration-300 text-gray-tetriary overflow-hidden"
          style={{
            maxHeight: isOpen ? contentHeight + "px" : "0px",
            marginTop: isOpen ? "24px" : "0px",
          }}
          ref={contentRef}
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}

export default Accordion
