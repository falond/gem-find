import React from "react";
import "./GemCheckBoxs.css";
import gems from "../../gems.json";
import Protection from "../Protection";
import Luck from "../Luck";
import Love from "../Love";
import Friendship from "../Friendship";
import Communication from "../Communication";
import Clarity from "../Clarity";
import Courage from "../Courage";
import Wrapper from "../Wrapper";

class GemCheckBoxs extends React.Component {
	constructor(props){
    super(props);
    this.state={
			catType: '',
			gems
    }
 }

 changeModel(){
    var ele = document.getElementById('car_type').value;
    this.setState({catType: ele});      
 }

 _populateModels(){

   var protection = [ <option value="Crystal Quartz">Crystal Quartz</option>,
											<option value="Turquoise">Moonstone</option>,
											<option value="Oynx">Moonstone</option>,
							        <option value="Amethyst">Blue Topaz</option>];
   var luck = [ <option value = 'Moonstone'>Moonstone</option>,
                <option value='Turquoise'>Turquoise</option>];
   var communication = [ <option value = 'Blue Topaz'>Blue Topaz</option>,
                         <option value='Amazonite'>Amazonite</option>];
	 var love = [ <option value = 'Turquoise'>Turquoise</option>,
								<option value='Moonstone'>Moonstone</option>,
								<option value='Ruby'>Ruby</option>,
							  <option value = 'Rose Quartz'>Rose Quartz</option>];
	 var friendship = [ <option value = 'Tourquoise'>Tourquoise</option>,
                      <option value='Rose Quartz'>Rose Quartz</option>,
							        <option value = 'Moonstone'>Moonstone</option>];
	 var clarity = [ <option value = 'Amethyst'>Amethyst</option>,
                   <option value='Crystal Quartz'>Crystal Quartz</option>,
							     <option value = 'Amazonite'>Amazonite</option>];
	 var courage = [ <option value = 'Ruby'>Ruby</option>,
                   <option value='Citrine'>Citrine</option>,
                   <option value = 'Turquoise'>Turquoise</option>];

   switch(this.state.catType){
    case 'protection':
					return <Protection />;
    case 'luck':
          return <Luck />;
    case 'communication':
					return <Communication />;
		case 'love':
					return <Love />;
		case 'friendship':
					return <Friendship />;
		case 'clarity':
					return <Clarity />;
		case 'courage':
          return <Courage />
						;
  }
}

render(){
    return(
			<div className="container">
		<hr className="featurette-divider" />
		<div className="container">
		<h1>Select A Healing Property</h1>
        <p id="p1">Once your select a healing property your results will show</p>
        <br />
                      <form id="select" action="#" method="get" className="form-horizontal">
                                <div className="control-group">
                                    <label className="control-label"></label>
                                    <div className="controls" >
																		
                                      <select className="form-control form-control-lg" id ="car_type" onChange = {this.changeModel.bind(this)}>
																			<option value ="">Select From The Drop Down</option>
                                        <option value ="luck">LUCK</option>
                                        <option value ="love">LOVE</option>
																				<option value ="clarity">CLARITY</option>
																				<option value ="courage">COURAGE</option>
																				<option value ="protection">PROTECTION</option>
																				<option value ="friendship">FRIENDSHIP</option>
																				<option value ="communication">COMMUNICATION</option>

																				
                                      </select>
                                    </div>
                                </div>
                      </form>
											{this._populateModels()}
                    </div>
                </div>

     )
  }
}
export default GemCheckBoxs;