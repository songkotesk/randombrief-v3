import React, { useState } from 'react';
import BriefInfo from "../component/random/brief-info";
import Category from '../component/random/category';
import Datas from '../data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faHamburger } from '@fortawesome/free-solid-svg-icons'
import NavbarRandom from '../component/navbarRandom';

function Random() {
    const [isOpenCategory, setOpenCategory] = useState(false);
    
    const [category,setCategory] = useState('technology');

    let defaultNum = Math.floor(Math.random() * Datas[category].length);
    
    const [brief,setBrief] = useState(Datas[category][defaultNum]);

    const getBrief = () => {
        let randomNum = Math.floor(Math.random() * Datas[category].length);
        setBrief(Datas[category][randomNum])
    }

    const [loading,setLoading] = useState(false);

    const MakeLoading = () => {
        setLoading(true)
        setTimeout(() => {
            getBrief()
            setLoading(false)
        }, 1000);
    }

    return (
        <>
            {/* <Navbar /> */}
            <NavbarRandom />
            <div className='page-container relative'>
                <div className="sub">
                    <BriefInfo brief={brief} loading={loading}/>
                    <div className={'subCate ' + (isOpenCategory ? 'absolute top-[-5%] left-[50%] translate-x-[-50%] w-[900px] ease duration-500 opacity-100' : 'absolute top-[-4%] left-[50%] translate-x-[-50%] w-[900px] ease duration-500 block invisible opacity-0')}>
                        <Category Datas={Datas} category={category} setCategory={setCategory} setOpenCategory={setOpenCategory}/>
                    </div>        
                </div>
            </div>
            <div className="rand-container">
                <div className="col-3">
                    <div className="col">
                        <button className="btn btn-random" onClick={() => { setOpenCategory(!isOpenCategory); }}>
                            <FontAwesomeIcon icon={faHamburger} className='pr-5' />
                            <span>ประเภท : สุ่ม</span>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn primary btn-random" onClick={MakeLoading} disabled={loading}>
                            {loading && "กำลังสุ่ม"}
                            {loading === false && "สุ่มบรีฟ"}
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-random">
                            <FontAwesomeIcon icon={faArrowDown} className='pr-5' />
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
