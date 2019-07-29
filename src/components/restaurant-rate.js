import React, { Component } from 'react';
import Rate from 'antd/es/rate';

class RestaurantRate extends Component {
	render() {
		const ratingValues = this.props.reviews.map(review => review.rating)
		const rateAverage = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length
	
		return (
			<>
				<Rate allowHalf defaultValue={rateAverage} disabled />
				{rateAverage ? <span className="ant-rate-text">{rateAverage.toFixed(2)}</span> : ''}
			</>
		);
	}
}

export default RestaurantRate;