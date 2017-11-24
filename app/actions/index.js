import {ADD_TO_CART} from '../constants/actionType.js'

function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export {addToCart}
