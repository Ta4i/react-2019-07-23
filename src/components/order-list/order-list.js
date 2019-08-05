import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Icon, Typography } from "antd";
import PropTypes from "prop-types";
import { deleteDishFromOrder } from "../../store/ac";

const style = {
  row: { marginTop: 6, marginBottom: 6 }
};

const { Title } = Typography;

function OrderList(props) {
  const result = props.order.map(({ name, amount, price, id }, key) => {
    return (
      <Row gutter={24} key={id} style={style.row}>
        <Col className="gutter-row" span={6}>
          <Title level={2}>{name}</Title>
        </Col>
        <Col className="gutter-row" span={6}>
          <Title level={3}>{amount}</Title>
        </Col>
        <Col className="gutter-row" span={6}>
          <Title level={3}>£{price}</Title>
        </Col>
        <Col className="gutter-row" span={5}>
          <Button type="danger" size="large" onClick={handleClick(props, id)}>
            <Icon type="delete" />
            Удалить позицию
          </Button>
        </Col>
      </Row>
    );
  });

  return (
    <>
      <Row gutter={24} style={style.row}>
        <Col className="gutter-row" span={6}>
          <Title level={3}>Name:</Title>
        </Col>
        <Col className="gutter-row" span={6}>
          <Title level={2}>Amount:</Title>
        </Col>
        <Col className="gutter-row" span={6}>
          <Title level={2}>Price</Title>
        </Col>
      </Row>
      {result}
      <Row gutter={24} style={style.row}>
        <Col className="gutter-row" span={6} offset={6}>
          <Title level={2}>Total price:</Title>
        </Col>
        <Col className="gutter-row" span={6}>
          <Title level={2}>£{props.price}</Title>
        </Col>
      </Row>
    </>
  );
}

let handleClick = (props, id) => () => {
  props.dispatchDeleteDishFromOrder(id);
};

const mapStateToProps = state => {
  const menu = state.restaurants
    .reduce((prev, cur) => prev.concat(cur.menu), [])
    .reduce((prev, cur) => {
      return {
        ...prev,
        [cur.id]: cur
      };
    }, {});
  let totalPrice = 0;
  const result = Object.keys(state.order).map(item => {
    const sumPrice = menu[item].price * state.order[item];
    totalPrice += sumPrice;
    return {
      id: item,
      name: menu[item].name,
      price: sumPrice,
      amount: state.order[item]
    };
  });
  return {
    order: result,
    price: totalPrice
  };
};

const mapDispatchToProps = {
  dispatchDeleteDishFromOrder: deleteDishFromOrder
};

OrderList.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amount: PropTypes.number,
      price: PropTypes.number
    })
  ).isRequired,
  price: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
