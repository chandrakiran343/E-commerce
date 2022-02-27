import React from "react";
//npm install gh-pages — save-dev
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css'
import KartScreen from './components/KartScreen'
import MainPage from "./components/mainPage";
import OrderHistory from "./components/OrderHistory"
import CategoryView from "./components/CategoryView";
// install react-router-dom with "npm i react-router-dom"
import Spinner from "./components/spinner"
import Anime from './components/anime'
import Book from "./components/book"

function App() {
  

  return (
   <Router>
    <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/OrderHistory' element={<OrderHistory />} />
    <Route path='/Category/*' element={<CategoryView />} />
    <Route path="/your-kart" element={<KartScreen />} />
    <Route path='/book/*' element={<Book />} />
    </Routes>
   </Router>
  );
}

export default App;
