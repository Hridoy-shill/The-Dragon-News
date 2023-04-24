import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" className='mx-auto pt-3 w-96' />
            <p className='text-center font-semibold text-gray-500 my-3'>Journalism Without Fear or Favour</p>
            <p className='text-center text-base font-semibold text-gray-500'>{moment().format('dddd, MMMM DD, YYYY')}</p>
            <div className='flex mx-10 bg-slate-200 p-3'>
                <button className="px-3 py-2 rounded text-lg font-bold text-white btn-active bg-red-600">Latest</button>
                <Marquee speed={60} className='ms-4 font-bold text-red-700 '>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            {/* navbar */}
            <div className='flex justify-between items-center mx-10 mt-4'>
                <div className='w-full'></div>
                <div className='space-x-4 text-base w-full font-semibold text-gray-500'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About</Link>
                    <Link to={'/'}>Career</Link>
                </div>
                <div className='flex items-center gap-3'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={logo} />
                        </div>
                    </label>
                    <button className="px-8 py-1 bg-slate-800 text-white font-semibold text-lg">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;