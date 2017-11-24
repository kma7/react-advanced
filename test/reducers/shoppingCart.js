import { expect } from 'chai'
import shoppingCart from '../../app/reducers/shoppingCart'

describe('test shopping cart reducer', () => {
  it('add new products', () => {
    expect(
      shoppingCart([], {type: 'ADD_TO_CART', payload: {id: 22}})
    ).to.eql([22])
  })

  it('remove products', () => {
    let state = []
    state = shoppingCart(state, {type: 'ADD_TO_CART', payload: {id: 22}})
    expect(
      shoppingCart(state, {type: 'REMOVE_FROM_CART', payload: {id: 22}})
    ).to.eql([])
  })
})
