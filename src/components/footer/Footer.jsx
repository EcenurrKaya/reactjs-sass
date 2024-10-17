import React, { useEffect } from 'react'
import './Footer.scss'
import Logo from "../../assets/logo.png"
import "aos/dist/aos.css"
import Aos from 'aos'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
  return (
    <footer className='footer'>
        <div className='footer__container wrapper'>
            <div className="footer__col">
                <img src={Logo} alt='logo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate hic, quod corrupti quaerat quidem tempora beatae, fugiat ipsa autem quia illum veniam eligendi accusantium quam blanditiis sed provident cumque.</p>
            </div>

            <div className="footer__col">
                <h3>Company</h3>
                <a href="#">Crytocode</a>
                <a href="#">Security</a>
                <a href="#">Rankngs</a>
            </div>

            <div className='footer__col'>
                <h3>Support</h3>
                <a href="#">FAQs</a>
                <a href="#">Support</a>
                <a href="#">Contact us</a>
            </div>

            <div className="footer__col">
                <h3>Socials</h3>
                <div className='footer__icons'>
                    <a href="#" className='footer__icon'>
                        <FaFacebook/>
                    </a>
                    <a href="#" className='footer__icon'>
                        <FaInstagram/>
                    </a>
                    <a href="#" className='footer__icon'>
                        <FaTwitter/>
                    </a>
                    <a href="#" className='footer__icon'>
                        <FaLinkedin/>
                    </a>
                    <a href="#" className='footer__icon'>
                        <FaYoutube/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer