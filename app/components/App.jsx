import React from 'react'

import ProductsContainer from '../containers/productsContainer.jsx'
import ShoppingCartContainer from '../containers/shoppingCartContainer.jsx'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <ProductsContainer />
        <ShoppingCartContainer />
      </div>
    )
  }
}
