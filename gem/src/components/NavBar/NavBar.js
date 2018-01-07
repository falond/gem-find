import React from "react";
import "./NavBar.css";



const NavBar = () =>

<div className="navbar navbar-inverse navbar-fixed-top">
<div className="container">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <a className="navbar-brand" href="/">Gem Find</a>
  </div>
  <div className="collapse navbar-collapse">
    <ul className="nav navbar-nav">
      <li><a href="/moon-calendar">Full Moon Calendar</a></li>
      <li><a href="#">Most Popular Stones</a></li>
      <li><a href="#">Care Instructions</a></li>
    </ul>
  </div>
</div>
</div>

export default NavBar;