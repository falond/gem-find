import React from "react";
import "./RoseQuartz.css";



const RoseQuartz = (props) => (



  <div className="card">
  <div className="img-container">
  <div className="thumbnail">
    <img id="img" alt="" src="http://www.crystalage.com/img/products/rose-quartz-generator-point-55mm_1.jpg" />
  </div>
  <div className="caption">
  <h3>RoseQuartz</h3>
  <p><b>Love: Romantic love, Self love, Platonic love, Unconditional love, Deep care, Compassion, Happiness, Forgiveness, Friendship</b></p>
  <p>Rose Quartz acts healing and strengthening for the physical heart and stimulates the circulatory system, increasing fertility and protecting against radiation. As a nice bonus, Rose Quartz is said to reduce wrinkles. It is also known to be a protective stone during pregnancy, protecting from miscarriage.</p>
  <p><a href="/popular-stones" className="btn btn-primary" role="button">Read More!</a></p>
  </div>
</div>
</div>



);

// <div className="container">
//   <hr/>
//     <div className="container">
// <div className="card">
// <div className="img-container">

//   <div className="thumbnail">
//   <img alt="" src={props.image} />
//     <div className="caption">
//       <h3>{props.name}</h3>
//       <p><b>{props.healing}</b></p>
//       <p>{props.description}</p>
//       <p><a href="/popular-stones" className="btn btn-primary" role="button">Read More!</a></p>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>

// );




export default RoseQuartz;