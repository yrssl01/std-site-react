import { useEffect, useState } from 'react'
import { fetchProjects } from '../api/projects'
import { mediaUrl } from '../api/client'
import { Link } from 'react-router-dom'
import Loading from './Loading'

export default function ProjectList() {
  const [items, setItems] = useState([])
  const [next, setNext] = useState(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  async function load(pageUrl = null) {
    try {
      setLoading(true)
      const data = pageUrl
        ? (await fetch(pageUrl)).json() // in case next is absolute; but easier: call axios with full URL
        : await fetchProjects({ page_size: 12 })

      const payload = pageUrl ? await data : data

      // If you didn't turn on pagination, payload is an array
      const results = Array.isArray(payload) ? payload : payload.results
      setItems((prev) => (pageUrl ? [...prev, ...results] : results))
      setNext(payload.next || null)
    } catch (e) {
      setErr(e.message || 'Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  if (loading && items.length === 0) return <Loading />
  if (err) return <Loading />

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto md:auto-rows-fr justify-center">
      {items.map((p) => (
        <article
          key={p.id}
          className=" rounded-2xl border shadow-sm flex flex-col overflow-visible"
        >
          {/* media */}
          <div className="aspect-[16/9] max-h-56 w-full bg-gray-100 rounded-2xl">
            {p.blueprint && (
              <img
                src={mediaUrl(p.blueprint)}
                alt={p.title}
                className="h-full w-full object-cover rounded-2xl"
              />
            )}
          </div>

          {/* content column */}
          <div className="flex flex-1 min-h-0 flex-col p-4 gap-2">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.address}</p>

            {/* Don’t clamp on small screens */}
            <p className="hidden md:mt-1 md:block md:text-sm clamp-2 ">
              {p.description}
            </p>

            {/* Services: let them wrap; only cap from md+ */}
            {!!p.services?.length && (
              <div className="flex flex-wrap gap-2 ">
                {p.services.map((s) => (
                  <span
                    key={s.id}
                    className="rounded-full border border-stone-300 bg-gray-100 px-2 py-1 text-xs"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            )}

            {/* Pin to bottom only when there’s room */}
            <div className="self-end mt-auto">
              <Link
                to={`projects/${p.id}`}
                className="inline-block rounded-lg px-3 py-1 text-sm bg-[#26bbff] hover:bg-[#8dd5ff]"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
