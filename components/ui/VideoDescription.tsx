import Image from "next/image"

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
      <Image
        className="w-[1.5625rem] absolute top-[-0.30rem] left-[-2.0025rem]"
        src={src}
        alt={title}
        loading="lazy"
        width={25}
        height={25}
      />
      <p className="opacity-50">{title}</p>
      <p className="opacity-30">{description}</p>
    </>
  )
}

export default VideoDescription
