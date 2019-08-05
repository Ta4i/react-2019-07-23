import React from "react";
import { useDispatch } from "react-redux";
import { deleteDish } from "../../store/ac";

function DishOrder(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const { name, price, count } = props.data;
  return (
    <>
      <h3 type="primary">{name}</h3>
      <h4 type="primary">count {count}</h4>
      <h4 type="primary">price {price * count}</h4>
      <button onClick={() => dispatch(deleteDish(id, name, price))}>
        Удалит
      </button>
    </>
  );
}

export default DishOrder;
