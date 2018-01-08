import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import StoneLandingP from "./pages/StoneLandingP";
import Calendar from "./pages/Calendar";

const App = () =>
<Router>
  <div>
    <NavBar />
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/moon-calendar" component={Calendar} />
      <Route exact path="/popular-stones" component={StoneLandingP} />
    </Wrapper>
    <Footer />
  </div>
</Router>;

export default App;