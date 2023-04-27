import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 gap-3 mt-12 mx-10'>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
                <div>
                    <LeftNav></LeftNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;