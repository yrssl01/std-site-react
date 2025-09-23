import { useState } from 'react'
import '../../styles/ServiceCard.css'

function ServiceCard({ title, content, image }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={`transition-all duration-600 overflow-hidden card flex flex-col p-8 gap-2.5 bg-[#282828] rounded-xl items-center justify-center grow basis-0 ${
        isHovered ? 'h-96' : 'h-44'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <img src={image} alt={title} className="card-image w-20" />}
      <div className="card-body flex flex-col gap-2 items-center justify-center text-white">
        <h3 className="card-title text-lg">{title}</h3>
        <p
          className={`card-content transition-all duration-600 ${
            isHovered ? 'opacity-100 mt-4' : 'opacity-0 mt-0 h-0'
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
