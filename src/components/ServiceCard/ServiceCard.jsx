import '../../styles/ServiceCard.css'

function ServiceCard({ title, content, image, isExpanded, onToggle }) {
  return (
    <div
      className={`bg-white shadow-md shadow-gray-500/50 rounded-2xl overflow-hidden grow basis-0 transition-all duration-300 text-[#101014] ${
        isExpanded ? 'max-h-96' : 'max-h-44'
      }`}
    >
      <div
        className="flex flex-col cursor-pointer p-6 items-center"
        onClick={onToggle}
      >
        <div>
          <img src={image} alt={title} style={{ height: '80px' }} />
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
