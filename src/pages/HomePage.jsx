import '../styles/HomePage.css'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import videoFile from '../assets/Video8.mp4'
import buildingIcon from '../assets/building.png'
import clipboardIcon from '../assets/clipboard.png'
import resourcesIcon from '../assets/human-resources.png'
import { useEffect, useRef } from 'react'

function HomePage() {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.playbackRate = 0.6
  }, [])

  const serviceCards = [
    {
      title: 'Техническое обследование',
      image: clipboardIcon,
      content:
        'Комплекс мероприятий, позволяющие гарантировать безопасность и своевременное вяывление недостатков эксплуатируемых обхектов.',
    },
    {
      title: 'Проектирование',
      image: buildingIcon,
      content:
        'Это комплекс работ, который предшествует строительству, позволяющий минимизировать риски в процессе строительства.',
    },
    {
      title: 'Авторский надзор',
      image: resourcesIcon,
      content:
        'Это комплекс работ, направленных на контроль процесса строительства, с целью соблюдения стилистических, архитектурных, технических и др. проектных решений, обозначенных в проектной документации.',
    },
    {
      title: 'Технический и строительный аудит',
      image: clipboardIcon,
      content:
        'Это комплекс экспертных мероприятий, направленный на выявление недостатков и нарушений, допущенных в ходе выполнения проектно-сметных, строительно-монтажных и ремонтно-отделочных работ.',
    },
  ]

  return (
    <section className="max-w-screen-2xl flex flex-col items-center p-6 gap-20">
      <div className="flex items-center gap-7 main">
        <div className="flex flex-col gap-6 w-1/3 text-[#101014]">
          <h1 className="text-4xl whitespace-nowrap uppercase font-medium">
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
          <video
            autoPlay
            muted
            loop
            playsInline
            ref={videoRef}
            className="rounded-2xl"
          >
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="wrapper flex justify-between">
        <div className="max-w-3/5 flex flex-col gap-5">
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
            className="transition duration-300 bg-[#26bbff] hover:bg-[#8dd5ff] px-4 py-2 rounded-lg text-sm"
          >
            Подробнее
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full bg-[#282828] text-white">
        <div>
          <h1>Наши показатели</h1>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex flex-col">
            <img src="" alt="" />
            <h3>18</h3>
            <p>лет на рынке</p>
          </div>
          <div className="flex flex-col">
            <img src="" alt="" />
            <h3>30+</h3>
            <p>штат компании</p>
          </div>
          <div className="flex flex-col">
            <img src="" alt="" />
            <h3>400+</h3>
            <p>объектов в копилке компании</p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between gap-10"
        style={{ minHeight: '400px' }}
      >
        {serviceCards.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            image={card.image}
            content={card.content}
          />
        ))}
      </div>
    </section>
  )
}

export default HomePage
