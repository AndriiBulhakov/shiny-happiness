import Image from "next/image"

const CTA = () => {
  return (
    <section className="pt-28 sm:px-5 xs:px-4 pb-4">
      <div className="mentions-wrapper lg:pt-[6.31rem] lg:pb-[25.5rem] lg:pl-[6.37rem] sm:px-12 sm:pt-12 xs:pt-8 xs:pl-9 xs:pr-8 rounded-[2rem] overflow-hidden relative">
        <div className="flex flex-col gap-12 relative z-10">
          <p className="text-body/medium text-white-tetriary opacity-80">
            Go Hired Easily!
          </p>
          <h2 className="text-headlines/h2 text-white-primary lg:max-w-[29rem] xs:max-w-full">
            Unlock AI superpower to land your dream job today with Final Round
            toolset.
          </h2>
          <a href="#" className="btn btn-tetriary">
            Get Started
          </a>
        </div>

        <div className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:left-0 lg:h-auto sm:h-[48rem] xs:h-[27rem]">
          <Image
            src="/assets/images/sticky-tabs/cta-1.png"
            alt="CTA Background"
            loading="lazy"
            className="absolute lg:bottom-[-30.038%] lg:right-[-18.786%] lg:left-[auto] lg:w-[98.5%] sm:left-[-13%] sm:bottom-[-11%] sm:w-[170%] xs:left-[-16%] xs:bottom-[-9%] xs:w-[200%] max-w-none"
            width={1083}
            height={718}
          />
          <Image
            src="/assets/images/sticky-tabs/cta-2.png"
            alt="CTA Background"
            loading="lazy"
            className="absolute lg:bottom-[8.846%] lg:right-[-19.071%] lg:w-[67.286%] sm:w-[120%] xs:w-[130%] xs:bottom-[8.846%] max-w-none"
            width={745}
            height={487}
          />
        </div>
      </div>
    </section>
  )
}

export default CTA
