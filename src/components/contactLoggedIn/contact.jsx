import React, { useEffect } from 'react';

import "./contact.scss"

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

const Contact = ({loggedIn, setLoggedIn}) => {

    useEffect(() => {
        setLoggedIn(true);
    }, [setLoggedIn, loggedIn]);

    return(
        <>
        <Navbar loggedIn={loggedIn} />
        <section name="contact" className="contact">
            <div className="contact__wrapper">
                <div className="contact__form-container">
                    <h1 className="contact__title">Contact</h1>
                    <div className="form__input-container">
                        <label htmlFor="name">Naam</label>
                        <input name="name" type="text"/>
                    </div>
                    <div className="form__input-container">
                        <label htmlFor="email">E-mailadres</label>
                        <input name="email" type="text"/>
                    </div>
                    <div className="form__input-container">
                        <label htmlFor="subject">Onderwerp</label>
                        <input name="subject" type="text"/>
                    </div>
                    <div className="form__input-container">
                        <label htmlFor="text">Beschrijving</label>
                        <textarea name="text" placeholder="Beschrijf jouw vraag" cols="30" rows="5"></textarea>
                    </div>
                    <button className="cta">Verzenden</button>
                </div>
                <figure className="contact__cube"></figure>
                <figure className="contact__cube2"></figure>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Contact;