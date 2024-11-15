import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Wallpaper from '../assets/TCO1.jpg'
import Wallpaper2 from '../assets/TCO1-1.jpg'

const Home = () => {
  const navigate = useNavigate();

  const bgImage = () => {
    if (window.innerWidth > 500) {
      return Wallpaper
    } else {
      return Wallpaper2
    }
  }

  console.log(window.innerWidth)
  return (
    
    <div id='home' className='h-[90vh]'>
      <Parallax className='h-full  mx-auto' bgImage={bgImage()} strength={400}>
        <div className='h-[90vh] lg:w-1/2 ml-6 pb-5 flex flex-col justify-end gap-10'>
          <h3 className=' text-4xl lg:text-6xl'>Event Planning, Decorator, Rentals & More</h3>
          <h4 className=''>We are passionate about creating unique and unforgettable events. From intimate gatherings to large-scale celebrations, we ensure every detail is flawlessly planned and executed to create memories that last a lifetime.</h4>
          <div className='flex items-center gap-6'>
            <div className='px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 rounded cursor-pointer' onClick={() => navigate('./contactus')}>
              Contact Us
            </div>
            <div className='cursor-pointer'>
            <Link  to={"mission"} smooth={true} offset={-100} duration={500}>Learn More</Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
    
    
  )
}

export default Home