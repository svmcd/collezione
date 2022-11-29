import "./dashboard.scss"

import React from "react";

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state= [];
    }

    render(){
        return(
            <>
                <Navbar/>
                <section class="dashboard">
                    <div className="dashboard__wrapper">
                        <div className="dashboard__filters">
                            <input type="range"/>
                            <select name="" id=""></select>
                        </div>
                        <div className="dashboard__container">
                            <div className="dashboard__featured">
                                <div className="featured__image-container">
                                    <img src="/images/minecraft.jpg" alt=""/>
                                </div>
                                <div className="dashboard__details">
                                    <h1 className="details__title">Minecraft</h1>
                                    <p className="details__date">Uitgebracht: 18 november 2011</p>
                                    <p className="details__genre">Sandbox</p>
                                    <p className="details__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore magni molestiae accusamus sit nesciunt repellendus accusantium hic unde doloremque? Dicta voluptatem totam aspernatur mollitia laudantium nesciunt. Laborum iusto cumque vitae.</p>
                                    <button className="cta">Bewerk</button>
                                </div>
                            </div>
                            <div className="dashboard__items">
                                <h1 className="items__title">Jouw collectie</h1>
                                <div className="items__container">
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                    <div className="dashboard__item"><img src="images/minecraft.jpg" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }

}

export default Dashboard;