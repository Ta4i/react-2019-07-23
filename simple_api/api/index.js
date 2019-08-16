var router = require('express').Router()
var mocks = require('./mock')

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body)
  }, timeout)

router.get('/restaurants', function(req, res, next) {
  const reviews = mocks.reviews
  const restaurants = mocks.restaurants.map(restaurant => {
    const rawRating =
      reviews.reduce((acc, review) => {
        if (!restaurant.reviews.includes(review.id)) {
          return acc
        }

        return acc + review.rating
      }, 0) / restaurant.reviews.length
    const rating = Math.floor(rawRating * 2) / 2

    return {
      ...restaurant,
      rating,
    }
  })

  reply(res, restaurants)
})

router.get('/dishes', function(req, res, next) {
  var id = req.query.id
  var result = mocks.dishes
  if (id) {
    var restaurant = mocks.restaurants.find(function(r) {
      return r.id === id
    })
    if (restaurant) {
      result = restaurant.menu.map(function(dishId) {
        return mocks.dishes.find(function(dish) {
          return dish.id === dishId
        })
      })
    }
  }
  reply(res, result)
})

router.get('/reviews', function(req, res, next) {
  var id = req.query.id
  var result = mocks.reviews
  if (id) {
    var restaurant = mocks.restaurants.find(function(r) {
      return r.id === id
    })
    if (restaurant) {
      result = restaurant.reviews.map(function(reviewId) {
        return mocks.reviews.find(function(review) {
          return review.id === reviewId
        })
      })
    }
  }
  reply(res, result)
})

router.get('/users', function(req, res, next) {
  reply(res, mocks.users)
})

module.exports = router
