import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import Product from '../../app/components/product.jsx'

describe('product component', () => {
  it('should have one div tag', () => {
    let wrapper = shallow(<Product />)
    expect(
      wrapper.find('div')
    ).to.have.length(1)
  })

  it('test button text', () => {
    let wrapper = shallow(<Product />)
    expect(
      wrapper.find('button').text()
    ).to.eql('Add to cart')
  })

  it('response to click events', () => {
    let handleClick = sinon.spy()
    let wrapper = shallow(<Product handleClick={handleClick} />)
    wrapper.find('button').simulate('click')
    expect(handleClick.calledOnce).to.eql(true)
  })

  it('will call componentDidMount', () => {
    sinon.spy(Product.prototype, 'componentDidMount')
    let wrapper = mount(<Product />)
    expect(
      Product.prototype.componentDidMount
    ).to.have.property('callCount', 1)
    Product.prototype.componentDidMount.restore()
  })
})
