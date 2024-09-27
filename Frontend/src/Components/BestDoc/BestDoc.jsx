import React from 'react'
import "./BestDoc.css"
const Box1 = () => {
  return (
    <>
      <div className="BestDoc">
        <div className="left">
          <h4>Our Doctors</h4>
          <h1>The Best Doctors of the Industry are with Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis excepturi provident placeat vel fugit sit suscipit neque, ea modi illo magnam dicta error eveniet maiores saepe animi assumenda quae, quidem pariatur ratione!</p>
        </div>
        <div className="right">
          <div className="imgright1"> 
            <img className='imgrighttop' src="./HomePageImgs/doctors.jpg" alt="" /> 
            <div className="imgbottom">
                <div className="name">K.Yaswanth</div>
                <div className="degrees">MBBS, FRCS, AIIMS Delhi, India</div>
            </div>
          </div>
          <div className="imgright1">
          <img className='imgrighttop' src="./HomePageImgs/singdoc.jpg" alt="" /> 
          <div className="imgbottom">
          <div className="name">N.Chaitanya</div>
          <div className="degrees">MBBS, FRCS, AIIMS Delhi , India</div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box1
