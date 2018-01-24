import React from "react";
import "./GemCheckBoxs.css";
import gems from "../../gems.json";
import StoneCards from "../StoneCards";


class GemCheckBoxs extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			value: 'Amethyst',
			gems,
			image: ""

	};
		

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	// componentDidMount() {
	// 	fetch('../../gems.json')
			
	// 		.then(data => {
	// 			this.setState({
	// 				id: data.id,
	// 				image: data.image,
	// 				name: data.name,
	// 				healing: data.healing,
	// 				description: data.description,
	// 				protection: data.protection,
	// 				luck: data.luck,
	// 				wisdom: data.wisdom,
	// 				love: data.love,
	// 				friendship: data.friendship,
	// 				clarity: data.clarity,
	// 				forgiveness: data.forgiveness,
	// 				courage: data.courage,

	// 			});
	// 		});
	// }

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
			  <option value="Amethyst">Protection</option>
			  <option value="Ruby">Luck</option>
			  <option value="3">Communication</option>
			  <option value="3">Love</option>
			  <option value="3">Friendship</option>
			  <option value="3">Forgiveness</option>
			  <option value="3">Clarity</option>
			  <option value="3">Courage</option>
			</select>
		  </label>
		  <input className="btn btn-primary btn-sm" id="submit" type="submit" value="Submit"/>

		</form>
	
		  {this.state.gems.map(friend => (
          <StoneCards
					name={this.state.value}
          image={this.state.image}
           
          />
        ))}



		</div>
		</div>
	  );
	}
  }
export default GemCheckBoxs;