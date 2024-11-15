import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data/products'
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai"

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const handlePrevClick = () => {
        if (productId <= 0) {
            navigate(`../service/${Number(data.length -1)}`);
        } else {
            navigate(`../service/${Number(productId) - 1}`);
        };
    }

    const handleNextClick = () => {
        if (productId >= data.length - 1) {
            navigate(`../service/0`);
        } else {
            navigate(`../service/${Number(productId) + 1}`);
        };
    }

    return (
        <div className='max-w-6xl mx-auto min-h-[80vh]'>
            
            <div className='h-full p-2 flex flex-col-reverse sm:flex-row gap-4 justify-between'>


                <div className='sm:w-1/2 flex justify-center'>
                    <img className='h-full object-scale-down' src={data[productId].image} />
                </div>


                <div className='min-h-80 sm:w-1/2 flex flex-col grow'>
                    <div className='flex justify-between items-center h-1/4'>
                        <h1>{data[productId].title}</h1>
                        <div className='flex items-center'>
                            <h3 className='flex items-center'>
                                <a className='flex items-center cursor-pointer' onClick={handlePrevClick}><AiFillStepBackward />Prev</a>
                                <span>&nbsp; | &nbsp;</span>
                                <a className='flex items-center cursor-pointer' onClick={handleNextClick}>Next<AiFillStepForward /></a>
                            </h3>   
                        </div>
                    </div>
                    <div className='flex grow items-center'>
                        <p>{data[productId].description}</p>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default Product
