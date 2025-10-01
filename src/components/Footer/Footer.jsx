import '../../styles/Footer.css'

function Footer() {
  return (
    <footer className="bg-white text-[#101014]">
      <div className="mx-auto max-w-screen-2xl flex flex-col p-6 gap-4 bottom-0">
        <h1 className="text-xl md:text-2xl font-medium">Свяжитесь с нами</h1>
        <p className="text-sm">
          Готовы начать свой проект или узнать больше о наших услугах? Мы всегда
          на связи и ждем вашего обращения.
        </p>

        <div className="flex justify-between flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 font-light">
            <h3 className="font-medium text-base md:text-lg">
              Контактная информация
            </h3>
            <div className="flex flex-col gap-1 text-sm md:text-base">
              <p>+7 (727) 311-11-05</p>
              <p>+7 (701) 222-82-33</p>
              <a href="mailto:std-project@mail.ru">std-project@mail.ru</a>
              <p>std-pro.kz</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 font-light">
            <h3 className="font-medium text-base md:text-lg ">Главный офис</h3>
            <div className="flex flex-col gap-1 text-sm md:text-base">
              <p>«Атакент», офисный городок «Экспо-Сити»</p>
              <p>Тимирязева 42, корпус 15/4</p>
              <p>г. Алматы Казахстан</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
