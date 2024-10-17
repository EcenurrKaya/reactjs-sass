import React, { useEffect } from 'react'
import "./Subscibe.scss"
import "aos/dist/aos.css"
import Aos from 'aos'

const Subscibe = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
  return (
    <section className='subscribe'>
        <div className='subscribe__container wrapper'>
            <h2 data-aos ="fade-up">Subscribe</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci pariatur qui rerum magni labore, ratione temporibus libero, iure nihil voluptates eveniet corporis quo aspernatur error? Dicta inventore sunt quasi dignissimos.</p>
            <form action='#' data-aos ="fade-up">
                <input type='email' placeholder='Write your email'/>
                <a href="#" className='btn'>
                    Subscribe
                </a>
            </form>
        </div>
    </section>
  )
}

export default Subscibe