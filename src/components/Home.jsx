import Joseph from "../assets/joseph.jpg"

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center mt-16 p-2 md:mt-24">
                <div className="md:w-1/2 flex justify-center md:justify-end gap-4">
                    <img src={Joseph}  
                    alt="Joseph photo" 
                    className="w-60 h-60 max-width-30 text-center rounded-full mb-2 md:m-3 md:w-96 md:h-96"/> {/* Reduced mb-4 to mb-2 */}
                </div>
                <div className="md:w-1/2 flex flex-col items-center md:items-start md:pl-0 text-center md:text-left"> {/* Added text-center and md:text-left */}
                    <h1 className="text-4xl text-neutral-500">Egbucha Joseph</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl
                    tracking-tight text-transparent font-bold m-3">
                        FrontEnd Developer
                    </span>
                    <p className="text-white font-light"> I am a Frontend Developer passionate <br /> about creating user-friendly experiences. </p> {/* Removed pl-4 */}
                </div>
            </div>
        </>
    )
}
