const StickySection = ({
  children,
  sectionClassName,
  overlayClassName,
  id,
}: {
  children: React.ReactNode
  sectionClassName?: string
  overlayClassName?: string
  id?: string
}) => {
  return (
    <section
      className={`lg:sticky xs:static top-0 p-5 min-h-[100svh] flex bg-gray-primary ${
        sectionClassName ? sectionClassName : ""
      }`}
      id={id}
    >
      <div
        className={`p-8 rounded-[2rem] bg-white-background w-full flex flex-col items-center justify-center self-stretch relative overflow-hidden ${
          overlayClassName ? overlayClassName : "lg:p-8 sm:p-12 xs:p-4 "
        }`}
      >
        {children}
      </div>
    </section>
  )
}

export default StickySection
