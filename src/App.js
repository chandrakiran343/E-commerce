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
import CategoryView from "./components/CategoryView";
// install react-router-dom with "npm i react-router-dom"
import Spinner from "./components/spinner"


function App() {
  

  
  return (
   <Router >
    <Routes>
    <Route path="/test" element={<CategoryView />} />
    <Route path="/test2" element={<Spinner />} />
    <Route path='/' element={<MainPage />} />
    <Route path='/OrderHistory' element={<OrderHistory />} />
    <Route path='/Category/*' element={<CategoryView />} />
    </Routes>
   </Router>
  );
}

export default App;
