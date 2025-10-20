import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Authentication = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto pt-3'>
                <Navbar></Navbar>
          </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;