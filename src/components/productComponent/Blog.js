import React, { Component } from "react";
import ActivityCard from "../activityCard/ActivityCard";
import ProductTable from "./ProductTable";

class Blog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
            <img></img>
            <h3>Title</h3>
            <h5>adv</h5>
        </div>
      </div>
    )
  }
}

export default Blog;
