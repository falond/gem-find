import React from "react";
import "./GemSearch.css";

const GemSearch = () =>
<div className="container">
<hr className="featurette-divider" />
<div class="container">

  <h1>Select some healing properties</h1>
  <p id="p1">Once your select some healing properties click submit to see your results</p>

<hr className="featurette-divider" />
  <div class="container">

  <form id="center">
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Love
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Protection
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Communication
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Luck
  </label>

  <br />


  
    <div class="form-group">
		<button class="btn btn-primary " name="submit" type="submit">Submit</button>
	</div>
  </form>
</div>
</div>














      </div>

export default GemSearch;