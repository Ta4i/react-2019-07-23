import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import Counter from '../counter'
import {Route, Switch} from 'react-router-dom'
import RestaurantListPage from '../routes/restaurant-list-page'
import RestaurantsMapPage from '../routes/restaurants-map-page'
import RestaurantMenuPage from '../routes/restaurant-menu-page'
import OrderPage from '../routes/order-page'
import OrderComplete from '../routes/order-complete'

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
                return <RestaurantListPage />
              }}
            />
            <Route
              path={'/restaurant-menu/:id'}
              render={params => {
                return <RestaurantMenuPage {...params} />
              }}
            />
            <Route
              path={'/restaurants-map/:id'}
              render={params => <RestaurantsMapPage {...params} />}
            />
            <Route
              path={'/restaurants-map'}
              render={params => <RestaurantsMapPage />}
            />
            <Route
              path={'/order-complete/:user'}
              render={params => <OrderComplete {...params} />}
            />
            <Route path={'/order'} render={params => <OrderPage />} />
            <Route path={'/'} render={() => <h3>Page found</h3>} />
          </Switch>
        </main>
        <Counter />
      </Layout>
    )
  }
}

export default App
