import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

export default function Experience() {
    return (
        <div className="mt-3 px-4">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl text-center text-gray-300 mb-10"
            >
                Experience
            </motion.h1>

            <div className="space-y-6">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="p-4 shadow-md bg-transparent rounded-lg"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                            {/* Year */}
                            <p className="text-sm text-neutral-400 mb-2 sm:mb-0 w-full sm:w-1/4 text-center sm:text-left">
                                {experience.year}
                            </p>

                            {/* Role, company, description and tech */}
                            <div className="sm:w-3/4">
                                <h6 className="mb-2 font-bold text-gray-500 text-center sm:text-left">
                                    {experience.role} -{" "}
                                    <span className="text-purple-100">
                                        {experience.company}
                                    </span>
                                </h6>
                                <p className="text-gray-500 mb-3 break-words">
                                    {experience.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
