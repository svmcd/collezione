import "./hero.scss";

import { Link as ScrollLink } from "react-scroll";

function Hero(){
    return(
        <section className="hero" >
            <div className="hero__wrapper">
                <div className="hero__left">
                    <h1 className="hero__title">Collezione</h1>
                    <p className="hero__text">Met Collezione labore eu aute elit occaecat non.Tempor aute in officia qui do eiusmod enim. Laborum velit laborum elit sint laborum cillum enim. Duis voluptate commodo ipsum ut ipsum enim pariatur irure irure laborum excepteur commodo. Irure Lorem eu et laboris enim cillum enim eu magna. Officia do laboris mollit duis adipisicing aliquip nostrud velit elit ipsum aliquip. Eiusmod id esse mollit exercitation in tempor.</p>
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