import React from 'react';

function Article() {
  return (
    <div className='home-article pt-10' id="article">
        <h1 className='topic pt-20'>บทความ</h1>

        <div className='article-list'>
            <div className="item">
                <div className="img">
                    <img src="src\assets\article1-1.png" alt="/"/>
                </div>
                <div className="content">
                    <div className="centerContainer">
                        <p className='title'>การออกแบบโลโก้</p>
                        <p className='desc'>วิธีการออกแบบโลโก้คร่าว ๆ</p>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="img">
                    <img src="src\assets\article2-2.png" alt="/"/>
                </div>
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
