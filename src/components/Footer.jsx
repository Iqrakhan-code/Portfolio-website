import React from 'react'

const Footer = () => {
  return (
    <footer className="flex bottom-0 px-20 p-4 justify-between text-center items-center shadow-smh h-52 bg-black shadow-slate-200">
    <div className='logo flex items-center space-x-2'>
      <div className="rounded-full  bg-purple-700 font-normal h-8 w-8 p-1 text-white text-center ">I</div>
    <div className='text-2xl font-bold text-white'>IqraKhan</div></div>
    <div className=' flex gap-8 '>
      <ul className='flex gap-8 text-sm  text-[#c9c9c9] '>
        <li className='hover:text-purple-600 transition-colors cursor-pointer'>Home <hr className='hidden hover:block'></hr></li>
        <li className='hover:text-purple-600 transition-colors cursor-pointer'>Project</li>
        <li className='hover:text-purple-600 transition-colors cursor-pointer'>Experience</li>
        <li className='hover:text-purple-600 transition-colors cursor-pointer'>About</li>
        <li className='hover:text-purple-600 transition-colors cursor-pointer'>Contact</li>
      </ul>
    
     <div className='text-white text-sm'>Copyright &copy; 2025  </div>

    </div>
  </footer>
  )
}

export default Footer