const StickySection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="sticky top-0 p-5 min-h-[100svh] flex  bg-gray-primary">
      <div className="p-8 rounded-[2rem] bg-white-background w-full flex flex-col items-center justify-center relative overflow-hidden">
        {children}
      </div>
    </section>
  )
}

export default StickySection
