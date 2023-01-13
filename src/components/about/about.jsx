import "./about.scss";

import { Link as ScrollLink } from "react-scroll";

function About(){
    return(
        <section name="about" className="about">
            <div className="about__wrapper">
                <div className="about__left">
                    <h1 className="about__title">Al je games op 1 plek</h1>
                    <p className="about__text">Collezione biedt de mogelijkheid om tempor nostrud reprehenderit velit cillum excepteur cillum dolore aute pariatur cupidatat eu minim. Dolor incididunt nulla occaecat sunt laborum amet veniam dolore consequat culpa velit elit. Velit irure fugiat amet voluptate elit occaecat consectetur quis qui qui cupidatat tempor incididunt eu.</p>
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