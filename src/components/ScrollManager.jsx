import { useLayoutEffect, useEffect, useState } from 'react'
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

function getHeaderOffset(headerEl) {
  if (!headerEl) return 0
  const rect = headerEl.getBoundingClientRect()
  const pos = getComputedStyle(headerEl).position
  const isFixed = pos === 'fixed'
  const isStickyPinned = pos === 'sticky' && Math.round(rect.top) <= 0 // stuck to top
  return isFixed || isStickyPinned ? Math.ceil(rect.height) : 0
}

/**
 * Props:
 * - headerSelector: CSS selector of your header (e.g. "header.site-header")
 * - containerSelector: if you scroll inside a container div (optional)
 * - baseOffset: extra pixels to add (optional)
 */
export default function ScrollManager({
  headerSelector,
  containerSelector,
  baseOffset = 0,
}) {
  const { pathname, hash } = useLocation()
  const scroller = getScroller(containerSelector)
  const [headerOffset, setHeaderOffset] = useState(0)

  // Keep header offset in sync (on resize/scroll and when header size changes)
  useEffect(() => {
    const headerEl = headerSelector
      ? document.querySelector(headerSelector)
      : null
    if (!headerEl) {
      setHeaderOffset(0)
      return
    }

    const update = () => setHeaderOffset(getHeaderOffset(headerEl))

    update() // initial
    const ro = new ResizeObserver(update)
    ro.observe(headerEl)
    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('scroll', update, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
    }
  }, [headerSelector])

  const effectiveOffset = headerOffset + baseOffset

  // Normal navigation → snap to top
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

  // Hash navigation → jump to top, then smooth-scroll to anchor with dynamic offset
  useEffect(() => {
    if (!hash) return

    if (scroller === window) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } else {
      scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    const id = decodeURIComponent(hash.slice(1))
    let stop = false
    const deadline = performance.now() + 5000

    const tick = () => {
      if (stop) return
      const el = document.getElementById(id)
      if (el) {
        const y = getTargetY(el, scroller, effectiveOffset)
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
  }, [pathname, hash, effectiveOffset, containerSelector])

  return null
}
