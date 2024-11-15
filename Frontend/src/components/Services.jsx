import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import products from "../data/products"


const Services = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const productId = e.currentTarget.id;
        navigate(`./service/${productId}`);
    }

    return (
        <div id='services' className='w-screen bg-slate-900/30 m-auto flex flex-col'>
            <div className='py-10'>
                <h2 className='ml-5 text-5xl'>Services</h2>
            </div>
            
            <div className='mx-auto w-11/12 flex flex-col sm:flex-row items-center justify-center flex-wrap'>
                {products.map((item) => (
                    <div key={item.id} className='my-6 mx-2 p-2 w-full h-[400px] sm:w-96 flex flex-col bg-blue-200/10 rounded'>
                        <div className='h-full object-contain flex justify-center' id={item.id} onClick={handleClick}>
                            <img className='max-h-[350px]' src={item.image} />
                        </div>
                        <div className='text-center'>
                            <h1>{item.title}</h1>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services