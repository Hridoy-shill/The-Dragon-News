import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar } from 'react-icons/fa';

import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

const RightNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2 className='font-bold text-xl'>All Caterogy</h2>
            {
                categories.map(category => <p key={category.id} className='my-10 font-bold text-zinc-500 text-lg p-3 hover:bg-slate-200'><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
            <div className='space-y-5'>
                <div className='mt-10'>
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
                <div lassName=''>
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
    );
};

export default RightNav;