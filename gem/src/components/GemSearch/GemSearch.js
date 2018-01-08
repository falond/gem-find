import React from "react";
import "./GemSearch.css";

const GemSearch = () =>
<div className="container">
<hr className="featurette-divider" />
<div class="container">

  <h1>Select some healing properties</h1>
  <p>Once your select some healing properties click submit to see your results</p>
  <div class="container">
  <form class="group">
    <div class="checkbox">
      <label><input type="checkbox" value="" />Protection</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" value="" />Luck</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" value="" />Communication</label>
    </div>
    <div class="form-group">
		<button class="btn btn-primary " name="submit" type="submit">Submit</button>
	</div>
  </form>
</div>
</div>















      </div>

export default GemSearch;