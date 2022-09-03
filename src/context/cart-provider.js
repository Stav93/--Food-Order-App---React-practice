import { useReducer } from 'react'
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case "ADD_ITEM": 
      // we use concat insted of push to get a new array
      const updatedItems = state.items.concat(action.item)
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    case "REMOVE_ITEM": 
      //
      break;
    default:
      return defaultCartState
  }
}

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer ,defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatch({type: "ADD_ITEM", item})
  }

  const removeItemFromCartHandler = (id) => {
    dispatch({type: "REMOVE_ITEM", id})
  }

  const cartContext = { 
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
