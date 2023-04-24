import React from 'react';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className='border-2'>
                    <RightNav></RightNav>
                </div>
                <div className='col-span-2 border-2'>
                    <p>main content...</p>
                </div>
                <div className='border-2'>
                    <LeftNav></LeftNav>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;