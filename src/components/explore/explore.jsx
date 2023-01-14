import "./explore.scss"

import React, { useEffect, useLayoutEffect, useState } from 'react';

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import gamesFromData from "../../data/games";

const Explore = ({addGameToCollection, loggedIn, setLoggedIn}) => {

    const [games, setGames] = useState([]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setLoggedIn(true);
    });

    const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
        return toBeSearchedArray.filter(game => {
            if(game.name.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1){
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

    useEffect(() => {
        setGames(gamesFromData);
    },[]);

    const onInputChange = (e) => {
        let copy = [...inputs];
        copy.map(input => {
            if(input.id === e.target.id){
                input.value = e.target.value;
            }
            return input
        });
        setInputs(copy)

        let result = gamesFromData
        inputs.forEach( input => {
            result = input.filter(input.value, result)
            setGames(result)
        });
    }

    const inputsToBeRendered = inputs.map(input => {
        return  <div key={input.id} className="explore__inputContainer">
                    <label htmlFor={input.id} className="explore__label">{input.label}</label>
                    <input onChange={onInputChange} id={input.id} type="text" className="explore__input" value={input.value} placeholder={input.placeholder}/>
                 </div>
    })

    let gamesToBeRendered = games.map(gameObject => {
        return <div className="explore__item" onClick={addGameToCollection} key={gameObject.id} id={gameObject.id}><img src={gameObject.img} alt="game"/></div>
    })

    return(
        <>
            <Navbar loggedIn={loggedIn}/>
            <section className="explore">
                <div className="explore__wrapper">
                    <form  onSubmit={(event) => event.preventDefault()} className="explore__filters">
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
            <Footer/>
        </>
    )
}

export default Explore;