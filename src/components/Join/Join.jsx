import React,{ useRef } from 'react';
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ccvvu4r', 'template_a9xjpuy', form.current, {
            publicKey: 'tZyCGXxoIZuahSoc9',
          })
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            },
          );
      };
    
  return (
     <div className="join">
        <div className="left-j">
            <hr />
          <div><span>READY TO</span><span className='stroke-text'> LEVEL UP</span></div>
          <div><span className='stroke-text'>YOUR BODY</span><span> WITH US</span></div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
     </div>

  )
}

export default Join