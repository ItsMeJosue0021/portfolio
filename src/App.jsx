import { useState, useEffect } from 'react'
import Hero from './Components/Hero';
import images from './Images';
import Globe from './Components/Globe';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setHoveredIndex(randomIndex);
      setTimeout(() => setHoveredIndex(null), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div>
      <div className='relative w-screen min-h-screen px-5 bg-gradient-to-r from-rose-100 to-teal-100 overflow-hidden'>

          <Hero/>
          <div className='absolute top-0 -right-[800px] w-full h-full'>
            <Globe/>
          </div>
          

    
        

        {/* <div className='w-full h-full bg-[#F9FAFB] flex flex-col gap-5 items-center justify-center p-4'>
          <div className='flex flex-wrap gap-4'>
            {images.map((image, index) => (
                <Logo image={image.url} name={image.name} isHovered={hoveredIndex === index}/>
            ))}
          </div>
          <p className='text-[#1E1E1E] text-5xl font-bold poppins'>Header</p>
          <p className='text-[#1E1E1E] text-2xl font-bold'>Sub Header</p>
          <p className='text-[#1E1E1E] text-center poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit voluptatibus officiis pariatur saepe quidem!</p>
          <p className='text-[#3B82F6] text-5xl font-bold'>Header</p>
          <p className='text-[#3B82F6] text-2xl font-bold'>Sub Header</p>
          <p className='text-[#3B82F6] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit voluptatibus officiis pariatur saepe quidem!</p>
          <button className='px-8 py-4 rounded text-lg text-[#F4F4F5] bg-[#3B82F6]'>Explore My Work</button>
        </div> */}
      </div>
    </div>
  )
}

export default App
