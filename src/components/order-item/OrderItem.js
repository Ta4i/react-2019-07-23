import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { deleteDish } from "../../store/ac";

class OrderItem extends Component {
  render() {
    const { dish, id } = this.props;
    return (
      <div>
        <span style={{ margin: "10px" }}>{dish.name}</span>
        <span style={{ margin: "10px" }}>{`£` + dish.price}</span>
        <span style={{ margin: "10px" }}>{dish.num}</span>
        <span style={{ margin: "10px" }}>{`£` + dish.num * dish.price}</span>

        <Button onClick={this.delDish}>delete</Button>
      </div>
    );
  }

  delDish = () => {
    this.props.delete(this.props.id);
  };
}

const mapStateToProps = state => ({
  //dish: state.cart
});

const mapDispatchToProps = {
  delete: deleteDish
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItem);
