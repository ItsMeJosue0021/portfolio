import { useState, useEffect } from 'react'
import Hero from './Components/Hero';
import images from './Images';
import Globe from './Components/Globe';
import Logo from './Components/Logo';
import Chat from './Components/Chat';

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
          {/* <div className='z-10 absolute top-0 -right-[800px] w-full h-full'>
            <Globe/>
          </div> */}

          {/* <div className='max-w-screen-xl mx-auto'>
            <div className='flex flex-wrap gap-4'>
                {images.map((image, index) => (
                    <Logo image={image.url} name={image.name} isHovered={hoveredIndex === index}/>
                ))}
              </div>
          </div> */}
        
      </div>
    </div>
  )
}

export default App
