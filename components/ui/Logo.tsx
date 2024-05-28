import Image from "next/image"

const Logo = ({ className, type }: { className?: string; type: string }) => {
  return (
    <>
      <Image
        src="/assets/images/full-logo.svg"
        alt="logo"
        loading="lazy"
        className={`${className} ${
          type === "nav" ? "lg:block xs:hidden" : "xs:block"
        }`}
        width={189}
        height={28}
      />
      <Image
        src="/assets/images/short-logo.svg"
        alt="logo"
        loading="lazy"
        className={`${className} ${
          type === "nav" ? "lg:hidden xs:block" : "xs:hidden"
        }`}
        width={58}
        height={50}
      />
    </>
  )
}

export { Logo }
