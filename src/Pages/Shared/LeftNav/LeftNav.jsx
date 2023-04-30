import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bgImg from '../../../assets/bg.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const LeftNav = () => {
    const {logInWithGoogle, logInWithGithub} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        logInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithubLogin = () =>{
        logInWithGithub()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <div>
                <h2 className='font-bold text-xl'>Login with</h2>
                <div className='text-center mt-5'>
                    <button onClick={handleGoogleLogin} className="btn btn-outline px-11 w-full font-bold"><FaGoogle className='me-1 w-4 h-4'></FaGoogle>Login with Google</button>
                    <button onClick={handleGithubLogin} className="btn btn-outline btn-primary w-full px-11 my-3 font-bold"><FaGithub className='me-1 w-4 h-4'></FaGithub>Login with GitHub</button>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-xl mt-8'>Find Us On</h2>
                <div className='mt-3 border-2'>
                    <p className='flex items-center font-bold text-lg border-b-2 p-2'><FaFacebook className='h-6 w-6 me-2'></FaFacebook>Facebook</p>
                    <p className='flex items-center font-bold text-lg my-3 border-b-2 p-2'><FaTwitter className='h-6 w-6 me-2'></FaTwitter>Twitter</p>
                    <p className='flex items-center font-bold text-lg p-2'><FaInstagram className='h-6 w-6 me-2'></FaInstagram>Instagram</p>
                </div>
            </div>

            <div className='bg-gray-100 mt-10'>
                <h2 className='font-bold text-xl mt-8 p-2'>Q-Zone</h2>
                <div className='py-2 px-2'>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>

            <div className='relative'>
                <div className='mt-10'>
                    <img className=' w-full' src={bgImg} alt="" />
                </div>
                <div className='absolute w-full top-24'>
                    <h2 className='text-4xl font-bold text-white text-center'>Create an <br /> Amazing <br /> Newspaper</h2>
                    <p className='text-white text-center text-lg my-6'>Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br />click to import demo <br />and much more.</p>
                    <div className='w-full text-center'>
                        <button className='bg-rose-700 text-white font-bold text-base px-4 py-3 text-center'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;