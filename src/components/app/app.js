import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import OrderForm from '../order-form'
import Counter from '../counter'
import OrderList from '../order-list'
import {Route} from 'react-router-dom'
import RestaurantListPage from '../routes/restaurant-list-page'
import RestaurantsMapPage from '../routes/restaurants-map-page'
import RestaurantMenuPage from '../routes/restaurant-menu-page'

class App extends Component {
  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData()
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <main role="main">
          <Route path={'/restaurants'} component={RestaurantListPage} />
          <Route path={'/restaurant-menu/:id'} component={RestaurantMenuPage} />
          <Route
            path={'/restaurants-map'}
            render={params => <RestaurantsMapPage />}
          />
          <OrderList />
          <OrderForm />
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default App
