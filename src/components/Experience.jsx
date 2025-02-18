import { EXPERIENCES } from "../constants"

export default function Experience() {
    return (
        <div className="mt-3">
            <h1 className="text-3xl text-center text-gray-300">Experience</h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div className="flex flex-wrap">
                    <div key={index} className="flex flex-col items-center justify-center p-4">
                       <p className="mb-2 text-sm text-neutral-400 text-center">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-lg lg:w-3/4">
                        <h6 className="mb-2 font-bold text-gray-500 text-center">
                            {experience.role} - <span className="text-purple-100">
                                {experience.company}
                            </span>
                        </h6>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}