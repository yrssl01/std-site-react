import { useEffect, useMemo, useRef, useState } from 'react'
import ProjectCard from '../Project/Project'

export default function Carousel({ projects }) {
  const viewportRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [slideW, setSlideW] = useState(1)

  useEffect(() => {
    const measure = () => {
      const vp = viewportRef.current
      if (!vp) return
      setSlideW(vp.getBoundingClientRect().width)
      updateIndex()
    }
    const ro = new ResizeObserver(measure)
    if (viewportRef.current) ro.observe(viewportRef.current)
    measure()
    return () => ro.disconnect()
  })

  const maxIndex = useMemo(
    () => Math.max(0, projects.length - 1),
    [projects.length]
  )

  function updateIndex() {
    const vp = viewportRef.current
    if (!vp || slideW === 0) return
    const i = Math.round(vp.scrollLeft / slideW)
    setIndex(i)
  }

  function scrollToIndex(i) {
    const vp = viewportRef.current
    if (!vp) return
    vp.scrollTo({ left: i * slideW, behavior: 'smooth' })
  }

  const next = () => scrollToIndex(Math.min(index + 1, maxIndex))
  const prev = () => scrollToIndex(Math.max(index - 1, 0))

  return (
    <div className="relative select-none">
      <div className="pointer-events-none absolute inset-y-0 inset-x-0 z-10">
        <div className="flex items-center justify-between h-full px-2 sm:px-8 mx-[calc(50%-49vw)]">
          <button
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
            className="hidden lg:flex pointer-events-auto flex-col items-center justify-center rounded-full h-[30px] w-[30px] xl:h-[50px] xl:w-[50px] bg-[#d3d3d3] hover:bg-[#7c7c7c] cursor-pointer shadow disabled:opacity-40 disabled:pointer-events-none"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            disabled={index === maxIndex}
            className="hidden lg:flex pointer-events-auto flex-col items-center justify-center rounded-full h-[30px] w-[30px] xl:h-[50px] xl:w-[50px] bg-[#d3d3d3] hover:bg-[#7c7c7c] cursor-pointer shadow disabled:opacity-40 disabled:pointer-events-none"
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={viewportRef}
        onScroll={() => requestAnimationFrame(updateIndex)}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 hide-scrollbar"
      >
        {projects.map((p) => (
          <div
            key={p.id}
            data-slide
            className="snap-center flex-none w-full px-4"
          >
            <div
              className={`mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl `}
            >
              <ProjectCard {...p} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-2 ">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? 'bg-slate-900 w-6 cursor-auto'
                : 'bg-slate-300 w-2.5 cursor-pointer'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
