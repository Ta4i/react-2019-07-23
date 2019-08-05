import React, { Component } from "react";
import { Layout } from "antd";
import "./app.css";
import Header from "../header";
import RestaurantList from "../restaurant-list";
import Order from "../order";
import Counter from "../counter";
// import RestaurantsMap from '../restaurants-map'
import { connect } from "react-redux";
import OrderList from "../order-list/OrderList";

class App extends Component {
  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <main role="main">
          <RestaurantList restaurants={this.props.restaurants} />
          {/*<RestaurantsMap restaurants={this.props.restaurants} />*/}
          <Order />
          <OrderList />
        </main>
        <Counter />
      </Layout>
    );
  }
}

export default connect(state => ({
  restaurants: state.restaurants
}))(App);
