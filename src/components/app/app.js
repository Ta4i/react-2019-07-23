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
import RestaurantMenuPage from '../routes/restaurant-menu-page'
import OrderMenuPage from '../routes/order'
import OrderSuccessMenuPage from '../routes/order-success'

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
              path={'/restaurant-menu/:id'}
              render={params => {
                console.log('params', params)
                return <RestaurantMenuPage {...params} />
              }}
            />
            <Route
              path={'/restaurants-map'}
              exact
              render={params => <RestaurantsMapPage />}
            />
            <Route
              path={'/restaurants-map/:id'}
              render={params => {
                console.log('paramsappjs', params)
                return <RestaurantsMapPage {...params} />
              }}
            />
            <Route
              path={'/order'}
              render={params => {
                console.log('paramsappjs', params)
                return <OrderMenuPage {...params} />
              }}
            />
            <Route
              path={'/order-success'}
              render={params => {
                console.log('paramsappjs', params)
                return <OrderSuccessMenuPage {...params} />
              }}
            />
            <Route path={'/'} render={() => <h3>Page found</h3>} />
          </Switch>
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default App
