import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/home/home"
import Login from "./components/login/login"
import Dashboard from "./components/dashboard/dashboard"

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
