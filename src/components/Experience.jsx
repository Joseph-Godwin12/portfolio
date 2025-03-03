import { EXPERIENCES } from "../constants"

export default function Experience() {
    return (
        <div className="mt-3">
            <h1 className="text-3xl text-center text-gray-300 mb-10">Experience</h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div className="p-2">
                    <div key={index} className="flex flex-wrap items-center justify-center p-4">
                       <p className="mb-2 text-sm text-neutral-400 text-center">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-lg lg:w-3/4">
                        <h6 className="mb-2 font-bold text-gray-500 text-center">
                            {experience.role} - <span className="text-purple-100 ">
                                {experience.company}
                            </span>
                        </h6>
                            <span className="flex flex-wrap p-2 text-gray-500">{experience.description}</span>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800">{tech}</span>
                            ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}