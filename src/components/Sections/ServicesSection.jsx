import ServiceCard from '../ServiceCard/ServiceCard'
import { useState } from 'react'

import '../../styles/ServicesSection.css'
import servicesData from './services.json'

function ServicesSection() {
  // const serviceCards = [
  //   {
  //     id: 1,
  //     title: 'Техническое обследование',
  //     link: 'research',
  //     image: searchIcon,
  //     content:
  //       'Комплекс мероприятий, позволяющие гарантировать безопасность и своевременное выявление недостатков эксплуатируемых объектов.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Проектирование',
  //     link: 'project',
  //     image: buildingIcon,
  //     content:
  //       'Это комплекс работ, который предшествует строительству, позволяющий минимизировать риски в процессе строительства.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Авторский надзор',
  //     link: 'inspect',
  //     image: controlIcon,
  //     content:
  //       'Это комплекс работ, направленных на контроль процесса строительства, с целью соблюдения стилистических, архитектурных, технических и др. проектных решений, обозначенных в проектной документации.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Технический и строительный аудит',
  //     link: 'audit',
  //     image: helmetIcon,
  //     content:
  //       'Это комплекс экспертных мероприятий, направленный на выявление недостатков и нарушений, допущенных в ходе выполнения проектно-сметных, строительно-монтажных и ремонтно-отделочных работ.',
  //   },
  // ]

  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className=" bg-[#4d4d4d] text-white min-h-[800px]">
      <div className="flex flex-col gap-5 px-20 max-w-screen-3xl mx-auto ">
        <div>
          <h2 className="text-2xl">Услуги</h2>
        </div>
        <div className="services-container flex justify-around gap-y-16 gap-x-4 flex-wrap">
          {servicesData.map((card) => (
            <ServiceCard
              key={card.id}
              {...card}
              isExpanded={expandedId === card.id}
              onToggle={() => toggleExpand(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
