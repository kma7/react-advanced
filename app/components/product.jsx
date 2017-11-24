import React from 'react'

/*
let Product = ({ id, name, cost, handleClick}) => (
  <div>
    {name} ${cost} <button onClick={() => handleClick(id)}>Add to cart</button>
  </div>
)
*/
export default class Product extends React.Component {
  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    let {id, name, cost, handleClick} = this.props
    return (
      <div>
        <h2>{name} ${cost}</h2>
        <button onClick={() => handleClick(id)}>Add to cart</button>
      </div>
    )
  }
}
