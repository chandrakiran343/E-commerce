import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css'
import MainPage from "./components/mainPage";
import OrderHistory from "./components/OrderHistory"
// install react-router-dom with "npm i react-router-dom"


function App() {

  
  return (
   <Router >
    <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/OrderHistory' element={<OrderHistory />} />
    </Routes>
   </Router>
  );
}

export default App;
