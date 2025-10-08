// src/components/ProjectDetail.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProject } from '../api/projects'
import { mediaUrl } from '../api/client'
import ImageLightbox from './ImageLightbox'
import Loading from './Loading'

export default function ProjectDetail() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [err, setErr] = useState(null)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  useEffect(() => {
    fetchProject(id)
      .then(setP)
      .catch((e) => setErr(e.message || 'Failed to load'))
  }, [id])

  if (err) return <Loading />
  if (!p) return <Loading />
  const gallery = (p.gallery || []).map((g) => ({
    image: mediaUrl(g.image),
    caption: g.caption,
  }))

  return (
    <div className="mx-auto max-w-screen-3xl mt-20 px-10">
      <div className="flex flex-col-reverse 2md:flex-row justify-between gap-4 items-center 2md:items-start">
        <div className="flex flex-col 2md:max-w-2/4">
          <h1 className="text-2xl font-bold">{p.title}</h1>
          <p className="text-gray-600">{p.address}</p>
          <p className="mt-2 text-justify">{p.description}</p>
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
        </div>
        <div>
          {p.blueprint && (
            <img
              src={mediaUrl(p.blueprint)}
              alt={`${p.title} blueprint`}
              className="mb-4 w-2xl rounded-xl object-cover aspect-[16/9]"
            />
          )}
        </div>
      </div>
      <hr className="mt-4 text-stone-300" />
      {!!gallery?.length && (
        <>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <figure
                key={i}
                onClick={() => setLightbox({ open: true, index: i })}
                className="rounded-lg overflow-hidden"
              >
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
      {lightbox.open && (
        <ImageLightbox
          images={gallery}
          startIndex={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
        />
      )}
    </div>
  )
}
