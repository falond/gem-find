import React from "react";
import "./GemCheckBoxs.css";
import gems from "../../gems.json";

class GemCheckBoxs extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {value: "select"};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	  this.setState({value: event.target.id});
	}
  
	handleSubmit(event) {
	  alert('Your favorite flavor is: ' + this.state.value);
	  event.preventDefault();
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
			<select className="form-control form-control-lg" value={this.state.value} onChange={this.handleChange}>
			  <option value="hello">Protection</option>
			  <option value={gems.id}>Luck</option>
			  <option value={gems.id}>Communication</option>
			  <option value={gems.id}>Love</option>
			  <option value={gems.id}>Friendship</option>
			  <option value={gems.id}>Forgiveness</option>
			  <option value={gems.id}>Clarity</option>
			  <option value={gems.id}>Courage</option>
			</select>
		  </label>
		  <input class="btn btn-primary btn-sm" id="submit" type="submit" value="Submit" />
		</form>
		</div>
		</div>
	  );
	}
  }
export default GemCheckBoxs;