import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'

const NewsDetails = () => {
    const singleNews = useLoaderData()
    const {category_id, image_url, title, details} = singleNews
    return (
        <div>
            <h2 className='font-bold text-lg'>Dragon News</h2>
            <div className='p-3 border-2 mt-3 rounded'>
                <img className='w-full' src={image_url} alt="" />
                <p className='text-3xl font-bold my-5'>{title}</p>
                <p className='text-base font-semibold text-gray-500'>{details}</p>
                <p className='flex items-center my-5 text-lg font-bold text-white bg-rose-700 w-fit p-2 rounded'><FaArrowLeft className='me-2'></FaArrowLeft><Link to={`/category/${category_id}`}>All news in this category</Link></p>
            </div>
            <div>
                <h2 className='font-bold text-lg my-6'>Editors Insight</h2>
                <div className='flex justify-center items-center p-2 gap-3 '>
                    <div>
                        <img src={img1} alt="" />
                        <p className='font-bold text-lg my-3'>Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</p>
                        <div className='flex items-center space-x-2'>
                            <p className='font-extrabold text-sm text-black'>Sports</p>
                            <div className='flex items-center space-x-2'>
                                <FaCalendar className='text-gray-500'></FaCalendar>
                                <p className='font-bold text-gray-500'>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={img2} alt="" />
                        <p className='font-bold text-lg my-3'>Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</p>
                        <div className='flex items-center space-x-2'>
                            <p className='font-extrabold text-sm text-black'>Sports</p>
                            <div className='flex items-center space-x-2'>
                                <FaCalendar className='text-gray-500'></FaCalendar>
                                <p className='font-bold text-gray-500'>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <p className='font-bold text-lg my-3'>Bayern Slams Authorities <br /> Over Flight Delay to Club <br /> World Cup</p>
                        <div className='flex items-center space-x-2'>
                            <p className='font-extrabold text-sm text-black'>Sports</p>
                            <div className='flex items-center space-x-2'>
                                <FaCalendar className='text-gray-500'></FaCalendar>
                                <p className='font-bold text-gray-500'>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;