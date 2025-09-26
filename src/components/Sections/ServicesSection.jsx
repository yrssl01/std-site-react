import ServiceCard from '../ServiceCard/ServiceCard'
import { useState } from 'react'
import searchIcon from '../../assets/search.png'
import buildingIcon from '../../assets/buildings.png'
import controlIcon from '../../assets/control.png'
import helmetIcon from '../../assets/helmet.png'

function ServicesSection() {
  const serviceCards = [
    {
      id: 1,
      title: 'Техническое обследование',
      image: searchIcon,
      content:
        'Комплекс мероприятий, позволяющие гарантировать безопасность и своевременное выявление недостатков эксплуатируемых объектов.',
    },
    {
      id: 2,
      title: 'Проектирование',
      image: buildingIcon,
      content:
        'Это комплекс работ, который предшествует строительству, позволяющий минимизировать риски в процессе строительства.',
    },
    {
      id: 3,
      title: 'Авторский надзор',
      image: controlIcon,
      content:
        'Это комплекс работ, направленных на контроль процесса строительства, с целью соблюдения стилистических, архитектурных, технических и др. проектных решений, обозначенных в проектной документации.',
    },
    {
      id: 4,
      title: 'Технический и строительный аудит',
      image: helmetIcon,
      content:
        'Это комплекс экспертных мероприятий, направленный на выявление недостатков и нарушений, допущенных в ходе выполнения проектно-сметных, строительно-монтажных и ремонтно-отделочных работ.',
    },
  ]

  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      className="flex flex-col gap-5 px-20 bg-[#4d4d4d] text-white"
      style={{ minHeight: '430px' }}
    >
      <div>
        <h2 className="text-2xl">Услуги</h2>
      </div>
      <div className="flex justify-between gap-10">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.id}
            {...card}
            isExpanded={expandedId === card.id}
            onToggle={() => toggleExpand(card.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
