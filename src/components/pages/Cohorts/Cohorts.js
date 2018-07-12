import React, { Component } from 'react';

class Cohorts extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovering: false }
  }
  render() {
    return (
      <div className="pageContainer">

        These are Cohorts:

      </div>

    )
  }
}

export default Cohorts;