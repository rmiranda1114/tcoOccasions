import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import Footer from './Footer'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", to: "home"},
        { label: "Services", to: "services"},
        { label: "Past Occasions", to: "video"},
        { label: "About Us", to: "aboutus"},
    ];

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }


  return (
    <div className='min-h-screen'>
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate('../')}>
                        {/* Add Logo */}
                        {/* <img className='h-10 w-10 mr-2' src='' alt='' /> */}
                        <span className="text-4xl tracking-tight font-dancingScript">TCO Party Occasions</span>
                    </div>
                    
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <ul className='hidden lg:flex ml-14 space-x-12 flex-grow cursor-pointer'> 
                            {navItems.map((item, index) => (
                                <li key={index} >
                                    <Link onClick={() => navigate('../')} to={item.to} smooth={true} offset={-100} duration={500}>{item.label}</Link>
                                </li>
                                
                            ))}
                        </ul>
                        <a href="#" className='' onClick={() => navigate('./contactus')}>Contact Us</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed mt-4 right-0 z-20 bg-neutral-900 w-64 p-12 flex flex-col justify-center items-center lg-hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 cursor-pointer'>
                                    <Link onClick={() => {navigate('../'); setMobileDrawerOpen(false)}} to={item.to} smooth={true} spy={true} offset={50} duration={500}>{item.label}</Link>
                                </li>
                            ))}
                            <li className='py-4 cursor-pointer' onClick={() => {navigate('./contactus'); setMobileDrawerOpen(false)}}>Contact Us</li>
                        </ul>
                        
                    </div>
                )}
            </div>
        </nav>
        
        <div className='min-h-[80vh]'>
            <Outlet />
        </div>
        <div className=''>
            <Footer />
        </div> 
       
              
    </div>
    
  )
}

export default Navbar