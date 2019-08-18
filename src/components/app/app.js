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
import OrderCompletePage from '../routes/order-complete-page'

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
                console.log(params)
                return <RestaurantMenuPage {...params} />
              }}
            />
            <Route
              path={'/order'}
              render={params => {
                console.log(params)
                return <OrderPage />
              }}
            />
            <Route
              path={'/order-complete'}
              render={params => {
                console.log(params)
                return <OrderCompletePage />
              }}
            />
            <Route
              path={'/restaurants-map'}
              render={params => (
                <Switch>
                  <Route
                    path={'/restaurants-map/:id'}
                    render={params => {
                      return (
                        <>
                          <h2>Find our restaurant</h2>
                          <RestaurantsMapPage {...params} />
                        </>
                      )
                    }}
                  />
                  <Route
                    path={'/restaurants-map'}
                    render={params => {
                      return <RestaurantsMapPage {...params} />
                    }}
                  />
                </Switch>
              )}
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
