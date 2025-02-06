'use client';
import React from 'react';
import MenuComponent from '../component/Menu';
import Footer from '../component/Footer';
import Cart from '../component/Cart';

const Page = () => {
    return (
        <div>
            <MenuComponent />
            <div className="h-20"></div>
            <Cart />
            <Footer />
        </div>
    );
}

export default Page;
