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

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesFromData);
  }, []);

  const addGameToCollection = (e) => {
    const clickedGame = parseInt(e.currentTarget.id)
    console.log(clickedGame)

    const updateState = games.find((foundGame) => {
      if(foundGame.id === clickedGame){
        console.log(foundGame.id)
        return {...foundGame.id, img: ""}
      }
      return null
    })
    
    setGames(updateState)
  }

  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Dashboard' element={<Dashboard games={games} setGames={setGames}/>}/>
        <Route exact path='/Backlog' element={<Backlog games={games} setGames={setGames} addGameToCollection={addGameToCollection}/>}/>
    </Routes>
  );
}

export default App;
