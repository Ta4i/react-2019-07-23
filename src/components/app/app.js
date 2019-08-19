import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import OrderForm from '../order-form'
import Counter from '../counter'
import OrderList from '../order-list'
import {Route, Switch} from 'react-router-dom'
import RestaurantListPage from '../routes/restaurant-list-page'
import RestaurantsMapPage from '../routes/restaurants-map-page'
import RestaurantMapPage from '../routes/restaurant-map-page'
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
          <Switch>
            <Route
              path={'/restaurants'}
              render={params => {
                console.log(params)
                return <RestaurantListPage />
              }}
            />
            <Route
              path={'/restaurants-map'}
              render={params => <RestaurantsMapPage />}
            />
            <Route
              path={'/restaurant-menu/:id'}
              render={params => {
                console.log(params)
                return <RestaurantMenuPage {...params} />
              }}
            />
            <Route
              path={'/restaurant-map/:id'}
              render={params => {
                return <RestaurantMapPage {...params} />
              }}
            />
            <Route path={'/'} render={() => <h3>Page found</h3>} />
          </Switch>
          <OrderList />
          <OrderForm />
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default App
