import React, { useLayoutEffect } from 'react';

import Navbar from "../navbar/navbar"
import Hero from "../hero/hero"
import About from "../about/about"
import Features from "../features/features"
import Subs from "../subs/subs"
import Contact from "../contact/contact"
import Footer from "../footer/footer"

const Home = ({loggedIn, setLoggedIn}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setLoggedIn(false);
    });
    
    return(
        <>
            <Navbar loggedIn={loggedIn}/>
            <Hero />
            <About />
            <Features />
            <Subs />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;