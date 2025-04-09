import React from 'react';
import Header from './Header/header';
import Banner from './banner';
import  Vehicle from '../Home/Vehicle'
import Getintouch from './Getintouch';
import Footer from './footer';

const index = () => {
    return (
        <div>
         
            <Header />
            <Banner />
            <Vehicle />
            <Getintouch />
            <Footer />
        </div>
    );
};

export default index;