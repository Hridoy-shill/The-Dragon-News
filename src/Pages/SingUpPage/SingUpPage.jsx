import React from 'react';

const SingUpPage = () => {
    return (
        <div className='w-full p-5'>
            <div className='w-2/4 mx-auto'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Register your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Your Name</label>
                    <input className='bg-gray-100 p-3 mt-3' type="text" name="text" id="" placeholder='Enter your name' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Photo URL</label>
                    <input className='bg-gray-100 p-3 mt-3' type="file" name="text" id="" placeholder='' />
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Email address</label>
                    <input className='bg-gray-100 p-3 mt-3' type="email" name="email" id="" placeholder='Enter your email address' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Password</label>
                    <input className='bg-gray-100 p-3 mt-3' type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <div className='flex'>
                    <input type="checkbox" className='checkbox' name="" id="" required/>
                    <p className='ms-2'>Accept Term & Conditions</p>
                </div>
                <div className='text-center'>
                    <button className='btn w-full mt-5'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default SingUpPage;