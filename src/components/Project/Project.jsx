function Project({
  title,
  description,
  imageUrl,
  imageAlt = '',
  bg = 'bg-slate-100',
}) {
  return (
    <div
      className={`project ${bg} rounded-4xl p-4 sm:p-6 flex flex-col 2md:flex-row items-start 2md:items-center gap-6 `}
    >
      {/* Image (fixed width, no shrink) */}
      <div className="project__image shrink-0 w-full 2md:w-[420px] lg:w-[480px]">
        <img
          src={imageUrl}
          alt={imageAlt}
          loading="lazy"
          className="block w-full aspect-[3/2] object-cover rounded-2xl"
        />
      </div>

      {/* Info */}
      <div className="project__info flex-1 min-w-0 flex flex-col items-baseline gap-3 md:gap-4">
        <h2 className="text-base sm:text-lg md:text-2xl uppercase leading-tight text-[#101014]">
          {title}
        </h2>
        {description ? (
          <div className="project__description text-sm sm:text-base text-slate-700 leading-relaxed">
            {description}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Project
