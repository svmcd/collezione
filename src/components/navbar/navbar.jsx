import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./navbar.scss";


const Navbar = ({loggedIn}) =>{
    const [navColor, setnavColor] = useState();
    const [hide, setHide] = useState();
    const [short, setShort] = useState();
    const [navSize, setNavSize] = useState(false)
    const [navClass, setNavClass] = useState("navbar__list-up")
    const [navButton, setNavButton] = useState("fa-solid fa-bars navbar__hamburger")

    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#FFFFFF") : setnavColor();
      window.scrollY > 10 ? setHide("0") : setHide();
      window.scrollY > 10 ? setShort("0") : setShort();
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    },[]);

    useEffect(() => {
        if(navSize === true){
            setNavClass("navbar__list-up");
            setNavButton("fa-sharp fa-solid fa-xmark navbar__hamburger");
        }
        else{
            setNavClass("hide slideOut");
            setNavButton("fa-solid fa-bars navbar__hamburger");
        }
    }, [navSize]);   

    if(loggedIn === true){
        return(
            <nav style={{ backgroundColor: "white" }} className="navbar" id="navbar">
                <div className="navbar__section-up">
                    <figure>
                        <p className="logo"><i className="fa-solid fa-gamepad"></i>collezione</p>
                    </figure>
                    <ul className={navClass}>
                        <li className="navbar__list-item-up">
                            <Link to="/Dashboard">Collectie</Link>
                        </li>
                        <li className="navbar__list-item-up">
                            <Link to="/Explore">Ontdek meer</Link>
                        </li>
                        <li className="navbar__list-item-up">
                            <Link to="/Backlog">Backlog chooser</Link>
                        </li>
                        <li className="navbar__list-item-up">
                            <Link to="/">Log uit</Link>
                        </li>
                    </ul>
                    <i onClick={() => {setNavSize(!navSize);}} className={navButton}></i>
                </div>
            </nav>
        );
    }
    else {
        return(
            <nav style={{ backgroundColor: navColor, transition: "all .5s" }} className="navbar" id="navbar">
                <div className="navbar__section-up">
                    <figure>
                        <a className="logo" href="/collezione"><i className="fa-solid fa-gamepad"></i>collezione</a>
                    </figure>
                    <ul className={navClass}>
                        <li className="navbar__list-item-up">
                            <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={1000}>Over</ScrollLink>
                        </li>
                        <li className="navbar__list-item-up">
                            <ScrollLink activeClass="active" to="features" spy={true} smooth={true} offset={-80} duration={1000}>Features</ScrollLink>
                        </li>
                        <li className="navbar__list-item-up">
                            <ScrollLink activeClass="active" to="subs" spy={true} smooth={true} offset={-80} duration={1000}>Prijs</ScrollLink>
                        </li>
                        <li className="navbar__list-item-up">
                            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={1000}>Contact</ScrollLink>
                        </li>
                        <li>
                            <Link className="cta" to="/Login">Login</Link>
                        </li>
                    </ul>
                    <i onClick={() => {setNavSize(!navSize);}} className={navButton}></i>
                </div>
                <div style={{ maxHeight: short, transition: "all .5s" }} className="navbar__section-down">
                    <ul
                     style={{ opacity: hide, transition: "all .3s" }} className="navbar__list-down">
                        <li className="navbar__list-item-down"><i className="fa-solid fa-check"></i>Je games op 1 plek</li>
                        <li className="navbar__list-item-down"><i className="fa-solid fa-check"></i>Blijf georganiseerd</li>
                        <li className="navbar__list-item-down"><i className="fa-solid fa-check"></i>Ontdek nieuwe games</li>
                        <li className="navbar__list-item-down"><i className="fa-solid fa-check"></i>Altijd opzegbaar</li>
                        <li className="navbar__list-item-down"><i className="fa-solid fa-check"></i>Probeer gratis</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;