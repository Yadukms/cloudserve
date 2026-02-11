import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import Industries from '../components/Industries';
import Partners from '../components/Partners';
import Customers from '../components/Customers';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Solutions />
            <Products />
            <Partners />
            <Industries />
            <Customers />
            <Testimonials />
        </>
    );
};

export default Home;
