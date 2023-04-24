import React from 'react';

function Category({ category, setCategory, setOpenCategory }) {
  return (
    <div className='random-category'>
      <div className="sub">
        <div className="col-2">
          <div className="col ">
            <div
              className={"card " + (category == 'random' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('random');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji4.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>สุ่ม</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'technology' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('technology');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji5.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>เทคโนโลยี</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'food' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('food');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji6.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>อาหาร</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'retail' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('retail');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji7.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>ร้านค้าปลีก</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'entertain' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('entertain');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji8.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>ความบันเทิง</p>
                </div>
              </div>
            </div>
          </div>



          <div className="col">
            <div
              className={"card " + (category == 'fahion' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('fahion');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji9.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>แฟชั่น</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'sport' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('sport');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji10.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>กีฬา</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'beauty' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('beauty');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji11.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>ความงาม  </p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'estate' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('estate');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji12.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>อสังหาริมทรัพย์</p>
                </div>
              </div>
            </div>
            <div
              className={"card " + (category == 'travel' ? 'active' : '') + " cursor-pointer"}
              onClick={() => {
                setCategory('travel');
                setOpenCategory(false);
              }}
            >
              <div className="img">
                <img src="src\assets\emoji13.png" alt="/" />
              </div>
              <div className="text">
                <div className="centerContainer">
                  <p>การท่องเที่ยว</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
