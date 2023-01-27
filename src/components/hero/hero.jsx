import "./hero.scss";

import { Link as ScrollLink } from "react-scroll";

function Hero(){
    return(
        <section className="hero" >
            <div className="hero__wrapper">
                <div className="hero__left">
                    <h1 className="hero__title">Collezione</h1>
                    <p className="hero__text">Met Collezione, de game-collectie app, houd je al jouw favoriete games bij de hand en ontdek je nieuwe titels die perfect bij jou passen. Voeg games toe aan jouw persoonlijke collectie, bekijk informatie over deze titels, zoek op basis van jouw interesses en deel jouw collectie met andere game-fanaten. Collezione is de perfecte manier om jouw passie voor games te organiseren en te delen. Creëer nu jouw collectie op Collezione.</p>
                    <ScrollLink className="cta" activeClass="active" to="subs" spy={true} smooth={true} offset={-80} duration={1000}>Probeer 14 dagen gratis</ScrollLink>
                </div>
                <div className="hero__right">
                    <img src={`${process.env.PUBLIC_URL}/images/collezione-hero.png`} alt=""/>
                </div>
                <figure className="hero__cube"></figure>
                <figure className="hero__cube2"></figure>
            </div>
        </section>
    );
}

export default Hero;