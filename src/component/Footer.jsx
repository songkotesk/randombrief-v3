import React from 'react'
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube , faFacebook } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className='footerWarper pt-5 mt-10'>
      <div className='detail'>
        <p>V3.0</p>
        <a href="https://www.southeast.ac.th/2017/" target='_blank'>สนับสนุน โดย วิทยาลัยเซาธ์อีสบางกอก</a>
      </div>
      <div className='socialIcon'>
        <a href="https://www.facebook.com/Southeast.ac.th" target='_blank'><FontAwesomeIcon icon={faFacebook} size='xl' className='pl-10'/></a>
        <a href="https://www.youtube.com/channel/UCqUl3Dl33BfkZv-ViJfbJ_A" target='_blank'><FontAwesomeIcon icon={faYoutube} size='xl'  className='pl-10'/></a>
      </div>
    </div>
  )
}

export default Footer
