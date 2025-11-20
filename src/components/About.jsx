import Joseph from "../assets/joseph.jpg"
import { RiReactjsLine } from "react-icons/ri"
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiTypescript, SiGithub, SiNextdotjs } from "react-icons/si"
import { motion } from "framer-motion"
import { ABOUT_TEXT } from "../constants"

export default function About() {
    const iconElements = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    });

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center text-gray-300 text-3xl sm:text-4xl md:text-3xl font-bold mb-8"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h1>

            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10">
                
                {/* Profile Image */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full sm:w-2/3 md:w-1/2 flex justify-center"
                >
                    <img
                        src={Joseph}
                        alt="Joseph"
                        className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-lg"
                    />
                </motion.div>

                {/* About Text & Tech */}
                <div className="w-full sm:w-11/12 md:w-1/2 px-2">
                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left mb-6"
                    >
                        {ABOUT_TEXT}
                    </motion.p>

                    {/* Education Section */}
                  <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-6 text-gray-400 text-center mb-5 md:text-left"
                        >
                        <h2 className="text-2xl font-bold text-gray-300 mb-2">Education</h2>
                        <p>B.Sc. in Computer Science</p>
                        <p>Imo State University, Nigeria</p>
                        <p>Expected Graduation: 2027</p>
                    </motion.div>


                    {/* Technologies Section */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center md:text-left text-gray-300 text-2xl sm:text-2xl font-bold mb-4"
                    >
                        Technologies
                    </motion.h2>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                    >
                        {[
                            { icon: <SiHtml5 className="text-red-500" />, duration: 2 },
                            { icon: <SiCss3 className="text-blue-600" />, duration: 2.5 },
                            { icon: <SiJavascript className="text-yellow-400" />, duration: 3 },
                            { icon: <RiReactjsLine className="text-cyan-400" />, duration: 3.5 },
                            { icon: <SiTailwindcss className="text-teal-400" />, duration: 4 },
                            { icon: <SiTypescript className="text-blue-400" />, duration: 4.5 },
                            { icon: <SiGithub className="text-gray-100" />, duration: 5 },
                            { icon: <SiNextdotjs className="text-gray-100" />, duration: 5.5 }
                        ].map(({ icon, duration }, i) => (
                            <motion.div
                                key={i}
                                variants={iconElements(duration)}
                                initial="initial"
                                animate="animate"
                                className="text-4xl sm:text-2xl border-2 border-neutral-800 p-3 rounded-lg"
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
