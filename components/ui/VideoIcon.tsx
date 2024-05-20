const VideoIcon = (props: { color?: string; className: string }) => {
  return (
    <div
      className={`video-icon flex items-center gap-[0.3125rem] h-[1.3805rem] ${props.className}`}
    >
      <div
        className={`w-[0.1875rem] rounded-lg ${props.color ? props.color : ""}`}
      ></div>
      <div
        className={`w-[0.1875rem] rounded-lg ${props.color ? props.color : ""}`}
      ></div>
      <div
        className={`w-[0.1875rem] rounded-lg ${props.color ? props.color : ""}`}
      ></div>
    </div>
  )
}

export default VideoIcon
