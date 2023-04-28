import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    const {displayName} = user;
    return (
        <div>
            <img src={logo} alt="" className='mx-auto pt-3 w-96' />
            <p className='text-center font-semibold text-gray-500 my-3'>Journalism Without Fear or Favour</p>
            <p className='text-center text-base font-semibold text-gray-500 mb-5'>{moment().format('dddd, MMMM DD, YYYY')}</p>
            <div className='flex mx-10 bg-slate-200 p-3 md:mt-0 mt-4'>
                <button className="px-3 py-2 rounded text-lg font-bold text-white btn-active bg-red-600">Latest</button>
                <Marquee speed={60} className='ms-4 font-bold text-red-700'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            {/* navbar */}
            <div className='md:flex md:justify-between md:items-center mx-10 mt-4'>
                {user ? <div className='w-full'>{displayName}</div> : ''}
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
                    {
                        user.displayName ?
                        <button className="px-8 py-1 bg-slate-800 text-white font-semibold text-lg rounded">logout</button> :
                        <Link to={'/login'}><button className="px-8 py-1 bg-slate-800 text-white font-semibold text-lg rounded">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;