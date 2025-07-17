import Chat from "./Chat";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto flex items-center py-16">
            <div className="md:scale-[.80] w-full h-full flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start gap-4 z-20">
                    <p className="font-semibold text-2xl">Welcome!</p>
                    <p className="font-bold text-5xl text-center md:text-left">I'm <span className="text-[#3B82F6]">Joshua Salceda</span></p>
                    <p className="text-center md:text-left">I'm a graduate of Bachelor of Science in Information Technology with Latin Honor and with a hands-on experience in software development. I enjoy building useful projects, learning new things, and working with others to solve problems through code.</p>
                    <div className="flex items-center gap-2">
                        <a
                            href="jsalcedaresume.pdf"
                            download
                            className='px-6 py-3 rounded text-base text-[#F4F4F5] hover:text-white bg-[#3B82F6] hover:scale-105 transition-all duration-300 flex items-center'>
                            My Resume <MdOutlineFileDownload size={22} className="ml-2"/>
                        </a>
                        <a 
                            href="https://github.com/ItsMeJosue0021" 
                            target="_blank" 
                            className="px-6 py-3 rounded text-base text-black border border-black flex items-center group hover:bg-black hover:text-white transition-all duration-300">
                                Github
                            <FaGithub className="ml-2 group-hover:text-white" />
                        </a>
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

