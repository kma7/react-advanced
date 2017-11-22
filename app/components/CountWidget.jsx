import React from 'react'

let CountWidget = ({count, handleClick}) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  )
}

export default CountWidget
