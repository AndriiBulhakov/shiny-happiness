import React, { forwardRef } from "react"

type VideoProps = {
  src: string
  className?: string
}

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, className }, ref) => (
    <video
      ref={ref}
      src={src}
      className={className}
      autoPlay
      loop
      muted
      playsInline
    />
  )
)

export default Video
