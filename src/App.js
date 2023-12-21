import React from "react";
import Box from "./components/Box";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar } from "react-bootstrap";
function App() {
  return(
   <Router>
    <HeaderBar/>
      <Routes>
        <Route path="/" element = {<Box/>}/>

        
      </Routes>
   </Router>
  );
}

export default App;
