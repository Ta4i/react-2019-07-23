import React from 'react'
import {mount} from 'enzyme'
import App from './app'
import {restaurants} from '../../fixtures'

describe('At starts', function() {
  it('should show all restaurants', function() {
    const wrapper = mount(<App restaurants={restaurants} />)
    expect(wrapper.find('li[data-autoid="RESTAURANT_ITEM"]').length).toEqual(4)
  })

  describe('when click on Open menu button', function() {
    it('should show menu only for one restaurant', function() {
      const wrapper = mount(<App restaurants={restaurants} />)
      const id = restaurants[0].id
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate('click')
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(1)
    })
  })

  describe('when click on Open menu button two times', function() {
    it('should close menu', function() {
      const wrapper = mount(<App restaurants={restaurants} />)
      const id = restaurants[0].id
      const openMenuButton = wrapper.find(
        `button[data-autoid="OPEN_MENU_ITEM_${id}"]`
      )

      openMenuButton.simulate('click')
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(1)

      openMenuButton.simulate('click')
      expect(
        wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length
      ).toEqual(0)
    })
  })

  describe('when click on add dish button', function() {
    it('should increase amount of dishes', function() {
      const wrapper = mount(<App restaurants={restaurants} />)
      const restaurantId = restaurants[0].id
      const dishId = restaurants[0].menu[0].id

      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${restaurantId}"]`)
        .simulate('click')

      wrapper
        .find(`button[data-autoid="ADD_DISH_${dishId}"]`)
        .simulate('click')
        .simulate('click')
        .simulate('click')

      expect(
        wrapper.find(`span[data-autoid="DISH_AMOUNT_${dishId}"]`).text()
      ).toEqual('3')
    })
  })

  describe('when click on remove dish button', function() {
    it('should decrease amount of dishes until 0', function() {
      const wrapper = mount(<App restaurants={restaurants} />)
      const restaurantId = restaurants[0].id
      const dishId = restaurants[0].menu[0].id

      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${restaurantId}"]`)
        .simulate('click')

      wrapper
        .find(`button[data-autoid="ADD_DISH_${dishId}"]`)
        .simulate('click')
        .simulate('click')
        .simulate('click')

      wrapper
        .find(`button[data-autoid="REMOVE_DISH_${dishId}"]`)
        .simulate('click')
        .simulate('click')
        .simulate('click')
        .simulate('click')
        .simulate('click')

      expect(
        wrapper.find(`span[data-autoid="DISH_AMOUNT_${dishId}"]`).text()
      ).toEqual('0')
    })
  })

  describe('when App get fetchData prop', function() {
    it('should call fetchData callback', function(done) {
      mount(<App restaurants={restaurants} fetchData={() => done()} />)
    })
  })
})
