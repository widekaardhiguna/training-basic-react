import { useState } from "react"
import Counter from "./components/Counter"
import AboutPage from "./pages/AboutPage"
import CounterPage from "./pages/CounterPage"

function App() {
  const [currentPage, setCurrentPage] = useState("about")

  return (
    <>
      <nav className="nav">
        <h1>React Training</h1>
        <ul>
          <li onClick={() => setCurrentPage("about")}>About</li>
          <li onClick={() => setCurrentPage("counter")}>Counter</li>
        </ul>
      </nav>
      {currentPage === "about" && <AboutPage />}
      {currentPage === "counter" && <CounterPage />}
    </>
  )
}

export default App
