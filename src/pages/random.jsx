import React, { useState } from 'react';
import Navbar from "../component/navbar";
import BriefInfo from "../component/random/brief-info";
import Category from '../component/random/category';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faHamburger } from '@fortawesome/free-solid-svg-icons'

function Random() {
    const [isOpenCategory, setOpenCategory] = useState(false);

    return (
        <>
            <Navbar />
            <div className='relative'>
                <BriefInfo/>
                <div className={!isOpenCategory ? 'absolute top-[-5%] left-[50%] translate-x-[-50%] w-[900px] ease duration-500 opacity-100' : 'absolute top-[-4%] left-[50%] translate-x-[-50%] w-[900px] ease duration-500 block invisible opacity-0'}>
                    <Category/>
                </div>
            </div>  
            <div className="rand-container">
                <div className="col-3">
                    <div className="col">
                        <button className="btn btn-random" onClick={()=>{ setOpenCategory(!isOpenCategory); }}>
                            <FontAwesomeIcon icon={faHamburger} className='pr-5'/>
                            <span>ประเภท : สุ่ม</span>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn primary btn-random">สุ่มบรีฟ</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-random">
                            <FontAwesomeIcon icon={faArrowDown} className='pr-5'/>
                            <span>ดาวน์โหลด</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='polka'></div>
        </>
    )
}

export default Random;
