import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function About() {
  const location = useLocation()
  const lastHash = useRef('')

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
  }
  })
  

  return (
    <section>
      <div className="flex flex-col">
        links
        <a href="#content1">content1</a>
        <a href="#content2">content2</a>
        <a href="#content3">content3</a>
      </div>
      <div className="w-screen h-screen">
        <h2 id="content1">Content 1</h2>
      </div>
      <div className="w-screen h-screen">
        <h2 id="content2">Content 2</h2>
      </div>
      <div className="w-screen h-screen">
        <h2 id="content3">Content 3</h2>
      </div>
    </section>
  )
}

export default About
