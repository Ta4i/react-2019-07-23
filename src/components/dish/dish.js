import React from "react";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addDish, removeDish } from "../../store/ac";

function Dish(props) {
  const { dish } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(cart);

  return (
    <Card
      bordered
      actions={[
        `£${dish.price}`,
        <>
          <span
            style={{ margin: "0 12px" }}
            data-autoid={`DISH_AMOUNT_${dish.id}`}
          >
            count:{" "}
          </span>
          <Button.Group>
            <Button
              // onClick={() => dispatch(removeDish(id))}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`REMOVE_DISH_${dish.id}`}
            />
            <Button
              onClick={() => dispatch(addDish(dish))}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`ADD_DISH_${props.id}`}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta title={dish.name} description={dish.ingredients.join(", ")} />
    </Card>
  );
}

export default Dish;
