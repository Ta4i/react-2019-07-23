export default class ReviewModel {
  constructor({userId, restaurantId, reviewText, rate}) {
    const uuidv1 = require('uuid/v1')

    this.id = uuidv1()
    this.restaurantId = restaurantId
    this.text = reviewText
    this.rate = rate
    this.userId = userId
  }

  getId() {
    return this.id
  }

  getUserId() {
    return this.userId
  }

  getRate() {
    return this.rate
  }

  getText() {
    return this.text
  }

  getRestaurantId() {
    return this.restaurantId
  }
}
