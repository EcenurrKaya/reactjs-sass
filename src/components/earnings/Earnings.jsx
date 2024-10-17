import React, { useEffect } from 'react'
import "./Earnings.scss"
import Aos from 'aos'
import Img from "../../assets/earnings.png"
import "aos/dist/aos.css"

const Earnings = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
  return (
    <section className='earnings'>
        <div className='earnings__container wrapper'>
            <div className='earnings__left' data-aos = "fade-right">
                <img src={Img} alt='earnings'/>
            </div>

            <div className='earnings__right' data-aos = "zoom-in-up">
                <h2>Track Your Earnings</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque eos, nulla corporis ut fugiat optio sit asperiores cumque non. Placeat quis numquam inventore velit dolores aliquam nemo molestias sequi?</p>
                <a href="#" className='btn'>GE STARTED</a>
            </div>
        </div>
    </section>
  )
}

export default Earnings