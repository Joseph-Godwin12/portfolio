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

      <div className="flex flex-col gap-8 w-full max-w-6xl">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg lg:gap-32"
          >
            {/* Image with slide-left */}
            <motion.img
              src={project.img}
              alt={project.title || "Project image"}
              width={150}
              height={150}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="w-40 h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
            />

            {/* Text content with slide-right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
              viewport={{ once: true }}
              className="w-full text-center md:text-left"
            >
              <h6 className="mb-2 text-gray-300 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-gray-400 text-balance">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-800 px-3 py-1 font-medium text-purple-500"
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
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
