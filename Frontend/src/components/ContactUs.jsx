import React from 'react'

const ContactUs = () => {
  return (
    <section className='flex justify-center items-center min-h-lvh'>
        <form className='max-w-[600px] w-full bg-white p-6 rounded-md shadow-md m-6 text-black'>
            <h2 className='text-[30px] text-center font-bold'>Contact Form</h2>
            <div className='mt-5'>
                <label>Full Name</label>
                <input className='w-full h-[50px] bg-transparent border-2 outline-none rounded p-4 text-base text-slate-700 mt-2' type='text' placeholder='Enter your name' required />
            </div>
            <div className='mt-5'>
                <label>Email Address</label>
                <input className='w-full h-[50px] bg-transparent border-2 outline-none rounded p-4 text-base text-slate-700 mt-2' type='email' placeholder='Enter your email' required />
            </div>
            <div>
                <label>Message</label>
                <textarea className='w-full h-[200px] bg-transparent border-2 outline-none rounded p-4 text-base text-slate-700 mt-2 resize-none' placeholder='Enter your message' required/>
            </div>
            <button className='w-full h-[55px] bg-blue-300 border-none rounded-lg shadow-md cursor-pointer hover:bg-blue-500 transition' type='submit'>Send Message</button>
        </form>
    </section>
  )
}

export default ContactUs
