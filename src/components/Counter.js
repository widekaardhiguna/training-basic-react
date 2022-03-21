import { useState } from "react"

const Counter = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue)

  const handleIncrease = () => {
    setCount(count + step)
  }

  const handleDecrease = () => {
    setCount(count - step)
  }
  return (
    <div className="counter-wrapper">
      <h2 className="indicator">Count: {count}</h2>
      <button className="button decrease" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="button increase" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  )
}

export default Counter
