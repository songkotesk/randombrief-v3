import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Landing() {
  return (
    <div className='home-landing'>
        <div className="centerContainer">
            <div className='sub'>
                <h1 className='header-txt'>รับบรีฟที่ไม่ซ้ำใคร</h1>
                <p className='sub-txt'>ฝึกฝนการออกแบบโลโก้โดยใช้บรีฟของลูกค้าที่สร้างขึ้นแบบสุ่ม</p>
                <br/><br/><br/>
                <button className="btn primary btn-random">สุ่มบรีฟ</button>
                <div>
                    <a className="btn-sendbrief" href='javascript:void()'>ส่งบรีฟให้เรา</a>
                </div>
            </div>
        </div>
        <div className='arrow-down'>
            <a href='#'><FontAwesomeIcon icon={faChevronDown}/></a>
        </div>
    </div>
  )
}

export default Landing
