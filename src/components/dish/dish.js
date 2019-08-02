import React from "react"
import { Card, Button } from "antd"
import {useCounter} from '../../custom-hooks/use-counter'

function Dish(props) {
  const [amount, decrease, increase] = useCounter(0);
  return (
    <Card
      bordered
      actions={[
        `£${props.price}`,
        <>
          <span
            style={{ margin: "0 12px" }}
            data-autoid={`DISH_AMOUNT_${props.id}`}
          >{amount}</span>
          <Button.Group>
            <Button
              onClick={decrease}
              type="primary"
              shape="circle"
              icon="minus"
              data-autoid={`REMOVE_DISH_${props.id}`}
            />
            <Button
              onClick={increase}
              type="primary"
              shape="circle"
              icon="plus"
              data-autoid={`ADD_DISH_${props.id}`}
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
