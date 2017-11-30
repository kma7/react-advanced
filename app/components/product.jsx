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
    const style = {
      text: {
        margin: '1em',
        fontWeight: 'bold',
        color: 'green'
      },
      button: {
        padding: '0.5em',
        ':hover': {
          border: '1px solid black'
        }
      }
    }
    return (
      <div style={style.text}>
        <h3>
        {name} ${cost}{' '}
        <button style={style.button}onClick={() => handleClick(id)}>Add to cart</button>
        </h3>
      </div>
    )
  }
}
