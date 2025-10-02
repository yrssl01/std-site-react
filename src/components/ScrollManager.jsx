// src/ScrollManager.jsx
import { useLayoutEffect, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function getScroller(selector) {
  if (!selector) return window
  const el = document.querySelector(selector)
  return el || window
}

function getTargetY(el, scroller, offset) {
  if (scroller === window) {
    return Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - (offset || 0)
    )
  }
  const s = scroller
  return Math.max(
    0,
    el.getBoundingClientRect().top -
      s.getBoundingClientRect().top +
      s.scrollTop -
      (offset || 0)
  )
}

export default function ScrollManager({ offset = 0, containerSelector }) {
  const { pathname, hash } = useLocation()
  const scroller = getScroller(containerSelector)

  // Normal navigation: snap to top (no animation)
  useLayoutEffect(() => {
    if (!hash) {
      if (scroller === window) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      } else {
        scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Hash navigation: jump to top, then smooth-scroll when target appears
  useEffect(() => {
    if (!hash) return

    if (scroller === window) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } else {
      scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    const id = decodeURIComponent(hash.slice(1))
    let stop = false
    const deadline = performance.now() + 5000 // wait up to 5s for lazy content

    const tick = () => {
      if (stop) return
      const el = document.getElementById(id)
      if (el) {
        const y = getTargetY(el, scroller, offset)
        if (scroller === window) {
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else {
          scroller.scrollTo({ top: y, behavior: 'smooth' })
        }
        return
      }
      if (performance.now() < deadline) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
    return () => {
      stop = true
    }
  }, [pathname, hash, offset, containerSelector]) // OK in JS

  return null
}
