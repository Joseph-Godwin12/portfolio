import Joseph from "../assets/joseph.jpg"
import {RiReactjsLine} from "react-icons/ri"
import {SiTailwindcss, SiJavascript, SiHtml5, SiCss3} from "react-icons/si"

export default function About() {
    return (
        <>
        <div className="w-full flex flex-wrap items-center justify-center min-h-screen p-4">
            <h1 className="text-center text-gray-300 text-2xl font-bold w-full mb-6">
                About
                <span className="text-neutral-500">Me</span>
            </h1>
            <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-8">
                {/* Image Section */}
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img src={Joseph}  
                         alt="Joseph photo" 
                         className="w-40 h-40 sm:w-48 sm:h-48 md:w-96 md:h-96 text-center rounded-3xl"/>
                </div>
                
                {/* Text Section */}
                <div className="text-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                    <p className="text-gray-500 font-light p-2">
                        I am a dedicated frontend developer with a passion for creating efficient and user-friendly web applications. 
                        I enjoy transforming ideas into reality using HTML, CSS, JavaScript, and frameworks like React.js, and Tailwindcss.  
                        My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
                        My goal is to craft intuitive, visually appealing interfaces that engage users and provide seamless, functional experiences across devices.
                    </p>
                    <div className="my-4">
                        <h1 className="font-bold text-center text-gray-300 text-2xl mb-4">Technologies</h1>
                        <div className="flex flex-wrap items-center justify-center">
                            <SiHtml5 className="text-red-500 text-5xl border-4 border-neutral-800 m-4 p-2"/>
                            <SiCss3 className="text-blue-600 text-5xl border-4 border-neutral-800 m-4 p-2"/>
                            <SiJavascript className="text-yellow-400 text-5xl border-4 border-neutral-800 m-4 p-2"/>
                            <RiReactjsLine className="text-cyan-400 text-5xl border-4 border-neutral-800 m-4 p-2"/>
                            <SiTailwindcss className="text-teal-400 text-5xl border-4 border-neutral-800 m-4 p-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
