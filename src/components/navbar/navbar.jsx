import React, { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () =>{
    const [navColor, setnavColor] = useState();
    const [hide, setHide] = useState();
    const [short, setShort] = useState();

    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#ffeae6") : setnavColor();
      window.scrollY > 10 ? setHide("0") : setHide();
      window.scrollY > 10 ? setShort("0") : setShort();
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    },);

    return(
        <nav style={{
            backgroundColor: navColor,
            transition: "all .5s"
        }} 
        className="navbar" id="navbar">
            <section className="navbar__section-up">
                <ul className="navbar__list-up">
                    <figure>
                        <a className="logo" href="#navbar"><i class="fa-solid fa-gamepad"></i>collezione</a>
                    </figure>
                    <li className="navbar__list-item-up"><a href="#navbar">Over</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Features</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Prijs</a></li>
                    <li className="navbar__list-item-up"><a href="#navbar">Contact</a></li>
                    <li><a className="cta" href="#navbar">Login</a></li>
                </ul>
            </section>
            <section style={{
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
            </section>
        </nav>
    );
}

export default Navbar;