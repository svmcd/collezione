import "./login.scss"

import {Link} from "react-router-dom";

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

const Login = () => {

    return(
        <>
            <Navbar/>
            <section className="login">
                <div className="login__wrapper">
                    <div className="login__left">
                        <img src="/images/collezione-hero.png" alt=""/>
                    </div>
                    <div className="login__right">
                        <div className="login__input-container">
                            <label htmlFor="email">E-mailadres</label>
                            <input name="email" type="text"/>
                        </div>
                        <div className="login__input-container">
                            <label htmlFor="password">Wachtwoord</label>
                            <input name="password" type="password"/>
                        </div>
                        <div className="login__linkgroup">
                            <Link className="cta" to="/Dashboard">Login</Link>
                            <a href="/">Ben je je wachtwoord vergeten? Klik hier.</a>
                            <a href="/">Nog geen account? Inschrijven</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Login;