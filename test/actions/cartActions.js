import { expect } from 'chai'

import {addToCart} from '../../app/actions'

describe('test cart action', () => {
  it('will return ADD_TO_CART action object', () => {
    expect(
      addToCart(22).type
    ).to.eql('ADD_TO_CART')
  })

  it('will return a payload with given id', () => {
    expect(
      addToCart(22).payload
    ).to.eql(22)
  })
})
