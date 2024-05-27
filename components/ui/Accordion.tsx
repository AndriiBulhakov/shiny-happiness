import Image from "next/image"

interface AccordionProps {
  title: string
  isOpen: boolean
  content: string
  onToggle: () => void
}

const Accordion = ({ title, isOpen, onToggle, content }: AccordionProps) => {
  return (
    <div
      className={`gap-4 p-2 rounded-[2rem] bg-white-background w-full transition-all duration-300 cursor-pointer ${
        isOpen ? "pb-2" : "pb-2"
      }`}
      onClick={onToggle}
    >
      <div
        className={`p-8 rounded-3xl flex flex-col gap-6 text-left transition-all duration-300 hover:bg-blue-secondary ${
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
          className={`accordion-content transition-opacity duration-300 text-gray-tetriary ${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default Accordion
