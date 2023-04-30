import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';


const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='grid grid-cols-4 gap-3 mt-12 mx-10'>
                <div className='sticky'>
                    <RightNav></RightNav>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
                <div className='sticky'>
                    <LeftNav></LeftNav>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;