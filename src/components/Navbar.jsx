import React from 'react'

const Navbar = () => {
  return (
    <>
    <navbar className="flex px-20 p-4 justify-between text-center shadow-sm shadow-slate-200">
      <div className='logo flex items-center space-x-2'>
        <div className="rounded-full  bg-purple-700 font-normal h-8 w-8 p-1 text-white text-center ">I</div>
      <div className='text-2xl font-bold text-purple-700'>IqraKhan</div></div>
      <div className='navlink flex gap-8'>
        <ul className='flex gap-8 text-lg  text-[#333] '>
          <li className='hover:text-purple-600 transition-colors cursor-pointer'>Home</li>
          <li className='hover:text-purple-600 transition-colors cursor-pointer'>Project</li>
          <li className='hover:text-purple-600 transition-colors cursor-pointer'>Experience</li>
          <li className='hover:text-purple-600 transition-colors cursor-pointer'>About</li>
          <li className='hover:text-purple-600 transition-colors cursor-pointer'>Contact</li>
        </ul>
      
        <button className='hover:bg-purple-600 bg-purple-700 text-white p-1 px-2 rounded-md'>Download  CV</button>

      </div>
    </navbar>
    </>
  )
}
export default Navbar