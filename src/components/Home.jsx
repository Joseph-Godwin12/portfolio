import Joseph from "../assets/joseph.jpg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png" 
import {motion} from "framer-motion"

export default function Home() {
    const container = (delay) => ({
        hidden: {x: 100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {delay: delay, duration: 0.5,}
        },
    })
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center mt-16 p-2 md:mt-24">
                <div className="md:w-1/2 flex justify-center md:justify-end gap-4">
                    <motion.img 
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 1, duration: 1.2}}
                    src={Joseph}  
                    alt="Joseph photo" 
                    className="w-60 h-60 max-width-30 text-center rounded-full mb-2 md:m-3 md:w-96 md:h-96"/> 
                </div>
                <div className="md:w-1/2 flex flex-col items-center md:items-start md:pl-0 text-center md:text-left"> 
                    <motion.h1 
                   variants={container(0)}
                   initial="hidden"
                   animate="visible"
                    className="text-4xl text-neutral-500 md:text-4xl">
                        Egbucha Joseph
                    </motion.h1>

                    <motion.span 
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl
                    tracking-tight text-transparent m-3">
                        FrontEnd Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible" 
                        className="text-white font-light"> 
                        I am a Frontend Developer passionate <br /> about creating user-friendly experiences.
                    </motion.p> 
                    <motion.div 
                     variants={container(1.5)}
                     initial="hidden"
                     animate="visible"
                    className="flex p-2 ">
                    <a href="https://github.com/Joseph-Godwin12" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-8 h-8 mx-2 bg-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/egbucha-joseph-434ab9287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mx-2" />
                    </a>
                    <a href="https://x.com/JosephEgbucha?s=09" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" className="w-8 h-8 mx-2 bg-white" />
                    </a>
                    </motion.div>
                </div>
                    
            </div>
        </>
    )
}
