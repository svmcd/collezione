import "./subs.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper";


const Subs = () => {
    return (
        <section name="subs" className="subs">
            <div className="subs__wrapper">
                <div className="subs__left">
                    <h1 className="subs__title">Kies je abonnement</h1>
                    <p className="subs__text">Collezione biedt verschillende abonnementsopties om aan jouw specifieke behoeftes te voldoen. Van gratis toegang tot basisfuncties tot premium toegang voor extra functies en voordelen. Bekijk onze abonnementsopties en kies de beste optie voor jou. Probeer ons nu gratis uit en upgrade naar een premium abonnement om vol te genieten van de volledige Collezione-ervaring.</p>
                </div>
                <div className="subs__right">
                    <Swiper 
                    className="subs__sliders" 
                    spaceBetween={25} 
                    slidesPerView={1} 
                    pagination={{ clickable: true}}
                    modules={[Pagination,Autoplay]}
                    autoplay={{ delay: 2500}}
                    breakpoints={{
                        // when window width is >= 1000px
                        700: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                        <SwiperSlide className="subs__slider" >
                            <div className="subs__top">
                                <h1 className="top__title">Gratis</h1>
                                <p className="top__text">Probeer het gratis uit!</p>
                            </div>
                            <div className="subs__bottom">
                                <p className="bottom__price">Gratis</p>
                                <ul className="bottom__features">
                                    <li className="bottom__feature"><i class="fa-regular fa-check"></i>Toegang tot games</li>
                                    <li className="bottom__feature"><i class="fa-regular fa-check"></i>Zoek- en filterfuncties</li>
                                    <li className="bottom__feature"><i class="fa-regular fa-check"></i>Toegang tot game informatie</li>
                                </ul>
                                <button className="cta">Kies</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="subs__slider">
                            <div className="subs__top">
                                <h1 className="top__title">Standaard</h1>
                                <p className="top__text">Neem het Standaard abonnement!</p>
                            </div>
                            <div className="subs__bottom">
                                <p className="bottom__price">€8.99 per 30 dagen</p>
                                <ul className="bottom__features">
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Toegang tot games</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Zoek- en filterfuncties</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Delen van collectie</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Aanbevelingen speciaal voor jou</li>
                                </ul>
                                <button className="cta">Kies</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="subs__slider" >
                            <div className="subs__top">
                                <h1 className="top__title">Premium</h1>
                                <p className="top__text">Neem het Premium abonnement!</p>
                            </div>
                            <div className="subs__bottom">
                                <p className="bottom__price">€12.99 per 30 dagen</p>
                                <ul className="bottom__features">
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Toegang tot games</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Zoek- en filterfuncties</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Delen van collectie</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Aanbevelingen speciaal voor jou</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>Extra functies</li>
                                </ul>
                                <button className="cta">Kies</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <figure className="subs__cube"></figure>
                <figure className="subs__cube2"></figure>
            </div>
        </section>
    );
}

export default Subs;