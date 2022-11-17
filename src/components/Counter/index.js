import {useState} from 'react'

import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const onDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="container">
      <h1 className="count">Count {count}</h1>
      <button className="button" onClick={onIncrement}>
        Increase
      </button>
      <button className="button" onClick={onDecrement}>
        Decrease
      </button>
    </div>
  )
}

export default Counter
