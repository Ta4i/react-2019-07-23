import React from "react";
import { Card, Button } from "antd";
import { useCounter } from "../../custom-hooks/use-counter";

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span data-autoid="CURRENT_AMOUNT_VALUE" style={{ margin: "0 12px" }}>
            {amount}
          </span>
          <Button.Group>
            <Button
              data-autoid={`BUTTON_DECREASE_${props.id}`}
              onClick={decrease}
              type="primary"
              shape="circle"
              icon="minus"
            />
            <Button
              data-autoid={`BUTTON_INCREASE_${props.id}`}
              onClick={increase}
              type="primary"
              shape="circle"
              icon="plus"
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
