import "./login.scss"

import { useNavigate } from "react-router-dom";
import React, { useLayoutEffect } from 'react';

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

const Login = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const navigate = useNavigate();

    const handleSubmit = event => {
      event.preventDefault();
  
      // 👇️ redirect to /contacts
      navigate('/dashboard');
    };
    

    return (
        <>
            <Navbar />
            <section className="login">
                <form onSubmit={handleSubmit} className="login__wrapper">
                    <div className="login__left">
                        <img src={`${process.env.PUBLIC_URL}/images/collezione-hero.png`} alt="" />
                    </div>
                    <div className="login__right">
                        <div className="login__input-container">
                            <label htmlFor="email">E-mailadres</label>
                            <input name="email" type="email" required="required"/>
                        </div>
                        <div className="login__input-container">
                            <label htmlFor="password">Wachtwoord</label>
                            <input name="password" type="password" required="required" minLength="5"/>
                        </div>
                        <div className="login__linkgroup">
                            <button className="cta" type="submit">Login</button>
                            <a href="/">Ben je je wachtwoord vergeten? Klik hier.</a>
                            <a href="/">Nog geen account? Inschrijven</a>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Login;