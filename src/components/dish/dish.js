import React from "react";
import { Card, Button } from "antd";
import { useCounter } from "../../custom-hooks/use-counter";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <Card
      data-autoid={`DISH_${props.id}`}
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span data-autoid="DISH_COUNT" style={{ margin: "0 12px" }}>
            {amount}
          </span>
          <Button.Group>
            <Button
              onClick={decrease}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid="DISH_REMOVE"
            />
            <Button
              onClick={increase}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid="DISH_ADD"
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

export default Dish;
