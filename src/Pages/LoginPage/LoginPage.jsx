import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='w-full mt-32 p-5'>
            <div className='w-2/4 mx-auto'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Login your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Email address</label>
                    <input className='bg-gray-100 p-3 mt-3' type="email" name="email" id="" placeholder='Enter your email address' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Password</label>
                    <input className='bg-gray-100 p-3 mt-3' type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <div className='text-center'>
                    <button className='btn w-full mt-5'>Login</button>
                    <p className='text-lg font-semibold mt-4'>Dont’t Have An Account ? <Link to={'/singUp'} className='font-bold text-lg text-orange-600'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage; AnimationEffect