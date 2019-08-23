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
import {Provider as I18nProvider} from '../../contexts/i18n'

class App extends Component {
  state = {
    userName: '',
    lang: 'en',
  }

  componentDidMount() {
    if (this.props.fetchData) {
      this.props.fetchData()
    }
  }

  render() {
    const {userName, lang} = this.state
    return (
      <I18nProvider value={lang}>
        <AuthProvider value={{userName}}>
          <Layout>
            <Header lang={lang} setLang={this.setLang} />
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
                  component={RestaurantsMapPage}
                />
                <Route
                  path={'/restaurants-map'}
                  component={RestaurantsMapPage}
                />
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
      </I18nProvider>
    )
  }

  setUserName = userName => this.setState({userName})

  setLang = lang => this.setState({lang})
}

export default App
