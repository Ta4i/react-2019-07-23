
export const increase = () => ({
  type: 'INCREMENT'
})

export const decrease = () => ({
  type: 'DECREMENT'
})

export const addDish = (id) => ({
  type: 'ADD_DISH',
  payload: {
    id
  }
})

export const removeDish = (id) => ({
  type: 'REMOVE_DISH',
  payload: {
    id
  }
})

export const addOrderItem = (dish) => ({
  type: 'ADD_ORDER_ITEM',
  payload: {
    dish
  }
})

export const removeOrderItem = (dish) => ({
  type: 'REMOVE_ORDER_ITEM',
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