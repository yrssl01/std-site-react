import '../styles/Services.css'
import servicesData from '../components/Sections/services.json'

function Services() {
  return (
    <section className="services flex flex-col gap-4 px-20 mt-20 max-w-screen-3xl mx-auto">
      {servicesData.map((service) => (
        <div key={service.id} id={service.link}>
          <h1 className="text-xl sm:text-2xl uppercase font-semibold">
            {service.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: service.content }}
            className="text-sm sm:text-base"
          />
        </div>
      ))}
    </section>
  )
}

export default Services
