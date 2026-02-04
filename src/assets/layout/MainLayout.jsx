import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'></div>
            <Header></Header>
            <div className='mt-4'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;