import React, {PureComponent} from 'react'
import {Button, List} from 'antd'
import RestaurantReviews from '../restaurant-reviews'
import {toggleVisibility} from '../../decorators/toggle-visibility'
import AverageRating from '../average-rating'
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './restaurant.css'
import {Consumer as ConsumerLocal} from '../../contexts/translate'

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
    const {isOpen, toggleOpen, toggleOpenMenu, restaurant} = this.props
    const {id, image, name, menu} = restaurant

    if (this.state.error) {
      return <h2>Something went wrong</h2>
    }

    return (
      <>
        <ConsumerLocal>
          {value => (
            <List.Item
              actions={[
                <AverageRating id={restaurant.id} />,
                <Button type={'primary'} onClick={toggleOpen}>
                  {value.t.restaurant[`${isOpen ? 'hide' : 'show'}Reviews`]}
                </Button>,
                <Button
                  type="primary"
                  onClick={() => toggleOpenMenu(id)}
                  data-autoid={`OPEN_MENU_ITEM_${id}`}
                >
                  <Link to={`/restaurant-menu/${id}`}>
                    {value.t.restaurant.goToMenu}
                  </Link>
                </Button>,
                <Button type="primary">
                  <Link to={`/restaurants-map/${id}`}>
                    {value.t.restaurant.showOnMap}
                  </Link>
                </Button>,
              ]}
              data-autoid="RESTAURANT_ITEM"
            >
              <List.Item.Meta
                avatar={<img src={image} width={64} height={64} alt={name} />}
                title={name}
                description={`${value.t.restaurant.menuPositions}: ${menu.length}`}
              />
            </List.Item>
          )}
        </ConsumerLocal>
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

export default toggleVisibility(Restaurant)
