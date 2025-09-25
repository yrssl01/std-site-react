import { useState } from 'react'
import '../../styles/ServiceCard.css'

function ServiceCard({ title, content, image }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={`transition-all duration-600 overflow-hidden card flex flex-col p-8 gap-2.5 text-[#101014] bg-white rounded-xl items-center justify-center grow basis-0 ${
        isHovered ? 'h-96' : 'h-44'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <div className="card-image w-20 shrink-0">{image}</div>}
      <div className="card-body text-center flex flex-col gap-2 items-center ">
        <h3 className="card-title text-lg shrink-0">{title}</h3>
      </div>
      <div
        className={`card-content shrink-0 transition duration-600 ${
          isHovered ? 'opacity-100 mt-4' : 'opacity-0 mt-0 h-0'
        }`}
      >
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

export default ServiceCard
