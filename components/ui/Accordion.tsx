interface AccordionProps {
  title: string
  isOpen: boolean
  content: string
  onToggle: () => void
}

const Accordion = ({ title, isOpen, onToggle, content }: AccordionProps) => {
  return (
    <button
      className={`gap-4 p-2 rounded-[2rem] bg-white-background w-full transition-all duration-300 ${
        isOpen ? "pb-2" : "pb-2"
      }`}
      onClick={onToggle}
    >
      <div
        className={`p-8 rounded-3xl flex flex-col gap-6 text-left transition-all duration-300 ${
          isOpen ? "bg-blue-secondary" : "bg-white"
        }`}
      >
        <div className="accordion-header w-full flex flex-row justify-between items-center">
          {title}
          <img
            src={`/assets/images/icon-${isOpen ? "minus" : "plus-small"}.svg`}
            alt={isOpen ? "minus" : "plus"}
          />
        </div>
        <p
          className={`accordion-content transition-opacity duration-300 ${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {content}
        </p>
      </div>
    </button>
  )
}

export default Accordion
