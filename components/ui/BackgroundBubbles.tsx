const BackgroundBubbles = ({
  position,
  rotate,
  className,
  overlayClassName,
}: {
  position: string
  rotate?: string
  className?: string
  overlayClassName?: string
}) => {
  return (
    <div
      className={`bubbles-wrapper ${position} top-0 left-0 right-0 bottom-0 ${
        className ? className : ""
      } ${rotate ? rotate : ""}`}
    >
      <div
        className={`blur-overlay backdrop-blur-[87px] ${
          overlayClassName ? overlayClassName : ""
        }`}
      ></div>
      <div className="bubble is--red"></div>
      <div className="bubble is--yellow"></div>
      <div className="bubble is--violet"></div>
    </div>
  )
}

export default BackgroundBubbles
