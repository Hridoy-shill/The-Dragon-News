import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Form } from 'react-router-dom';

const SingUpPage = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const checkbox = form.checkbox.value;

        console.log(email, name, photo, password, checkbox);

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            form.reset()
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='w-full p-5'>
            <Form onSubmit={handleRegister} className='w-2/4 mx-auto'>
                <p className='text-3xl font-bold border-black pb-6 text-center '>Register your account</p>
                <hr />
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Your Name</label>
                    <input className='bg-gray-100 p-3 mt-3' type="text" name="name" id="" placeholder='Enter your name' required/>
                </div>
                <div className='flex flex-col my-3'>
                    <label htmlFor="" className='font-bold text-xl'>Photo URL</label>
                    <input className='bg-gray-100 p-3 mt-3' type="file" name="photo" id="" placeholder='' />
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
                    <input type="checkbox" className='checkbox' name="checkbox" id="" required/>
                    <p className='ms-2'>Accept Term & Conditions</p>
                </div>
                <div className='text-center'>
                    <button className='btn w-full mt-5'>Register</button>
                </div>
            </Form>
        </div>
    );
};

export default SingUpPage;