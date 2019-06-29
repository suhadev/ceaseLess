import React, { Component } from "react";
import ActivityCard from "../activityCard/ActivityCard";

class ActivityHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
      <div>
        <h3>Things to know for today</h3>
      </div>
        <div className="row">
          <div className="col-lg-4">
            <ActivityCard />
          </div>
          <div className="col-lg-4">
            <ActivityCard />
          </div>
          <div className="col-lg-4">
            <ActivityCard />
          </div>
        </div>


      </div>
    )
  }
}

export default ActivityHeader;
