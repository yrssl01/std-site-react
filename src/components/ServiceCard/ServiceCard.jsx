import '../../styles/ServiceCard.css'

function ServiceCard({ title, content, image, isExpanded, onToggle }) {
  return (
    <div
      className={`bg-white shadow-md cursor-pointer shadow-gray-500/50 rounded-2xl grow shrink basis-[324px]  overflow-hidden transition-all duration-300 text-[#101014] ${
        isExpanded ? 'max-h-96' : 'max-h-44'
      }`}
      onClick={onToggle}
    >
      <div className="flex flex-col p-6 items-center">
        <div>
          <img src={image} alt={title} className="h-20" />
        </div>
        <div className="text-lg font-medium text-center">{title}</div>
      </div>
      <div
        className={`overflow-hidden px-5 pb-5 transition-all duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  )
}

export default ServiceCard
