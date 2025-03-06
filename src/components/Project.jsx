import { PROJECTS } from "../constants";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="my-10 text-center text-white text-4xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-center  p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.img}
              width={150}
              height={150}
              alt={project.title || "Project image"}
              className="w-40 h-40 object-cover rounded-md mb-4"
            />
            <div className="w-full text-center">
              <h6 className="mb-2 text-gray-300 font-semibold">{project.title}</h6>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-900 px-3 py-1 font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
