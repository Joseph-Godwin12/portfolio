import { EXPERIENCES } from "../constants"

export default function Experience() {
    return (
        <div className="mt-3">
            <h1 className="text-3xl text-center text-gray-300 mb-10">Experience</h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="p-2">
                        <div className="flex flex-wrap items-center justify-between p-4">
                            {/* Year on the left */}
                            <p className="mb-2 text-sm text-neutral-400 text-left w-full sm:w-auto">{experience.year}</p>
                            
                            {/* Role and company on the right */}
                            <div className="w-full sm:w-3/4 lg:w-3/4">
                                <h6 className="mb-2 font-bold text-gray-500 text-center sm:text-left">
                                    {experience.role} - <span className="text-purple-100">
                                        {experience.company}
                                    </span>
                                </h6>
                                <p className="text-gray-500 p-2 break-words">{experience.description}</p>
                                <div>
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
