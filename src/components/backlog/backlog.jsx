import "./backlog.scss"

import React, { useLayoutEffect, useEffect, useState } from 'react';

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import gamesFromData from "../../data/games";

const Backlog = ({addGameToCollection, loggedIn, setLoggedIn}) => {

    const [games, setGames] = useState([]);
    const [gamesToBeRendered, setGamesToBeRendered] = useState();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        setLoggedIn(true);
        const selectedGames = games.slice(0, 10);
        if (selectedGames.length > 0) {
            const recommendedGame = selectedGames[Math.floor(Math.random() * selectedGames.length)];
            setGamesToBeRendered(
            <div className="backlog__item" key={recommendedGame.id} id={recommendedGame.id}>
                <img src={recommendedGame.img} alt="game"/>
                <div className="backlog__item--details">
                    <h1 className="details__title">{recommendedGame.name}</h1>
                    <div className="wrapper">
                        <p className="details__date"><span className="details__bold">Uitgebracht:</span> {recommendedGame.date}</p>
                        <p className="details__genre"><span className="details__bold">Genre:</span> {recommendedGame.genre}</p>
                        <p className="details__platforms"><span className="details__bold">Platforms:</span> {recommendedGame.platforms}</p>
                    </div>
                    <p className="details__desc">{recommendedGame.desc}</p>
                    <button className="cta" id={recommendedGame.id} onClick={addGameToCollection}>Voeg toe aan collectie</button>
                </div>
            </div>
            );
        }
        else setGamesToBeRendered(
            <div className="backlog__notfound">Het spel dat je zocht, hebben we helaas niet gevonden. Probeer het nog eens!</div>
        )
    }, [setLoggedIn, games, addGameToCollection]);

    const filterGamesByGenre = (nameToBeSearched, toBeSearchedArray) => {
        // eslint-disable-next-line
        return toBeSearchedArray.filter(game => {
            let found = false;
            game.genre.forEach(genre => {
                if(genre.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1){
                    found = true;
                }
            });
            if(found === true){
                return game;
            }
        });
    }
    
    const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
        // eslint-disable-next-line
        return toBeSearchedArray.filter(game => {
            let found = false;
            game.platforms.forEach(platform => {
                if(platform.toUpperCase().indexOf(platformToBeSearched.toUpperCase()) !== -1){
                    found = true;
                }
            });
            if(found === true){
                return game;
            }
        })
    } 

    const [inputs, setInputs] = useState([
        {
            id: "genre",
            value: "",
            label: "Genre",
            filter: filterGamesByGenre,
            placeholder: "Actie..",
        },
        {
            id: "platform",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform,
            placeholder: "Playstation 4..",
        },
    ]);

    const onInputChange = (e) => {
        let copy = [...inputs];
        copy.map(input => {
            if(input.id === e.target.id){
                input.value = e.target.value;
            }
            return input
        });
        setInputs(copy)
    }

    const submit = () => {
        let result = gamesFromData;
        inputs.forEach( input => {
            result = input.filter(input.value, result);
            setGames(result)
        });
    }

    const inputsToBeRendered = inputs.map(input => {
        return  <div key={input.id} className="backlog__inputContainer">
                    <label htmlFor={input.id} className="backlog__label">{input.label}</label>
                    <input onChange={onInputChange} id={input.id} type="text" className="backlog__input" value={input.value} placeholder={input.placeholder}/>
                 </div>
    })    

    return(
        <>
            <Navbar loggedIn={loggedIn}/>
            <section className="backlog">
                <div className="backlog__wrapper">
                    <div className="backlog__top">
                        <h1 className="backlog__title">Krijg een spel aanbevolen gebaseerd op de antwoorden die je hebt ingevoerd!</h1>
                    </div>
                    <div className="backlog__bottom">
                        <form  onSubmit={(event) => event.preventDefault()} className="backlog__filters">
                            {inputsToBeRendered}
                            <button className="cta" onClick={submit}>Zoek</button>
                        </form>
                        <div className="backlog__resultsContainer">
                            <div className="backlog__results">
                                {gamesToBeRendered}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Backlog;