import "./backlog.scss"

import React, { useLayoutEffect, useState } from 'react';

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import gamesFromData from "../../data/games";

const Backlog = ({addGameToCollection, loggedIn, setLoggedIn}) => {

    const [games, setGames] = useState([]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setLoggedIn(true);
    });

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

    let counter = 0;
    let gamesToBeRendered = games.map(gameObject => {
        if(counter < 1){
            counter++;
            console.log(counter)
            return <div className="backlog__item" onClick={addGameToCollection} key={gameObject.id} id={gameObject.id}><img src={gameObject.img} alt="game"/></div>
        }
    })

    return(
        <>
            <Navbar loggedIn={loggedIn}/>
            <section className="backlog">
                <div className="backlog__wrapper">
                    <form  onSubmit={(event) => event.preventDefault()} className="backlog__filters">
                        {inputsToBeRendered}
                        <button className="cta" onClick={submit}>Zoek</button>
                    </form>
                    <div className="backlog__resultsContainer">
                        <h1 className="backlog__resultsTitle">Resultaten:</h1>
                        <div className="backlog__results">
                            {gamesToBeRendered}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Backlog;