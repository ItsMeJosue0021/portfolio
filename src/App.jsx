import { useState, useEffect } from 'react'
import Logo from './Components/Logo'
import css from './assets/logos/css.png';
import html from './assets/logos/html.png';
import tailwind from './assets/logos/tailwind.png';
import react from './assets/logos/react.png';
import axios from './assets/logos/axios.png';
import inertia from './assets/logos/inertia.png';
import javascript from './assets/logos/javascript.png';
import java from './assets/logos/java.png';
import python from './assets/logos/python.png';
import laravel from './assets/logos/laravel.png';
import django from './assets/logos/django.png';
import springboot from './assets/logos/springboot.png';
import mysql from './assets/logos/mysql.png';
import postgresql from './assets/logos/postgresql.png';
import git from './assets/logos/git.png';

function App() {

  const images = [ 
    {url: css, name: 'CSS'},
    {url: html, name: 'HTML'},
    {url: tailwind, name: 'Tailwind'},
    {url: react, name: 'React'},
    {url: axios, name: 'Axios'},
    {url: inertia, name: 'Inertia'},
    {url: javascript, name: 'JavaScript'},
    {url: java, name: 'Java'},
    {url: python, name: 'Python'},
    {url: laravel, name: 'Laravel'},
    {url: django, name: 'Django'},
    {url: springboot, name: 'Springboot'},
    {url: mysql, name: 'MySQL'},
    {url: postgresql, name: 'PostgreSQL'},
    {url: git, name: 'Git'},
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setHoveredIndex(randomIndex);
      setTimeout(() => setHoveredIndex(null), 2000);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);


  return (
    <div className='w-screen h-screen flex items-start text-center'>
      <div className='w-full h-full bg-[#F9FAFB] flex flex-col gap-5 items-center justify-center p-4'>
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
      </div>
      {/* <div className='w-full h-full bg-[#333333] flex flex-col gap-5 items-center justify-center p-4'>
        <p className='text-[#EDEDED] text-5xl font-bold'>Header</p>
        <p className='text-[#F4F4F5] text-2xl font-bold'>Sub Header</p>
        <p className='text-[#F4F4F5] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit voluptatibus officiis pariatur saepe quidem!</p>
        <p className='text-[#3B82F6] text-5xl font-bold'>Header</p>
        <p className='text-[#3B82F6] text-2xl font-bold'>Sub Header</p>
        <p className='text-[#3B82F6] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit voluptatibus officiis pariatur saepe quidem!</p>
        <button className='px-8 py-4 rounded text-lg text-[#F4F4F5] bg-[#3B82F6]'>Explore My Work</button>
      </div>
      <div className='w-full h-full bg-[#3B82F6] flex flex-col gap-5 items-center justify-center p-4'>
        <p className='text-[#EDEDED] text-5xl font-bold'>Header</p>
        <p className='text-[#F4F4F5] text-2xl font-bold'>Sub Header</p>
        <p className='text-[#F4F4F5] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit voluptatibus officiis pariatur saepe quidem!</p>
        <p className='text-[#1E1E1E] text-5xl font-bold'>Header</p>
        <p className='text-[#1E1E1E] text-2xl font-bold'>Sub Header</p>
        <p className='text-[#1E1E1E] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit voluptatibus officiis pariatur saepe quidem!</p>
        <button className='px-8 py-4 rounded text-lg text-[#F4F4F5] bg-[#333333]'>Explore My Work</button>
      </div> */}
    </div>
  )
}

export default App
