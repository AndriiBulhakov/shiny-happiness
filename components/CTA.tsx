const CTA = () => {
  return (
    <section className="pt-28 px-4 pb-4">
      <div className="mentions-wrapper pt-[6.31rem] pb-[25.5rem] pl-[6.37rem] rounded-[2rem] overflow-hidden relative">
        <div className="flex flex-col gap-12 relative z-10">
          <p className="text-body/medium text-white-tetriary opacity-80">
            Go Hired Easily!
          </p>
          <h2 className="text-headlines/h2 text-white-primary max-w-[29rem]">
            Unlock AI superpower to land your dream job today with Final Round
            toolset.
          </h2>
          <a href="#" className="btn btn-tetriary">
            Get Started
          </a>
        </div>

        <div className="absolute top-0 bottom-0 right-0 left-0">
          <img
            src="/assets/images/sticky-tabs/cta-1.png"
            alt="CTA Background"
            className="absolute bottom-[-15rem] right-[-25rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default CTA
