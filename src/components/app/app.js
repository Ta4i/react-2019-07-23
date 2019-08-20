import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import {Route, Switch} from 'react-router-dom'
import RestaurantListPage from '../routes/restaurant-list-page'
import RestaurantsMapPage from '../routes/restaurants-map-page'
import RestaurantMenuPage from '../routes/restaurant-menu-page'
import Order from '../routes/order'
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
              children={params => {
                return <RestaurantListPage />
              }}
            />
            <Route
              path={'/restaurant-menu/:id'}
              children={params => {
                return <RestaurantMenuPage {...params} />
              }}
            />
            <Route
              path={'/restaurants-map/:id'}
              component={RestaurantsMapPage}
            />
            <Route path={'/restaurants-map'} component={RestaurantsMapPage} />
            <Route path={'/order'} component={Order} />
            <Route path={'/order-complete'} component={OrderComplete} />
            <Route path={'/'} render={() => <h3>Page found</h3>} />
          </Switch>
        </main>
      </Layout>
    )
  }
}

export default App
