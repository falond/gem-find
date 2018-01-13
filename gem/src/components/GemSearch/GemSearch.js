import React from "react";
import "./GemSearch.css";

const GemSearch = () =>
<div className="container">
<hr className="featurette-divider" />
<div class="container">

  <h1>Select Some Healing Properties</h1>
  <p id="p1">Once your select some healing properties click submit to see your results</p>

<hr className="featurette-divider" />

  <div class="container">
  <div class="row">

  <form id="center">
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Protection
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Luck
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Communication
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Wisdom
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Love
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Friendship
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Self Love
  </label>
  </form>
  </div>

  <div class="row">

  <form id="center">
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Optimism
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Trust
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Forgiveness
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Healing
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Energy
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Patience
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Clarity
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" value="" />Courage
  </label>
  </form>
  </div>

  <br />

    <div class="form-group">
		<button class="btn btn-primary " name="submit" type="submit">Submit</button>
	</div>

</div>
</div>














      </div>

export default GemSearch;