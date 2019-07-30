import React, { Component } from "react"
import { Layout } from "antd"
import './app.css';
import Header from '../header'
import RestaurantList from "../restaurant-list"

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <main role="main">
          <RestaurantList restaurants={this.props.restaurants} />
        </main>
      </Layout>
    );
  }
}

export default App
