import React from "react"

const VideoDescription = ({
  src,
  title,
  description,
}: {
  src: string
  title: string
  description: string
}) => {
  return (
    <>
      <img
        className="w-[1.5625rem] absolute top-[-0.30rem] left-[-2.0025rem]"
        src={src}
        alt={title}
        loading="lazy"
      />
      <p className="opacity-50">{title}</p>
      <p className="opacity-30">{description}</p>
    </>
  )
}

export default VideoDescription
