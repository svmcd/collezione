import "./about.scss";

import { Link as ScrollLink } from "react-scroll";

function About(){
    return(
        <section name="about" className="about">
            <div className="about__wrapper">
                <div className="about__left">
                    <h1 className="about__title">Al je games op 1 plek</h1>
                    <p className="about__text">Collezione biedt de mogelijkheid om al jouw favoriete games op één plek te verzamelen, zodat je ze altijd bij de hand hebt. Of je nu op zoek bent naar informatie over een specifieke titel, nieuwe games wilt ontdekken die perfect bij jouw interesses passen, of je collectie wilt delen met andere game-fanaten, Collezione is de ultieme app voor game-liefhebbers. Creëer nu jouw eigen game-collectie op Collezione en blijf altijd op de hoogte van de nieuwste en meest interessante games op de markt.</p>
                    <ScrollLink className="cta" activeClass="active" to="subs" spy={true} smooth={true} offset={-80} duration={1000}>Kies je abonnement</ScrollLink>
                </div>
                <div className="about__right">
                    <img src={`${process.env.PUBLIC_URL}/images/collezione-hero.png`} alt=""/>
                </div>
                <figure className="about__cube"></figure>
                <figure className="about__cube2"></figure>
            </div>
        </section>
    )
}

export default About;