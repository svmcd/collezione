import './App.scss';

/* import React, { useState } from 'react';
 */import {
  Routes,
  Route,
} from "react-router-dom";

import React, { useEffect, useState } from 'react';

import gamesFromData from "./data/games";

import Home from "./components/home/home"
import Login from "./components/login/login"
import Dashboard from "./components/dashboard/dashboard"
import Backlog from "./components/backlog/backlog"
import Explore from "./components/explore/explore"

function App() {

  const [games, setGames] = useState([]);
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    setGames(gamesFromData);
    setLoggedIn(false);
  }, []);

  const addGameToCollection = (e) => {
    const clickedGame = parseInt(e.currentTarget.id)
    console.log(clickedGame)

    const newState = games.find((foundGame) => {
      if(foundGame.id === clickedGame){
        console.log(foundGame.id)
        return {...foundGame, name: "a"}
      }
      return null
    })
    console.log(newState)
    setGames(newState)
  }

  return (
    <Routes>
        <Route exact path='/' element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route exact path='/Login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route exact path='/Dashboard' element={<Dashboard games={games} setGames={setGames} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route exact path='/Backlog' element={<Backlog games={games} setGames={setGames} addGameToCollection={addGameToCollection} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route exact path='/Explore' element={<Explore games={games} setGames={setGames} addGameToCollection={addGameToCollection} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
    </Routes>
  );
}

export default App;
