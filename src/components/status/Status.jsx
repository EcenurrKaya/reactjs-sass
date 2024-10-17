import React, { useEffect } from 'react'
import "./Staus.scss"
import Aos from 'aos'
import StatusImg from "../../assets/status.png"
import "aos/dist/aos.css"

const Status = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
  return (
    <section className='status'>
        <div className='status__container wrapper'>
            <div className='status__left' data-aos = "zoom-in-up">
                <h2>Trust us due to</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus pariatur eveniet voluptatem. Eveniet, saepe. Eveniet, nesciunt expedita. Voluptatem, dolores ab voluptatibus, architecto officiis, delectus vel commodi excepturi blanditiis illo natus.</p>
                <a href="#" className='btn'>KNOW MORE</a>
            </div>

            <div className='status__right' data-aos="fade-left">
                <img src={StatusImg} alt='status'/>
            </div>
        </div>
    </section>
  )
}

export default Status