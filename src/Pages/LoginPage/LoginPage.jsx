import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../assets/logo.png'

const LoginPage = () => {
    const [error, setError] = useState({})
    const {logInUser, user, logOutUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const from = location.state?.from?.pathname || '/category/0'
    
    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
            form.reset()
        })
        .catch(error =>{
            setError(error);
        })
    }
    const handleLogOut = () =>{
        logOutUser()
        .then()
        .catch(error => console.log(error));
    }
    return (
        <div>
             <div className='md:flex md:justify-between md:items-center mx-10 mt-4'>
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
                    {
                        user ?
                        <button  onClick={handleLogOut} className="px-8 py-1 bg-slate-800 text-white font-semibold text-lg rounded">logout</button> :
                        <Link to={'/login'}><button className="px-8 py-1 bg-slate-800 text-white font-semibold text-lg rounded">Login</button></Link>
                    }
                </div>
            </div>
            <Form onSubmit={handleLogIn} className='w-2/4 mx-auto mt-32'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Login your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Email address</label>
                    <input className='bg-gray-100 p-3 mt-3' type="email" name="email" id="" placeholder='Enter your email address' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Password</label>
                    <input className='bg-gray-100 p-3 mt-3' type="password" name="password" id="" placeholder='Enter your password' required/>
                    <p className='font-bold text-red-700'>{error.message}</p>
                </div>
                <div className='text-center'>
                    <button className='btn w-full mt-5'>Login</button>
                    <p className='text-lg font-semibold mt-4'>Dont’t Have An Account ? <Link to={'/singUp'} className='font-bold text-lg text-orange-600 underline'>Register</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default LoginPage; AnimationEffect