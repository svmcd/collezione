import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { TwitterButton, FacebookButton } from "react-social";

import "./dashboard.scss"

import Navbar from "../navbar/navbar"

import Footer from "../footer/footer"

const Dashboard = ({ games, setGames, loggedIn, setLoggedIn }) => {

    const [featuredGame, setFeaturedGame] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [updatedDesc, setUpdatedDesc] = useState();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        setLoggedIn(true);
        setGames(games)
        setFeaturedGame(0);
    }, [setLoggedIn, games, setGames]);

    const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
        // eslint-disable-next-line
        return toBeSearchedArray.filter(game => {
            let found = false;
            game.platforms.forEach(platform => {
                if (platform.toUpperCase().indexOf(platformToBeSearched.toUpperCase()) !== -1) {
                    found = true;
                }
            });
            if (found === true) {
                return game;
            }
        })
    }

    const filterGamesByGenre = (genreToBeSearched, toBeSearchedArray) => {
        // eslint-disable-next-line
        return toBeSearchedArray.filter(game => {
            let found = false;
            game.genre.forEach(genre => {
                if (genre.toUpperCase().indexOf(genreToBeSearched.toUpperCase()) !== -1) {
                    found = true;
                }
            });
            if (found === true) {
                return game;
            }
        })
    }
    
    const [inputs, setInputs] = useState([
        {
            id: "platform",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform,
            placeholder: "PC..",
        },
        {
            id: "genre",
            value: "",
            label: "Genre",
            filter: filterGamesByGenre,
            placeholder: "Avontuur..",
        },
    ]);

    const onInputChange = (e) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === e.target.id) {
                input.value = e.target.value;
            }
            return input
        });
        setInputs(copy)

        let result = games
        inputs.forEach(input => {
            result = input.filter(input.value, result)
            setGames(result)
        });
    }

    const inputsToBeRendered = inputs.map(input => {
        return <div key={input.id} className="dashboard__inputContainer">
            <label htmlFor={input.id} className="dashboard__label">{input.label} </label>
            <input onChange={onInputChange} id={input.id} type="text" className="dashboard__input" value={input.value} placeholder={input.placeholder} />
        </div>
    })

    const onCardClicked = (e) => {

        const clickedItem = parseInt(e.currentTarget.id)
        setFeaturedGame(clickedItem)
    }

    let gamesSearch = games.map(gameObject => {
        if (gameObject.added === true) {
            return <div onClick={onCardClicked} id={gameObject.id} key={gameObject.id} className="dashboard__item"><img src={gameObject.img} alt="" /></div>
        }
        return null;
    });

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleDescChange = (event) => {
        setUpdatedDesc(event.target.value);
    };

    const handleUpdateClick = (gameObject) => {
        // Find the index of the game object in the games array
        const gameIndex = games.findIndex((game) => game.id === gameObject.id);

        // Create a new copy of the games array
        const updatedGames = [...games];

        // Update the description of the game object
        updatedGames[gameIndex].desc = updatedDesc;

        // Update the state with the new copy of the games array
        setGames(updatedGames);
        setEditMode(false);
    };

    let findFeaturedGame = games.map(gameObject => {
        if (featuredGame === gameObject.id) {

            return (
                <>
                    <div className="featured__image-container" key={gameObject.id}>
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
                        {editMode ? (
                            <textarea
                                className="details__desc"
                                value={updatedDesc}
                                onChange={handleDescChange}
                            />
                        ) : (<p className="details__desc">{gameObject.desc}</p>)}
                        <div className="details__buttons">
                            <button className="cta" onClick={toggleEditMode}> {editMode ? 'Terug' : 'Bewerk'} </button>
                            {editMode && (<button className="cta" onClick={() => handleUpdateClick(gameObject)}>Opslaan</button>)}
                        </div>
                    </div>
                </>
            );
        }
        else {
            return null;
        }
    });

    let url = "https://samedpolat.nl/collezione/#/dashboard";

    return (
        <>
            <Navbar loggedIn={loggedIn} />
            <section className="dashboard">
                <div className="dashboard__wrapper">
                    <div className="dashboard__filters">
                        {inputsToBeRendered}
                    </div>
                    <div className="dashboard__container">
                        <div className="dashboard__featured">
                            {findFeaturedGame}
                        </div>
                        <div className="dashboard__items">
                            <h1 className="items__title">Jouw collectie</h1>
                            <div className="items__container">
                                {gamesSearch}
                            </div>
                            <Link className="items__button cta" to="/Explore"><i className="fa-solid fa-plus"></i> Voeg games</Link>
                            <div className="items__share">
                                <TwitterButton className="items__twit" url={url}><i class="fa-brands fa-square-twitter"></i>Deel op Twitter</TwitterButton>
                                <FacebookButton className="items__face" url={url}><i class="fa-brands fa-square-facebook"></i>Deel op Facebook</FacebookButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard;