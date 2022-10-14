import "./subs.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper";


const Subs = () => {
    return (
        <section className="subs">
            <div className="subs__wrapper">
                <section className="subs__left">
                    <h1 className="subs__title">Kies je abonnement</h1>
                    <p className="subs__text">Anim commodo qui voluptate in esse nulla. Labore sint culpa qui labore dolor pariatur elit Lorem quis officia dolore deserunt sunt id.</p>
                </section>
                <section className="subs__right">
                    <Swiper 
                    className="subs__sliders" 
                    spaceBetween={25} 
                    slidesPerView={2} 
                    pagination={{ clickable: true}}
                    modules={[Pagination,Autoplay]}
                    autoplay={{ delay: 2500}}
                    onSlideChange={() => console.log('slide change')} 
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className="subs__slider" >Free</SwiperSlide>
                        <SwiperSlide className="subs__slider" >Basic</SwiperSlide>
                        <SwiperSlide className="subs__slider" >Premium</SwiperSlide>
                    </Swiper>
                </section>
                <figure className="subs__cube"></figure>
                <figure className="subs__cube2"></figure>
            </div>
        </section>
    );
}

export default Subs;