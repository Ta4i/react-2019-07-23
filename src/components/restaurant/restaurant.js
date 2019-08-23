import React, {PureComponent} from 'react'
import {Button, List} from 'antd'
import RestaurantReviews from '../restaurant-reviews'
import {toggleVisibility} from '../../decorators/toggle-visibility'
import AverageRating from '../average-rating'
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './restaurant.css'
import i18n from '../../decorators/i18n'

class Restaurant extends PureComponent {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
    const {isOpen, toggleOpen, toggleOpenMenu, restaurant, t} = this.props
    const {id, image, name, menu} = restaurant

    if (this.state.error) {
      return <h2>{t('not available')}</h2>
    }

    return (
      <>
        <List.Item
          actions={[
            <AverageRating id={restaurant.id} />,
            <Button type={'primary'} onClick={toggleOpen}>
              {t(isOpen ? 'hide reviews' : 'show reviews')}
            </Button>,
            <Button
              type="primary"
              onClick={() => toggleOpenMenu(id)}
              data-autoid={`OPEN_MENU_ITEM_${id}`}
            >
              <Link to={`/restaurant-menu/${id}`}>{t('go to menu')}</Link>
            </Button>,
            <Button type="primary">
              <Link to={`/restaurants-map/${id}`}>{t('show on map')}</Link>
            </Button>,
          ]}
          data-autoid="RESTAURANT_ITEM"
        >
          <List.Item.Meta
            avatar={<img src={image} width={64} height={64} alt={name} />}
            title={name}
            description={`${t('menu positions')}: ${menu.length}`}
          />
        </List.Item>
        <ReactCSSTransitionGroup
          transitionName="restaurant-visibility"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {isOpen ? <RestaurantReviews id={restaurant.id} /> : null}
        </ReactCSSTransitionGroup>
      </>
    )
  }
}

export default i18n(toggleVisibility(Restaurant))
