import React from 'react'
import './Reasons.css'
import image1 from '../../source/image1.png';
import image2 from '../../source/image2.png';
import image3 from '../../source/image3.png';
import image4 from '../../source/image4.png';
import tick from '../../source/tick.png';
import nb from '../../source/nb.png';
import adidas from '../../source/adidas.png';
import nike from '../../source/nike.png';

const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
           <img src={image1} alt="" />
           <img src={image2} alt="" />
           <img src={image3} alt="" />
           <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <div>
            <span className='stroke-text'>Why</span>
            <span>choose us</span>
            </div>
            <div className='details-r'>
               <div><img src={tick} alt="" /><span>OVER 140+ EXPERT COACHS</span></div>
               <div><img src={tick} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
               <div><img src={tick} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER</span></div>
               <div><img src={tick} alt="" /><span>RELIABLE PARTNERS</span></div>
            </div>
           <span style={{
                 color: "var(--gray)",
                 fontWeight:"normal",
           }}>
           OUR PARTNER</span>

           <div className="partners">
             <img src={nb} alt="" />
             <img src={adidas} alt="" />
             <img src={nike} alt="" />
           </div>
        </div>
    </div>
  )
}
export default Reasons;