import React from "react";
import "./GemCheckBoxs.css";
import gems from "../../gems.json";
import StoneCards from "../StoneCards";
import Wrapper from "../Wrapper";


class GemCheckBoxs extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			value: 'Crystal Quartz',
			gems,
			image: ""

	};
		

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
		event.preventDefault();
	// 	const listItems = gems.map((gems) =>
	// 	<li key={gems.id}>{gems.name}</li>
	// )
	console.log(this.state.value);

	const results = this.state.gems.filter(gems => gems.name === this.state.value);
		this.setState({ value: event.target.value }, () => console.log(results));

    // alert('Your favorite flavor is: ' + this.state.value);

	}

  
	render() {
	  return (
		<div className="container">
		<hr className="featurette-divider" />
		<div className="container">
		<h1>Select A Healing Property</h1>
        <p id="p1">Once your select a healing property click submit to see your results</p>
        <br />
		<form id="select" onSubmit={this.handleSubmit}>
		  <label>
			<select className="form-control form-control-lg" value={this.state.value} onChange={this.handleChange} >
			  <option value="Crystal Quartz">Protection</option>
			  <option value="Moonstone">Luck</option>
			  <option value="Blue Topaz">Communication</option>
			  <option value="Rose Quartz">Love</option>
			  <option value="Turquoise">Friendship</option>
			  <option value="Blue Topaz">Forgiveness</option>
			  <option value="Amethyst">Clarity</option>
			  <option value="Ruby">Courage</option>
			</select>
		  </label>
		  <input className="btn btn-primary btn-sm" id="submit" type="submit" value="Submit"/>
			</form>

			<Wrapper>

	
          <StoneCards
						// key={gem.id}
						// image={gem.image}
            name={this.state.value}
            // healing={gem.healing}
						// description={gem.description}
          />
				</Wrapper>
     
	 




		</div>
		</div>
	  );
	}
  }
export default GemCheckBoxs;