import Chat from "./Chat";
import { useState } from "react";
const Hero = () => {

    const [openWorks, setOpenWorks] = useState(false);

    const toggleOpenWorks = () => {
        setOpenWorks(!openWorks);
    }

    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto flex items-center py-16">
            <div className="w-full h-full flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start gap-4 z-20">
                    <p className="font-semibold text-2xl">Welcome!</p>
                    <p className="font-bold text-5xl text-center md:text-left">I'm <span className="text-[#3B82F6]">Joshua Salceda</span></p>
                    <p className="text-center md:text-left">Welcome to my portfolio! I am a fresh Information Technology graduate from Cavite State University - Bacoor Campus, where I earned Latin honors. With a solid foundation in full-stack development and a passion for continuous learning, I specialize in building web applications using modern tools like Laravel, Django, ASP.NET Core and React.js/Next.js.</p>
                    <div className="relative">
                        <button onClick={toggleOpenWorks} className='px-6 py-3 rounded text-lg text-[#F4F4F5] bg-[#3B82F6]'>Explore My Work</button>
                        {openWorks && (
                            <div className="absolute bottom-20 left-0 w-full md:w-[310px] bg-white p-4 rounded-xl shadow-lg">
                                <p className="text-base">Next time nalang, busy pa ko e 😁</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

export default Hero;

