import PROJECTS from './projects.json'
import Project from '../Project/Project'
import Carousel from '../Carousel/Carousel'

function ProjectsSection() {
  return (
    <section className="bg-white text-[#101014] py-10">
      <div className="px-10 max-w-screen-3xl mx-auto flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-medium">Наши проекты</h1>
        </div>
        {/* <div className="wrapper flex flex-col gap-4">
          {PROJECTS.map((p) => (
            <Project key={p.id} {...p} />
          ))}
        </div> */}
        <Carousel projects={PROJECTS} />
      </div>
    </section>
  )
}

export default ProjectsSection
