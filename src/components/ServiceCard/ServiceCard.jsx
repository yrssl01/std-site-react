import { HashLink } from 'react-router-hash-link'
import '../../styles/ServiceCard.css'

function ServiceCard({
  title,
  description,
  image,
  link,
  isExpanded,
  onToggle,
}) {
  return (
    <div className="flex flex-col max-w-[345px] grow shrink basis-[400px] gap-4">
      <div
        className={`bg-white shadow-md cursor-pointer shadow-gray-500/50 rounded-2xl overflow-hidden transition-all duration-300 text-[#101014] ${
          isExpanded ? 'max-h-[420px]' : 'max-h-44'
        }`}
        onClick={onToggle}
      >
        <div className="flex flex-col p-6 items-center">
          <div>
            <img src={image} alt={title} loading="lazy" className="h-20" />
          </div>
          <div className="text-lg font-medium text-center">{title}</div>
        </div>
        <div
          className={`overflow-hidden px-5 pb-5 transition-all duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>{description}</div>
        </div>
      </div>
      <div className="text-center">
        <HashLink
          to={`/services#${link}`}
          className="transition duration-300 bg-[#26bbff] hover:bg-[#8dd5ff] px-4 py-2 rounded-lg text-sm"
        >
          Узнать больше
        </HashLink>
      </div>
    </div>
  )
}

export default ServiceCard
