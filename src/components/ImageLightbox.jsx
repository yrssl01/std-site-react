import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ImageLightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const startX = useRef(null)

  const hasPrev = images.length > 1
  const hasNext = images.length > 1

  // Lock scroll + key handlers
  useEffect(() => {
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft' && hasPrev)
        setIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight' && hasNext)
        setIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [images.length, hasPrev, hasNext, onClose])

  // Basic swipe
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (startX.current == null) return
    const dx = e.changedTouches[0].clientX - startX.current
    const threshold = 40
    if (dx > threshold && hasPrev)
      setIndex((i) => (i - 1 + images.length) % images.length)
    if (dx < -threshold && hasNext) setIndex((i) => (i + 1) % images.length)
    startX.current = null
  }

  const img = images[index]

  const body = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center p-4 select-none">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
        >
          <svg
            fill="#ffffff"
            width="32px"
            height="32px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
            </g>
          </svg>
        </button>
        <div
          className="relative max-h-[85vh] max-w-[92vw] select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Prev */}

          {/* Image */}
          <figure
            className="max-h-[85vh] max-w-[92vw] overflow-hidden rounded-xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Use object-contain if you don't want cropping */}
            <img
              src={img.src || img.image} // allow either {src} or your API's {image}
              alt={img.caption || ''}
              className="max-h-[85vh] max-w-[92vw] object-contain"
              draggable={false}
            />
            {(img.caption || index + 1) && (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {img.caption || ''}{' '}
                {images.length > 1 && (
                  <span>
                    ({index + 1} / {images.length})
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        </div>

        {hasPrev && (
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i - 1 + images.length) % images.length)
            }}
            aria-label="Предыдущее"
          >
            ‹
          </button>
        )}

        {/* Next */}
        {hasNext && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i + 1) % images.length)
            }}
            aria-label="Следующее"
          >
            ›
          </button>
        )}
      </div>
    </div>
  )

  return createPortal(body, document.body)
}
