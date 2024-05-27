const SectionsHeader = ({
  title,
  subtitle,
  textColor,
  className,
}: {
  title: string
  subtitle?: string
  textColor?: string
  className?: string
}) => {
  return (
    <>
      {subtitle ? (
        <div
          className={`flex flex-col items-center lg:gap-16 xs:gap-12 text-center relative z-10 ${
            textColor ? textColor : ""
          } ${className ? className : ""}`}
        >
          <p
            className={`text-body/large  ${
              textColor ? textColor && "opacity-50" : "text-gray-quaternary"
            }`}
          >
            {subtitle}
          </p>
          <h2 className="text-headlines/h2 max-w-[46.9375rem]">{title}</h2>
        </div>
      ) : (
        <h2
          className={`text-headlines/h2 text-center max-w-[46.9375rem] relative z-10 ${
            textColor ? textColor : ""
          } ${className ? className : ""}`}
        >
          {title}
        </h2>
      )}
    </>
  )
}

export default SectionsHeader
