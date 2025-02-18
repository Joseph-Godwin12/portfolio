import Joseph from "../assets/joseph.jpg"

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-16 p-2">
                <img src={Joseph}  
                alt="Joseph photo" 
                className="w-60 h-60 max-width-30 text-center rounded-3xl"/>
                <h1 className="text-4xl text-neutral-500 m-3">Egbucha Joseph</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl
                 tracking-tight text-transparent font-bold m-3">
                    FrontEnd Developer
                </span>
                <p className="text-white pl-6 font-light"> I am a Frontend Developer passionate about creating user-friendly experiences. </p>
            </div>
        </>
    )
}

