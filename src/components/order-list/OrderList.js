import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { increase, decrease } from "../../store/ac";

class OrderList extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {Object.keys(cart).map(function(objectKey, index) {
          var value = cart[objectKey];
          console.log(objectKey, value);
          return (
            <span>
              {objectKey},{value}
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps
  //    mapDispatchToProps
)(OrderList);
