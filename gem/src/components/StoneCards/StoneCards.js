import React from "react";
import "./StoneCards.css";



const StoneCards = () =>

<div className="container">
  <hr/>
    <div className="container">
<div className="card">
<div className="img-container">
  <div className="thumbnail">
  <img alt={props.name} src={props.image} />
    <div className="caption">
      <h3></h3> {props.name}
      <p><b></b></p> {props.healing}
      <p></p>{props.description}
      <p><a href="/popular-stones" className="btn btn-primary" role="button">Read More!</a></p>
    </div>
  </div>
</div>
</div>
</div>
</div>








export default StoneCards;