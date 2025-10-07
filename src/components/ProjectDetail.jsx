// src/components/ProjectDetail.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProject } from '../api/projects'
import { mediaUrl } from '../api/client'
import Loading from './Loading'

export default function ProjectDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchProject(id)
      .then(setP)
      .catch((e) => setErr(e.message || 'Failed to load'))
  }, [id])

  if (err) return <Loading />
  if (!p) return <Loading />

  return (
    <div className="mx-auto max-w-screen-3xl mt-20 px-10">
      {p.blueprint && (
        <img
          src={mediaUrl(p.blueprint)}
          alt={`${p.title} blueprint`}
          className="mb-4 w-2xl rounded-xl object-cover aspect-[16/9]"
        />
      )}
      <h1 className="text-2xl font-bold">{p.title}</h1>
      <p className="text-gray-600">{p.address}</p>
      <p className="mt-2">{p.description}</p>
      <p className="mt-2 text-sm">
        <strong>Период строительства:</strong> {p.start_year} —{' '}
        {p.end_year || 'по настоящее время'}
      </p>

      {!!p.services?.length && (
        <>
          <h2 className="mt-6 text-lg font-semibold">
            Нами проводятся/проведены
          </h2>
          <ul className="list-disc pl-6">
            {p.services.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </>
      )}

      {!!p.gallery?.length && (
        <>
          <h2 className="mt-6 text-lg font-semibold">Галерея</h2>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
            {p.gallery.map((g) => (
              <figure key={g.id} className="rounded-lg overflow-hidden">
                <div className="aspect-[16/9]">
                  <img
                    src={mediaUrl(g.image)}
                    alt={g.caption || ''}
                    className="h-full w-full object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
