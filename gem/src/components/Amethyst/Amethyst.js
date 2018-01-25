import React from "react";
import "./Amethyst.css";



const Amethyst = (props) => (



  <div className="card">
  <div className="img-container">
  <div className="thumbnail">
    <img id="img" alt="" src="https://images-na.ssl-images-amazon.com/images/I/71YPRMxUpOL._SL1200_.jpg" />
  </div>
  <div className="caption">
  <h3>Amethyst</h3>
  <p><b>Clarity of thought, Relief from grief, Protection, Wisdom</b></p>
  <p>Amethyst is a very powerful crystal for healing. It is know to calm and bring clarity to the mind, to relieve stress, sooth sadness, anger and anxiety and balance mood swings. It helps us to focus and stimulates motivation, concentration and memory. Amethyst activates our intuitive and psychic abilities, aids in meditation and is said to attract justice.</p>
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




export default Amethyst;