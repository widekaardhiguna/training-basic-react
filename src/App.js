import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
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

export default App
