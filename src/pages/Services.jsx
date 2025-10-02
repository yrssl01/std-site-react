import '../styles/Services.css'
import servicesData from '../components/Sections/services.json'

function Services() {
  return (
    <section className="services flex flex-col gap-4 px-20 mt-20">
      {servicesData.map((service) => (
        <div key={service.id} id={service.link}>
          <h1 className="text-2xl uppercase font-semibold">{service.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: service.content }} />
        </div>
      ))}
    </section>
  )
}

export default Services
