import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center border-b-2 bg-white'>
      <div className='flex'>
        <p className='text-xl font-semibold p-4 pt-3 pl-10'>สบ.</p>
        <p className='text-base font-light p-4'>สนุกกับการออกแบบ</p>
      </div>
      <ul className='flex text-base font-light'>
        <li className='p-4 pr-10 list-none'>บล็อก</li>
        <li className='p-4 pr-10 list-none'>เกี่ยวกับ</li>
        <li className='p-4 pr-10 list-none fa-lg'><FontAwesomeIcon icon={faSun}/></li>
      </ul>
    </div>
  )
}

export default Navbar
