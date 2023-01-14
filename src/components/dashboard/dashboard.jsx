import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./dashboard.scss"

import Navbar from "../navbar/navbar"

import Footer from "../footer/footer"

const Dashboard = ({games, setGames, loggedIn, setLoggedIn}) => {

    const [featuredGame, setFeaturedGame] = useState([]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setLoggedIn(true);
    });

    useEffect(() => {
        setGames(games)
        setFeaturedGame(0);
        // eslint-disable-next-line
    }, []);
    
    const onCardClicked = (e) => {

        const clickedItem = parseInt(e.currentTarget.id)
        setFeaturedGame(clickedItem)
    }  
    
    let gamesSearch = games.map(gameObject => {
        if(gameObject.added === true){
            return <div onClick={onCardClicked} id={gameObject.id} key={gameObject.id} className="dashboard__item"><img src={gameObject.img} alt=""/></div>
        }
        return null;
    });

    let findFeaturedGame = games.map(gameObject => {
        if(featuredGame === gameObject.id){

            return  (<div className="dashboard__featured" key={gameObject.id}>
                        <div className="featured__image-container">
                            <figure>
                                <img src={gameObject.img} alt="" />
                                <div className="dashboard__rating">{gameObject.rating}</div>
                            </figure>
                        </div>
                        <div className="dashboard__details">
                            <h1 className="details__title">{gameObject.name}</h1>
                            <p className="details__date"><span className="details__bold">Uitgebracht:</span> {gameObject.date}</p>
                            <p className="details__genre"><span className="details__bold">Genre:</span> {gameObject.genre}</p>
                            <p className="details__platforms"><span className="details__bold">Platforms:</span> {gameObject.platforms}</p>
                            <p className="details__desc">{gameObject.desc}</p>
                            <button className="cta">Bewerk</button>
                        </div>
                    </div>
            );
        }
        else{
            return null;
        }
    });

    return(
        <>
            <Navbar loggedIn={loggedIn}/>
            <section className="dashboard">
                <div className="dashboard__wrapper">
                    <div className="dashboard__filters">
                        <input type="range"/>
                        <select name="" id=""></select>
                    </div>
                    <div className="dashboard__container">
                        { findFeaturedGame }
                        <div className="dashboard__items">
                            <h1 className="items__title">Jouw collectie</h1>
                            <div className="items__container">
                                { gamesSearch }
                            </div>
                            <Link className="items__button cta" to="/Backlog"><i className="fa-solid fa-plus"></i> Voeg games</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}

export default Dashboard;