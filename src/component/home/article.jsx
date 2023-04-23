import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Article() {
  return (
    <div className='home-article'>
        <h1 className='topic'>บทความ</h1>

        <div className='article-list'>
            <div className="item">
                <div className="img"></div>
                <div className="content">
                    <div className="centerContainer">
                        <p className='title'>การออแบบโลโก้</p>
                        <p className='desc'>วิธีการออกแบบโลโก้คร่าว ๆ</p>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="img"></div>
                <div className="content">
                    <div className="centerContainer">
                        <p className='title'>ประเภทของโลโก้</p>
                        <p className='desc'>เรียนรู้เกี่ยวกับประเภทของโลโก้</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article
