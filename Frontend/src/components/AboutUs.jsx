import React from 'react'
import Pic1 from '../assets/TCO11.jpg'

const AboutUs = () => {
    return (
    
        <div id='aboutus' className=''>
                             
            <div className='flex flex-col py-6 md:p-8 gap-4'>
                <div className='text-5xl ml-10'>
                    <h2>About Us</h2>
                </div>
                <div className='flex flex-col lg:flex-row text-center gap-5 mx-auto'>
                    <div className='flex justify-center'>
                        <img className='rounded-md' src={Pic1}/>
                    </div>
                
                    <div className='w-11/12 mx-auto max-w-3xl text-sm md:text-base flex flex-col gap-4 bg-gray-700/30 p-6 rounded-lg'>
                        <p>
                            Welcome to TCO Party Occasion, where passion meets creativity! Founded by a team of dedicated 
                            event enthusiasts, our journey began with a simple dream: to bring joy and beauty to every 
                            celebration. With years of experience in event planning and decorating, we transformed our 
                            passion into a thriving business, driven by the belief that every event deserves a personal 
                            touch. 
                        </p>
                        <p>
                            At TCO Party Occasion, we specialize in crafting unforgettable experiences tailored to 
                            your unique vision. Whether it’s a wedding, corporate event, or a special milestone, 
                            we pour our hearts into every detail, ensuring your occasion is not just an event, but a 
                            cherished memory.
                        </p>
                        <p>
                            We pride ourselves on our attention to detail, creativity, and commitment to excellence. 
                            Our team is passionate about bringing your ideas to life, combining innovative designs 
                            with impeccable planning to create stunning atmospheres that reflect your style and 
                            personality.
                        </p>
                        <p>
                            Join us on this exciting journey, and let us help you celebrate life’s moments with flair 
                            and finesse! Your dream event awaits.
                        </p>
                
                    </div>
                </div>
            </div>    
        </div>       
    )
}

export default AboutUs