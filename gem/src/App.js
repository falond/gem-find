import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";

const App = () =>
<Router>
  <div>
    <NavBar />
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Calendar} />
    </Wrapper>
    <Footer />
  </div>
</Router>;

export default App;