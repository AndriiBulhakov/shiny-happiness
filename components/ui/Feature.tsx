type FeatureProps = {
  title: string
  description: string
  image: string
}

const Feature = ({ image, title, description }: FeatureProps) => {
  return (
    <li className="flex flex-col items-center text-center flex-1">
      <img src={image} alt={title} className="max-w-[5.875rem] mb-8" />
      <h3 className="text-headlines/h3 mb-6">{title}</h3>
      <p className="text-body/large text-gray-tetriary">{description}</p>
    </li>
  )
}

export default Feature
