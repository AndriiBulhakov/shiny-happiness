const Logo = ({ className, type }: { className?: string; type: string }) => {
  return (
    <>
      <img
        src="/assets/images/full-logo.svg"
        alt="logo"
        loading="lazy"
        className={`${className} ${
          type === "nav" ? "lg:block xs:hidden" : "xs:block"
        }`}
      />
      <img
        src="/assets/images/short-logo.svg"
        alt="logo"
        loading="lazy"
        className={`${className} ${
          type === "nav" ? "lg:hidden xs:block" : "xs:hidden"
        }`}
      />
    </>
  )
}

export { Logo }
