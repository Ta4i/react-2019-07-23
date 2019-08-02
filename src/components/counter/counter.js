import React, { Component } from "react";
import { Button } from "antd";

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{ color: "white" }}>{this.props.countFromStore}</span>
        <Button.Group>
          <Button onClick={this.decrease} type="primary" icon="minus" />
          <Button onClick={this.increase} type="primary" icon="plus" />
        </Button.Group>
      </div>
    );
  }
  decrease = () => {
  };
  increase = () => {
  };
}

export default Counter
