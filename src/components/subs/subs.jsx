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
                    <p className="subs__text">Anim commodo qui voluptate in esse nulla. Labore sint culpa qui labore dolor pariatur elit Lorem quis officia dolore deserunt sunt id.</p>
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
                                <p className="top__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="subs__bottom">
                                <p className="bottom__price">€12.99 per 30 dagen</p>
                                <ul className="bottom__features">
                                    <li className="bottom__feature"><i class="fa-regular fa-check"></i>feature</li>
                                    <li className="bottom__feature"><i class="fa-regular fa-check"></i>feature</li>
                                    <li className="bottom__feature"><i class="fa-regular fa-check"></i>feature</li>
                                </ul>
                                <button className="cta">button</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="subs__slider">
                            <div className="subs__top">
                                <h1 className="top__title">Standaard</h1>
                                <p className="top__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="subs__bottom">
                                <p className="bottom__price">€12.99 per 30 dagen</p>
                                <ul className="bottom__features">
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>feature</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>feature</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>feature</li>
                                </ul>
                                <button className="cta">button</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="subs__slider" >
                            <div className="subs__top">
                                <h1 className="top__title">Premium</h1>
                                <p className="top__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="subs__bottom">
                                <p className="bottom__price">€12.99 per 30 dagen</p>
                                <ul className="bottom__features">
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>feature</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>feature</li>
                                    <li className="bottom__feature"><i className="fa-regular fa-check"></i>feature</li>
                                </ul>
                                <button className="cta">button</button>
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