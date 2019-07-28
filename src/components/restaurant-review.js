import React, { Component } from 'react';

class RestaurantReview extends Component {
	render() {
		const {review} = this.props

		return (
			<article>
				<h4>{review.user}</h4>
				<p>{review.text}</p>
			</article>
		);
	}
}

export default RestaurantReview;