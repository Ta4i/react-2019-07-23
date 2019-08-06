
export const increase = () => ({
  type: 'INCREMENT'
})

export const decrease = () => ({
  type: 'DECREMENT'
})

export const addDish = (dish) => ({
  type: 'ADD_DISH',
  payload: {
    dish
  }
})

export const removeDish = (dish) => ({
  type: 'REMOVE_DISH',
  payload: {
    dish
  }
})

export const deleteOrderItem = (id) => ({
  type: 'DELETE_ORDER_ITEM',
  payload: {
    id
  }
})