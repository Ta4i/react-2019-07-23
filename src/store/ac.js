
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

export const deleteAllDishesOfTheSameType = (id) => ({
  type: 'DELETE_ALL_DISHES_OF_THE_SAME_TYPE',
  payload: {
    id
  }
})
