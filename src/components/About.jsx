import Joseph from "../assets/joseph.jpg"
import {RiReactjsLine} from "react-icons/ri"
import {SiTailwindcss, SiJavascript, SiHtml5, SiCss3} from "react-icons/si"
import {animate, motion} from "framer-motion"
import { ABOUT_TEXT } from "../constants"

export default function About() {
    const iconElements = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    })
    return (
        <>
            <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-4">
                <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center text-gray-300 text-2xl font-bold w-full mb-6">
                    About
                    <span className="text-neutral-500">Me</span>
                </motion.h1>
                <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-8">
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex justify-center mb-4 md:mb-0">
                        <img 
                            src={Joseph}  
                            alt="Joseph photo" 
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-96 md:h-96 text-center rounded-3xl"
                        />
                    </motion.div>
                    
                    <div className="text-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                        <motion.p 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 1}}
                            className="text-gray-500 font-light p-2">
                            {ABOUT_TEXT}
                        </motion.p>
                        <div className="my-4">
                            <motion.h1 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="font-bold text-center text-gray-300 text-2xl mb-4">
                                Technologies
                            </motion.h1>
                            <motion.div 
                                whileInView={{opacity: 1, x:0}}
                                initial={{opacity: 0, x: 100}}
                                transition={{duration: 1.5}}
                                className="flex flex-wrap items-center justify-center">
                                <motion.div 
                                    variants={iconElements(2)}
                                    initial="initial"
                                    animate="animate">
                                    <SiHtml5 className="text-red-500 text-5xl border-2 border-neutral-800 m-4 p-2 rounded-md"/>
                                </motion.div>

                                <motion.div 
                                    variants={iconElements(2.5)}
                                    initial="initial"
                                    animate="animate">
                                    <SiCss3 className="text-blue-600 text-5xl border-2 border-neutral-800 m-4 p-2 rounded-md"/>
                                </motion.div>

                                <motion.div 
                                    variants={iconElements(3)}
                                    initial="initial"
                                    animate="animate">
                                    <SiJavascript className="text-yellow-400 text-5xl border-2 border-neutral-800 m-4 p-2 rounded-md"/>
                                </motion.div>

                                <motion.div 
                                    variants={iconElements(3.5)} 
                                    initial="initial"
                                    animate="animate">
                                    <RiReactjsLine className="text-cyan-400 text-5xl border-2 border-neutral-800 m-4 p-2 rounded-md"/>
                                </motion.div>

                                <motion.div 
                                    variants={iconElements(4)}
                                    initial="initial"
                                    animate="animate">
                                    <SiTailwindcss className="text-teal-400 text-5xl border-2 border-neutral-800 m-4 p-2 rounded-md"/>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
