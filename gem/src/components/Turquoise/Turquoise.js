import React from "react";
import "./Turquoise.css";



const Turquoise = (props) => (


  <div className="card">
  <div className="img-container">
  <div className="thumbnail">
    <img id="img" alt="" src="http://www.jewelrywise.com/content/articles-horizontal/15.14-turquoise.jpg" />
  </div>
  <div className="caption">
  <h3>Turquoise</h3>
  <p><b>Protection, Wisdom, Positive Thoughts, Balance, Courage, Friendship, Healing, Luck, Love</b></p>
  <p>Turquoise can be a very powerful stone for protection. It increases inner calmness and eases depression, fears, exhaustion and anxiety. It is a stone for friendship and love. Turquoise has calming effects when speaking in public. It helps us to express ourselves and aids in creative problem solving. This powerful stone also stimulates our intuition and helps in meditation.</p>
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




export default Turquoise;