import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'


const Navbar = () => {
  return (
    <div className='fixed end-0 w-full truncate flex justify-between items-center border-b-2 bg-white z-10'>
      <div className='flex'>
        <a href="/">
          <p className='text-xl font-semibold p-4 pt-3 pl-10'>สบ.</p>
        </a>
        <p className='text-base font-light p-4'>สนุกกับการออกแบบ</p>
      </div>
      <ul className='flex text-base font-light'>
        <HashLink to="/#article"><li className='p-4 pr-10 list-none'>บล็อก</li></HashLink>
        <HashLink to="/#about"><li className='p-4 pr-10 list-none'>เกี่ยวกับ</li></HashLink>
        <li className='p-4 pr-10 list-none cursor-pointer fa-lg'><FontAwesomeIcon icon={faSun} /></li>
      </ul>
    </div>
  )
}

export default Navbar
