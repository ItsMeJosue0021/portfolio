import { useState, useEffect } from 'react'
import Hero from './Components/Hero';
import images from './Images';

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
      </div>
    </div>
  )
}

export default App
