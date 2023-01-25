import "./explore.scss"

import React, { useEffect, useLayoutEffect, useState } from 'react';

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import gamesFromData from "../../data/games";

const Explore = ({ addGameToCollection, loggedIn, setLoggedIn }) => {

    const [games, setGames] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [clickedGame, setClickedGame] = useState();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        setLoggedIn(true);
        setGames(gamesFromData);
    }, [setLoggedIn, loggedIn]);

    const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
        return toBeSearchedArray.filter(game => {
            if (game.name.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
                return game;
            }
            return null;
        });
    }

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

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Titel",
            filter: filterGamesByTitle,
            placeholder: "Fortnite..",
        },
        {
            id: "platform",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform,
            placeholder: "PS4..",
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

        let result = gamesFromData
        inputs.forEach(input => {
            result = input.filter(input.value, result)
            setGames(result)
        });
    }

    const handleGameClick = (id) => {
        setIsOpen(true)
        setClickedGame(id);
    };

    const inputsToBeRendered = inputs.map(input => {
        return <div key={input.id} className="explore__inputContainer">
            <label htmlFor={input.id} className="explore__label">{input.label}</label>
            <input onChange={onInputChange} id={input.id} type="text" className="explore__input" value={input.value} placeholder={input.placeholder} />
        </div>
    })

    let gamesToBeRendered = games.map(gameObject => {
        return  <div className="explore__item--wrapper">
                    <div className="explore__image" onClick={() => handleGameClick(gameObject.id)} key={gameObject.id} id={gameObject.id}><img src={gameObject.img} alt="game" /></div>
                    <p className="explore__item--title">{gameObject.name}</p>
                </div>
    })

    return (
        <>
            <Navbar loggedIn={loggedIn} />
            <section className="explore">
                <div className="explore__wrapper">
                    {isOpen && (
                        games.map(openedGame => {
                            if (clickedGame === openedGame.id) {
                                return <div className="explore__opened" key={openedGame.id} id={openedGame.id}>
                                            <i onClick={() => setIsOpen(false)} class="fa-solid fa-xmark explore__close"></i>
                                            <img src={openedGame.img} alt="game" />
                                            <div className="explore__opened--details">
                                                <h1 className="details__title">{openedGame.name}</h1>
                                                <div className="wrapper">
                                                    <p className="details__date"><span className="details__bold">Uitgebracht:</span> {openedGame.date}</p>
                                                    <p className="details__genre"><span className="details__bold">Genre:</span> {openedGame.genre}</p>
                                                    <p className="details__platforms"><span className="details__bold">Platforms:</span> {openedGame.platforms}</p>
                                                </div>
                                                <p className="details__desc">{openedGame.desc}</p>
                                                <button className="cta" id={openedGame.id} onClick={addGameToCollection}>Voeg toe aan collectie</button>
                                            </div>
                                        </div>
                            }
                            return null
                        })
                    )}
                    <form onSubmit={(event) => event.preventDefault()} className="explore__filters">
                        {inputsToBeRendered}
                    </form>
                    <div className="explore__resultsContainer">
                        <h1 className="explore__resultsTitle">Resultaten:</h1>
                        <div className="explore__results">
                            {gamesToBeRendered}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Explore;