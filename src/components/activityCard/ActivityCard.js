import React, { Component } from "react";

class ActivityCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
          <div className="cardHeader">
             Product
          </div>
          <div className="cardBody">
                <h3 className="cardText">5</h3>
          </div>
          
      </div>
    )
  }
}

export default ActivityCard;
