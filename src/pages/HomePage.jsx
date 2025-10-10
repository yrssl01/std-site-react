import '../styles/HomePage.css'

import videoFile from '../assets/Video8.mp4'
import StatsSection from '../components/Sections/StatsSection'
import ServicesSection from '../components/Sections/ServicesSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import ProjectList from '../components/ProjectList'

function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center mt-20 max-w-screen-3xl mx-auto px-10 ">
        <div className="flex items-center gap-7 main">
          <div className="flex flex-col gap-6 w-1/3 text-[#101014]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl whitespace-nowrap uppercase font-medium">
              Высокое качество
              <br />и профессионализм
            </h1>
            <p className="text-base whitespace-nowrap justify-center">
              Оказываем полный спектр услуг
              <br />
              технического обследования и проектирования.
              <br /> Авторский надзор и технический аудит.
            </p>
            <div className="btn-wrapper flex gap-4 text-sm items-baseline">
              <a
                href="#"
                className="transition duration-300 bg-[#26bbff] hover:bg-[#8dd5ff] px-4 py-2 rounded-lg whitespace-nowrap"
              >
                Оставить заявку
              </a>
              <a
                href="#"
                className="text-white font-medium transition duration-300 bg-[#7c7c7c] hover:bg-[#bdbdbd] px-4 py-2 rounded-lg whitespace-nowrap"
              >
                Связаться с нами
              </a>
            </div>
          </div>
          <div>
            <video autoPlay muted loop playsInline className="rounded-2xl">
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="wrapper flex justify-between mt-20">
          <div className="w-full xl:w-3/5  flex flex-col gap-5">
            <h2 className="text-2xl">О компании</h2>
            <p>
              Команда профессионалов, в сфере инжиниринговых услуг. Мы оказываем
              полный спектр работ по техническому обследованию и проектированию.
              Официально наша компания была зарегистрирована в 2007 году.
            </p>
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="transition duration-300 bg-[#26bbff] hover:bg-[#26bbffcc] px-4 py-2 rounded-lg text-sm"
            >
              Подробнее
            </a>
          </div>
        </div>
      </section>
      <section>
        {' '}
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
      </section>
    </>
  )
}

export default HomePage
