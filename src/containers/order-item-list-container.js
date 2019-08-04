import { connect } from "react-redux";
import OrderItemList from "../components/order-item-list";
import { removeDishFromOrder } from "../store/ac";

const mapStateToProps = state => ({
  items: state.cart
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(removeDishFromOrder(id))
});

const OrderItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItemList);

export default OrderItemListContainer;
