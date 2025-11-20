import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-white text-4xl"
      >
        Projects
      </motion.h1>

      {/* Grid container for two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg"
          >
            {/* Image on top */}
            <motion.img
              src={project.img}
              alt={project.title || "Project image"}
              width={200}
              height={150}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {/* Text content below */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
              viewport={{ once: true }}
              className="w-full text-center"
            >
              <h6 className="mb-2 text-gray-300 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-gray-400 text-balance">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-800 px-3 py-1 font-medium text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Github Link
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <a
        href="https://github.com/Joseph-Godwin12?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 p-4 m-2 rounded-md text-gray-200 hover:text-lg"
      >
        View more
      </a>
    </div>
  );
}
