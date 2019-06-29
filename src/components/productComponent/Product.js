import React, { Component } from "react";
import ActivityCard from "../activityCard/ActivityCard";
import ProductTable from "./ProductTable";
import Blog from "./Blog"

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <ProductTable/>
        <Blog/>
      </div>
    )
  }
}

export default Product;
