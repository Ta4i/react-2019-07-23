import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';
import {restaurants} from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('At starts', function () {
  it('should show all restaurants', function () {
    const wrapper = mount(<App restaurants={restaurants} />)
    expect(wrapper.find('li[data-autoid="RESTAURANT_ITEM"]').length).toEqual(4)
  });

  describe('when click on Open menu button', function () {
    const wrapper = mount(<App restaurants={restaurants} />)
    const id = restaurants[0].id

    it('should show menu only for one restaurant', function () {
      wrapper
        .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
        .simulate('click')
      expect(wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length).toEqual(1)
    });

    describe('when click on Dish increase button', function () {
      const menuId = restaurants[0].menu[0].id
      it('should increase Dish total ammount', function () {
        wrapper
          .find(`button[data-autoid="DISH_INCREASE_BUTTON_${menuId}"]`)
          .simulate('click')
          .simulate('click')
          .simulate('click')
          .simulate('click')
          .simulate('click')
        expect(wrapper.find(`span[data-autoid="DISH_TOTAL_AMOUNT_${menuId}"]`).text()).toEqual("5")
      });
    });

    describe('when click on Close menu button', function () {
      it('should hide menu of current restaurant', function () {
        wrapper
          .find(`button[data-autoid="OPEN_MENU_ITEM_${id}"]`)
          .simulate('click')
        expect(wrapper.find(`div[data-autoid="MENU_ITEMS_${id}"]`).length).toEqual(0)
      });
    });
  });

  describe('when App get fetchData prop', function () {
    it('should call fetchData callback', function (done) {
      mount(<App
        restaurants={restaurants}
        fetchData={() => done()}
      />)
    });
  });

  describe('when click on Show reviews button', function () {
    const wrapper = mount(<App restaurants={restaurants} />)
    const id = restaurants[0].id

    it('should show reviews of restaurant', function () {
      wrapper
        .find(`button[data-autoid="TOGGLE_REVIEWS_LIST_${id}"]`)
        .simulate('click')
      expect(wrapper.find(`div[data-autoid="REVIEWS_LIST_${id}"]`).length).toEqual(1)
    });

    describe('when reviews opened', function () {
      it('should be 2 reviews of restaurant', function () {
        wrapper
          .find(`button[data-autoid="TOGGLE_REVIEWS_LIST_${id}"]`)
        expect(wrapper.find(`div[data-autoid="REVIEWS_LIST_${id}"] li.ant-list-item`).length).toEqual(2)
      });
    });

    describe('when click on Hide reviews button', function () {
      it('should hide reviews of restaurant', function () {
        wrapper
          .find(`button[data-autoid="TOGGLE_REVIEWS_LIST_${id}"]`)
          .simulate('click')
        expect(wrapper.find(`div[data-autoid="REVIEWS_LIST_${id}"]`).length).toEqual(0)
      });
    });
  });
});
