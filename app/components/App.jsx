import React from 'react'

import ProductsContainer from '../containers/productsContainer.jsx'
import ShoppingCartContainer from '../containers/shoppingCartContainer.jsx'


export default class App extends React.Component {
    render() {
      const style = {
        primary: {
          background: 'grey'
        },
        warning: {
          background: 'yellow'
        }
      }
    return (
      <div style={style.primary}>
        <ProductsContainer />
        <ShoppingCartContainer />
      </div>
    )
  }
}
