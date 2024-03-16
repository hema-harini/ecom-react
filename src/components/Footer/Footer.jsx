import React from 'react'
import './Footer.css'
import Github from '../../source/github.png';
import Instagram from '../../source/instagram.png';
import LinkedIn from '../../source/linkedin.png';
import Logo from '../../source/logo.png';

const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="foot">
            <div className="social">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
            </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        <div className="blur f-blur"></div>
        </div>
    </div>
  )
}

export default Footer