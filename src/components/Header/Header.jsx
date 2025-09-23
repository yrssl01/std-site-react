import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-[#101014] sticky top-0">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center rtl:space-x-reverse gap-6">
          <img src={logo} alt="Std Project logo" className="h-20" />
          <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white uppercase">
            Стандарт
            <br />
            Проектирования
          </span>
        </Link>
        <ul className={`flex ml-auto gap-8 list ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="transition duration-300 hover:text-[#7c7c7c]"
            >
              Главная страница
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="transition duration-300 hover:text-[#7c7c7c]"
            >
              О компании
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={closeMenu}
              className="transition duration-300 hover:text-[#7c7c7c]"
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={closeMenu}
              className="transition duration-300 hover:text-[#7c7c7c]"
            >
              Наш опыт
            </Link>
          </li>
          <li>
            <Link
              to="/professionals"
              onClick={closeMenu}
              className="transition duration-300 hover:text-[#7c7c7c]"
            >
              Наши специалисты
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="transition duration-300 hover:text-[#7c7c7c]"
            >
              Контакты
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Header
