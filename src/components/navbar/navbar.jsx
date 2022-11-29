import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import "./navbar.scss";
// eslint-disable-next-line 
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () =>{
    const [navColor, setnavColor] = useState();
    const [hide, setHide] = useState();
    const [short, setShort] = useState();

    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#FFFFFF") : setnavColor();
      window.scrollY > 10 ? setHide("0") : setHide();
      window.scrollY > 10 ? setShort("0") : setShort();
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    },);

    const click = () => {
        console.log("cloicked")
    }

    return(
        <nav style={{
            backgroundColor: navColor,
            transition: "all .5s"
        }} 
        className="navbar" id="navbar">
            <div className="navbar__section-up">
                <ul className="navbar__list-up">
                    <figure>
                        <a className="logo" href="/"><i class="fa-solid fa-gamepad"></i>collezione</a>
                    </figure>
                    <li className="navbar__list-item-up">
                        <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={1000}>
                            Over
                        </ScrollLink>
                    </li>
                    <li className="navbar__list-item-up">
                        <ScrollLink activeClass="active" to="features" spy={true} smooth={true} offset={-80} duration={1000}>
                            Features
                        </ScrollLink>
                    </li>
                    <li className="navbar__list-item-up">
                        <ScrollLink activeClass="active" to="subs" spy={true} smooth={true} offset={-80} duration={1000}>
                            Prijs
                        </ScrollLink>
                    </li>
                    <li className="navbar__list-item-up">
                        <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={1000}>
                            Contact
                        </ScrollLink>
                    </li>
                    <li><Link className="cta" to="/Login">Login</Link></li>
                </ul>
                <i onClick={click} class="fa-solid fa-bars navbar__hamburger"></i>
            </div>
            <div style={{
                maxHeight: short,
                transition: "all .5s"
            }}  
            className="navbar__section-down">
                <ul
                 style={{
                    opacity: hide,
                    transition: "all .3s"
                }}   
                className="navbar__list-down">
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Je games op 1 plek</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Blijf georganiseerd</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Ontdek nieuwe games</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Altijd opzegbaar</li>
                    <li className="navbar__list-item-down"><i class="fa-solid fa-check"></i>Probeer gratis</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;