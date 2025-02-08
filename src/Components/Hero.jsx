import Chat from "./Chat";
const Hero = () => {
    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto flex items-center">
            <div className="w-full h-full flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 h-full flex flex-col gap-4 z-20">
                    <p className="font-semibold text-2xl">Welcome!</p>
                    <p className="font-bold text-5xl">I'm <span className="text-[#3B82F6]">Joshua Salceda</span></p>
                    <p>Welcome to my portfolio! I am a fresh Information Technology graduate from Cavite State University - Bacoor Campus, where I earned Latin honors. With a solid foundation in full-stack development and a passion for continuous learning, I specialize in building web applications using modern tools like Laravel, Django, and React.</p>
                    <div>
                    <button className='px-6 py-3 rounded text-lg text-[#F4F4F5] bg-[#3B82F6]'>Explore My Work</button>
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

