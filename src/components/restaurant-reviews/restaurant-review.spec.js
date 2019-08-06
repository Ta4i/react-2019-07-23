import React from 'react'
import {mount} from 'enzyme'
import RestaurantReviews from './restaurant-reviews'
import {restaurants} from '../../fixtures'

const restaurant = restaurants[0]

describe('Restaurant Reviews', function() {
  it('should show all given reviews', function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurant} />)
    expect(wrapper.find('li[data-autoid="REVIEW"]').length).toEqual(2)
  })
})
