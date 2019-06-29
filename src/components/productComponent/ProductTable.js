import React, { Component } from "react";
import ActivityCard from "../activityCard/ActivityCard";
import axios from 'axios'

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios.get("http://192.168.1.8:3000/product/top")
      .then((res) => {

        console.log(res.data)
        this.setState({ items: res.data.products })
        console.log(this.state.items)
      })
  }
  render() {
    const tableRows = this.state.items.map((item) => {
      return <tr>
        <td><a href={item.tag.href}>{item.name}</a></td>
        <td>{item.description}</td>
        <td>{item.upvotes}</td>
        
      </tr>
    })
    return (
      <div className="row">


        <div className="row">
          <div className="col-lg-3">

          </div>
          <div className="col-lg-6">
            <table className="table table-bordered table-hover table-sm">
              <thead>
                
                <th>Product Name</th>
                <th>Description</th>
                
                <th>Upvotes</th>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </table>

          </div>

        </div>
      </div>
    )
  }
}

export default ProductTable;
