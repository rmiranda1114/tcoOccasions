import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {

  const goToFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=100089726350344')
  }

  return (
    <div className='flex justify-evenly py-4 items-center'>
        <div className='w-10'></div>
        <div className='grow text-center text-xs ml-2 text-slate-600'>
            <h4>tcopartyoccasions@gmail.com</h4>
            <h4>413-204-1892</h4>
            <h4>Ludlow, MA 01056</h4>
            <h4>JRM Web Services</h4>
        </div>
        <div className='mr-10'>
            <BsFacebook size={36} onClick={goToFacebook}/>
        </div>
        
    </div>
  )
}

export default Footer