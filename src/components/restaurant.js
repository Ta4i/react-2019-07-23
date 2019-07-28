import React, {PureComponent} from 'react'
import RestaurantReviews from './restaurant-reviews'
import Button from 'antd/es/button';
import Rate from 'antd/es/rate';

class Restaurant extends PureComponent {
  render() {
    const {isOpen, toggleOpen, restaurant} = this.props
    const {
      id,
      image,
      name,
      menu,
      reviews,
    } = restaurant;
    const ratingValues = reviews.map(review => review.rating)
    const rateAverage = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length

    return (
      <li>
        <img
          src={image}
          width={64}
          height={64}
          alt={name}
        />
        <Button
          type='primary'
          onClick={() => toggleOpen(id)}
        >
          {isOpen ? 'Close' : 'Open'}
        </Button>
        {
          isOpen ?
            (
              <>
                <h2>{name}</h2>
                <div>Menu items: {menu.length}</div>
                <RestaurantReviews
                  restaurant={restaurant}
                />
                <Rate allowHalf defaultValue={rateAverage} disabled />
                {rateAverage ? <span className="ant-rate-text">{rateAverage.toFixed(2)}</span> : ''}
              </>
            ) :
            null
        }
      </li>
    )
  }
}

export default Restaurant
