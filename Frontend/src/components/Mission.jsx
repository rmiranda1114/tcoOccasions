import React from 'react'
import Pic1 from '../assets/TCO13.jpg'

const Mission = () => {
  return (
    <div id='mission' className='flex flex-col sm:flex-row sm:w-5/6 mx-auto justify-between items-center min-h-[80vh]'>
        <div className='w-full sm:w-1/2 h-full p-10 flex flex-col justify-between gap-10'>
            <h2 className='text-4xl'>From Concept to Celebration, We Make Every Moment Special</h2>
            <div className=''>
                <img src={Pic1}/>
            </div>
        </div>
        <div className='w-full sm:w-1/2 h-full p-10 flex flex-col justify-around gap-10'>
            <h3 className='text-3xl'>Our Commitment to Excellance</h3>
            <p>At TCO Party Occasions, we are dedicated to providing exceptional event planning services that 
                are tailored to meet the unique needs and desires of our clients. Our team of industry experts 
                listens carefully to your vision and delivers innovative solutions that ensure a flawless and 
                unforgettable event. Contact us today to learn more about how we can create your dream event.
            </p>
        </div>
      
    </div>
  )
}

export default Mission
