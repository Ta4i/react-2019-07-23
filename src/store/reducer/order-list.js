export default (orderListState = {}, action) => {
	switch (action.type) {
    case 'ADD_DISH': {
			const {dish} = action.payload
			const qty = orderListState[dish.id] ? orderListState[dish.id].qty + 1 : 1

      return {
				...orderListState,
        [dish.id]: {
					"id": dish.id,
					"name": dish.name,
					"qty": qty,
					"totalPrice": dish.price * qty
				}
      }
    }
    case 'REMOVE_DISH': {
      const {dish} = action.payload
      if (!orderListState[dish.id]) {
        return orderListState
      }
      const neworderListState = {...orderListState}
      if (neworderListState[dish.id].qty === 1) {
        delete neworderListState[dish.id]
      } else {
        neworderListState[dish.id] = {
					"id": dish.id,
					"name": dish.name,
					"qty": neworderListState[dish.id].qty - 1,
					"totalPrice": dish.price * (neworderListState[dish.id].qty - 1)
				}
      }
      return neworderListState
    }
    case 'DELETE_ORDER_ITEM': {
      const {id} = action.payload

      if (!orderListState[id]) {
        return orderListState
      }

      const neworderListState = {...orderListState}
      delete neworderListState[id]

      return neworderListState
    }
    default:
      return orderListState
  }
}