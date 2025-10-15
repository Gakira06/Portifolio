import React from 'react'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='flex justify-between bg-1 '>
      <div className='flex text-white items-center justify-center'>
        <img src={Logo} alt='Logo Gabriel Akira' className='w-40 rounded-[200px]'/>
        <h1 className='text-2xl font-family-orbitron'>Portifólio</h1>
      </div> 
      <div>
        
      </div>
    </header>
  )
}

export default Header
