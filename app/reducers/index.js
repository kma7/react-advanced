import { combineReducers } from 'redux'

// import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CATAGORY } from '../constants/actionType'

// import activeCategory from './activeCategory'
import products from './products'
import shoppingCart from './shoppingCart'

let reducer = combineReducers({products, shoppingCart})

export default reducer
/*
export default function reducer(state=initialState, action) {
  return {
    activeCategory: activeCategory(state, action),
    products: products(state, action),
    shoppingCart: shoppingCart(state, action)
  }
}*/

/*
let initialState = {
  activeCategory: 'food',
  products: [
    {id: '124', name: 'pizza', cost: '7', category: 'food'},
    {id: '245', name: 'apple', cost: '2', category: 'food'},
    {id: '313', name: 'tv', cost: '200', category: 'electronics'},
    {id: '424', name: 'phone', cost: '444', category: 'electronics'}
  ],
  shoppingCart: [

  ]
}
*/

/*
  switch (action.type) {
    case CHANGE_CATAGORY:
      return {
        ...state,
        activeCategory: action.payload
      }
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(productID => productID !== action.payload)
      }
    default:
      return state
  }
  */
