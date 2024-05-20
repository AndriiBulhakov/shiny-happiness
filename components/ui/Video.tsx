import React from "react"

const Video = ({ className, src }: { className?: string; src: string }) => {
  return (
    <video autoPlay loop muted playsInline className={className}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
