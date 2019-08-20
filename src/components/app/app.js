import React, {Component} from 'react'
import {Layout} from 'antd'
import './app.css'
import Header from '../header'
import {Redirect, Route, Switch} from 'react-router-dom'
import RestaurantListPage from '../routes/restaurant-list-page'
import RestaurantsMapPage from '../routes/restaurants-map-page'
import RestaurantMenuPage from '../routes/restaurant-menu-page'
import Order from '../routes/order'
import OrderComplete from '../routes/order-complete'
import ErrorPage from '../routes/error'
import {Provider as AuthProvider} from '../../contexts/auth'

class App extends Component {
  state = {
    userName: '',
  }

  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData()
    }
  }

  render() {
    return (
      <AuthProvider
        value={{
          userName: this.state.userName,
        }}
      >
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
              <Route
                path={'/order'}
                render={() => <Order setUserName={this.setUserName} />}
              />
              <Route path={'/order-complete'} component={OrderComplete} />
              <Route path={'/error'} render={() => <ErrorPage />} />
              <Redirect from={'/'} exact to={'/restaurants'} />
            </Switch>
          </main>
        </Layout>
      </AuthProvider>
    )
  }

  setUserName = userName => this.setState({userName})
}

export default App
